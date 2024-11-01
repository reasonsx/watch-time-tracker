import { ref, onMounted } from 'vue';
import { auth, db } from '../../firebaseConfig';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

// Custom user management composable function
const useUsers = () => {
  // Reactive state variables
  const user = ref(null);          // Stores the current user object
  const userRole = ref(null);      // Stores the user's role (e.g., 'admin', 'user')
  const error = ref(null);         // Stores error messages for user feedback

  // Listen for Firebase auth state changes and fetch user role if logged in
  onMounted(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      user.value = currentUser;
      if (currentUser) {
        await fetchUserRole(currentUser.uid);  // Fetch role if user is logged in
      } else {
        userRole.value = null;                 // Reset role if logged out
      }
    });
  });

  // Utility function to map Firebase error codes to user-friendly messages
  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/invalid-email':
        return 'Invalid email format.';
      case 'auth/user-not-found':
        return 'No account found with this email.';
      case 'auth/wrong-password':
        return 'Incorrect password.';
      case 'auth/email-already-in-use':
        return 'Email is already registered.';
      case 'auth/weak-password':
        return 'Password is too weak.';
      default:
        return 'An unknown error occurred.';
    }
  };

  // Fetches the user's role from Firestore using their userId
  const fetchUserRole = async (userId) => {
    const userDoc = doc(db, 'users', userId);
    const userSnapshot = await getDoc(userDoc);

    if (userSnapshot.exists()) {
      userRole.value = userSnapshot.data().role;  // Update role from Firestore data
      console.log(`Fetched role for user ${userId}: ${userRole.value}`); // Debugging
    } else {
      console.error('No such document!');  // Handle missing document
    }
  };

  // Registers a new user and assigns them a default role in Firestore
  const register = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      user.value = userCredential.user;
      error.value = null;

      // Add user data to Firestore with a default role of 'user'
      await setDoc(doc(db, 'users', user.value.uid), {
        uid: user.value.uid,
        email: user.value.email,
        role: 'user'
      });
    } catch (err) {
      error.value = getErrorMessage(err.code);  // Set error message for UI display
    }
  };

  // Logs in an existing user and fetches their role from Firestore
  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      user.value = userCredential.user;
      error.value = null;

      // Fetch role data after login
      await fetchUserRole(user.value.uid);
    } catch (err) {
      error.value = getErrorMessage(err.code);
    }
  };

  // Logs out the current user and clears the user and role data
  const logout = async () => {
    try {
      await signOut(auth);
      user.value = null;
      userRole.value = null;  // Clear role on logout
      error.value = null;
    } catch (err) {
      error.value = getErrorMessage(err.code);
    }
  };

  // Return reactive data and methods for use in other components
  return { user, userRole, error, register, login, logout };
};

export default useUsers;
export { useUsers };

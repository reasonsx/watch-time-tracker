import { ref, onMounted } from 'vue';
import { auth, db } from '../../firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const useUsers = () => {
  const user = ref(null);
  const error = ref(null);
  const userRole = ref(null); // To store the user's role

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

  const register = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      user.value = userCredential.user;
      error.value = null;

      // Add user to Firestore with default role
      await setDoc(doc(db, 'users', user.value.uid), {
        uid: user.value.uid,
        email: user.value.email,
        role: 'user' // Default role for new users
      });
    } catch (err) {
      error.value = getErrorMessage(err.code);
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      user.value = userCredential.user;
      error.value = null;

      // Fetch user role from Firestore after login
      await fetchUserRole(user.value.uid);
    } catch (err) {
      error.value = getErrorMessage(err.code);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      user.value = null;
      userRole.value = null; // Reset role when logging out
      error.value = null;
    } catch (err) {
      error.value = getErrorMessage(err.code);
    }
  };

  // Function to fetch user role from Firestore
  const fetchUserRole = async (userId) => {
    const userDoc = doc(db, 'users', userId); // Access the user document in Firestore
    const userSnapshot = await getDoc(userDoc);

    if (userSnapshot.exists()) {
      userRole.value = userSnapshot.data().role; // Get the role from the Firestore document
      console.log(`Fetched role for user ${userId}: ${userRole.value}`); // Add this line
    
    } else {
      console.error('No such document!');
    }
  };

  // Listen to Firebase auth state changes
  onMounted(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      user.value = currentUser;
      if (currentUser) {
        await fetchUserRole(currentUser.uid); // Fetch the role after user logs in
      } else {
        userRole.value = null; // Reset role if user is logged out
      }
    });
  });

  return { user, userRole, error, register, login, logout }; // Return necessary refs and functions
};
export default useUsers;
export { useUsers };

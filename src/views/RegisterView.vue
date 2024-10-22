<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Create an account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="register">
        <div>
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
          <div class="mt-2">
            <input
              id="username"
              name="username"
              type="text"
              v-model="username"
              required
              placeholder="Username"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              v-model="email"
              required
              placeholder="Email address"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              v-model="password"
              required
              placeholder="Password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </button>
        </div>
      </form>

      <p class="mt-2 text-center text-sm text-green-500" v-if="success">{{ success }}</p>
      <p class="mt-2 text-center text-sm text-red-500" v-if="error">{{ error }}</p>

      <p class="mt-10 text-center text-sm text-gray-500">
        Already have an account?
        <RouterLink to="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Sign in
        </RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebaseConfig'; // Import Firebase auth and Firestore
import { doc, setDoc, serverTimestamp } from 'firebase/firestore'; // Firestore methods

const username = ref('');
const email = ref('');
const password = ref('');
const error = ref('');
const success = ref(''); // Add a reactive variable for success messages

const getErrorMessage = (errorCode) => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'This email is already in use. Please use a different email.';
    case 'auth/invalid-email':
      return 'The email address is not valid. Please enter a valid email.';
    case 'auth/weak-password':
      return 'The password is too weak. Please use a stronger password.';
    case 'auth/operation-not-allowed':
      return 'Email/Password sign-in is not enabled. Please check your settings.';
    case 'auth/too-many-requests':
      return 'Too many requests. Please try again later.';
    default:
      return 'An unknown error occurred. Please try again.';
  }
};

const register = async () => {
  try {
    // Reset messages
    error.value = '';
    success.value = '';

    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    // Define user data
    const userData = {
      username: username.value,
      email: email.value,
      password: password.value, // Ideally, store only the hashed version of the password
      role: 'user', // Default role
      createdAt: serverTimestamp(),
    };

    // Save user data to Firestore
    await setDoc(doc(db, 'Users', user.uid), userData);
    console.log('User registered successfully');
    
    // Set success message
    success.value = 'Registration successful! You can now log in.';
  } catch (err) {
    error.value = getErrorMessage(err.code); // Use the error mapping function
    console.error('Error registering user:', error.value);
  }
};

</script>

<style scoped>
</style>

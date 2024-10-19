<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="login">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              v-model="email"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              v-model="password"
              required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-2 text-center text-sm text-green-500" v-if="success">{{ success }}</p> <!-- Display success message -->
      <p class="mt-2 text-center text-sm text-red-500" v-if="error">{{ error }}</p> <!-- Display error message -->

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <RouterLink to="/register">
          <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign up</a>
        </RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseConfig'; // Firebase configuration
import { useRouter } from 'vue-router'; // Router for navigation

const email = ref('');
const password = ref('');
const error = ref('');
const success = ref('');
const user = ref(null); // To keep track of the logged-in user

const router = useRouter();

// Watch for authentication state changes
onAuthStateChanged(auth, (currentUser) => {
  user.value = currentUser;
});

// Login function
const login = async () => {
  try {
    error.value = '';
    success.value = '';

    // Sign in user
    await signInWithEmailAndPassword(auth, email.value, password.value);
    success.value = 'Login successful! Redirecting...';

    // Redirect to home page
    setTimeout(() => {
      router.push('/');
    }, 2000);
  } catch (err) {
    error.value = err.message;
  }
};
</script>


<style scoped>
</style>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="loginUser">
        <!-- Email Input -->
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

        <!-- Password Input -->
        <div>
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
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

        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            class="focus:ring-4 focus:outline-none focus:ring-indigo-700 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <!-- Success and Error Messages -->
      <p class="mt-2 text-center text-sm text-green-500" v-if="success">{{ success }}</p>
      <p class="mt-2 text-center text-sm text-red-500" v-if="error">{{ error }}</p>

      <!-- Sign Up Link -->
      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        <RouterLink to="/register">
          <span class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign up</span>
        </RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUsers } from '../modules/useUsers';
import { useRouter } from 'vue-router';

// Using the useUsers composable to handle authentication
const { login, error, userRole } = useUsers();
const email = ref(''); // Email input model
const password = ref(''); // Password input model
const success = ref(''); // Success message
const router = useRouter(); // Router instance for navigation

// Function to handle user login
const loginUser = async () => {
  success.value = ''; // Clear previous success message
  try {
    await login(email.value, password.value); // Attempt login
    success.value = 'Login successful!'; // Set success message
    // Navigate based on user role after successful login
    router.push({ path: '/', query: { role: userRole.value } });
  } catch (err) {
    console.error('Login failed:', error.value); // Log the error
  }
};
</script>

<style scoped>
</style>

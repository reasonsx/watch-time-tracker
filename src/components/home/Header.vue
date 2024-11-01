<template>
  <div class="bg-white fixed z-20 w-full">
    <header class="absolute inset-x-0 top-0 z-20">
      <nav class="flex items-center justify-between pt-6 px-6 lg:px-8 h-auto" aria-label="Global">
        
        <div class="flex-grow flex justify-end">
          <!-- Display if user is logged in -->
          <div v-if="user" class="hidden lg:flex items-center lg:flex-row flex-col">
            <span class="text-sm font-semibold leading-6 text-gray-900">
              Welcome, {{ user.email }}
            </span>
            <button
              @click="logout"
              class="ml-4 text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Log out
            </button>
          </div>

          <!-- Display if user is not logged in -->
          <div v-else class="hidden lg:flex flex-col lg:flex-row items-start lg:items-center">
            <RouterLink to="/login" class="text-sm self-center font-semibold leading-6 text-gray-900 block lg:inline">
              Log in
            </RouterLink>
            <RouterLink to="/register" class="mt-2 lg:mt-0 lg:ml-8">
              <button class="focus:ring-4 focus:outline-none focus:ring-indigo-700 inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-indigo-600 text-white hover:bg-indigo-500">
                Sign up
              </button>
            </RouterLink>
          </div>
        </div>

        <!-- Hamburger Button for Mobile -->
        <div class="lg:hidden">
          <button @click="toggleMenu" class="absolute top-6 right-6 text-gray-700 hover:text-gray-900">
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6 text-gray-700 dark:text-gray-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          </button>
        </div>
      </nav>
    </header>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="fixed inset-0 z-30 bg-white bg-opacity-95">
      <!-- Close Button -->
      <button @click="toggleMenu" class="absolute top-6 right-6 text-gray-700 hover:text-gray-900">
        <span class="sr-only">Close menu</span>
        <svg
          class="w-6 h-6 text-gray-700 dark:text-gray-700"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
        </svg>
      </button>

      <div class="flex flex-col p-4 items-center justify-center h-full">
        <div v-if="user" class="flex flex-col items-center">
          <span class="text-sm font-semibold leading-6 text-gray-900">
            Welcome, {{ user.email }}
          </span>
          <button @click="logout" class="mt-2 text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Log out
          </button>
        </div>
        <div v-else class="flex flex-col gap-4">
          <RouterLink to="/login" class="text-sm self-center font-semibold leading-6 text-gray-900">
            Log in
          </RouterLink>
          <RouterLink to="/register" class="mt-2">
            <button class="focus:ring-4 focus:outline-none focus:ring-indigo-700 inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-indigo-600 text-white hover:bg-indigo-500">
              Sign up
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';

const user = ref(null);
const isMenuOpen = ref(false); // State for managing the hamburger menu

// Watch authentication state changes
onAuthStateChanged(auth, (currentUser) => {
  user.value = currentUser;
});

// Logout function
const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.error('Error signing out:', err);
  }
};

// Toggle function for mobile menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
</style>

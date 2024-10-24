<template>
  <div class="bg-white fixed z-20 w-full">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex-grow flex justify-end">
          <!-- display if user is logged in -->
          <div v-if="user" class="flex items-center lg:flex-row flex-col">
            <span class="text-sm font-semibold leading-6 text-gray-900">Welcome, {{ user.email }}</span>
            <button @click="logout" class="ml-4 text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Log out</button>
          </div>
          <!-- display if user is not logged in -->
          <div v-else class="flex flex-col lg:flex-row items-start lg:items-center">
            <RouterLink to="/login" class="text-sm self-center font-semibold leading-6 text-gray-900 block lg:inline">Log in</RouterLink>
            <RouterLink to="/register" class="mt-2 lg:mt-0 lg:ml-8">
              <button class="focus:ring-4 focus:outline-none focus:ring-indigo-700 inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-indigo-600 text-white hover:bg-indigo-500">Sign up</button>
            </RouterLink>
          </div>
        </div>
        
      </nav>
    </header>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';

const user = ref(null);

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
</script>

<style scoped>
</style>

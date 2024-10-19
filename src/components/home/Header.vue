<template>
  <div class="bg-white">
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="hidden lg:flex lg:gap-x-12">
          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-gray-900">
            {{ item.name }}
          </a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <div v-if="user">
            <!-- Show if user is logged in -->
            <span class="text-sm font-semibold leading-6 text-gray-900">Welcome, {{ user.displayName }}</span>
            <button @click="logout" class="ml-4 text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Log out</button>
          </div>
          <div v-else>
            <!-- Show if user is not logged in -->
            <RouterLink to="/login" class="text-sm font-semibold leading-6 text-gray-900">
              Log in
            </RouterLink>
            <RouterLink to="/register">
              <button class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 ml-8">
                Sign up
              </button>
            </RouterLink>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
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
    user.value = null;
  } catch (err) {
    console.error('Error signing out:', err);
  }
};
</script>

<style scoped>
</style>

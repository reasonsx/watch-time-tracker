<template>
  <div class="bg-white p-6 fixed w-full z-10 shadow-md border border-gray-200">
    <h2 class="text-2xl font-bold mb-2 text-center text-indigo-600">Total Time</h2>
    
    <!-- Total Time and Reset SVG -->
    <div class="flex items-center justify-center space-x-2">
      <svg 
        @click="resetTime" 
        class="w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-700 transition-colors duration-200 ease-in-out" 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"/>
      </svg>
      <p class="text-lg text-gray-700">{{ formattedTotalTime }}</p>
    </div>

    <p class="mt-4 text-sm text-gray-500 text-center">
      Click on movie posters to add time!
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const totalTime = ref(0);

// Computed property to format total time
const formattedTotalTime = computed(() => {
  const days = Math.floor(totalTime.value / (60 * 24));
  const hours = Math.floor((totalTime.value % (60 * 24)) / 60);
  const minutes = totalTime.value % 60;

  return `${days} days, ${hours} hours, ${minutes} minutes`;
});

// Function to add time to the total
const addTime = (time) => {
  totalTime.value += time;
};

// Function to reset the time counter
const resetTime = () => {
  totalTime.value = 0;
};

// Export the addTime function to use in the parent component
defineExpose({ addTime });
</script>

<style scoped>
</style>

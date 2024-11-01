<template>
  <div class="bg-white p-6 fixed w-full z-10 shadow-md bg-opacity-95 h-60">
    <h2 class="text-2xl font-bold mb-2 text-center text-indigo-600">Total Time</h2>

    <div class="flex items-center justify-center space-x-2">
      <svg 
        @click="onResetClick" 
        :class="{'rotate': isRotating}" 
        class="z-50 w-6 h-6 text-gray-700 cursor-pointer hover:text-gray-700 transition-transform duration-300 ease-in-out" 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <path 
          stroke="currentColor" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4" 
        />
      </svg>
      <p class="text-lg text-gray-700">{{ formattedTotalTime }}</p>
    </div>

    <p class="mt-2 text-sm text-gray-500 text-center">
      Click on movie posters to add time!
    </p>
    <p class="mt-1 text-sm text-gray-500 text-center">
      Click again to remove time from your total.
    </p>
    
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue';

// Injected properties
const clickedMovies = inject('clickedMovies'); // Inject clicked movies state from parent component

// Local state properties
const totalTime = ref(0); // Total time tracker
const isRotating = ref(false); // Rotation animation state

// Computed property to format total time display
const formattedTotalTime = computed(() => {
  const days = Math.floor(totalTime.value / (60 * 24));
  const hours = Math.floor((totalTime.value % (60 * 24)) / 60);
  const minutes = totalTime.value % 60;
  return `${days} days, ${hours} hours, ${minutes} minutes`;
});

// Methods
const addTime = (time) => {
  totalTime.value += time; // Add specified time
};

const resetTime = () => {
  totalTime.value = 0; // Reset total time
  if (clickedMovies) clickedMovies.value = []; // Reset clicked movies if available
};

const onResetClick = () => {
  isRotating.value = true; // Start rotation animation
  resetTime(); // Reset time and clicked movies

  setTimeout(() => {
    isRotating.value = false; // Stop rotation after animation duration
  }, 300); // Duration matches CSS transition
};

// Expose methods to parent component
defineExpose({ addTime });
</script>

<style scoped>
.rotate {
  transform: rotate(360deg);
  transition: transform 0.3s ease-in-out;
}
</style>

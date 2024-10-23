<template>
  <div class="bg-white p-6 fixed w-full z-10 shadow-md border border-gray-200">
    <h2 class="text-2xl font-bold mb-2 text-center text-indigo-600">Total Time</h2>
    <p class="text-lg text-gray-700 text-center">{{ formattedTotalTime }}</p>
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

// Export the addTime function to use in the parent component
defineExpose({ addTime });
</script>

<style scoped>
</style>

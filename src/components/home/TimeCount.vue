<template>
    <div class="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 class="text-2xl font-bold mb-2 text-center text-indigo-600">Total Time</h2>
      <p class="text-lg text-gray-700 text-center">{{ formattedTime }}</p>
      <p v-if="totalTime > 0" class="mt-4 text-sm text-gray-500 text-center">
        Click on movie posters to add time!
      </p>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const totalTime = ref(0);

// Function to add time to the total
const addTime = (time) => {
    totalTime.value += time;
};

// Computed property to format the time into days, hours, and minutes
const formattedTime = computed(() => {
    const minutes = totalTime.value;
    const days = Math.floor(minutes / 1440); // 1440 minutes in a day
    const hours = Math.floor((minutes % 1440) / 60); // Remaining hours
    const mins = minutes % 60; // Remaining minutes

    // Construct the formatted time string
    const parts = [];
    if (days > 0) parts.push(`${days} day${days !== 1 ? 's' : ''}`);
    if (hours > 0) parts.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
    if (mins > 0) parts.push(`${mins} minute${mins !== 1 ? 's' : ''}`);
    
    return parts.join(', ') || '0 minutes';
});

// Export the addTime function to use in the parent component
defineExpose({ addTime });
</script>

<style scoped>
</style>

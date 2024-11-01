<template>
  <div
    data-aos="zoom-in"
    data-aos-once="true"
    class="bg-white p-6 fixed w-full z-10 shadow-md bg-opacity-95 h-52"
  >
    <h2 class="text-2xl font-bold mb-2 text-center text-indigo-600">Total Time</h2>

    <div class="flex items-center justify-center space-x-2">
      <svg
        @click="onResetClick"
        :class="{ 'rotate': isRotating }"
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

    <div class="mt-2 text-center">
      <p class="text-sm text-gray-500 md:inline-block md:mr-2">
        Click on movie posters to add time!
      </p>
      <p class="text-sm text-gray-500 md:inline-block">
        Click again to remove it.
      </p>
    </div>
  </div>
</template>

<script setup>
import { useTime } from '../../modules/useTime';

const {
  totalTime,
  isRotating,
  formattedTotalTime,
  addTime,
  onResetClick,
} = useTime();

// Expose addTime method to be used elsewhere
defineExpose({ addTime });
</script>

<style scoped>
.rotate {
  transform: rotate(360deg);
  transition: transform 0.3s ease-in-out;
}
</style>

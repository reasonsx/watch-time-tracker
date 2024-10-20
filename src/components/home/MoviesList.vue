<template>
  <div class="bg-white pt-20">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <div 
          v-for="movie in movies" 
          :key="movie.id" 
          class="group cursor-pointer" 
          @click="addMovieTime(movie.time)"
        >
          <div class="relative w-full overflow-hidden rounded-lg bg-gray-200" style="padding-bottom: 150%;">
            <img
              :src="movie.poster"
              :alt="movie.title"
              class="absolute inset-0 h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>

          <h3 class="mt-4 text-sm text-gray-700 text-center">{{ movie.title }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900 text-center">{{ movie.time }} minutes</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
import { db } from '../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const movies = ref([]);
const timeCounter = inject('timeCounter'); // Inject the TimeCount instance

const fetchMovies = async () => {
  const querySnapshot = await getDocs(collection(db, "Movies"));
  querySnapshot.forEach((doc) => {
    movies.value.push({ id: doc.id, ...doc.data() });
  });
};

// Function to add movie time to the counter
const addMovieTime = (time) => {
  // Check if timeCounter exists and has addTime method
  if (timeCounter && typeof timeCounter.value.addTime === 'function') {
    timeCounter.value.addTime(time); // Call addTime from TimeCount component
  } else {
    console.error('timeCounter or addTime method is not available');
  }
};

onMounted(() => {
  fetchMovies();
});
</script>

<style scoped>
/* Add any specific styles here if needed */
</style>

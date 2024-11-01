<template>
  <TimeCount ref="timeCounter" />
  <Header />
  <MoviesList />
  <Footer />
</template>

<script setup>
import { ref, provide } from 'vue';
import Header from '../components/home/Header.vue';
import TimeCount from '../components/home/TimeCount.vue';
import MoviesList from '../components/home/MoviesList.vue';
import Footer from '@/components/home/Footer.vue';
import useMovies from '../modules/useMovies';

// Create a ref to the TimeCount component
const timeCounter = ref(null);

// Provide the timeCounter to child components
provide('timeCounter', timeCounter);

const clickedMovies = ref([]); // Track clicked movie IDs
// Provide clickedMovies so it can be injected in child components
provide('clickedMovies', clickedMovies);

// Use the composable to get the resetClickCounts function
const { resetClickCounts } = useMovies(); // Access the function from the composable
// Provide resetClickCounts for injection
provide('resetClickCounts', resetClickCounts);
</script>

<style scoped>
</style>

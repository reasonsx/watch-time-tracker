<template>
  <TimeCount ref="timeCounter" />
    <Header />
    <!-- <MovieSearch /> -->
    <MoviesList />
    <Footer />
  </template>
  
  <script setup>
  import { ref, provide } from 'vue'; // Import provide
  import Header from '../components/home/Header.vue';
  import TimeCount from '../components/home/TimeCount.vue';
  import MovieSearch from '../components/home/MovieSearch.vue';
  import MoviesList from '../components/home/MoviesList.vue';
  import Footer from '@/components/home/Footer.vue';
  
  // Create a ref to the TimeCount component
  const timeCounter = ref(null);
  
  // Provide the timeCounter to child components
  provide('timeCounter', timeCounter);

  const clickedMovies = ref([]); // This will track the clicked movie IDs

// Provide clickedMovies so it can be injected in child components
provide('clickedMovies', clickedMovies);
  </script>
  
  <style scoped>
  </style>
  
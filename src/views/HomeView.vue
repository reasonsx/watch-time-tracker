<template>
    <Header />
    <TimeCount ref="timeCounter" />
    <MovieSearch />
    <MoviesList />
  </template>
  
  <script setup>
  import { ref, provide } from 'vue'; // Import provide
  import Header from '../components/home/Header.vue';
  import TimeCount from '../components/home/TimeCount.vue';
  import MovieSearch from '../components/home/MovieSearch.vue';
  import MoviesList from '../components/home/MoviesList.vue';
  
  // Create a ref to the TimeCount component
  const timeCounter = ref(null);
  
  // Provide the timeCounter to child components
  provide('timeCounter', timeCounter);
  </script>
  
  <style scoped>
  </style>
  
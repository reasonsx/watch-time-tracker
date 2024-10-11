<script setup>
// import { RouterLink } from 'vue-router'

import MoviesList from './components/home/MoviesList.vue'
import Header from './components/home/Header.vue'
import MovieSearch from './components/home/MovieSearch.vue'
</script>


<template>
    <RouterLink to="/login">something</RouterLink>
    
    <Header />
    <MovieSearch />
    <MoviesList />

</template>
<style scoped></style>

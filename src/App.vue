<script setup>
// import { RouterLink, RouterView } from 'vue-router'

import MoviesList from './components/home/MoviesList.vue'
import Header from './components/home/Header.vue'
</script>


<template>
    <RouterLink to="/login">something</RouterLink>
    
    <Header />
    <MoviesList />
</template>
<style scoped></style>

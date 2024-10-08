<script setup>
import MoviesList from './components/home/MoviesList.vue'
import Header from './components/home/Header.vue'
</script>


<template>
    <RouterLink to="/login" class="text-sm font-semibold leading-6 text-gray-900">Log in <span
        aria-hidden="true">&rarr;</span></RouterLink>
    <Header />
    <MoviesList />
</template>
<style scoped></style>

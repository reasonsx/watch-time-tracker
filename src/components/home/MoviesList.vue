<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold mb-4">Movie List</h2>

      <!-- Add Movie Button (only visible for admins) -->
      <button v-if="isAdmin" @click="showAddMovieModal" class="mb-4 px-4 py-2 bg-blue-600 text-white rounded">
        Add Movie
      </button>

      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <div 
          v-for="movie in movies" 
          :key="movie.id" 
          class="group relative"
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

          <!-- Edit and Delete buttons (only visible for admins) -->
          <div v-if="isAdmin" class="absolute bottom-2 right-2">
            <button @click="editMovie(movie)" class="mr-2 px-2 py-1 bg-yellow-400 text-white rounded">Edit</button>
            <button @click="deleteMovie(movie.id)" class="px-2 py-1 bg-red-600 text-white rounded">Delete</button>
          </div>
        </div>
      </div>

      <!-- Modal for Adding/Editing Movie -->
      <div v-if="isModalVisible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h3 class="text-lg font-bold mb-4">{{ isEditing ? 'Edit Movie' : 'Add Movie' }}</h3>
          <form @submit.prevent="isEditing ? updateMovie() : addMovie()">
            <div>
              <label for="title" class="block mb-1">Title:</label>
              <input id="title" v-model="movieForm.title" class="w-full border rounded p-2" required />
            </div>
            <div class="mt-4">
              <label for="poster" class="block mb-1">Poster URL:</label>
              <input id="poster" v-model="movieForm.poster" class="w-full border rounded p-2" required />
            </div>
            <div class="mt-4">
              <label for="time" class="block mb-1">Time (minutes):</label>
              <input id="time" type="number" v-model="movieForm.time" class="w-full border rounded p-2" required />
            </div>
            <div class="mt-4 flex justify-end">
              <button type="button" @click="closeModal" class="mr-2 px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
              <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded">{{ isEditing ? 'Update' : 'Add' }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { db } from '../../../firebaseConfig';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

const movies = ref([]);
const isModalVisible = ref(false);
const isEditing = ref(false);
const movieForm = ref({ title: '', poster: '', time: '' });
const isAdmin = ref(true); // Change this based on your auth logic

const fetchMovies = async () => {
  const querySnapshot = await getDocs(collection(db, "Movies"));
  movies.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const showAddMovieModal = () => {
  movieForm.value = { title: '', poster: '', time: '' }; // Reset form for adding
  isEditing.value = false;
  isModalVisible.value = true;
};

const addMovie = async () => {
  try {
    const docRef = await addDoc(collection(db, "Movies"), movieForm.value);
    movies.value.push({ id: docRef.id, ...movieForm.value });
    closeModal();
  } catch (error) {
    console.error("Error adding movie: ", error);
  }
};

const editMovie = (movie) => {
  movieForm.value = { title: movie.title, poster: movie.poster, time: movie.time, id: movie.id };
  isEditing.value = true;
  isModalVisible.value = true;
};

const updateMovie = async () => {
  try {
    const movieRef = doc(db, "Movies", movieForm.value.id);
    await updateDoc(movieRef, {
      title: movieForm.value.title,
      poster: movieForm.value.poster,
      time: movieForm.value.time
    });
    const index = movies.value.findIndex(m => m.id === movieForm.value.id);
    if (index !== -1) {
      movies.value[index] = { ...movies.value[index], ...movieForm.value };
    }
    closeModal();
  } catch (error) {
    console.error("Error updating movie: ", error);
  }
};

const deleteMovie = async (id) => {
  try {
    await deleteDoc(doc(db, "Movies", id));
    movies.value = movies.value.filter(movie => movie.id !== id);
  } catch (error) {
    console.error("Error deleting movie: ", error);
  }
};

const closeModal = () => {
  isModalVisible.value = false;
};

// Fetch movies on component mount
onMounted(() => {
  fetchMovies();
});
</script>

<style scoped>
/* Add any specific styles here if needed */
</style>

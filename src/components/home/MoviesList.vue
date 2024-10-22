<template>
  <div class="bg-white pt-20">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <!-- Show Add Movie Button if Admin -->
      <div class="mt-2 mb-6 text-center">
        <button
          @click="showAddModal = true"
          class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-green-600 text-white hover:bg-green-500"
        >
          Add New Movie
        </button>
      </div>

      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <div 
          v-for="movie in movies" 
          :key="movie.id" 
          class="group cursor-pointer" 
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
          
          <!-- Edit and Delete Buttons -->
          <div class="mt-4 flex justify-center space-x-2">
            <button @click.prevent="openEditModal(movie)" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500">
              Edit
            </button>
            <button @click.prevent="confirmDelete(movie.id)" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-500">
              Delete
            </button>
          </div>
        </div>
      </div>

      <!-- Add Movie Modal -->
      <div v-if="showAddModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-4 rounded-lg shadow-lg">
          <h2 class="text-lg font-bold">Add New Movie</h2>
          <label for="title">Title:</label>
          <input v-model="newMovie.title" type="text" id="title" class="border rounded-lg w-full mb-2 focus:ring-indigo-600"/>
          <label for="time">Time (minutes):</label>
          <input v-model.number="newMovie.time" type="number" id="time" class="border rounded-lg w-full mb-2 focus:ring-indigo-600"/>
          <label for="poster">Poster URL:</label>
          <input v-model="newMovie.poster" type="text" id="poster" class="border rounded-lg w-full mb-2 focus:ring-indigo-600"/>
          <button @click="addMovie" class="mt-2 inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 mr-2 bg-green-600 text-white hover:bg-green-500">Add Movie</button>
          <button @click="showAddModal = false" class="mt-2 inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-gray-600 text-white hover:bg-gray-500">Cancel</button>
        </div>
      </div>

      <!-- Edit Movie Modal -->
      <div v-if="showEditModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-4 rounded-lg shadow-lg">
          <h2 class="text-lg font-bold">Edit Movie</h2>
          <label for="editTitle">Title:</label>
          <input v-model="editMovie.title" type="text" id="editTitle" class="border rounded-lg w-full mb-2 focus:ring-indigo-600"/>
          <label for="editTime">Time (minutes):</label>
          <input v-model.number="editMovie.time" type="number" id="editTime" class="border rounded-lg w-full mb-2 focus:ring-indigo-600"/>
          <label for="editPoster">Poster URL:</label>
          <input v-model="editMovie.poster" type="text" id="editPoster" class="border rounded-lg w-full mb-2 focus:ring-indigo-600"/>
          <button @click="updateMovie" class="mt-2 inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 mr-2 bg-blue-600 text-white hover:bg-blue-500">Update Movie</button>
          <button @click="showEditModal = false" class="mt-2 inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-gray-600 text-white hover:bg-gray-500">Cancel</button>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
import { db } from '../../../firebaseConfig';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';

const movies = ref([]);
const timeCounter = inject('timeCounter'); // Inject the TimeCount instance

const showAddModal = ref(false);
const showEditModal = ref(false);
const newMovie = ref({ title: '', time: 0, poster: '' });
const editMovie = ref({ id: '', title: '', time: 0, poster: '' });

// Fetch Movies from Firestore
const fetchMovies = async () => {
  const querySnapshot = await getDocs(collection(db, "Movies"));
  movies.value = []; // Reset movies
  querySnapshot.forEach((doc) => {
    movies.value.push({ id: doc.id, ...doc.data() });
  });
};

// Function to add movie time to the counter
const addMovieTime = (time) => {
  if (timeCounter && typeof timeCounter.value.addTime === 'function') {
    timeCounter.value.addTime(time); // Call addTime from TimeCount component
  } else {
    console.error('timeCounter or addTime method is not available');
  }
};

// Function to add a new movie
const addMovie = async () => {
  try {
    await addDoc(collection(db, "Movies"), newMovie.value);
    movies.value.push({ id: Date.now(), ...newMovie.value }); // Temporary ID until fetched
    newMovie.value = { title: '', time: 0, poster: '' }; // Reset form
    showAddModal.value = false; // Close modal
    await fetchMovies(); // Refresh movie list
  } catch (error) {
    console.error("Error adding movie:", error);
  }
};

// Function to open edit modal
const openEditModal = (movie) => {
  editMovie.value = { id: movie.id, title: movie.title, time: movie.time, poster: movie.poster };
  showEditModal.value = true;
};

// Function to update a movie
const updateMovie = async () => {
  try {
    const movieRef = doc(db, "Movies", editMovie.value.id);
    await updateDoc(movieRef, {
      title: editMovie.value.title,
      time: editMovie.value.time,
      poster: editMovie.value.poster,
    });
    showEditModal.value = false; // Close modal
    await fetchMovies(); // Refresh movie list
  } catch (error) {
    console.error("Error updating movie:", error);
  }
};

// Function to confirm deletion of a movie
const confirmDelete = (id) => {
  const isConfirmed = confirm("Are you sure you want to delete this movie?");
  if (isConfirmed) {
    deleteMovie(id);
  }
};

// Function to delete a movie
const deleteMovie = async (id) => {
  try {
    await deleteDoc(doc(db, "Movies", id));
    movies.value = movies.value.filter(movie => movie.id !== id); // Remove from local list
  } catch (error) {
    console.error("Error deleting movie:", error);
  }
};

onMounted(() => {
  fetchMovies();
});
</script>

<style scoped>
</style>

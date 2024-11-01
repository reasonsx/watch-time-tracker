<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-16 lg:max-w-7xl lg:px-8 mt">
      <!-- Search Form -->
      <div class="relative isolate px-6 pt-14 lg:px-8"></div>
      
      <!-- Search Component -->
      <Search :searchQuery="searchQuery" @update:searchQuery="searchQuery = $event" />
      <div class="relative isolate px-6 pt-24 mt-14 lg:px-8"></div>
      <!-- Show Add Movie Button if Admin -->
      <div v-if="isAdmin" class="text-center mt-8">
        <button
          @click="showAddModal = true"
          class="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-green-600 text-white hover:bg-green-500"
        >
          Add New Movie
        </button>
      </div>

      <!-- Movie Grid -->
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 max-sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 mt-8">
        <div
          v-for="movie in filteredMovies"
          :key="movie.id"
          class="group cursor-pointer"
        >
        <div
      class="relative w-full overflow-hidden rounded-lg bg-gray-200 movie-card"
      style="padding-bottom: 150%;"
    >
      <img
        :src="movie.poster"
        :alt="movie.title"
        @click="handleImageClick(movie)"
        :class="{ 'grayscale': clickedMovies.includes(movie.id) }"
        class="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      <!-- Display Click Count Without Background -->
      <div v-if="movie.clickCount >= 2" class="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold leading-6 opacity-80" style="pointer-events: none;">
  {{ movie.clickCount }}
</div>


    </div>

          <h3 class="mt-4 text-sm text-gray-700 text-center">{{ movie.title }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900 text-center">{{ movie.time }} minutes</p>

          <!-- Edit and Delete Buttons -->
          <div v-if="isAdmin" class="mt-4 flex justify-center space-x-2">
            <button
              @click.prevent="openEditModal(movie)"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              Edit
            </button>
            <button
              @click.prevent="confirmDelete(movie.id)"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-500"
            >
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
          <input
            v-model="newMovie.title"
            type="text"
            id="title"
            class="border rounded-lg w-full mb-2 focus:ring-indigo-600"
          />

          <label for="time">Time (minutes):</label>
          <input
            v-model.number="newMovie.time"
            type="number"
            id="time"
            class="border rounded-lg w-full mb-2 focus:ring-indigo-600"
          />

          <label for="poster">Poster URL:</label>
          <input
            v-model="newMovie.poster"
            type="text"
            id="poster"
            class="border rounded-lg w-full mb-2 focus:ring-indigo-600"
          />

          <button
            @click="addMovie"
            class="mt-2 inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 mr-2 bg-green-600 text-white hover:bg-green-500"
          >
            Add Movie
          </button>
          <button
            @click="showAddModal = false"
            class="mt-2 inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-gray-600 text-white hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>

      <!-- Edit Movie Modal -->
      <div v-if="showEditModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-4 rounded-lg shadow-lg">
          <h2 class="text-lg font-bold">Edit Movie</h2>
          <label for="editTitle">Title:</label>
          <input
            v-model="editMovie.title"
            type="text"
            id="editTitle"
            class="border rounded-lg w-full mb-2 focus:ring-indigo-600"
          />

          <label for="editTime">Time (minutes):</label>
          <input
            v-model.number="editMovie.time"
            type="number"
            id="editTime"
            class="border rounded-lg w-full mb-2 focus:ring-indigo-600"
          />

          <label for="editPoster">Poster URL:</label>
          <input
            v-model="editMovie.poster"
            type="text"
            id="editPoster"
            class="border rounded-lg w-full mb-2 focus:ring-indigo-600"
          />

          <button
            @click="updateMovie"
            class="mt-2 inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 mr-2 bg-blue-600 text-white hover:bg-blue-500"
          >
            Update Movie
          </button>
          <button
            @click="showEditModal = false"
            class="mt-2 inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-gray-600 text-white hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Search from './MovieSearch.vue'; // Import the Search component
import useMovies from '../../modules/useMovies';

const {
  searchQuery,
  filteredMovies,
  showAddModal,
  showEditModal,
  newMovie,
  editMovie,
  isAdmin,
  clickedMovies,
  addMovie,
  openEditModal,
  updateMovie,
  confirmDelete,
  // resetCounts, // Expose resetCounts for resetting counts
  handleImageClick,
} = useMovies();
</script>

<style scoped>
</style>

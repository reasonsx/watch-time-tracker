<template>
  <div 
    data-aos="zoom-in" 
    data-aos-once="true" 
    class="fixed inset-x-0 mt-20 max-sm:mt-24 max-md:mt-24 z-10"
  >
    <div class="mx-auto max-w-2xl pt-1 pb-8">
      <form class="px-10">
        <div class="relative w-full">
          <!-- Search Icon -->
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          
          <!-- Search Input -->
          <input
            v-model="query"
            type="text"
            id="search"
            class="block w-full text-sm pl-10 rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 max-sm:text-base"
            placeholder="Enter movie title..."
            required
            @input="updateQuery"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Define props and emit setup
const props = defineProps({
  searchQuery: String,
});
const emit = defineEmits(['update:searchQuery']); //Goes to MovieList.vue

// Local state for the search query
const query = ref(props.searchQuery);

// Emit the updated query to the parent component
const updateQuery = () => {
  emit('update:searchQuery', query.value);
};
</script>

<style scoped>
</style>

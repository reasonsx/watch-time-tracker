import { ref, computed, inject, onMounted } from 'vue';
import { db } from '../../firebaseConfig';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useUsers } from './useUsers'; 

export default function useMovies() {
  // Get the user's role to determine permissions (e.g., admin access)
  const { userRole } = useUsers();
  
  // Reactive variables for managing movies and user interactions
  const movies = ref([]); // Array to hold the list of movies
  const searchQuery = ref(''); // String to store the current search query
  const showAddModal = ref(false); // Boolean to control the visibility of the add movie modal
  const showEditModal = ref(false); // Boolean to control the visibility of the edit movie modal
  const newMovie = ref({ title: '', time: 0, poster: '' }); // Object to hold new movie data
  const editMovie = ref({ id: '', title: '', time: 0, poster: '' }); // Object to hold the movie data being edited
  const clickedMovies = inject('clickedMovies', ref([])); // Reactive array of clicked movie IDs, injected from the parent
  const timeCounter = inject('timeCounter'); // Injected object for managing total time

  // Computed property to check if the user is an admin
  const isAdmin = computed(() => userRole.value === 'admin');

  // Fetch movies from Firestore and populate the movies array
  const fetchMovies = async () => {
    const querySnapshot = await getDocs(collection(db, 'Movies')); // Get all documents from the Movies collection
    movies.value = []; // Reset the movies array
    querySnapshot.forEach((doc) => {
      const movieData = { id: doc.id, ...doc.data() }; // Merge document ID with its data
      movies.value.push({
        ...movieData,
        clickCount: movieData.clickCount || 0, // Set default clickCount to 0 if not defined
      });
    });
  };

  // Filter movies based on the search query
  const filteredMovies = computed(() => {
    return movies.value.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  // Add time to the total time counter
  const addMovieTime = (time) => {
    if (timeCounter && typeof timeCounter.value.addTime === 'function') {
      timeCounter.value.addTime(time); // Call the addTime function from the injected timeCounter
    } else {
      console.error('timeCounter or addTime method is not available'); // Log error if method is not available
    }
  };

  // Handle clicks on movie images
  const handleImageClick = (movie) => {
    movie.clickCount++; // Increment the click count for the movie
    if (!clickedMovies.value.includes(movie.id)) {
      clickedMovies.value.push(movie.id); // Add movie ID to clickedMovies if not already included
    }
    addMovieTime(movie.time); // Add the movie's time to the total time
  };

  // Add a new movie to the Firestore collection and update the movies array
  const addMovie = async () => {
    try {
      const movieToAdd = { ...newMovie.value, clickCount: 0 }; // Create a new movie object with default click count
      await addDoc(collection(db, 'Movies'), movieToAdd); // Add the new movie to Firestore
      movies.value.push({ id: Date.now(), ...movieToAdd }); // Push the new movie into the local array
      newMovie.value = { title: '', time: 0, poster: '' }; // Reset the newMovie object
      showAddModal.value = false; // Close the add movie modal
      await fetchMovies(); // Refresh the movies list
    } catch (error) {
      console.error('Error adding movie:', error); // Log any error that occurs
    }
  };

  // Open the edit modal with the selected movie's details
  const openEditModal = (movie) => {
    editMovie.value = { id: movie.id, title: movie.title, time: movie.time, poster: movie.poster }; // Populate the editMovie object with the selected movie's data
    showEditModal.value = true; // Show the edit movie modal
  };

  // Update an existing movie's data in Firestore
  const updateMovie = async () => {
    try {
      const movieRef = doc(db, 'Movies', editMovie.value.id); // Reference to the movie document in Firestore
      await updateDoc(movieRef, {
        title: editMovie.value.title,
        time: editMovie.value.time,
        poster: editMovie.value.poster,
      }); // Update the movie document with new values
      showEditModal.value = false; // Close the edit modal
      await fetchMovies(); // Refresh the movies list
    } catch (error) {
      console.error('Error updating movie:', error); // Log any error that occurs
    }
  };

  // Confirm deletion of a movie with a user prompt
  const confirmDelete = (id) => {
    const isConfirmed = confirm('Are you sure you want to delete this movie?'); // Prompt user for confirmation
    if (isConfirmed) {
      deleteMovie(id); // If confirmed, call deleteMovie
    }
  };

  // Delete a movie from Firestore and update the local movies array
  const deleteMovie = async (id) => {
    try {
      await deleteDoc(doc(db, 'Movies', id)); // Delete the movie document from Firestore
      movies.value = movies.value.filter((movie) => movie.id !== id); // Remove the movie from the local array
    } catch (error) {
      console.error('Error deleting movie:', error); // Log any error that occurs
    }
  };

  // Reset the counts for clicked movies and their click counts
  // const resetCounts = () => {
  //   clickedMovies.value = []; // Clear the clickedMovies array
  //   movies.value.forEach(movie => movie.clickCount = 0); // Reset click counts for all movies
  // };

// const reset = () => {
//   isRotating.value = true; // Start rotation
//   resetTime(); // Reset the total time
//   resetCounts(); // Call resetCounts to reset the clicked movies' count
//   // Remove rotation after the animation duration
//   setTimeout(() => {
//     isRotating.value = false; // Stop rotation
//   }, 300); // Match duration with CSS animation
// };
// const resetCounts = () => {
//   clickedMovies.value = []; // Clear the clickedMovies array
//   movies.value.forEach(movie => movie.clickCount = 0); // Reset click counts for all movies
// };
  // Fetch movies from Firestore when the component is mounted
  
  onMounted(fetchMovies);

  return {
    movies, // Expose movies array for use in components
    searchQuery, // Expose searchQuery for searching movies
    filteredMovies, // Expose filteredMovies for displaying filtered results
    showAddModal, // Expose control for showing the add movie modal
    showEditModal, // Expose control for showing the edit movie modal
    newMovie, // Expose newMovie object for data binding
    editMovie, // Expose editMovie object for data binding
    isAdmin, // Expose isAdmin computed property
    clickedMovies, // Expose clickedMovies array for tracking clicked movies
    addMovie, // Expose function for adding movies
    openEditModal, // Expose function for opening the edit modal
    updateMovie, // Expose function for updating movies
    confirmDelete, // Expose function for confirming movie deletion
    deleteMovie, // Expose function for deleting movies
    handleImageClick, // Expose function for handling movie image clicks
  };
}

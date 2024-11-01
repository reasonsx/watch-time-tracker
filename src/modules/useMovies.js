import { ref, computed, inject, onMounted } from 'vue';
import { db } from '../../firebaseConfig';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useUsers } from './useUsers';

export default function useMovies() {
  // State for movies and UI controls
  const movies = ref([]); // Array to hold list of movies
  const searchQuery = ref(''); // Current search query for filtering
  const showAddModal = ref(false); // Controls add movie modal visibility
  const showEditModal = ref(false); // Controls edit movie modal visibility

  // Temporary storage for movie addition and editing
  const newMovie = ref({ title: '', time: 0, poster: '' }); // New movie data
  const editMovie = ref({ id: '', title: '', time: 0, poster: '' }); // Data for editing movie

  // Injected properties
  const clickedMovies = inject('clickedMovies', ref([])); // Array of clicked movie IDs
  const timeCounter = inject('timeCounter'); // Injected object for managing total time

  // User role and permissions
  const { userRole } = useUsers(); // Fetch the user's role
  const isAdmin = computed(() => userRole.value === 'admin'); // Check if the user is an admin

  // Fetch movies from Firestore and populate the `movies` array
  const fetchMovies = async () => {
    const querySnapshot = await getDocs(collection(db, 'Movies'));
    movies.value = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      clickCount: doc.data().clickCount || 0, // Set default clickCount to 0 if not defined
    }));
  };

  // Computed property to filter movies based on the search query
  const filteredMovies = computed(() => 
    movies.value.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  );

  // Add time to the total time counter
  const addMovieTime = (time) => {
    if (timeCounter && typeof timeCounter.value.addTime === 'function') {
      timeCounter.value.addTime(time);
    } else {
      console.error('timeCounter or addTime method is not available');
    }
  };

  // Handle clicks on movie images
  const handleImageClick = (movie) => {
    movie.clickCount++;
    if (!clickedMovies.value.includes(movie.id)) {
      clickedMovies.value.push(movie.id); // Add movie ID if not already in clickedMovies
    }
    addMovieTime(movie.time); // Add the movie's time to total
  };

  // Add a new movie to Firestore and update `movies`
  const addMovie = async () => {
    try {
      const movieToAdd = { ...newMovie.value, clickCount: 0 };
      await addDoc(collection(db, 'Movies'), movieToAdd);
      newMovie.value = { title: '', time: 0, poster: '' }; // Reset form
      showAddModal.value = false;
      await fetchMovies(); // Refresh movie list
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  // Open the edit modal with the selected movie's details
  const openEditModal = (movie) => {
    editMovie.value = { id: movie.id, title: movie.title, time: movie.time, poster: movie.poster };
    showEditModal.value = true;
  };

  // Update a movie's data in Firestore
  const updateMovie = async () => {
    try {
      const movieRef = doc(db, 'Movies', editMovie.value.id);
      await updateDoc(movieRef, {
        title: editMovie.value.title,
        time: editMovie.value.time,
        poster: editMovie.value.poster,
      });
      showEditModal.value = false;
      await fetchMovies();
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };

  // Confirm deletion of a movie with user prompt
  const confirmDelete = (id) => {
    const isConfirmed = confirm('Are you sure you want to delete this movie?');
    if (isConfirmed) {
      deleteMovie(id);
    }
  };

  // Delete a movie from Firestore and update `movies`
  const deleteMovie = async (id) => {
    try {
      await deleteDoc(doc(db, 'Movies', id));
      movies.value = movies.value.filter((movie) => movie.id !== id); // Remove locally
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  // Fetch movies on component mount
  onMounted(fetchMovies);

  // Expose functions and properties for use in components
  return {
    movies,
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
    deleteMovie,
    handleImageClick,
  };
}

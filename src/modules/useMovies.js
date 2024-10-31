import { ref, computed, inject, onMounted } from 'vue';
import { db } from '../../firebaseConfig';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { useUsers } from './useUsers'; 

export default function useMovies() {
  const { userRole } = useUsers();
  const movies = ref([]);
  const searchQuery = ref('');
  const showAddModal = ref(false);
  const showEditModal = ref(false);
  const newMovie = ref({ title: '', time: 0, poster: '' });
  const editMovie = ref({ id: '', title: '', time: 0, poster: '' });
  const clickedMovies = inject('clickedMovies', ref([])); // Ensure clickedMovies is injected or defaults to empty ref
  const timeCounter = inject('timeCounter');

  const isAdmin = computed(() => userRole.value === 'admin');

  const fetchMovies = async () => {
    const querySnapshot = await getDocs(collection(db, 'Movies'));
    movies.value = [];
    querySnapshot.forEach((doc) => {
      movies.value.push({ id: doc.id, ...doc.data() });
    });
  };

  const filteredMovies = computed(() => {
    return movies.value.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  const addMovieTime = (time) => {
    if (timeCounter && typeof timeCounter.value.addTime === 'function') {
      timeCounter.value.addTime(time);
    } else {
      console.error('timeCounter or addTime method is not available');
    }
  };

  const handleImageClick = (movie) => {
    if (!clickedMovies.value.includes(movie.id)) {
      clickedMovies.value.push(movie.id);
    }
    addMovieTime(movie.time);
  };

  const addMovie = async () => {
    try {
      await addDoc(collection(db, 'Movies'), newMovie.value);
      movies.value.push({ id: Date.now(), ...newMovie.value });
      newMovie.value = { title: '', time: 0, poster: '' };
      showAddModal.value = false;
      await fetchMovies();
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  const openEditModal = (movie) => {
    editMovie.value = { id: movie.id, title: movie.title, time: movie.time, poster: movie.poster };
    showEditModal.value = true;
  };

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

  const confirmDelete = (id) => {
    const isConfirmed = confirm('Are you sure you want to delete this movie?');
    if (isConfirmed) {
      deleteMovie(id);
    }
  };

  const deleteMovie = async (id) => {
    try {
      await deleteDoc(doc(db, 'Movies', id));
      movies.value = movies.value.filter((movie) => movie.id !== id);
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  onMounted(fetchMovies);

  return {
    movies,
    searchQuery,
    filteredMovies,
    showAddModal,
    showEditModal,
    newMovie,
    editMovie,
    isAdmin,
    clickedMovies, // Expose clickedMovies to be used in the component
    addMovie,
    openEditModal,
    updateMovie,
    confirmDelete,
    deleteMovie,
    handleImageClick,
  };
}

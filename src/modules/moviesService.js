// // movieService.js
// import { db } from '../modules/firebaseService.js';
// import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';

// const fetchMovies = async () => {
//   const querySnapshot = await getDocs(collection(db, 'Movies'));
//   const movies = [];
//   querySnapshot.forEach(doc => movies.push({ id: doc.id, ...doc.data() }));
//   return movies;
// };

// const addMovie = async (movie) => {
//   return await addDoc(collection(db, 'Movies'), movie);
// };

// const deleteMovie = async (id) => {
//   return await deleteDoc(doc(db, 'Movies', id));
// };

// const updateMovie = async (movie) => {
//   const movieRef = doc(db, 'Movies', movie.id);
//   return await updateDoc(movieRef, {
//     title: movie.title,
//     time: movie.time,
//     poster: movie.poster,
//   });
// };

// export { fetchMovies, addMovie, deleteMovie, updateMovie };

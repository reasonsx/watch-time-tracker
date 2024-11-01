import { ref, computed, inject } from 'vue';

export function useTime() {
  // Injected property
  const clickedMovies = inject('clickedMovies'); // Grayscale effect on clicked movies

  // Local state properties
  const totalTime = ref(0); // Total time tracker
  const isRotating = ref(false); // Rotation animation state

  // Computed property to format total time display
  const formattedTotalTime = computed(() => {
    const days = Math.floor(totalTime.value / (60 * 24));
    const hours = Math.floor((totalTime.value % (60 * 24)) / 60);
    const minutes = totalTime.value % 60;
    return `${days} days, ${hours} hours, ${minutes} minutes`;
  });

  // Methods
  const addTime = (time) => {
    totalTime.value += time; // Add specified time
  };

  const resetTime = () => {
    totalTime.value = 0; // Reset total time
    if (clickedMovies) clickedMovies.value = []; // Reset clicked movies if available
  };

  const onResetClick = () => {
    isRotating.value = true; // Start rotation animation
    resetTime(); // Reset time and clicked movies

    setTimeout(() => {
      isRotating.value = false; // Stop rotation after animation duration
    }, 300); // Duration matches CSS transition
  };

  // Expose methods and computed properties to parent component 
  return {
    totalTime,
    isRotating,
    formattedTotalTime,
    addTime,
    onResetClick,
  };
}

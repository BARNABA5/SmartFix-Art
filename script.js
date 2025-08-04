function playThankYou() {
  const audio = document.getElementById("thankYouSound");
  if (audio) {
    audio.currentTime = 0; // Restart from beginning
    audio.play().catch(e => console.warn("Audio play failed:", e));
  }
  showConfetti(); // trigger confetti too
}

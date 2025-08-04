function playThankYou() {
  const audio = document.getElementById("thankYouSound");
  if (audio) {
    audio.currentTime = 0; // Restart from beginning
    audio.play().catch(e => console.warn("Audio play failed:", e));
  }
  showConfetti(); // trigger confetti too
}
function showConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}


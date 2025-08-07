function toggleMusic() {
  if (music.paused) {
    music.play().then(() => {
      isPlaying = true;
      toggleBtn.textContent = '🔇 Pause Music';
    }).catch((err) => {
      alert("Click the button again to allow music. Browser blocked it.");
      console.log("Error:", err);
    });
  } else {
    music.pause();
    isPlaying = false;
    toggleBtn.textContent = '🔊 Play Music';
  }
}
 // Add confetti effect on any .poster a (download) button
  document.querySelectorAll('.poster a').forEach(button => {
    button.addEventListener('click', () => {
      // Show confetti for 1 second
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    });
  });

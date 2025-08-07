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

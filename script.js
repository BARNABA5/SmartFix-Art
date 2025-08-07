 const music = document.getElementById('backgroundMusic');
  const toggleBtn = document.getElementById('musicToggleBtn');
  let isPlaying = false;

  function toggleMusic() {
    if (music.paused) {
      music.play();
      isPlaying = true;
      toggleBtn.textContent = '🔇 Pause Music';
    } else {
      music.pause();
      isPlaying = false;
      toggleBtn.textContent = '🔊 Play Music';
    }
  }

  // Try to play on first interaction
  document.body.addEventListener('click', () => {
    if (!isPlaying) {
      music.play().then(() => {
        isPlaying = true;
        toggleBtn.textContent = '🔇 Pause Music';
      }).catch(err => {
        console.log("Browser blocked autoplay:", err);
      });
    }
  }, { once: true });

 const music = document.getElementById('backgroundMusic');
  const toggleBtn = document.getElementById('musicToggleBtn');
  let isPlaying = false;

  function toggleMusic() {
    if (music.paused) {
      music.play().then(() => {
        isPlaying = true;
        toggleBtn.textContent = '🔇 Pause Music';
      }).catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    } else {
      music.pause();
      isPlaying = false;
      toggleBtn.textContent = '🔊 Play Music';
    }
  }

  // Attempt to auto-play after first user interaction (browser policy)
  document.addEventListener('click', () => {
    if (!isPlaying) {
      music.play().then(() => {
        isPlaying = true;
        toggleBtn.textContent = '🔇 Pause Music';
      }).catch((err) => {
        console.log("Autoplay still blocked:", err);
      });
    }
  }, { once: true });

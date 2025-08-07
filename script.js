<script>
  const music = document.getElementById('backgroundMusic');
  const toggleBtn = document.getElementById('musicToggleBtn');

  let isPlaying = false;

  // Try to autoplay on load (some browsers will block it)
  window.addEventListener('load', () => {
    music.play().then(() => {
      isPlaying = true;
      toggleBtn.textContent = '🔇 Pause Music';
    }).catch(() => {
      // Autoplay blocked - wait for user interaction
      console.log("Autoplay blocked, waiting for user click...");
    });
  });

  // Force play after first user click anywhere
  document.body.addEventListener('click', () => {
    if (!isPlaying) {
      music.play().then(() => {
        isPlaying = true;
        toggleBtn.textContent = '🔇 Pause Music';
      });
    }
  }, { once: true }); // only once

  // Toggle Play/Pause button function
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
</script>

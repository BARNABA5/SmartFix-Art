window.addEventListener('load', () => {
  const music = document.getElementById('backgroundMusic');

  // Attempt to autoplay
  const playMusic = () => {
    music.play().catch((error) => {
      console.log("Auto-play blocked. Waiting for user action...");
    });
  };

  // Try on load
  playMusic();

  // Retry on user interaction (e.g. click/tap)
  document.body.addEventListener('click', () => {
    if (music.paused) {
      music.play().catch((e) => console.warn("Still blocked:", e));
    }
  });
});

// Optional toggle button functionality
function toggleMusic() {
  const music = document.getElementById('backgroundMusic');
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

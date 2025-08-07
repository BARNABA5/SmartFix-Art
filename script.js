
  window.addEventListener('load', () => {
    const music = document.getElementById('backgroundMusic');

    // Try to play immediately
    const playMusic = () => {
      music.play().catch((error) => {
        console.log("Auto-play blocked, waiting for user interaction.");
      });
    };

    // Try once on load
    playMusic();

    // Try again after user clicks anywhere
    document.body.addEventListener('click', () => {
      playMusic();
    });
  });
  <button onclick="toggleMusic()">🔊 Toggle Music</button>
  const music = document.getElementById("backgroundMusic");
  function toggleMusic() {
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }
  



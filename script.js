<script>
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

    // Try again after user interaction (to handle autoplay restrictions)
    document.body.addEventListener('click', () => {
      if (music.paused) {
        music.play().catch((e) => console.warn("Still blocked:", e));
      }
    });
  });
</script>


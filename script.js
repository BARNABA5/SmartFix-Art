<audio id="backgroundMusic" loop>
  <source src="chill_beats_instrumental_magic.mp3" type="audio/mpeg">
</audio>

<button id="musicToggleBtn">🔊 Play Music</button>

<script>
  const music = document.getElementById("backgroundMusic");
  const toggleBtn = document.getElementById("musicToggleBtn");

  let isPlaying = false;

  toggleBtn.addEventListener("click", () => {
    if (!isPlaying) {
      music.play().then(() => {
        isPlaying = true;
        toggleBtn.textContent = "🔇 Pause Music";
      }).catch((err) => {
        console.log("Browser blocked autoplay:", err);
      });
    } else {
      music.pause();
      isPlaying = false;
      toggleBtn.textContent = "🔊 Play Music";
    }
  });

  // Optional: try once on first body click
  document.body.addEventListener('click', () => {
    if (!isPlaying) {
      music.play().then(() => {
        isPlaying = true;
        toggleBtn.textContent = "🔇 Pause Music";
      }).catch((err) => {
        console.log("Autoplay blocked again:", err);
      });
    }
  }, { once: true });
</script>

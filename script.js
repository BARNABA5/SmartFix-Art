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

function startConfetti() {
  const duration = 5 * 1000; // 5 seconds
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    
    confetti({
      particleCount,
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 100),
      origin: { x: Math.random(), y: Math.random() - 0.2 },
      ...defaults
    });
  }, 250);
}


</script>

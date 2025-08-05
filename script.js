function playThankYou() {
  const audio = document.getElementById("thankYouSound");
  if (audio) {
    audio.currentTime = 0; // Restart from beginning
    audio.play().catch(e => console.warn("Audio play failed:", e));
  }
  showConfetti(); // trigger confetti too
}
function showConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}
const downloadLinks = document.querySelectorAll(".poster a");
const loadingScreen = document.getElementById("loading-screen");

downloadLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    loadingScreen.style.display = "flex";
    setTimeout(() => {
      loadingScreen.style.display = "none";
      window.location.href = link.href;
    }, 3000);
  });
});

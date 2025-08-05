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

    playThankYou(); // Play sound + confetti
    loadingScreen.style.display = "flex";

    const fileUrl = link.getAttribute("href");
    const fileName = link.getAttribute("download") || "poster-download";

    setTimeout(() => {
      loadingScreen.style.display = "none";

      // Create a temporary invisible download link
      const tempLink = document.createElement("a");
      tempLink.href = fileUrl;
      tempLink.download = fileName;
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);

    }, 3000); // wait 3 seconds
  });
});
<div id="loading-screen" style="display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 9999; color: white; justify-content: center; align-items: center; flex-direction: column;">
  <img src="icon.png" alt="Loading..." style="width: 150px; margin-bottom: 1rem;">
  <p style="font-size: 1.2rem; animation: pulse 1s infinite;">Preparing your download...</p>
</div>


function playThankYou() {
  const audio = document.getElementById("thankYouSound");
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch((e) => console.warn("Audio play failed:", e));
  }

  // Trigger confetti animation
  if (typeof confetti === "function") {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// OPTIONAL: Force download in case browser blocks it (not required in most cases)
function forceDownload(url) {
  const a = document.createElement("a");
  a.href = url;
  a.setAttribute("download", "");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Add click event to all download links
document.addEventListener("DOMContentLoaded", () => {
  const downloadLinks = document.querySelectorAll("a[download]");

  downloadLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      playThankYou();
      // Optional fallback:
      // forceDownload(link.href);
    });
  });
});

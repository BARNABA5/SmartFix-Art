// Play thank you sound when a download link is clicked
function playThankYou() {
  const audio = document.getElementById("thankYouSound");
  if (audio) {
    audio.play().catch((e) => console.warn("Audio play failed:", e));
  }
}

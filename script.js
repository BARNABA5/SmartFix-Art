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
  document.getElementById("suggestForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const suggestion = document.getElementById("suggestion").value.trim();

    if (!suggestion) {
      alert("Please fill in all fields.");
      return;
    }

    const message = `"You’ve reached the SmartFix-studio hotline": ${suggestion}`;

    // 🔊 Voice output
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);

    // Calculate estimated duration: average ~400ms per word
    const wordCount = message.split(" ").length;
    const duration = wordCount * 400; // 400ms per word

    // 📲 Delay WhatsApp link until voice finishes
    setTimeout(() => {
      const encodedMsg = encodeURIComponent("Hello SmartFix! 👋\n💬 Suggestion: " + suggestion);
      const phone = "254706876154";
      window.open(`https://wa.me/${phone}?text=${encodedMsg}`, "_blank");
    }, duration);
  });
function forceDownload(url) {
  const a = document.createElement("a");
  a.href = url;
  a.setAttribute("download", "");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}



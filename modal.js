const message =



"🍳 کک ایپ میں خوش آمدید! مزیدار اور لذیذ ریسپیز دریافت کریں۔\n\nویب ایپس سیکھنے یا بنوانے کے لیے رابطہ کریں:\n03425910639";

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const msgText = document.getElementById("msgText");
  const closeBtn = document.getElementById("closeBtn");

  if (!overlay || !msgText || !closeBtn) return;

  msgText.textContent = message;
  overlay.style.display = "flex";

  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
  });
});
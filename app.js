/* =========================
   ATT0CK CARS - APP JS
   ========================= */

/* Smooth scrolling for nav links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* =========================
   WHATSAPP BOOKING SYSTEM
   ========================= */

/*
This function can be used later with a booking form.
It generates a professional WhatsApp message.
*/

function sendBookingToWhatsApp(data) {
  const phone = "923225063415";

  const message = `
Assalamualaikum, I want to book a car from Attock Cars.

👤 Name: ${data.name || "Not provided"}
📞 Phone: ${data.phone || "Not provided"}

🚗 Car Category: ${data.category || "Not selected"}
📍 Pickup Location: ${data.pickup || "Not provided"}
📍 Drop-off Location: ${data.dropoff || "Not provided"}

📅 Pickup Date: ${data.pickupDate || "Not provided"}
📅 Return Date: ${data.returnDate || "Not provided"}

📝 Additional Requirements:
${data.message || "None"}

Please confirm availability. Thank you.
`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}


/* =========================
   QUICK BOOK BUTTONS
   ========================= */

/*
Optional helper if you later want to connect buttons dynamically
*/
function quickBook(carName) {
  const phone = "923225063415";

  const message = `
Hello Attock Cars,

I want to book: ${carName}

Please share availability and price.

Thank you.
`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}


/* =========================
   UI ENHANCEMENTS
   ========================= */

/* Highlight active section (simple version) */
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  let scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      section.style.opacity = "1";
    }
  });
});


/* Floating WhatsApp pulse effect */
const floatingBtn = document.querySelector(".floating-whatsapp");

if (floatingBtn) {
  setInterval(() => {
    floatingBtn.style.transform = "scale(1.1)";
    setTimeout(() => {
      floatingBtn.style.transform = "scale(1)";
    }, 300);
  }, 3000);
}


/* =========================
   FUTURE PWA READY HOOK
   ========================= */

/*
Later we will add service worker registration here.
*/

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // Will be enabled in Part 4
    console.log("PWA ready - service worker will be added later.");
  });
}
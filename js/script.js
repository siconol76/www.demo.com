// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav //

const Hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!Hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
const scriptURL =
  "https://script.google.com/macros/s/AKfycby-oWihF4-h72uhj-dNrkS3MgWdQxdBcZlBs58KHEbBAxiTKFPOO3ojbYLB56T3r1Y8EA/exec"; // ganti dengan URL Web App Anda

document.getElementById("reviewForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let data = {
    nama: document.getElementById("nama").value,
    rating: document.getElementById("rating").value,
    ulasan: document.getElementById("ulasan").value,
  };

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.text())
    .then((txt) => {
      document.getElementById("status").innerHTML =
        "✔ Ulasan berhasil dikirim!";
      document.getElementById("reviewForm").reset();
    })
    .catch((err) => {
      document.getElementById("status").innerHTML = "❌ Gagal mengirim ulasan!";
    });
});
const getURL =
  "https://script.google.com/macros/s/AKfycbwHKO16R1XRftIAd9ZHrTWAC6a4-yl6jZv2R7RLOAd7abc8U7ICzmDUwpqE4xkCduYwCA/exec";

fetch(getURL)
  .then((r) => r.json())
  .then((d) => {
    let html = "";
    d.reverse().forEach((r) => {
      html += `
        <div class="google-card">
            <div class="google-name">${r.name}</div>
            <div class="google-rating">⭐ ${r.rating}</div>
            <div class="google-text">${r.review}</div>
        </div>
        `;
    });
    document.getElementById("scroll-review").innerHTML = html;

    setInterval(() => {
      const slider = document.getElementById("review-slider");
      slider.scrollBy({ left: 320, behavior: "smooth" });
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 2500);
  });

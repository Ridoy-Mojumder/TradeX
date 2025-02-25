const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");
const faqItems = document.querySelectorAll(".faq-item");
const mobileMenu = document.getElementById("mobileMenu");

// menuIcon.addEventListener("click", () => {
//     mobileMenu.classList.toggle("hidden");
// });

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menuIcon");
  const mobileMenu = document.getElementById("mobileMenu");
  const navLinks = document.getElementById("navLinks");

  menuIcon.addEventListener("click", () => {
    const isActive = mobileMenu.classList.toggle("active");
    menuIcon.setAttribute("aria-expanded", isActive);
  });
});

document.addEventListener("click", (event) => {
  if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
    navLinks.classList.remove("active");
    menuIcon.setAttribute("aria-expanded", "false");
  }
});

function openTab(tabId) {
  tabButtons.forEach((btn) => btn.classList.remove("active"));
  tabContents.forEach((tab) => tab.classList.remove("active"));

  document.querySelector(`[data-tab="${tabId}"]`).classList.add("active");
  document.getElementById(tabId).classList.add("active");
}

if (tabButtons.length > 0) {
  openTab(tabButtons[0].dataset.tab);
}

tabButtons.forEach((button) => {
  button.addEventListener("click", function () {
    openTab(this.dataset.tab);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    question.addEventListener("click", () => {
      const isOpen = answer.classList.contains("block");

      faqItems.forEach((faq) => {
        faq.querySelector(".faq-answer").classList.remove("block");
        faq.querySelector(".faq-answer").classList.add("hidden");
        faq.querySelector(".faq-icon").textContent = "+";
      });

      if (!isOpen) {
        answer.classList.remove("hidden");
        answer.classList.add("block");
        answer.classList.add("bg-blue-100");
        answer.classList.add("p-4");
        icon.textContent = "−";
      } else {
        answer.classList.add("hidden");
        answer.classList.remove("block");
        icon.textContent = "+";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  highlightCard(1);
});

function highlightCard(index) {
  document.querySelectorAll(".cardForTestimonial").forEach((card, i) => {
    if (i === index) {
      card.classList.add("opacity-100", "shadow-2xl");
      card.classList.remove("opacity-50");
    } else {
      card.classList.add("opacity-50");
      card.classList.remove("opacity-100", "shadow-2xl");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".client-track");
  let offset = 0;

  function slideClients() {
    offset -= 1;
    if (Math.abs(offset) >= track.scrollWidth / 2) {
      offset = 0;
    }
    track.style.transform = `translateX(${offset}px)`;
  }

  setInterval(slideClients, 30);
});

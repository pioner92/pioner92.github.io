const header = document.querySelector(".site-header");
const cards = document.querySelectorAll(".project-card, .feature");

const updateHeader = () => {
  const scrolled = window.scrollY > 24;
  header.style.background = scrolled ? "rgba(7, 9, 13, 0.72)" : "transparent";
  header.style.borderBottom = scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent";
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 }
);

cards.forEach((card) => observer.observe(card));
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

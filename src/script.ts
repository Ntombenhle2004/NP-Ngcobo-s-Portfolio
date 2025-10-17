// src/scrollAnimations.ts
export function initScrollAnimations() {
  const elements = document.querySelectorAll(
    ".hero-card, .card, .skill-card, .edu-card, .soft-panel, .contact-form-container, .contact-grid"
  );

  // Add initial hidden state
  elements.forEach((el) => el.classList.add("animate-on-scroll"));

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
}

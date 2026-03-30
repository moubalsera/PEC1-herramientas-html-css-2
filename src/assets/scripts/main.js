// Menú móvil
const navToggle = document.querySelector(".site-nav__toggle");
const navMenu = document.querySelector(".site-nav__menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Cierra el menú al pulsar una sección
  navMenu.querySelectorAll(".site-nav__link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Marca el enlace activo mientras se hace scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('.site-nav__link[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "site-nav__link--active",
            link.getAttribute("href") === `#${entry.target.id}`,
          );
        });
      }
    });
  },
  { rootMargin: "-50% 0px -50% 0px" },
);

sections.forEach((section) => observer.observe(section));

// Scroll suave entre secciones
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const targetId = anchor.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

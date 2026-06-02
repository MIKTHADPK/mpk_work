const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar");
const slides = Array.from(document.querySelectorAll(".hero-slide"));
const slideButtons = Array.from(document.querySelectorAll(".hero-tabs button"));
const appointmentForm = document.querySelector("#appointment-form");
let activeSlide = 0;
let slideTimer;
let lastScrollY = window.scrollY;
let scrollingUp = false;

document.body.classList.add("motion-ready");

function showSlide(index) {
  if (!slides.length) {
    return;
  }

  activeSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    const isActive = slideIndex === activeSlide;
    slide.classList.toggle("active", isActive);
    slide.classList.remove("content-visible");

    if (isActive) {
      window.setTimeout(() => {
        if (slide.classList.contains("active")) {
          slide.classList.add("content-visible");
        }
      }, 40);
    }
  });

  slideButtons.forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === activeSlide);
  });
}

function startSlider() {
  if (!slides.length) {
    return;
  }

  clearInterval(slideTimer);
  slideTimer = setInterval(() => {
    showSlide(activeSlide + 1);
  }, 5200);
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

slideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showSlide(Number(button.dataset.slide));
    startSlider();
  });
});

if (appointmentForm) {
  appointmentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const note = form.querySelector(".form-note");
    note.textContent = "Thank you. Your consultation request has been prepared.";
    form.reset();
  });
}

document.querySelectorAll(".nav-menu a").forEach((link) => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const linkPage = link.getAttribute("href")?.split("#")[0] || "index.html";

  if (linkPage === currentPage) {
    link.classList.add("active-page");
  }
});

document.querySelectorAll(".whatsapp-float, .whatsapp-link").forEach((link) => {
  const pageName = document.title.replace(" | Mark N Move", "");
  link.href = `https://wa.me/919999999999?text=${encodeURIComponent(`Hello Mark N Move, I am visiting the ${pageName} page and need tax consultation support.`)}`;
});

const animatedItems = document.querySelectorAll(
  ".intro-grid a, .about-grid > *, .section-heading, .service-card, .feature-grid > *, .process-grid article, .expert-grid > *, .appointment-card > *, .footer-grid > *, .contact-grid > *, .page-hero > .container > *"
);

animatedItems.forEach((item) => {
  item.classList.add("scroll-animate");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.toggle("from-up", scrollingUp);
      entry.target.classList.add("is-visible");
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -40px 0px"
  }
);

animatedItems.forEach((item) => revealObserver.observe(item));

window.addEventListener(
  "scroll",
  () => {
    const currentScrollY = window.scrollY;
    scrollingUp = currentScrollY < lastScrollY;

    if (navbar && currentScrollY > 140 && !scrollingUp) {
      navbar.classList.add("nav-hidden");
      navbar.classList.remove("nav-visible");
    } else if (navbar) {
      navbar.classList.remove("nav-hidden");
      navbar.classList.toggle("nav-visible", currentScrollY > 20);
    }

    lastScrollY = Math.max(currentScrollY, 0);
  },
  { passive: true }
);

showSlide(0);
startSlider();

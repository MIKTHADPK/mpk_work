const GOOGLE_SHEETS_WEB_APP_URL = "";
const WHATSAPP_NUMBER = "919605524749";

const initIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

const initNav = () => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
};

const initSlider = () => {
  const slides = Array.from(document.querySelectorAll("[data-slide]"));
  const dots = Array.from(document.querySelectorAll("[data-slide-control]"));
  if (!slides.length) return;

  let current = 0;

  const showSlide = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === current);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === current);
    });
  };

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      showSlide(Number(dot.dataset.slideControl));
    });
  });

  window.setInterval(() => showSlide(current + 1), 5600);
};

const initReveal = () => {
  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
};

const toPlainObject = (form) => {
  const data = Object.fromEntries(new FormData(form).entries());
  return {
    submittedAt: new Date().toISOString(),
    page: window.location.pathname.split("/").pop() || "index.html",
    ...data,
  };
};

const buildWhatsAppMessage = (payload) => {
  const lines = [
    `VITALIX ${payload.formType || "Enquiry"}`,
    `Name: ${payload.fullName || ""}`,
    `Phone: ${payload.phone || ""}`,
    `Email: ${payload.email || ""}`,
  ];

  if (payload.ageGender) lines.push(`Age & Gender: ${payload.ageGender}`);
  if (payload.consultationType) lines.push(`Consultation: ${payload.consultationType}`);
  if (payload.preferredDate) lines.push(`Preferred Date: ${payload.preferredDate}`);
  if (payload.preferredMode) lines.push(`Preferred Mode: ${payload.preferredMode}`);
  if (payload.complaint) lines.push(`Health Issue: ${payload.complaint}`);

  return lines.join("\n");
};

const submitToSheet = async (payload) => {
  if (!GOOGLE_SHEETS_WEB_APP_URL) {
    return { configured: false };
  }

  await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  return { configured: true };
};

const initForms = () => {
  const forms = document.querySelectorAll("[data-clinic-form]");

  forms.forEach((form) => {
    const status = form.querySelector(".form-status");
    const submitButton = form.querySelector("button[type='submit']");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const payload = toPlainObject(form);
      const message = buildWhatsAppMessage(payload);

      if (status) {
        status.classList.remove("is-error");
        status.textContent = "Submitting your request...";
      }
      if (submitButton) submitButton.disabled = true;

      try {
        const result = await submitToSheet(payload);

        if (result.configured) {
          form.reset();
          if (status) status.textContent = "Thank you. Your request has been submitted.";
          return;
        }

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        if (status) {
          status.textContent = "Google Sheet is not connected yet. Opening WhatsApp with your request.";
        }
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      } catch (error) {
        if (status) {
          status.classList.add("is-error");
          status.textContent = "Submission could not be sent. Please contact the clinic by WhatsApp or phone.";
        }
      } finally {
        if (submitButton) submitButton.disabled = false;
      }
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initIcons();
  initNav();
  initSlider();
  initReveal();
  initForms();
});

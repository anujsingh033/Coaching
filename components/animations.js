export function initTheme() {
  const stored = localStorage.getItem("theme");
  if (stored === "dark") {
    document.documentElement.classList.add("dark");
  }

  document.querySelectorAll("[data-dark-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
    });
  });
}

export function initGsapAnimations() {
  const gsap = window.gsap;
  if (!gsap) return;
  if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

  gsap.from("[data-hero-item]", {
    opacity: 0,
    y: 28,
    duration: 0.85,
    stagger: 0.12,
    ease: "power3.out"
  });

  document.querySelectorAll("[data-reveal]").forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      y: 34,
      duration: 0.78,
      ease: "power3.out",
      scrollTrigger: { trigger: item, start: "top 84%" }
    });
  });

  document.querySelectorAll("[data-text-reveal]").forEach((item) => {
    const text = item.textContent.trim();
    item.innerHTML = text.split(" ").map((word) => `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`).join(" ");
    gsap.from(item.querySelectorAll("span span"), {
      yPercent: 105,
      duration: 0.62,
      stagger: 0.025,
      ease: "power3.out",
      scrollTrigger: { trigger: item, start: "top 86%" }
    });
  });

  document.querySelectorAll("[data-counter]").forEach((counter) => {
    const target = Number(counter.dataset.counter || "0");
    const suffix = counter.dataset.suffix || "";
    const state = { value: 0 };
    gsap.to(state, {
      value: target,
      duration: 2.1,
      ease: "power2.out",
      scrollTrigger: { trigger: counter, start: "top 88%", once: true },
      onUpdate: () => {
        counter.textContent = `${Math.round(state.value).toLocaleString()}${suffix}`;
      }
    });
  });

  document.querySelectorAll("[data-parallax]").forEach((item) => {
    gsap.to(item, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: true }
    });
  });
}

export async function initFramerMotion() {
  try {
    const { animate } = await import("https://esm.sh/framer-motion@12.23.24");
    document.querySelectorAll("[data-motion-card]").forEach((card) => {
      card.addEventListener("mouseenter", () => animate(card, { y: -8, scale: 1.012 }, { duration: 0.24, ease: "easeOut" }));
      card.addEventListener("mouseleave", () => animate(card, { y: 0, scale: 1 }, { duration: 0.22, ease: "easeOut" }));
    });
    document.querySelectorAll("[data-motion-button]").forEach((button) => {
      button.addEventListener("pointerdown", () => animate(button, { scale: 0.96 }, { duration: 0.08 }));
      button.addEventListener("pointerup", () => animate(button, { scale: 1 }, { duration: 0.12 }));
      button.addEventListener("pointerleave", () => animate(button, { scale: 1 }, { duration: 0.12 }));
    });
  } catch (error) {
    document.documentElement.dataset.motionFallback = "true";
  }
}

export function initInteractions() {
  initMenus();
  initModals();
  initFilters();
  initTestimonials();
  initAccordion();
  initForms();
  initLightbox();
  initPagination();
  initPasswordToggle();
  if (window.lucide) window.lucide.createIcons();
}

function initMenus() {
  const drawer = document.querySelector("[data-mobile-drawer]");
  document.querySelector("[data-open-menu]")?.addEventListener("click", () => drawer?.classList.add("open"));
  document.querySelector("[data-close-menu]")?.addEventListener("click", () => drawer?.classList.remove("open"));
}

function initModals() {
  document.querySelectorAll("[data-open-callback]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".modal-backdrop.open").forEach((modal) => modal.classList.remove("open"));
      document.querySelector("[data-callback-modal]")?.classList.add("open");
    });
  });
  document.querySelectorAll("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", () => button.closest(".modal-backdrop")?.classList.remove("open"));
  });
  document.querySelectorAll("[data-course-detail]").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-course-card]");
      const modal = document.querySelector("[data-course-modal]");
      if (!card || !modal) return;
      modal.querySelector("[data-modal-title]").textContent = card.dataset.title;
      modal.querySelector("[data-modal-body]").textContent = card.dataset.detail;
      modal.classList.add("open");
    });
  });
}

function initFilters() {
  document.querySelectorAll("[data-filter-group]").forEach((group) => {
    const targetSelector = group.dataset.filterGroup;
    const items = [...document.querySelectorAll(targetSelector)];
    const buttons = [...group.querySelectorAll("[data-filter]")];
    const searchSelector = group.dataset.search;
    const search = searchSelector ? document.querySelector(searchSelector) : null;

    const apply = () => {
      const active = group.querySelector(".active")?.dataset.filter || "all";
      const query = (search?.value || "").trim().toLowerCase();
      items.forEach((item) => {
        const category = item.dataset.category || "";
        const haystack = item.textContent.toLowerCase();
        const matchesFilter = active === "all" || category.includes(active);
        const matchesSearch = !query || haystack.includes(query);
        item.style.display = matchesFilter && matchesSearch ? "" : "none";
      });
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        button.classList.add("active");
        apply();
      });
    });
    search?.addEventListener("input", apply);
  });
}

function initTestimonials() {
  document.querySelectorAll("[data-slider]").forEach((slider) => {
    const slides = [...slider.querySelectorAll("[data-slide]")];
    if (slides.length < 2) return;
    let index = 0;
    const show = () => {
      slides.forEach((slide, i) => {
        slide.classList.toggle("hidden", i !== index);
      });
      index = (index + 1) % slides.length;
    };
    show();
    setInterval(show, 4200);
  });
}

function initAccordion() {
  document.querySelectorAll("[data-accordion]").forEach((accordion) => {
    accordion.querySelectorAll(".accordion-item button").forEach((button) => {
      button.addEventListener("click", () => button.closest(".accordion-item")?.classList.toggle("open"));
    });
  });
}

function initForms() {
  document.querySelectorAll("[data-lead-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      form.querySelector("[data-form-success]")?.classList.remove("hidden");
      form.reset();
    });
  });

  const admissionForm = document.querySelector("[data-admission-form]");
  if (!admissionForm) return;
  const panes = [...admissionForm.querySelectorAll(".step-pane")];
  const dots = [...document.querySelectorAll(".progress-dot")];
  let step = 0;
  const render = () => {
    panes.forEach((pane, index) => pane.classList.toggle("active", index === step));
    dots.forEach((dot, index) => dot.classList.toggle("active", index <= step));
    admissionForm.querySelector("[data-prev-step]").disabled = step === 0;
    admissionForm.querySelector("[data-next-step]").textContent = step === panes.length - 1 ? "Submit" : "Next";
  };
  admissionForm.querySelector("[data-next-step]")?.addEventListener("click", () => {
    const activeFields = [...panes[step].querySelectorAll("input, select, textarea")];
    if (activeFields.some((field) => !field.checkValidity())) {
      activeFields.find((field) => !field.checkValidity())?.reportValidity();
      return;
    }
    if (step < panes.length - 1) step += 1;
    else admissionForm.querySelector("[data-form-success]")?.classList.remove("hidden");
    render();
  });
  admissionForm.querySelector("[data-prev-step]")?.addEventListener("click", () => {
    step = Math.max(0, step - 1);
    render();
  });
  render();
}

function initLightbox() {
  const backdrop = document.querySelector("[data-lightbox]");
  if (!backdrop) return;
  const image = backdrop.querySelector("img");
  document.querySelectorAll("[data-lightbox-src]").forEach((item) => {
    item.addEventListener("click", () => {
      image.src = item.dataset.lightboxSrc;
      backdrop.classList.add("open");
    });
  });
  backdrop.addEventListener("click", () => backdrop.classList.remove("open"));
}

function initPagination() {
  const list = document.querySelector("[data-paginated-list]");
  if (!list) return;
  const items = [...list.children];
  const perPage = 4;
  const pages = Math.ceil(items.length / perPage);
  const controls = document.querySelector("[data-pagination]");
  let current = 0;
  const render = () => {
    items.forEach((item, index) => {
      item.style.display = Math.floor(index / perPage) === current ? "" : "none";
    });
    controls.innerHTML = Array.from({ length: pages }, (_, index) => `<button class="icon-btn ${index === current ? "bg-blue-600 text-white" : ""}" type="button">${index + 1}</button>`).join("");
    [...controls.children].forEach((button, index) => button.addEventListener("click", () => {
      current = index;
      render();
    }));
  };
  render();
}

function initPasswordToggle() {
  document.querySelectorAll("[data-password-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const input = document.querySelector(button.dataset.passwordToggle);
      if (!input) return;
      input.type = input.type === "password" ? "text" : "password";
    });
  });
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();


// Back to top button (only works if the button exists in HTML)
const backToTopBtn = document.getElementById("back-to-top");
if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


// Character counter (matches the HTML id="charCount")
const messageEl = document.getElementById("message");
const charCountEl = document.getElementById("charCount");

if (messageEl && charCountEl) {
  const max = 500;
  messageEl.setAttribute("maxlength", max);

  const update = () => {
    charCountEl.textContent = `${messageEl.value.length} / ${max}`;
  };

  messageEl.addEventListener("input", update);
  update();
}


// FAQ accordion
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;

    // Close others (optional: makes it cleaner)
    document.querySelectorAll(".faq-item").forEach((other) => {
      if (other !== item) other.classList.remove("open");
    });

    item.classList.toggle("open");
  });
});


// Slideshow (only runs if you actually have .hero-slideshow)
const slides = document.querySelectorAll(".hero-slideshow .slide");
let current = 0;

if (slides.length) {
  slides[0].classList.add("active");
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 3500);
}


// Scroll reveal
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el) => io.observe(el));
}


// Instagram embeds: re-process after load (helps after updates)
window.addEventListener("load", () => {
  if (window.instgrm && window.instgrm.Embeds && window.instgrm.Embeds.process) {
    window.instgrm.Embeds.process();
  }
});

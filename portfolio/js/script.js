/* ===== Scroll reveal ===== */
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);
revealEls.forEach((el) => revealObserver.observe(el));

/* ===== Count-up stats ===== */
const statEls = document.querySelectorAll(".stat-number");
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.target);
      const decimals = parseInt(el.dataset.decimals || "0", 10);
      const duration = 1400;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const value = target * eased;
        el.textContent = decimals ? value.toFixed(decimals) : Math.round(value);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = decimals ? target.toFixed(decimals) : target;
      }
      requestAnimationFrame(tick);
      statsObserver.unobserve(el);
    });
  },
  { threshold: 0.4 },
);
statEls.forEach((el) => statsObserver.observe(el));

/* ===== Typing effect ===== */
const typeTarget = document.querySelector(".type-target");
const phrases = [
  "full-stack web apps",
  "mobile learning platforms",
  "Unity games",
  "clean UI/UX",
];
let phraseIndex = 0,
  charIndex = 0,
  deleting = false;

function typeLoop() {
  if (!typeTarget) return;
  const current = phrases[phraseIndex];

  if (!deleting) {
    charIndex++;
    typeTarget.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    typeTarget.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 35 : 65);
}
typeLoop();

/* ===== Contact form submission ===== */
const CONTACT_API_URL = "https://armin-backend-c2f6.onrender.com/api/contact";

const form = document.getElementById("contact-form");
const statusEl = document.getElementById("contact-status");
const submitBtn = document.getElementById("contact-submit");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";
  statusEl.textContent = "";
  statusEl.className = "contact-status";

  try {
    const res = await fetch(CONTACT_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      statusEl.textContent = "Message sent! I'll get back to you soon.";
      statusEl.className = "contact-status success";
      form.reset();
    } else {
      statusEl.textContent =
        result.error || "Something went wrong. Please try again.";
      statusEl.className = "contact-status error";
    }
  } catch (err) {
    statusEl.textContent = "Couldn't reach the server. Please try again later.";
    statusEl.className = "contact-status error";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
  }
});

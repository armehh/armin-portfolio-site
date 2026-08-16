/* ============================================================
   All page content is rendered from CONTENT (see content.js).
   Edit content.js to change text/images — you shouldn't need to
   touch this file for everyday updates.
   ============================================================ */

const esc = (str) => String(str).replace(/[&<>"']/g, (c) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[c]));

/* ===== Hero ===== */
document.getElementById("hero-eyebrow").textContent = CONTENT.hero.eyebrow;
document.getElementById("hero-name").innerHTML = `${esc(CONTENT.hero.nameLine1)}<br>${esc(CONTENT.hero.nameLine2)}`;
document.getElementById("hero-photo").src = CONTENT.hero.photo;
document.getElementById("hero-photo").alt = `${CONTENT.hero.nameLine1} ${CONTENT.hero.nameLine2}`;
document.getElementById("download-cv-btn").href = CONTENT.hero.cvFile;
document.getElementById("hero-contact").innerHTML = `
  ${esc(CONTENT.hero.location)} &nbsp;·&nbsp;
  <a href="${CONTENT.hero.phoneHref}">${esc(CONTENT.hero.phoneDisplay)}</a> &nbsp;·&nbsp;
  <a href="mailto:${CONTENT.hero.email}">${esc(CONTENT.hero.email)}</a> &nbsp;·&nbsp;
  <a href="${CONTENT.hero.linkedinUrl}" target="_blank" rel="noopener">LinkedIn</a> &nbsp;·&nbsp;
  <a href="${CONTENT.hero.githubUrl}" target="_blank" rel="noopener">GitHub</a>
`;

document.getElementById("rail-linkedin").href = CONTENT.hero.linkedinUrl;
document.getElementById("rail-github").href = CONTENT.hero.githubUrl;
document.getElementById("rail-email").href = `mailto:${CONTENT.hero.email}`;

document.getElementById("footer-links").innerHTML = `
  <a href="${CONTENT.hero.linkedinUrl}" target="_blank" rel="noopener">LinkedIn</a> &nbsp;|&nbsp;
  <a href="${CONTENT.hero.githubUrl}" target="_blank" rel="noopener">GitHub</a> &nbsp;|&nbsp;
  <a href="mailto:${CONTENT.hero.email}">${esc(CONTENT.hero.email)}</a> &nbsp;|&nbsp;
  ${esc(CONTENT.hero.phoneDisplay)}
`;

/* Stats strip */
const statsStrip = document.getElementById("stats-strip");
CONTENT.hero.stats.forEach((s) => {
  const div = document.createElement("div");
  div.className = "stat";
  div.innerHTML = `<span class="stat-number" data-target="${s.target}" data-decimals="${s.decimals}">0</span><span class="stat-label">${esc(s.label)}</span>`;
  statsStrip.appendChild(div);
});

/* ===== Summary ===== */
document.getElementById("summary-text").textContent = CONTENT.summary;

/* ===== Experience timeline ===== */
const timelineEl = document.getElementById("timeline");
CONTENT.experience.forEach((item, i) => {
  const bulletsHtml = item.bullets.map((b) => `<li>${esc(b)}</li>`).join("");
  const div = document.createElement("div");
  div.className = "timeline-item reveal";
  div.innerHTML = `
    <div class="timeline-dot"></div>
    <div class="timeline-card">
      <h3>${esc(item.title)}</h3>
      <p class="timeline-org">${esc(item.org)}</p>
      <p class="timeline-dates">${esc(item.dates)}</p>
      <ul>${bulletsHtml}</ul>
      <button class="expand-btn" data-type="experience" data-index="${i}">Learn more</button>
    </div>`;
  timelineEl.appendChild(div);
});

/* ===== Projects ===== */
const projectGrid = document.getElementById("project-grid");
CONTENT.projects.forEach((p, i) => {
  const bulletsHtml = p.bullets.map((b) => `<li>${esc(b)}</li>`).join("");
  const repoLinkHtml = p.repoUrl
    ? `<a href="${p.repoUrl}" target="_blank" rel="noopener" class="repo-link">View Code ↗</a>`
    : "";
  const div = document.createElement("div");
  div.className = "project-card reveal";
  div.innerHTML = `
    <div class="project-glow"></div>
    <span class="project-tag">${esc(p.tag)}</span>
    <h3>${esc(p.title)}</h3>
    <p class="project-sub">${esc(p.subtitle)}</p>
    <ul>${bulletsHtml}</ul>
    <div class="project-card-footer">
      <button class="expand-btn" data-type="project" data-index="${i}">Learn more</button>
      ${repoLinkHtml}
    </div>`;
  projectGrid.appendChild(div);
});

/* ===== Skills ===== */
const skillsGrid = document.getElementById("skills-grid");
CONTENT.skillCategories.forEach((cat, i) => {
  const tagsHtml = cat.items.map((t) => `<span>${esc(t)}</span>`).join("");
  const div = document.createElement("div");
  div.className = "skill-block reveal";
  div.innerHTML = `
    <h3>${esc(cat.title)}</h3>
    <div class="tags">${tagsHtml}</div>
    <button class="expand-btn" data-type="skill" data-index="${i}">Learn more</button>`;
  skillsGrid.appendChild(div);
});

/* ===== Education ===== */
const eduList = document.getElementById("education-list");
CONTENT.education.forEach((e, i) => {
  const div = document.createElement("div");
  div.className = "edu-item";
  div.innerHTML = `
    <h3>${esc(e.title)}</h3>
    <p class="edu-sub">${esc(e.sub)}</p>
    <button class="expand-btn" data-type="education" data-index="${i}">Learn more</button>`;
  eduList.appendChild(div);
});

/* ===== Achievements & Languages ===== */
document.getElementById("achievements-list").innerHTML = CONTENT.achievements
  .map((a) => `<li><span class="trophy">🏆</span>${esc(a)}</li>`).join("");
document.getElementById("languages-list").innerHTML = CONTENT.languages
  .map((l) => `<li>${esc(l)}</li>`).join("");

/* ===== Modal (expand panels) ===== */
const modalOverlay = document.getElementById("modal-overlay");
const modalGallery = document.getElementById("modal-gallery");
const modalMainImage = document.getElementById("modal-main-image");
const modalThumbs = document.getElementById("modal-thumbs");
const modalTag = document.getElementById("modal-tag");
const modalTitle = document.getElementById("modal-title");
const modalSub = document.getElementById("modal-sub");
const modalBody = document.getElementById("modal-body");

function openModal({ title, sub, tag, images, bodyParagraphs }) {
  modalTitle.textContent = title;
  if (sub) { modalSub.textContent = sub; modalSub.style.display = "block"; } else { modalSub.style.display = "none"; }
  if (tag) { modalTag.textContent = tag; modalTag.style.display = "inline-block"; } else { modalTag.style.display = "none"; }

  const imgs = images && images.length ? images : [];
  if (imgs.length) {
    modalGallery.style.display = "block";
    modalMainImage.src = imgs[0];
    modalThumbs.innerHTML = "";
    if (imgs.length > 1) {
      imgs.forEach((src, i) => {
        const thumb = document.createElement("img");
        thumb.src = src;
        thumb.className = i === 0 ? "active" : "";
        thumb.addEventListener("click", () => {
          modalMainImage.src = src;
          modalThumbs.querySelectorAll("img").forEach((t) => t.classList.remove("active"));
          thumb.classList.add("active");
        });
        modalThumbs.appendChild(thumb);
      });
    }
  } else {
    modalGallery.style.display = "none";
  }

  modalBody.innerHTML = bodyParagraphs.map((p) => `<p>${esc(p)}</p>`).join("");
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}
document.getElementById("modal-close").addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".expand-btn");
  if (!btn) return;
  const type = btn.dataset.type;
  const idx = parseInt(btn.dataset.index, 10);

  if (type === "experience") {
    const d = CONTENT.experience[idx];
    openModal({ title: d.title, sub: d.org, tag: d.dates, images: d.expand.images, bodyParagraphs: d.expand.body });
  } else if (type === "project") {
    const d = CONTENT.projects[idx];
    openModal({ title: d.title, sub: d.subtitle, tag: d.tag, images: d.expand.images, bodyParagraphs: d.expand.body });
  } else if (type === "skill") {
    const d = CONTENT.skillCategories[idx];
    openModal({ title: d.title, sub: null, tag: null, images: d.expand.images, bodyParagraphs: d.expand.body });
  } else if (type === "education") {
    const d = CONTENT.education[idx];
    openModal({ title: d.title, sub: d.sub, tag: null, images: d.expand.images, bodyParagraphs: d.expand.body });
  }
});

/* ===== Side rail — section dot navigation ===== */
const sectionIds = ["top", "experience", "projects", "skills", "education", "contact"];
const sectionLabels = ["Home", "Experience", "Projects", "Skills", "Education", "Contact"];
const railEl = document.getElementById("section-rail");
sectionIds.forEach((id, i) => {
  const dot = document.createElement("a");
  dot.href = `#${id}`;
  dot.className = "rail-dot";
  dot.dataset.section = id;
  dot.innerHTML = `<span class="rail-label">${sectionLabels[i]}</span>`;
  railEl.appendChild(dot);
});
const railDots = document.querySelectorAll(".rail-dot");
const sectionEls = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      railDots.forEach((d) => d.classList.toggle("active", d.dataset.section === id));
    }
  });
}, { threshold: 0.4 });
sectionEls.forEach((el) => sectionObserver.observe(el));

/* ===== Scroll reveal ===== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ===== Count-up stats ===== */
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || "0", 10);
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = decimals ? value.toFixed(decimals) : Math.round(value);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = decimals ? target.toFixed(decimals) : target;
    }
    requestAnimationFrame(tick);
    statsObserver.unobserve(el);
  });
}, { threshold: 0.4 });
document.querySelectorAll(".stat-number").forEach((el) => statsObserver.observe(el));

/* ===== Typing effect ===== */
const typeTarget = document.querySelector(".type-target");
const phrases = CONTENT.hero.typingPhrases;
let phraseIndex = 0, charIndex = 0, deleting = false;

function typeLoop() {
  if (!typeTarget) return;
  const current = phrases[phraseIndex];
  if (!deleting) {
    charIndex++;
    typeTarget.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) { deleting = true; setTimeout(typeLoop, 1400); return; }
  } else {
    charIndex--;
    typeTarget.textContent = current.slice(0, charIndex);
    if (charIndex === 0) { deleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; }
  }
  setTimeout(typeLoop, deleting ? 35 : 65);
}
typeLoop();

/* ===== Contact form submission ===== */
// ⚠️ Set this to your live backend URL (see README).
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
      statusEl.textContent = result.error || "Something went wrong. Please try again.";
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

/* ============================================================
   All page content is rendered from CONTENT (see content.js).
   Edit content.js to change text/images — you shouldn't need to
   touch this file for everyday updates.
   ============================================================ */

const esc = (str) => String(str).replace(/[&<>"']/g, (c) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[c]));

/* Small inline icons (stroke style, inherit text colour) */
const ICONS = {
  web: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>',
  game: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M3 7l9 5 9-5"/><line x1="12" y1="12" x2="12" y2="22"/></svg>',
  design: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/></svg>',
  mail: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  phone: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" width="17" height="17"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05C19.9 8 21 10.2 21 13.5V23h-4v-8.3c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.45V23h-4V8z"/></svg>',
  github: '<svg viewBox="0 0 24 24" width="17" height="17"><path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.9-.38 2.88-.39.98.01 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.26 5.68.42.36.78 1.08.78 2.18v3.23c0 .31.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>'
};

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

/* Floating glass cards around the hero photo */
document.getElementById("hero-float-cards").innerHTML = (CONTENT.hero.floatCards || [])
  .slice(0, 3)
  .map((c, i) => `<div class="float-card fc-${i + 1}"><strong>${esc(c.value)}</strong><span>${esc(c.label)}</span></div>`)
  .join("");

document.getElementById("rail-linkedin").href = CONTENT.hero.linkedinUrl;
document.getElementById("rail-github").href = CONTENT.hero.githubUrl;
document.getElementById("rail-email").href = `mailto:${CONTENT.hero.email}`;

document.getElementById("footer-links").innerHTML = `
  <a href="${CONTENT.hero.linkedinUrl}" target="_blank" rel="noopener">LinkedIn</a> &nbsp;|&nbsp;
  <a href="${CONTENT.hero.githubUrl}" target="_blank" rel="noopener">GitHub</a> &nbsp;|&nbsp;
  <a href="mailto:${CONTENT.hero.email}">${esc(CONTENT.hero.email)}</a> &nbsp;|&nbsp;
  ${esc(CONTENT.hero.phoneDisplay)}
`;

/* ===== Tech marquee (built from the skill lists, repeated for a seamless loop) ===== */
const marqueeItems = [...new Set(CONTENT.skillCategories.flatMap((c) => c.items))];
const marqueeHtml = marqueeItems.map((t) => `<span class="marquee-item">${esc(t)}</span>`).join("");
document.getElementById("marquee-track").innerHTML = marqueeHtml + marqueeHtml;

/* ===== Stats ===== */
document.getElementById("stats-title").textContent = CONTENT.statsIntro.title;
document.getElementById("stats-text").textContent = CONTENT.statsIntro.text;

const statsStrip = document.getElementById("stats-strip");
CONTENT.hero.stats.forEach((s) => {
  const div = document.createElement("div");
  div.className = "stat";
  div.innerHTML = `<span class="stat-number" data-target="${s.target}" data-decimals="${s.decimals}">0</span><span class="stat-label">${esc(s.label)}</span>`;
  statsStrip.appendChild(div);
});

/* ===== Summary + services + highlight panel ===== */
document.getElementById("summary-text").textContent = CONTENT.summary;

document.getElementById("services-grid").innerHTML = CONTENT.services.map((s) => `
  <div class="service-card">
    <div class="service-icon">${ICONS[s.icon] || ICONS.web}</div>
    <h3>${esc(s.title)}</h3>
    <p>${esc(s.text)}</p>
  </div>`).join("");

document.getElementById("panel-label").textContent = CONTENT.panel.label;
document.getElementById("panel-title").textContent = CONTENT.panel.title;
document.getElementById("panel-text").textContent = CONTENT.panel.text;
document.getElementById("panel-cta").textContent = CONTENT.panel.cta;

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

/* ===== Contact info list ===== */
const H = CONTENT.hero;
const contactRows = [
  { icon: "mail", label: "Email", value: H.email, href: `mailto:${H.email}` },
  { icon: "phone", label: "Phone", value: H.phoneDisplay, href: H.phoneHref },
  { icon: "pin", label: "Location", value: H.location, href: null },
  { icon: "linkedin", label: "LinkedIn", value: "armin-rafiqin", href: H.linkedinUrl },
  { icon: "github", label: "GitHub", value: "armehh", href: H.githubUrl },
];
document.getElementById("contact-list").innerHTML = contactRows.map((r) => {
  const inner = `
    <span class="contact-icon">${ICONS[r.icon]}</span>
    <span><span class="contact-label">${esc(r.label)}</span><span class="contact-value">${esc(r.value)}</span></span>`;
  return r.href
    ? `<li><a href="${r.href}"${r.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${inner}</a></li>`
    : `<li><div class="contact-row">${inner}</div></li>`;
}).join("");

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
const sectionIds = ["top", "about", "experience", "projects", "skills", "education", "contact"];
const sectionLabels = ["Home", "About", "Experience", "Projects", "Skills", "Education", "Contact"];
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
}, { threshold: 0.3 });
sectionEls.forEach((el) => sectionObserver.observe(el));

/* ===== Scroll reveal ===== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
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

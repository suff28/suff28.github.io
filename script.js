const data = window.PORTFOLIO_DATA;

const header = document.querySelector(".site-header");
const menuButton = document.getElementById("menu-button");
const mobileNav = document.getElementById("mobile-nav");
const roleSelect = document.getElementById("role-select");
const roleMenu = document.getElementById("role-menu");
const heroCopy = document.getElementById("hero-copy");
const projectGrid = document.getElementById("project-grid");
const researchList = document.getElementById("research-list");
const experienceList = document.getElementById("experience-list");
const educationList = document.getElementById("education-list");
const timelineBoard = document.getElementById("timeline-board");
const certificateGrid = document.getElementById("certificate-grid");
const cleancampusCase = document.getElementById("cleancampus-case");
const cleancampusLinks = document.getElementById("cleancampus-links");

const roles = [
  { label: "Data Engineer", copy: data.hero.summary },
];
const timelineItems = [
  { label: "B.Tech, Presidency University", kind: "education", x: 8, w: 48, y: 150 },
  { label: "Data Engineer, Power Tech", kind: "job", x: 58, w: 13, y: 220 },
  { label: "IEEE lung segmentation paper", kind: "research", x: 59, w: 10, y: 285 },
  { label: "MS Applied Data Analytics, BU", kind: "education", x: 72, w: 24, y: 150 },
  { label: "F1 pit stop analysis", kind: "project", x: 73, w: 8, y: 350 },
  { label: "LLMs in reinforcement learning", kind: "research", x: 73, w: 19, y: 412 },
  { label: "CleanCampus research", kind: "job", x: 85, w: 8, y: 285 },
  { label: "Pipeline Health Monitor", kind: "project", x: 86, w: 8, y: 350 },
  { label: "Card fraud platform", kind: "project", x: 89, w: 8, y: 474 },
  { label: "Graduate Teaching Assistant", kind: "job", x: 91, w: 8, y: 220 },
  { label: "Warehouse quality framework", kind: "project", x: 95, w: 5, y: 536 },
];
function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function projectImage(project) {
  if (project.image) {
    return `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.alt || project.title)}">`;
  }

  const label = project.art || project.title.split(" ").slice(0, 3).join(" ");

  return `
    <div class="project-art" aria-hidden="true">
      <span>${escapeHtml(label)}</span>
    </div>
  `;
}

function actionLinks(links = []) {
  if (!links.length) {
    return "";
  }

  return `
    <div class="card-actions">
      ${links
        .map(
          (link) => {
            const isAnchor = String(link.href || "").startsWith("#");
            const attrs = isAnchor ? "" : ' target="_blank" rel="noreferrer"';
            return `<a href="${escapeHtml(link.href)}"${attrs}>${escapeHtml(link.label)} →</a>`;
          }
        )
        .join("")}
    </div>
  `;
}

function renderRoles() {
  roleMenu.innerHTML = roles
    .map(
      (role, index) => `
        <button class="role-option${index === 0 ? " is-active" : ""}" type="button" data-role="${index}" role="option">
          <span>${escapeHtml(role.label)}</span>
          <span aria-hidden="true">${index === 0 ? "✓" : ""}</span>
        </button>
      `
    )
    .join("");
}

function setRole(index) {
  const activeIndex = Number(index);
  const role = roles[activeIndex];
  roleSelect.textContent = role.label;
  heroCopy.textContent = role.copy;

  roleMenu.querySelectorAll(".role-option").forEach((button) => {
    const isActive = Number(button.dataset.role) === activeIndex;
    button.classList.toggle("is-active", isActive);
    button.lastElementChild.textContent = isActive ? "✓" : "";
  });
}

function renderSkills() {
  const skillsGrid = document.getElementById("skills-grid");
  if (!skillsGrid) return;
  skillsGrid.innerHTML = data.skills.map((group) => {
    const items = group.items.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
    return `<article class="skill-group reveal"><h3>${escapeHtml(group.category)}</h3><div class="tag-row">${items}</div></article>`;
  }).join("");
}

function renderProjects() {
  projectGrid.innerHTML = data.projects
    .map(
      (project) => `
        <article class="project-card${project.featured ? " project-card-featured" : ""} reveal" style="--project-accent: ${escapeHtml(project.accent || "#6bf0d2")}">
          <div class="project-image">${projectImage(project)}</div>
          <div class="project-body">
            <p class="eyebrow">${escapeHtml(project.category)}</p>
            <h3>${escapeHtml(project.title)}</h3>
            ${project.meta ? `<p class="case-meta project-meta">${escapeHtml(project.meta)}</p>` : ""}
            <p>${escapeHtml(project.description)}</p>
            ${project.metrics?.length ? `
              <div class="project-metrics" aria-label="Project results">
                ${project.metrics.map((metric) => `
                  <div class="project-metric">
                    <strong>${escapeHtml(metric.value)}</strong>
                    <span>${escapeHtml(metric.label)}</span>
                  </div>
                `).join("")}
              </div>
            ` : ""}
            <div class="tag-row">
              ${project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
            </div>
            ${actionLinks(project.links)}
          </div>
        </article>
      `
    )
    .join("");
}

function renderCleanCampusCase() {
  if (!cleancampusCase || !data.cleancampus) {
    return;
  }

  const item = data.cleancampus;

  cleancampusLinks.innerHTML = actionLinks(item.links);
  cleancampusCase.innerHTML = `
    <div class="case-hero reveal">
      <div class="case-copy">
        <p class="eyebrow">${escapeHtml(item.role)}</p>
        <h3>${escapeHtml(item.title)}</h3>
        <p class="case-meta">${escapeHtml(item.meta)}</p>
        <p>${escapeHtml(item.subtitle)}</p>
        <p>${escapeHtml(item.overview)}</p>
        <div class="tag-row">
          ${item.stack.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
        </div>
      </div>
      <div class="case-preview">
        <img src="${escapeHtml(item.gallery[0].image)}" alt="${escapeHtml(item.gallery[0].title)}">
      </div>
    </div>
    <div class="case-highlights reveal">
      ${item.highlights.map((highlight) => `<p>${escapeHtml(highlight)}</p>`).join("")}
    </div>
    <div class="case-gallery">
      ${item.gallery
        .map(
          (asset, index) => `
            <article class="case-media reveal${index === 0 ? " is-wide" : ""}">
              <a href="${escapeHtml(asset.image)}" target="_blank" rel="noreferrer">
                <img src="${escapeHtml(asset.image)}" alt="${escapeHtml(asset.title)}">
              </a>
              <div>
                <h4>${escapeHtml(asset.title)}</h4>
                <p>${escapeHtml(asset.caption)}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderResearch() {
  researchList.innerHTML = data.research
    .map(
      (item) => `
        <article class="research-card reveal">
          <p class="eyebrow">${escapeHtml(item.org)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p class="row-meta research-date">${escapeHtml(item.meta)}</p>
          <p class="abstract-label">Abstract</p>
          <p>${escapeHtml(item.abstract || item.description)}</p>
          ${actionLinks(item.links)}
        </article>
      `
    )
    .join("");
}

function renderCertificates() {
  certificateGrid.innerHTML = data.certifications
    .map(
      (item) => `
        <a class="certificate-card reveal" href="${escapeHtml(item.href)}" target="_blank" rel="noreferrer">
          <p class="eyebrow">${escapeHtml(item.category)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <span>${escapeHtml(item.issuer)}</span>
        </a>
      `
    )
    .join("");
}

function renderRows(items, container) {
  container.innerHTML = items
    .map((item) => {
      const highlights = item.highlights?.length
        ? `<ul>${item.highlights.map((highlight) => `<li>${escapeHtml(highlight)}</li>`).join("")}</ul>`
        : "";

      return `
        <article class="info-row reveal">
          <div>
            <p class="eyebrow">${escapeHtml(item.org)}</p>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description)}</p>
            ${highlights}
            ${actionLinks(item.links)}
          </div>
          <span class="row-meta">${escapeHtml(item.meta)}</span>
        </article>
      `;
    })
    .join("");
}

function renderTimeline() {
  timelineBoard.innerHTML = `
    <div class="timeline-track">
      <div class="timeline-years">
        ${["2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027"].map((year) => `<span>${year}</span>`).join("")}
      </div>
      <div class="timeline-legend">
        <span class="legend-project">Project</span>
        <span class="legend-job">Job</span>
        <span class="legend-education">Education</span>
        <span class="legend-research">Research</span>
      </div>
      ${timelineItems
        .map(
          (item) =>
            `<div class="timeline-pill ${escapeHtml(item.kind)}" style="--x:${item.x}; --w:${item.w}; --y:${item.y};" title="${escapeHtml(item.label)}">${escapeHtml(item.label)}</div>`
        )
        .join("")}
    </div>
  `;
}

function setInteractions() {
  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 18);
  });

  menuButton.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  roleSelect.addEventListener("click", () => {
    const isOpen = roleMenu.classList.toggle("is-open");
    roleSelect.setAttribute("aria-expanded", String(isOpen));
  });

  roleMenu.addEventListener("click", (event) => {
    const option = event.target.closest(".role-option");
    if (!option) {
      return;
    }
    setRole(option.dataset.role);
    roleMenu.classList.remove("is-open");
    roleSelect.setAttribute("aria-expanded", "false");
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".role-wrap")) {
      roleMenu.classList.remove("is-open");
      roleSelect.setAttribute("aria-expanded", "false");
    }
  });
}

function setRevealMotion() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
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
    { threshold: 0.12 }
  );

  elements.forEach((element) => observer.observe(element));
}

renderRoles();
setRole(0);
renderProjects();
renderSkills();
renderCleanCampusCase();
renderResearch();
renderTimeline();
renderRows(data.experience, experienceList);
renderRows(data.education, educationList);
renderCertificates();
setInteractions();
setRevealMotion();

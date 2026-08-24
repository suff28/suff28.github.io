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

const roles = [
  {
    label: "Data Engineer",
    copy:
      "Data Engineer and BU Applied Data Analytics graduate student focused on ETL pipelines, SQL optimization, AWS, Docker, and practical data systems. I also build applied AI projects, from CleanCampus IoT monitoring to agentic LLM workflows and 3D avatar reconstruction.",
  },
  {
    label: "ML Engineer & Researcher",
    copy:
      "I work on applied ML across medical imaging, reinforcement learning, agentic LLMs, and analytics systems.",
  },
  {
    label: "Data Scientist",
    copy:
      "I use Python, R, SQL, statistics, and machine learning to test ideas and turn analysis into decisions.",
  },
  {
    label: "AI Systems Builder",
    copy:
      "I take ideas past the notebook stage: local agents, Unity prototypes, IoT dashboards, and production-style workflows.",
  },
];

const timelineItems = [
  { label: "B.Tech at Presidency University", kind: "education", x: 9.5, w: 55, y: 150 },
  { label: "Bizzlink full-stack app", kind: "project", x: 57, w: 10, y: 430 },
  { label: "Data Engineer at Power Tech", kind: "job", x: 63, w: 13, y: 220 },
  { label: "IEEE lung segmentation paper", kind: "research", x: 67, w: 8, y: 285 },
  { label: "MS Applied Data Analytics at BU", kind: "education", x: 81, w: 17, y: 150 },
  { label: "Formula 1 pit-stop DBMS", kind: "project", x: 84, w: 10, y: 350 },
  { label: "Spotify analysis in R", kind: "project", x: 84, w: 10, y: 412 },
  { label: "BU Housing StarRez systems", kind: "job", x: 90, w: 8, y: 220 },
  { label: "CleanCampus IoT dashboard", kind: "job", x: 86, w: 9, y: 285 },
  { label: "RL biped robot simulation", kind: "project", x: 89, w: 9, y: 474 },
  { label: "Agentic LLM web QA", kind: "project", x: 89, w: 8, y: 350 },
  { label: "3D avatar reconstruction", kind: "project", x: 89, w: 9, y: 536 },
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

  return `
    <div class="project-art" aria-hidden="true">
      <span>${escapeHtml(project.title.split(" ").slice(0, 3).join(" "))}</span>
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
          (link) =>
            `<a href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)} →</a>`
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

function renderProjects() {
  projectGrid.innerHTML = data.projects
    .map(
      (project) => `
        <article class="project-card reveal">
          <div class="project-image">${projectImage(project)}</div>
          <div class="project-body">
            <p class="eyebrow">${escapeHtml(project.category)}</p>
            <h3>${escapeHtml(project.title)}</h3>
            <p>${escapeHtml(project.description)}</p>
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
renderResearch();
renderTimeline();
renderRows(data.experience, experienceList);
renderRows(data.education, educationList);
renderCertificates();
setInteractions();
setRevealMotion();

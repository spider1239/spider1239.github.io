const uiState = { activeSection: "about", activeWork: "web", menuOpen: false };
const sections = [...document.querySelectorAll("main .section")];
const sectionLinks = [...document.querySelectorAll("[data-section]")];
const pageIndex = document.querySelector("[data-page-index]");
const menuToggle = document.querySelector(".menu-toggle");
const topNavigation = document.querySelector(".top-navigation");

function setActiveSection(sectionId) {
    uiState.activeSection = sectionId;
    sectionLinks.forEach((link) => link.classList.toggle("is-active", link.dataset.section === sectionId));
    const section = document.getElementById(sectionId);
    if (section && pageIndex) pageIndex.textContent = section.dataset.index;
}

function setWorkPanel(workId) {
    uiState.activeWork = workId;
    document.querySelectorAll(".work-tab").forEach((tab) => {
        const selected = tab.dataset.work === workId;
        tab.classList.toggle("is-active", selected);
        tab.setAttribute("aria-selected", String(selected));
    });
    document.querySelectorAll(".work-panel").forEach((panel) => {
        const selected = panel.dataset.panel === workId;
        panel.classList.toggle("is-active", selected);
        panel.hidden = !selected;
    });
}

sectionLinks.forEach((link) => link.addEventListener("click", () => {
    setActiveSection(link.dataset.section);
    if (uiState.menuOpen) menuToggle.click();
}));

document.querySelectorAll(".work-tab").forEach((tab) => tab.addEventListener("click", () => setWorkPanel(tab.dataset.work)));
document.querySelectorAll(".panel-next").forEach((button) => button.addEventListener("click", () => setWorkPanel(button.dataset.next)));

menuToggle.addEventListener("click", () => {
    uiState.menuOpen = !uiState.menuOpen;
    menuToggle.setAttribute("aria-expanded", String(uiState.menuOpen));
    topNavigation.classList.toggle("is-open", uiState.menuOpen);
});

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
    });
}, { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 });
sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

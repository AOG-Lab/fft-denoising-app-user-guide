(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  function closeMobileMenu() {
    if (!navToggle || !navLinks) return;
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navLinks.classList.toggle("open");
      document.body.classList.toggle("no-scroll", !expanded && window.innerWidth < 980);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 980) closeMobileMenu();
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) link.setAttribute("aria-current", "page");
  });

  document.querySelectorAll(".accordion-button").forEach((button) => {
    if (!button.hasAttribute("aria-expanded")) button.setAttribute("aria-expanded", "false");

    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      button.classList.toggle("active", !expanded);

      const panel = button.nextElementSibling;
      if (panel) panel.classList.toggle("open", !expanded);
    });
  });

  const tocLinks = Array.from(document.querySelectorAll(".toc a"));
  const sections = Array.from(document.querySelectorAll("section[id]"));

  function setActiveTocLink() {
    if (!tocLinks.length || !sections.length) return;

    let current = sections[0].id;
    for (const section of sections) {
      const top = section.getBoundingClientRect().top;
      if (top <= 160) current = section.id;
    }

    tocLinks.forEach((link) => {
      const target = link.getAttribute("href") || "";
      link.classList.toggle("active", target === `#${current}`);
    });
  }

  window.addEventListener("scroll", setActiveTocLink, { passive: true });
  window.addEventListener("load", setActiveTocLink);
  setActiveTocLink();
})();

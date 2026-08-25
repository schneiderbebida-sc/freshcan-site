/* ==========================================================================
   FreshCan — render.js
   Renderiza cards de produto a partir de products.js: destaques na home
   e, no cardápio, um accordion com uma seção por categoria.
   ========================================================================== */

function productCardHTML(product) {
  const badge = product.badge ? `<span class="product-badge">${product.badge}</span>` : "";
  const media = product.image
    ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
    : `<div class="product-card-placeholder">${categoryIcon(product.category)}</div>`;
  return `
    <div class="product-card">
      <div class="product-card-media">
        ${badge}
        ${media}
      </div>
      <div class="product-card-body">
        <h4>${product.name}</h4>
        <p>${product.desc}</p>
        <div class="product-card-footer">
          <span class="product-price">${window.FreshCan.formatBRL(product.price)}</span>
          <button class="add-btn" data-add-to-cart="${product.id}" aria-label="Adicionar ${product.name}">+</button>
        </div>
      </div>
    </div>`;
}

function categoryIcon(categoryId) {
  const cat = (window.PRODUCT_CATEGORIES || []).find((c) => c.id === categoryId);
  return cat ? cat.icon : "🫙";
}

/* --- Home: linha de destaques (produtos com badge) --- */
function renderFeatured() {
  const box = document.querySelector("[data-featured-row]");
  if (!box || !window.PRODUCTS) return;
  const featured = window.PRODUCTS.filter((p) => p.badge).slice(0, 8);
  const list = featured.length ? featured : window.PRODUCTS.slice(0, 8);
  box.innerHTML = list.map(productCardHTML).join("");
  window.FreshCan.bindAddButtons(box);
}

/* --- Cardápio: accordion por categoria --- */
function renderMenuAccordion() {
  const wrap = document.querySelector("[data-menu-accordion]");
  if (!wrap || !window.PRODUCTS || !window.PRODUCT_CATEGORIES) return;

  const params = new URLSearchParams(window.location.search);
  const openParam = params.get("categoria");

  const groups = window.PRODUCT_CATEGORIES
    .map((cat) => ({ cat, items: window.PRODUCTS.filter((p) => p.category === cat.id) }))
    .filter((g) => g.items.length);

  wrap.innerHTML = groups
    .map(({ cat, items }, i) => {
      const isOpen = openParam ? openParam === cat.id : i === 0;
      return `
      <div class="menu-section${isOpen ? " is-open" : ""}" data-category-section="${cat.id}">
        <button class="menu-section-head" aria-expanded="${isOpen}">
          <span class="menu-section-title">
            <span class="menu-section-icon">${cat.icon}</span>
            ${cat.label}
            <span class="menu-section-count">${items.length}</span>
          </span>
          <span class="menu-section-chevron">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </span>
        </button>
        <div class="menu-section-body">
          <div class="menu-section-grid">
            ${items.map(productCardHTML).join("")}
          </div>
        </div>
      </div>`;
    })
    .join("");

  window.FreshCan.bindAddButtons(wrap);

  wrap.querySelectorAll(".menu-section-head").forEach((head) => {
    head.addEventListener("click", () => {
      const section = head.closest(".menu-section");
      const isOpen = section.classList.contains("is-open");
      section.classList.toggle("is-open", !isOpen);
      head.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  if (openParam) {
    const target = wrap.querySelector(`[data-category-section="${openParam}"]`);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* --- Cardápio: barra de atalhos que abre e rola até a categoria --- */
function renderMenuJumpLinks() {
  const box = document.querySelector("[data-menu-jumplinks]");
  if (!box || !window.PRODUCT_CATEGORIES) return;

  box.innerHTML = window.PRODUCT_CATEGORIES
    .map((c) => `<button class="filter-chip" data-jump="${c.id}">${c.icon} ${c.label}</button>`)
    .join("");

  box.querySelectorAll("[data-jump]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.jump;
      const section = document.querySelector(`[data-category-section="${id}"]`);
      if (!section) return;
      document.querySelectorAll(".menu-section").forEach((s) => {
        const isTarget = s === section;
        s.classList.toggle("is-open", isTarget || s.classList.contains("is-open"));
      });
      section.classList.add("is-open");
      section.querySelector(".menu-section-head")?.setAttribute("aria-expanded", "true");
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* --- Cardápio: busca — filtra cards dentro de cada seção e abre as que têm resultado --- */
function initMenuSearch() {
  const input = document.querySelector("[data-menu-search]");
  if (!input) return;

  input.addEventListener("input", () => {
    const term = input.value.trim().toLowerCase();
    document.querySelectorAll(".menu-section").forEach((section) => {
      let matches = 0;
      section.querySelectorAll(".product-card").forEach((card) => {
        const text = card.textContent.toLowerCase();
        const hit = !term || text.includes(term);
        card.style.display = hit ? "" : "none";
        if (hit) matches++;
      });
      section.style.display = matches ? "" : "none";
      if (term && matches) {
        section.classList.add("is-open");
        section.querySelector(".menu-section-head")?.setAttribute("aria-expanded", "true");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  renderMenuJumpLinks();
  renderMenuAccordion();
  initMenuSearch();
});

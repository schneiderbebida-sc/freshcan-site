/* ==========================================================================
   FreshCan — script.js
   Comportamentos globais: navegação, menu mobile, revelação ao rolar,
   e o helper de checkout via WhatsApp.
   ========================================================================== */

const WHATSAPP_NUMBER = "5547933860900"; // (47) 93386-0900

/* --- Navegação: some/aparece fundo sólido ao rolar --- */
function initNav() {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  const solidFrom = nav.dataset.solidFrom ? Number(nav.dataset.solidFrom) : 40;

  function onScroll() {
    if (window.scrollY > solidFrom) {
      nav.classList.add("is-solid");
    } else {
      nav.classList.remove("is-solid");
    }
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* --- Menu mobile --- */
function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".mobile-menu");
  const close = document.querySelector(".mobile-menu-close");
  if (!toggle || !menu) return;

  const open = () => { menu.classList.add("is-open"); document.body.style.overflow = "hidden"; };
  const shut = () => { menu.classList.remove("is-open"); document.body.style.overflow = ""; };

  toggle.addEventListener("click", open);
  close?.addEventListener("click", shut);
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", shut));
}

/* --- Revelação suave ao entrar na viewport --- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el) => io.observe(el));
}

/* --- Marca o link ativo do menu conforme a página atual --- */
function markActiveLink() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .mobile-menu a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });
}

/* --- Helper: monta link do WhatsApp com mensagem pronta --- */
function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
window.FreshCan = window.FreshCan || {};
window.FreshCan.buildWhatsAppLink = buildWhatsAppLink;
window.FreshCan.WHATSAPP_NUMBER = WHATSAPP_NUMBER;

/* --- Formatação de preço em BRL --- */
function formatBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
window.FreshCan.formatBRL = formatBRL;

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initMobileMenu();
  initReveal();
  markActiveLink();
});

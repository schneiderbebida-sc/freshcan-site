/* ==========================================================================
   FreshCan — catalogo.js (catálogo geral)
   Página 100% independente do site principal: não lê products.js, não usa
   cart.js/script.js/menu-dynamic.js, não tem navegação nem preço. Dados reais
   vêm de js/catalogo-data.js (fonte única, compartilhada com os catálogos
   segmentados de atletas/escolas/drinks).
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("cat-ano").textContent = new Date().getFullYear();
  renderCatalogoList(CATALOGO, "[data-catalogo-root]");
  initCatalogoReveal();
});

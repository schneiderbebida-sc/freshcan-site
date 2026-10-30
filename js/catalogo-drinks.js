/* ==========================================================================
   FreshCan — catalogo-drinks.js
   Recorte do catálogo geral (js/catalogo-data.js) voltado a bares, baladas,
   eventos e restaurantes: a linha Drinks & Spritz (com álcool) como carro-
   chefe, mais opções sem álcool pra drink menu/mixers e um petisco de bar.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("cat-ano").textContent = new Date().getFullYear();
  const grupos = filtrarCatalogo(["Drinks & Spritz", "Água de Coco", "Sucos", "Castanhas"]);
  renderCatalogoList(grupos, "[data-catalogo-root]");
  initCatalogoReveal();
});

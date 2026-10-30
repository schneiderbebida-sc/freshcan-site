/* ==========================================================================
   FreshCan — catalogo-atletas.js
   Recorte do catálogo geral (js/catalogo-data.js) com só o que faz sentido
   pra rotina de treino: hidratação, proteína e lanches sem açúcar excessivo.
   Fica fora: Drinks & Spritz (álcool), Café Gelado e Sobremesas.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("cat-ano").textContent = new Date().getFullYear();
  const grupos = filtrarCatalogo(["Água de Coco", "Sucos", "Whey Protein", "Iogurtes Gregos", "Castanhas"]);
  renderCatalogoList(grupos, "[data-catalogo-root]");
  initCatalogoReveal();
});

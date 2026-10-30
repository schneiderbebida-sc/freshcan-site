/* ==========================================================================
   FreshCan — catalogo-bomjesus.js
   Recorte do catálogo geral (js/catalogo-data.js) para o Colégio Bom Jesus
   Vivapark (parceiro já cadastrado na assinatura). Fica fora Drinks & Spritz
   (contém álcool — nunca liberado pra esse contexto, mesma regra já usada no
   programa de assinatura) e Whey Protein (produto mais voltado a treino).
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("cat-ano").textContent = new Date().getFullYear();
  const grupos = filtrarCatalogo(["Água de Coco", "Sucos", "Café Gelado", "Iogurtes Gregos", "Sobremesas", "Castanhas"]);
  renderCatalogoList(grupos, "[data-catalogo-root]");
  initCatalogoReveal();
});

/* ==========================================================================
   FreshCan — catalogo.js
   Página 100% independente do site principal: não lê products.js, não usa
   cart.js/script.js/menu-dynamic.js, não tem navegação nem preço. Dados
   abaixo vêm das 34 fichas técnicas da pasta Receitas (ingredientes reais,
   sem medida — só composição) e dos tamanhos informados por categoria.
   Onde existe foto de estúdio real (já usada no catálogo oficial), ela é
   reaproveitada; sem foto, mostra "Foto em produção".
   ========================================================================== */

const CATALOGO = [
  {
    categoria: "Drinks & Spritz",
    itens: [
      { nome: "Limoncello Spritz Fresh", imagem: "images/Limoncello Spritz Fresh.jfif", tamanhos: ["500ml"], ingredientes: ["Espumante brut", "Limoncello", "Água com gás", "Limão siciliano"] },
      { nome: "Aperol Spritz Fresh", imagem: "images/Aperol Spritz Fresh.jfif", tamanhos: ["500ml"], ingredientes: ["Espumante brut", "Aperol", "Água com gás", "Laranja"] },
      { nome: "Hugo Spritz Fresh", imagem: "images/Hugo Spritz Fresh.jfif", tamanhos: ["500ml"], ingredientes: ["Espumante brut", "Licor de flor de sabugueiro", "Água com gás", "Hortelã", "Limão siciliano"] },
      { nome: "Viva Park Spritz", imagem: "images/Vivapark Spritz Fresh.jfif", tamanhos: ["500ml"], ingredientes: ["Espumante brut", "Licor de laranja", "Polpa de maracujá", "Sementes de maracujá", "Mel", "Água com gás", "Alecrim", "Laranja"] },
      { nome: "Caipirinha de Limão Fresh", imagem: "images/Caipirinha de Limao Fresh.jpg", tamanhos: ["330ml", "500ml"], ingredientes: ["Limão tahiti", "Açúcar", "Cachaça ou vodka"] },
    ],
  },
  {
    categoria: "Água de Coco",
    itens: [
      { nome: "Água de Coco", imagem: "images/coconut-fresh.jfif", tamanhos: ["330ml", "500ml"], ingredientes: ["Água de coco natural"] },
      { nome: "Água de Coco sem Pedaço", imagem: "images/Agua de Coco sem Pedaco.png", tamanhos: ["330ml", "500ml"], ingredientes: ["Água de coco natural"] },
    ],
  },
  {
    categoria: "Sucos",
    itens: [
      { nome: "Açaí Fresh", imagem: "images/suco-acai-abacaxi-xaropedeguarana.jpeg", tamanhos: ["330ml", "550ml"], ingredientes: ["Sorvete de açaí", "Água de coco", "Abacaxi", "Xarope de guaraná"] },
      { nome: "Suco de Maracujá com Morango", imagem: "images/suco-morango-maracuja.jfif", tamanhos: ["330ml", "550ml"], ingredientes: ["Água filtrada", "Morango", "Maracujá", "Açúcar"] },
      { nome: "Suco de Morango", imagem: "images/Suco de Morango.jpeg", tamanhos: ["330ml", "550ml"], ingredientes: ["Água filtrada", "Morango", "Açúcar"] },
      { nome: "Suco de Abacaxi", imagem: "images/Suco de Abacaxi.jpeg", tamanhos: ["330ml", "550ml"], ingredientes: ["Abacaxi", "Água filtrada"] },
      { nome: "Suco de Abacaxi com Hortelã", imagem: "images/Suco de Abacaxi com Hortela.jpeg", tamanhos: ["330ml", "550ml"], ingredientes: ["Abacaxi", "Hortelã", "Água filtrada"] },
      { nome: "Suco de Laranja", imagem: "images/Suco de Laranja.jpeg", tamanhos: ["330ml", "550ml"], ingredientes: ["Laranja"] },
      { nome: "Suco de Maracujá", imagem: "images/Suco de Maracuja.jpeg", tamanhos: ["330ml", "550ml"], ingredientes: ["Maracujá", "Água filtrada", "Açúcar"] },
    ],
  },
  {
    categoria: "Café Gelado",
    itens: [
      { nome: "Café, Caramelo e Flor de Laranjeira", imagem: "images/Cafe Caramelo e Flor de Laranjeira.jpeg", tamanhos: ["330ml", "500ml"], ingredientes: ["Café expresso", "Leite", "Caramelo", "Flor de laranjeira"] },
      { nome: "Café Gelado de Caramelo Salgado", imagem: "images/Cafe Gelado de Caramelo Salgado.jpeg", tamanhos: ["330ml", "500ml"], ingredientes: ["Café expresso", "Leite", "Calda de caramelo", "Sal marinho"] },
    ],
  },
  {
    categoria: "Whey Protein",
    itens: [
      { nome: "Whey de Paçoca", imagem: "images/shake-pacoca.jfif", tamanhos: ["330ml", "550ml"], ingredientes: ["Leite", "Whey protein sabor baunilha", "Paçoca"] },
      { nome: "Whey de Baunilha com Banana", imagem: "images/shake-vanilla.jfif", tamanhos: ["330ml", "550ml"], ingredientes: ["Leite", "Whey protein sabor baunilha", "Banana"] },
      { nome: "Whey de Morango", imagem: "images/Whey de Morango.jpeg", tamanhos: ["330ml", "550ml"], ingredientes: ["Leite", "Whey protein sabor morango", "Morango"] },
    ],
  },
  {
    categoria: "Iogurtes Gregos",
    itens: [
      { nome: "Greek Abacaxi Crunch", imagem: "images/iogurte-grego-abacaxi.jfif", tamanhos: ["250ml", "330ml"], ingredientes: ["Iogurte grego natural", "Abacaxi", "Granola"] },
      { nome: "Greek Berry Crunch", imagem: "images/iogurte-grego-morangos.jfif", tamanhos: ["250ml", "330ml"], ingredientes: ["Iogurte grego natural", "Cookies de chocolate", "Granola", "Morango", "Mel"] },
      { nome: "Greek Cookies Crunch", imagem: "images/iogurte-grego-cookies.jfif", tamanhos: ["250ml", "330ml"], ingredientes: ["Iogurte grego natural", "Cookies de chocolate"] },
    ],
  },
  {
    categoria: "Sobremesas",
    itens: [
      { nome: "Creme de Pistache", imagem: "images/creme-pistache.jpg", tamanhos: ["250ml"], ingredientes: ["Biscoito amanteigado", "Creme de pistache", "Chocolate branco", "Creme de leite", "Pistache triturado"] },
      { nome: "Banoffee", imagem: "images/banoffee.jpg", tamanhos: ["250ml"], ingredientes: ["Bolacha maizena", "Manteiga", "Doce de leite", "Creme de leite", "Leite condensado", "Leite em pó", "Banana", "Canela"] },
      { nome: "Tiramisù", imagem: "images/tiramisu.jpg", tamanhos: ["250ml"], ingredientes: ["Creme de mascarpone", "Bolacha champagne", "Café", "Cacau em pó"] },
    ],
  },
  {
    categoria: "Castanhas",
    itens: [
      { nome: "Mix de Castanhas", imagem: "images/mix-castanhas-1.jpg", tamanhos: ["250ml"], ingredientes: ["Castanha-do-pará", "Castanha de caju", "Amendoim defumado", "Nozes", "Amendoim", "Milho", "Uva-passa"] },
    ],
  },
];

function catProductCardHTML(item) {
  const media = item.imagem
    ? `<img src="${item.imagem}" alt="${item.nome}" loading="lazy">`
    : `<div class="cat-placeholder">Foto em produção</div>`;
  const composicao = item.ingredientes.join(", ");
  const tamanho = (item.tamanhos || []).join(" ou ");
  return `
    <div class="cat-card" data-reveal>
      <div class="cat-card-media">${media}</div>
      <div class="cat-card-body">
        <h3>${item.nome}</h3>
        ${tamanho ? `<span class="cat-card-size">${tamanho}</span>` : ""}
        <p class="cat-card-comp"><span>Composição</span>${composicao}.</p>
      </div>
    </div>`;
}

function renderCatalogo() {
  const root = document.querySelector("[data-catalogo-root]");
  if (!root) return;

  root.innerHTML = CATALOGO.map(
    (grupo, i) => `
    <section class="cat-section${i % 2 ? " is-alt" : ""}" id="cat-${i}">
      <div class="cat-container">
        <div class="cat-section-head" data-reveal>
          <span class="cat-section-index">${String(i + 1).padStart(2, "0")}</span>
          <h2>${grupo.categoria}</h2>
        </div>
        <div class="cat-grid">${grupo.itens.map(catProductCardHTML).join("")}</div>
      </div>
    </section>`
  ).join("");
}

function initReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  items.forEach((el) => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("cat-ano").textContent = new Date().getFullYear();
  renderCatalogo();
  initReveal();
});

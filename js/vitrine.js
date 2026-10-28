/* ==========================================================================
   FreshCan — vitrine.js
   Monta o showroom a partir de window.PRODUCTS / window.PRODUCT_CATEGORIES
   (products.js + o que o admin cadastrou, já mesclado por menu-dynamic.js).
   Não duplica cadastro: reaproveita productCardHTML/bindAddButtons de
   render.js e cart.js. Sem dependências novas (sem bibliotecas externas).
   ========================================================================== */

/* O catálogo (products.js) já aponta para fotos de estúdio reais e
   consistentes — fundo preto, pote/lata com a marca gravada. Não há
   necessidade de trocar nenhuma imagem: usamos exatamente o que já está
   cadastrado, para manter a vitrine 100% fiel ao catálogo oficial.

   A pasta "Receitas" do material de apoio tem 34 fichas técnicas internas
   (ingredientes, quantidades e modo de preparo reais de cada produto) — não
   são fotos de vitrine (têm texto operacional impresso), por isso nunca
   foram usadas como imagem aqui. Mas são a fonte real das DESCRIÇÕES
   abaixo (VT_DESC_OVERRIDES) e da lista "em breve" — lidas uma a uma e
   transcritas a partir dos ingredientes/modo de preparo reais de cada
   ficha, nunca inventadas. */

/* Descrição de vitrine por id de produto, escrita a partir da ficha técnica
   real (ingredientes + modo de preparo) — substitui, só na exibição desta
   página, a descrição curta de products.js. Não altera products.js nem a
   mensagem de pedido no WhatsApp (que seguem usando o dado oficial). */
const VT_DESC_OVERRIDES = {
  "drink-limoncello": "Limoncello, espumante brut e água com gás, finalizado com rodelas de limão siciliano — cítrico, elegante e com leve amargor sofisticado.",
  "drink-aperol": "Aperol, espumante brut e água com gás, decorado com fatias de laranja — o clássico italiano, equilibrando doçura e amargor.",
  "drink-hugo": "Licor de flor de sabugueiro, espumante brut e água com gás, com hortelã fresca e limão siciliano — leve, floral e aromático.",
  "drink-vivapark": "Licor de laranja, polpa e sementes de maracujá, mel e espumante brut, finalizado com alecrim — dourado e tropical, o pôr do sol de Porto Belo na lata.",
  "coconut-fresh": "Água de coco 100% natural, envasada na hora — simples e refrescante.",
  "coconut-fresh-500": "Água de coco 100% natural, envasada na hora — simples e refrescante.",
  "suco-morango-maracuja": "Polpas de morango e maracujá batidas com água filtrada — suco natural, feito na hora.",
  "suco-acai-guarana": "Açaí batido com água de coco, abacaxi e um toque de xarope de guaraná — cremoso e energizante.",
  "Whey-pacoca": "Whey protein de baunilha batido com leite e paçoca esfarelada, finalizado com paçoca moída por cima.",
  "whey-banana-baunilha": "Whey protein de baunilha batido com leite e banana congelada — cremoso, sem adição de açúcar.",
  "panqueca-banana-mel-tradicional": "Panqueca americana empilhada com banana fresca fatiada e um fio de mel puro.",
  "panqueca-banana-mel-fit": "Versão fit da panqueca com banana fresca fatiada e um fio de mel puro.",
  "panqueca-morangos-tradicional": "Panqueca americana em camadas de geleia artesanal de frutas vermelhas, finalizada com frutas frescas e açúcar de confeiteiro.",
  "panqueca-morangos-fit": "Versão fit da panqueca em camadas de geleia artesanal de frutas vermelhas, finalizada com frutas frescas.",
  "panqueca-mirtilos-tradicional": "Panqueca americana coberta com iogurte grego, granola crocante, mirtilos frescos e chia.",
  "panqueca-mirtilos-fit": "Versão fit da panqueca coberta com iogurte grego, granola crocante, mirtilos frescos e chia.",
  "iogurte-grego-morangos": "Camadas de iogurte grego natural, cookies de chocolate triturados, granola crocante, morangos frescos e um fio de mel.",
  "iogurte-grego-cookies": "Iogurte grego natural em camadas com cookies de chocolate triturados — simples, cremoso e crocante.",
  "iogurte-grego-abacaxi": "Iogurte grego natural em camadas com abacaxi fresco em cubos e granola — tropical e crocante.",
  "creme-pistache": "Base crocante de biscoito amanteigado, creme de pistache aveludado e ganache de pistache, finalizado com pistache triturado.",
  "banoffee": "Farofa de biscoito amanteigado, creme e mousse de doce de leite, banana fatiada e chantilly, finalizado com canela.",
  "mix-castanhas": "Castanha-do-pará, castanha de caju, amendoim defumado, nozes, amendoim, milho e uva-passa — sem adição de açúcar.",
};

/* Produtos reais (nomes e ingredientes confirmados nas 34 fichas técnicas
   da equipe) que ainda não têm foto de estúdio nem preço/entrada em
   products.js — exibidos sem preço e sem inventar dado, sinalizando a foto
   pendente. "Tiramisù" já tem foto de estúdio pronta (usada na home), mas
   segue sem entrada no catálogo — por isso aparece aqui, com foto e tudo. */
const VT_COMING_SOON = [
  {
    name: "Tiramisù",
    image: "images/tiramisu.jpg",
    desc: "Clássica sobremesa italiana em camadas de creme de mascarpone e bolacha champagne umedecida no café, finalizada com cacau em pó.",
  },
  {
    name: "Café, Caramelo e Flor de Laranjeira",
    image: null,
    desc: "Café expresso com leite e calda de caramelo e flor de laranjeira, servido gelado na lata de 330ml.",
  },
  {
    name: "Café Gelado de Caramelo Salgado",
    image: null,
    desc: "Café expresso batido com leite gelado, calda de caramelo e uma pitada de sal marinho.",
  },
  {
    name: "Caipirinha de Limão Fresh",
    image: null,
    desc: "Limão tahiti macerado com açúcar e cachaça ou vodka (à escolha do cliente), servida na lata de 330ml com gelo.",
  },
  { name: "Marshmallow Tradicional Azul", image: null, desc: "Marshmallow macio sabor baunilha, sem glúten e sem leite." },
  { name: "Marshmallow de Paçoca", image: null, desc: "Marshmallow macio com aroma de paçoca e amendoim — contém amendoim." },
  { name: "Marshmallow de Pipoquinha", image: null, desc: "Marshmallow macio com aroma de manteiga de pipoca, sem glúten e sem leite." },
  { name: "Marshmallow Tradicional Rosa", image: null, desc: "Marshmallow macio sabor baunilha, sem glúten e sem leite." },
  { name: "Panqueca Kids Confete", image: null, desc: "Panqueca com Nutella ou doce de leite, banana ou morango e confetes coloridos." },
  { name: "Panqueca Kids Granulado", image: null, desc: "Panqueca com Nutella ou doce de leite, banana ou morango e granulado colorido." },
  { name: "Whey de Morango", image: null, desc: "Whey protein sabor morango batido com leite e polpa de morango congelada." },
  { name: "Geleia de Frutas Vermelhas", image: null, desc: "Mix de frutas vermelhas cozido com açúcar e suco de limão — geleia artesanal usada nas panquecas." },
  { name: "Suco de Abacaxi", image: null, desc: "Polpa de abacaxi batida com água filtrada e gelo." },
  { name: "Suco de Abacaxi com Hortelã", image: null, desc: "Abacaxi batido com hortelã, água filtrada e gelo." },
  { name: "Suco de Morango", image: null, desc: "Polpa de morango batida com água filtrada e gelo." },
  { name: "Suco de Laranja 330ml", image: null, desc: "Laranja espremida na hora, servida com gelo." },
  { name: "Suco de Laranja 500ml", image: null, desc: "Laranja espremida na hora, servida com gelo." },
  { name: "Suco de Maracujá", image: null, desc: "Polpa de maracujá batida com água filtrada e açúcar." },
];

/* Linha curta por categoria — tom de vitrine, sem alegação técnica/nutricional. */
const VT_CATEGORY_BLURB = {
  drinks: "Spritz autorais, gelados, com cara de final de tarde.",
  vinho: "Taças generosas, servidas bem geladas.",
  sodas: "Sodas italianas artesanais, uma explosão de sabor por vez.",
  isotonicos: "Hidratação com sabor de fruta de verdade.",
  Whey: "Pós-treino cremoso, pronto pra beber.",
  "agua-coco": "Água de coco natural, direto da fonte.",
  suco: "Sucos naturais, sem enrolação.",
  panquecas: "Fresquinhas, na versão tradicional ou fit.",
  iogurtes: "Iogurte grego cremoso, com fruta de verdade por cima.",
  sobremesas: "Doces em camadas, pensados pra serem vistos antes de provados.",
  castanhas: "Seleção de castanhas pra matar a fome com qualidade.",
};

/* A vitrine é uma peça de apresentação visual: só entra produto com foto
   de verdade (nada de ícone genérico repetido lado a lado). Isso também
   filtra, de forma segura, itens que o /api/menu do admin está misturando
   no catálogo público sem foto — alguns nem parecem produto de venda ao
   cliente (ex.: insumo de estoque) e merecem revisão à parte no admin. */
function vtGroupedCategories() {
  return (window.PRODUCT_CATEGORIES || [])
    .map((cat) => ({
      cat,
      items: (window.PRODUCTS || []).filter((p) => p.category === cat.id && p.image),
    }))
    .filter((g) => g.items.length);
}

/* --- Pills de categoria + scroll-spy --- */
function vtRenderCatNav(groups) {
  const box = document.querySelector("[data-vt-catnav-list]");
  if (!box) return;
  box.innerHTML = groups
    .map(({ cat }) => `<a class="vt-pill" href="#cat-${cat.id}" data-vt-pill="${cat.id}">${cat.label}</a>`)
    .join("");
}

function vtInitScrollSpy(groups) {
  const sections = groups
    .map(({ cat }) => document.getElementById(`cat-${cat.id}`))
    .filter(Boolean);
  if (!sections.length) return;

  const pills = document.querySelectorAll("[data-vt-pill]");
  const setActive = (id) => {
    pills.forEach((p) => p.classList.toggle("is-active", p.dataset.vtPill === id));
  };

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.dataset.vtCat);
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach((s) => io.observe(s));
}

/* Descrição exibida: override da ficha técnica real, quando existe, senão
   a descrição curta oficial de products.js. Nunca muta window.PRODUCTS. */
function vtDescFor(product) {
  return VT_DESC_OVERRIDES[product.id] || product.desc;
}

/* --- Destaque: produto(s) com badge (ex.: "Mais vendido") --- */
function vtRenderSpotlight() {
  const box = document.querySelector("[data-vt-spotlight]");
  if (!box) return;
  const featured = (window.PRODUCTS || []).find((p) => p.badge && p.image);
  if (!featured) { box.remove(); return; }

  box.innerHTML = `
    <div class="container">
      <div class="vt-spotlight-card" data-reveal>
        <div class="vt-spotlight-media">
          <img src="${featured.image}" alt="${featured.name}" loading="eager">
        </div>
        <div class="vt-spotlight-body">
          <span class="eyebrow">${featured.badge}</span>
          <h2>${featured.name}</h2>
          <p>${vtDescFor(featured)}</p>
          <div class="vt-spotlight-footer">
            <span class="vt-spotlight-price">${window.FreshCan.formatBRL(featured.price)}</span>
            <button class="btn btn-coral" data-add-to-cart="${featured.id}">Adicionar ao pedido</button>
          </div>
        </div>
      </div>
    </div>`;
  window.FreshCan.bindAddButtons(box);
}

/* --- Seções editoriais, uma por categoria --- */
function vtRenderCategorySections(groups) {
  const main = document.querySelector("[data-vt-sections]");
  if (!main) return;

  main.innerHTML = groups
    .map(({ cat, items }, gi) => {
      const cards = items
        .map((p, i) => {
          const override = VT_DESC_OVERRIDES[p.id];
          const card = productCardHTML(override ? { ...p, desc: override } : p);
          return card.replace(
            '<div class="product-card">',
            `<div class="product-card" data-reveal ${i === 0 ? 'data-featured="true"' : ""}>`
          );
        })
        .join("");

      return `
      <section class="vt-cat-section${gi % 2 ? " is-alt" : ""}" id="cat-${cat.id}" data-vt-cat="${cat.id}">
        <div class="container">
          <div class="vt-cat-head" data-reveal>
            <span class="vt-cat-index">${String(gi + 1).padStart(2, "0")}</span>
            <div class="vt-cat-head-text">
              <h2>${cat.label}</h2>
              <p>${VT_CATEGORY_BLURB[cat.id] || `${items.length} itens no cardápio`}</p>
            </div>
          </div>
          <div class="vt-cat-grid">${cards}</div>
        </div>
      </section>`;
    })
    .join("");

  window.FreshCan.bindAddButtons(main);
}

/* --- Tira "em breve" (fotografados, fora do catálogo oficial ainda) --- */
function vtRenderComingSoon() {
  const box = document.querySelector("[data-vt-soon]");
  if (!box) return;
  box.innerHTML = VT_COMING_SOON
    .map((item) => {
      const media = item.image
        ? `<img src="${item.image}" alt="${item.name}" loading="lazy">`
        : `<div class="vt-soon-placeholder product-card-placeholder">🫙</div>`;
      const tag = item.image ? "Em breve no cardápio" : "Foto em produção";
      return `
      <div class="vt-soon-card">
        <div class="vt-soon-media">${media}</div>
        <span class="vt-soon-tag">${tag}</span>
        <span class="vt-soon-name">${item.name}</span>
        <span class="vt-soon-desc">${item.desc || ""}</span>
      </div>`;
    })
    .join("");
}

/* --- Revelação ao rolar, com GSAP (stagger de grid de verdade) ---
   Guidance: ui-ux-pro-max skill, domain "gsap" — "Stagger List / Standard":
   grid:'auto' infere linhas/colunas do CSS grid pra um efeito de onda natural.
   Com prefers-reduced-motion (ou se o GSAP não carregar), pula a animação e
   só garante que tudo fique visível. */
function vtInitReveal() {
  const revealEls = document.querySelectorAll("[data-reveal]");
  if (!revealEls.length) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced || typeof gsap === "undefined") {
    revealEls.forEach((el) => { el.style.opacity = "1"; });
    return;
  }

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        observer.unobserve(el);
        if (el.classList.contains("vt-cat-grid")) {
          /* fromTo (não from): o CSS já deixa [data-reveal] com opacity:0 como
             estado inicial (evita flash de conteúdo antes do JS rodar). Com
             gsap.from() isso vira um bug sério — o GSAP lê o opacity ATUAL
             (0) como o destino implícito e a animação trava em opacity:0 pra
             sempre. fromTo() define o destino explicitamente. */
          gsap.fromTo(
            el.children,
            { opacity: 0, scale: 0.92, y: 16 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.4,
              stagger: { each: 0.06, from: "start", grid: "auto" },
              ease: "back.out(1.4)",
            }
          );
        } else {
          gsap.fromTo(el, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.3, ease: "power1.out" });
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".vt-cat-grid").forEach((el) => io.observe(el));
  document.querySelectorAll(".vt-cat-head, .vt-spotlight-card").forEach((el) => io.observe(el));
}

/* --- Parallax discreto no mosaico do hero (ignorado com movimento reduzido) --- */
function vtInitHeroParallax() {
  const mosaic = document.querySelector(".vt-hero-mosaic");
  if (!mosaic) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 600);
        mosaic.style.transform = `translateY(${y * 0.08}px)`;
        ticking = false;
      });
    },
    { passive: true }
  );
}

document.addEventListener("DOMContentLoaded", async () => {
  await window.FreshCanMenuReady;

  const groups = vtGroupedCategories();
  vtRenderCatNav(groups);
  vtRenderSpotlight();
  vtRenderCategorySections(groups);
  vtRenderComingSoon();

  vtInitScrollSpy(groups);
  vtInitReveal();
  vtInitHeroParallax();
});

/* ==========================================================================
   FreshCan — Catálogo de produtos
   --------------------------------------------------------------------------
   Edite este arquivo para adicionar, remover ou alterar produtos, preços
   e categorias. O cardápio inteiro (accordion por categoria, busca e
   carrinho) lê estes dados.

   Campos de cada produto:
     id        -> identificador único (não repetir, sem espaços)
     name      -> nome exibido
     category  -> um dos ids em PRODUCT_CATEGORIES abaixo
     price     -> número (use ponto, ex: 24.90)
     desc      -> descrição curta (1 linha) — inclui o volume/unidade
     image     -> caminho do arquivo em /images — deixe null se ainda não
                  tiver foto (o site mostra um ícone no lugar)
     badge     -> (opcional) texto tipo "Novo", "Mais vendido" — ou remova

   Para trocar a ordem das categorias no cardápio, reordene a lista
   PRODUCT_CATEGORIES. Categorias sem produto nenhum não aparecem.

   Atualizado em 25/08/2026 com a nova tabela de preços enviada pelo cliente.
   ========================================================================== */

const PRODUCT_CATEGORIES = [
  { id: "drinks",      label: "Drinks & Spritz",  icon: "" },
  { id: "vinho",       label: "Vinho",             icon: "" },
  { id: "sodas",       label: "Sodas Italianas",   icon: "" },
  { id: "isotonicos",  label: "Isotônicos",        icon: "" },
  { id: "shakes",      label: "Shakes & Frapês",   icon: "" },
  { id: "agua-coco",   label: "Água de Coco",      icon: "" },
  { id: "suco",        label: "Suco",              icon: "" },
  { id: "panquecas",   label: "Panquecas",         icon: "" },
  { id: "iogurtes",    label: "Iogurtes",          icon: "" },
  { id: "sobremesas",  label: "Sobremesas",        icon: "" },
  { id: "castanhas",   label: "Castanhas",         icon: "" },
];

const PRODUCTS = [

  /* ---------------- Drinks & Spritz ---------------- */
  {
    id: "drink-limoncello",
    name: "Limoncello Spritz Fresh",
    category: "drinks",
    price: 39.90,
    desc: "Limoncello, espumante e raspas de limão siciliano — 500ml.",
    image: "images/Limoncello Spritz Fresh.jfif",
  },
  {
    id: "drink-aperol",
    name: "Aperol Spritz Fresh",
    category: "drinks",
    price: 39.90,
    desc: "Aperol, espumante e laranja, servido bem gelado — 500ml.",
    image: "images/Aperol Spritz Fresh.jfif",
    badge: "Mais vendido",
  },
  {
    id: "drink-hugo",
    name: "Hugo Spritz Fresh",
    category: "drinks",
    price: 49.90,
    desc: "Xarope de flor de sabugueiro, espumante e hortelã — 500ml.",
    image: "images/Hugo Spritz Fresh.jfif",
  },
  {
    id: "drink-vivapark",
    name: "Vivapark Spritz Fresh",
    category: "drinks",
    price: 49.90,
    desc: "Blend cítrico da casa com maracujá e alecrim — 500ml.",
    image: "images/Vivapark Spritz Fresh.jfif",
  },
  {
    id: "drink-pina-colada",
    name: "Fresh Piña Colada",
    category: "drinks",
    price: 27.90,
    desc: "Piña colada cremosa, no clima tropical — 500ml.",
    image: "images/Fresh Piña Colada.jfif",
  },

  /* ---------------- Vinho ---------------- */
  {
    id: "vinho-branco",
    name: "Vinho Branco",
    category: "vinho",
    price: 25.90,
    desc: "Taça generosa de vinho branco gelado — 250ml.",
    image: "images/drink-amarelo.jpg",
  },
  {
    id: "vinho-rose",
    name: "Vinho Rosé",
    category: "vinho",
    price: 25.90,
    desc: "Vinho rosé fresco e leve, servido bem gelado — 250ml.",
    image: "images/drink-laranja.jpg",
  },

  /* ---------------- Sodas Italianas ---------------- */
  {
    id: "soda-limao-siciliano",
    name: "Soda Italiana Limão Siciliano",
    category: "sodas",
    price: 29.90,
    desc: "Soda italiana refrescante de limão siciliano — 500ml.",
    image: "images/soda-limao-siciliano.jfif",
  },
  {
    id: "soda-pessego",
    name: "Soda Italiana Pêssego",
    category: "sodas",
    price: 27.90,
    desc: "Soda italiana com xarope de pêssego — 500ml.",
    image: "images/soda-pessego.jfif",
  },
  {
    id: "soda-uva-verde",
    name: "Soda Italiana Uva Verde",
    category: "sodas",
    price: 27.90,
    desc: "Soda italiana com xarope de uva verde — 500ml.",
    image: "images/soda-uva-verde.jfif",
  },
  {
    id: "soda-frutas-vermelhas",
    name: "Soda Frutas Vermelhas",
    category: "sodas",
    price: 29.90,
    desc: "Soda com xarope de frutas vermelhas — 500ml.",
    image: "images/soda-frutas-vermelhas.jfif",
  },

  /* ---------------- Isotônicos ---------------- */
  {
    id: "isotonico-acai",
    name: "Açaí Isotônico Fresh",
    category: "isotonicos",
    price: 25.90,
    desc: "Isotônico natural sabor açaí — 500ml.",
    image: "images/Açaí Isotônico Fresh.jfif",
  },
  {
    id: "isotonico-melancia-gengibre",
    name: "Melancia e Gengibre Isotônico Fresh",
    category: "isotonicos",
    price: 19.90,
    desc: "Isotônico natural de melancia com gengibre — 500ml.",
    image: "images/isotonico-melancia-gengibre.jfif",
  },
  {
    id: "isotonico-maracuja",
    name: "Maracujá Isotônico Fresh",
    category: "isotonicos",
    price: 19.90,
    desc: "Isotônico natural sabor maracujá — 500ml.",
    image: "images/isotonico-maracuja.jfif",
  },

  /* ---------------- Shakes & Frapês ---------------- */
  {
    id: "shake-vanilla",
    name: "Shake Proteico de Vanilla",
    category: "shakes",
    price: 29.90,
    desc: "Shake proteico cremoso sabor vanilla — 500ml.",
    image: "images/shake-vanilla.jfif",
  },
  {
    id: "shake-pacoca",
    name: "Shake Proteico de Paçoca",
    category: "shakes",
    price: 29.90,
    desc: "Shake proteico com sabor de paçoca — 500ml.",
    image: "images/shake-pacoca.jfif",
  },
  {
    id: "shake-banana-cacau",
    name: "Shake de Banana Cacau Fit",
    category: "shakes",
    price: 24.90,
    desc: "Shake fit de banana com cacau — 250ml.",
    image: "images/shake-banana-cacau.jfif",
  },
  {
    id: "mocca-vanilla-frape",
    name: "Mocca Vanilla Frapê",
    category: "shakes",
    price: 24.90,
    desc: "Frapê gelado de café com baunilha — 250ml.",
    image: "images/mocca-vanilla-frape.jfif",
  },

  /* ---------------- Água de Coco ---------------- */
  {
    id: "coconut-fresh",
    name: "Coconut Fresh",
    category: "agua-coco",
    price: 19.90,
    desc: "Água de coco natural e refrescante — 330ml.",
    image: "images/coconut-fresh.jfif",
  },

  /* ---------------- Suco ---------------- */
  {
    id: "suco-morango-maracuja",
    name: "Suco de Morango & Maracujá Fresh",
    category: "suco",
    price: 29.90,
    desc: "Suco natural de morango com maracujá — 500ml.",
    image: "images/suco-morango-maracuja.jfif",
  },
  {
    id: "suco-acai-guarana",
    name: "Suco de Açaí e Guaraná",
    category: "suco",
    price: 29.90,
    desc: "Suco natural de açaí com guaraná — 500ml.",
    image: "images/suco-acai-abacaxi-xaropedeguarana.jpeg",
  },

  /* ---------------- Panquecas ---------------- */
  {
    id: "panqueca-banana-mel-tradicional",
    name: "Panqueca Banana e Mel - Tradicional",
    category: "panquecas",
    price: 25.90,
    desc: "Panquecas com banana e mel — 3 unidades.",
    image: "images/panqueca-banana-mel-tradicional.jfif",
  },
  {
    id: "panqueca-banana-mel-fit",
    name: "Panqueca Banana e Mel - Fit",
    category: "panquecas",
    price: 27.40,
    desc: "Versão fit das panquecas de banana e mel — 3 unidades.",
    image: "images/panqueca-banana-mel-fit.jfif",
  },
  {
    id: "panqueca-morangos-tradicional",
    name: "Panqueca Morangos - Tradicional",
    category: "panquecas",
    price: 35.90,
    desc: "Panquecas cobertas com morangos — 3 unidades.",
    image: "images/panqueca-morangos-tradicional.jfif",
  },
  {
    id: "panqueca-morangos-fit",
    name: "Panqueca Morangos - Fit",
    category: "panquecas",
    price: 37.40,
    desc: "Versão fit das panquecas de morangos — 3 unidades.",
    image: "images/panqueca-morangos-fit.jfif",
  },
  {
    id: "panqueca-mirtilos-tradicional",
    name: "Panqueca Yogurte e Mirtilos - Tradicional",
    category: "panquecas",
    price: 39.90,
    desc: "Panquecas com yogurte e mirtilos — 3 unidades.",
    image: "images/panqueca-mirtilos-tradicional.jfif",
  },
  {
    id: "panqueca-mirtilos-fit",
    name: "Panqueca Yogurte e Mirtilos - Fit",
    category: "panquecas",
    price: 41.40,
    desc: "Versão fit das panquecas de yogurte e mirtilos — 3 unidades.",
    image: "images/panqueca-mirtilos-fit.jfif",
  },

  /* ---------------- Iogurtes ---------------- */
  {
    id: "iogurte-grego-morangos",
    name: "Yogurte Grego com Morangos",
    category: "iogurtes",
    price: 35.90,
    desc: "Iogurte grego cremoso com morangos frescos — 250ml.",
    image: "images/iogurte-grego-morangos.jfif",
  },
  {
    id: "iogurte-grego-cookies",
    name: "Yogurte Grego com Cookies",
    category: "iogurtes",
    price: 25.90,
    desc: "Iogurte grego cremoso com pedaços de cookies — 250ml.",
    image: "images/iogurte-grego-cookies.jfif",
  },
  {
    id: "iogurte-grego-abacaxi",
    name: "Yogurte Grego com Abacaxi",
    category: "iogurtes",
    price: 35.90,
    desc: "Iogurte grego cremoso com abacaxi fresco — 250ml.",
    image: "images/iogurte-grego-abacaxi.jfif",
  },

  /* ---------------- Sobremesas ---------------- */
  {
    id: "creme-pistache",
    name: "Creme de Pistache",
    category: "sobremesas",
    price: 39.90,
    desc: "Camadas cremosas de pistache com base crocante — 250ml.",
    image: "images/creme-pistache.jpg",
  },
  {
    id: "banoffee",
    name: "Banoffee",
    category: "sobremesas",
    price: 29.90,
    desc: "Banana, doce de leite, chantilly e biscoito crocante — 250ml.",
    image: "images/banoffee.jpg",
  },
  {
    id: "tiramisu",
    name: "Tiramisù",
    category: "sobremesas",
    price: 39.90,
    desc: "Camadas de café, mascarpone e cacau, no clássico italiano — 250ml.",
    image: "images/tiramisu.jpg",
    badge: "Mais vendido",
  },

  /* ---------------- Castanhas ---------------- */
  {
    id: "mix-castanhas",
    name: "Mix de Castanhas",
    category: "castanhas",
    price: 29.90,
    desc: "Seleção de castanhas, nozes e frutas secas selecionadas — 250ml.",
    image: "images/mix-castanhas-1.jpg",
  },
];

/* Expõe os dados no escopo global — necessário para que cart.js e
   render.js consigam ler window.PRODUCTS / window.PRODUCT_CATEGORIES.
   (declarações "const" no topo do arquivo não viram propriedades de
   window automaticamente, por isso essa atribuição explícita.) */
window.PRODUCT_CATEGORIES = PRODUCT_CATEGORIES;
window.PRODUCTS = PRODUCTS;

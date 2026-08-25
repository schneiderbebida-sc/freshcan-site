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
     desc      -> descrição curta (1 linha)
     image     -> caminho do arquivo em /images — deixe null se ainda não
                  tiver foto (o site mostra um ícone no lugar)
     badge     -> (opcional) texto tipo "Novo", "Mais vendido" — ou remova

   Para trocar a ordem das categorias no cardápio, reordene a lista
   PRODUCT_CATEGORIES. Categorias sem produto nenhum não aparecem.
   ========================================================================== */

const PRODUCT_CATEGORIES = [
  { id: "suco",       label: "Suco",        icon: "🧃" },
  { id: "whey",       label: "Whey Protein", icon: "🥛" },
  { id: "sobremesas", label: "Sobremesas",  icon: "🍮" },
  { id: "castanhas",  label: "Castanhas",   icon: "🥜" },
  { id: "goloseimas", label: "Goloseimas",  icon: "🍬" },
  { id: "cookies",    label: "Cookies",     icon: "🍪" },
  { id: "iogurtes",   label: "Iogurtes",    icon: "🍓" },
  { id: "drinks",     label: "Drinks",      icon: "🍹" },
  { id: "agua-coco",  label: "Água de Coco com Pedaços de Coco", icon: "🥥" },
  { id: "frutas-secas", label: "Frutas Secas", icon: "🍇" },
  { id: "vinho",      label: "Vinho",       icon: "🍷" },
];

const PRODUCTS = [

  /* ---------------- Suco ---------------- */
  {
    id: "suco-laranja",
    name: "Suco de Laranja Natural",
    category: "suco",
    price: 15.00,
    desc: "Laranja espremida na hora, sem adição de açúcar.",
    image: null,
  },
  {
    id: "suco-detox",
    name: "Suco Verde Detox",
    category: "suco",
    price: 16.90,
    desc: "Couve, limão, gengibre e maçã verde.",
    image: null,
  },
  {
    id: "suco-frutas-vermelhas",
    name: "Suco de Frutas Vermelhas",
    category: "suco",
    price: 16.90,
    desc: "Morango, amora e framboesa batidos na hora.",
    image: null,
  },

  /* ---------------- Whey Protein ---------------- */
  {
    id: "whey-chocolate",
    name: "Vitamina Whey Chocolate",
    category: "whey",
    price: 21.90,
    desc: "Whey protein, banana, leite e cacau, sem lactose adicionada.",
    image: null,
  },
  {
    id: "whey-morango",
    name: "Vitamina Whey Morango",
    category: "whey",
    price: 21.90,
    desc: "Whey protein batido com morango fresco e leite.",
    image: null,
  },
  {
    id: "whey-baunilha",
    name: "Vitamina Whey Baunilha",
    category: "whey",
    price: 21.90,
    desc: "Whey protein sabor baunilha com toque de canela.",
    image: null,
  },

  /* ---------------- Sobremesas ---------------- */
  {
    id: "tiramisu",
    name: "Tiramisù no Pote",
    category: "sobremesas",
    price: 26.90,
    desc: "Camadas de café, mascarpone e cacau, no clássico italiano.",
    image: "images/tiramisu.jpg",
    badge: "Mais vendido",
  },
  {
    id: "banoffee",
    name: "Banoffee no Pote",
    category: "sobremesas",
    price: 26.90,
    desc: "Banana, doce de leite, chantilly e biscoito crocante.",
    image: "images/banoffee.jpg",
  },
  {
    id: "creme-pistache",
    name: "Creme de Pistache",
    category: "sobremesas",
    price: 27.90,
    desc: "Camadas cremosas de pistache com base crocante.",
    image: null,
  },

  /* ---------------- Castanhas ---------------- */
  {
    id: "castanha-caju",
    name: "Castanha de Caju Torrada",
    category: "castanhas",
    price: 24.90,
    desc: "Castanhas de caju torradas e levemente salgadas.",
    image: "images/castanha-caju-1.jpg",
  },
  {
    id: "castanha-caju-lata",
    name: "Castanha de Caju — Pote Alto",
    category: "castanhas",
    price: 24.90,
    desc: "A mesma castanha de caju torrada, no formato pote alto.",
    image: "images/castanha-caju-2.jpg",
  },
  {
    id: "mix-castanhas",
    name: "Mix de Castanhas Premium",
    category: "castanhas",
    price: 26.90,
    desc: "Seleção de castanhas, nozes e frutas secas selecionadas.",
    image: "images/mix-castanhas-1.jpg",
  },
  {
    id: "mix-castanhas-lata",
    name: "Mix de Castanhas — Pote Alto",
    category: "castanhas",
    price: 26.90,
    desc: "O mesmo mix premium de castanhas, no formato pote alto.",
    image: "images/mix-castanhas-2.jpg",
  },
  {
    id: "chocolate-amendoa",
    name: "Amêndoas com Chocolate",
    category: "castanhas",
    price: 22.90,
    desc: "Amêndoas crocantes envoltas em chocolate ao leite cremoso.",
    image: "images/chocolate-amendoa.jpg",
  },

  /* ---------------- Goloseimas ---------------- */
  {
    id: "jelly-beans",
    name: "Jelly Beans Sortidos",
    category: "goloseimas",
    price: 15.90,
    desc: "Balinhas coloridas de goma em sabores variados de fruta.",
    image: "images/jelly-beans.jpg",
  },
  {
    id: "goma-amarela",
    name: "Gomas de Abacaxi",
    category: "goloseimas",
    price: 13.90,
    desc: "Balas de goma açucaradas sabor abacaxi.",
    image: "images/goma-amarela.jpg",
  },
  {
    id: "minhocas",
    name: "Minhocas de Goma",
    category: "goloseimas",
    price: 13.90,
    desc: "Clássicas minhocas de goma em várias cores e sabores.",
    image: "images/minhoca-goma.jpg",
  },
  {
    id: "jujuba-morango-melancia",
    name: "Jujuba Morango & Melancia",
    category: "goloseimas",
    price: 14.90,
    desc: "Mix de jujubas sabor morango e melancia cobertas de açúcar.",
    image: "images/jujuba-morango-melancia.jpg",
  },

  /* ---------------- Cookies ---------------- */
  {
    id: "cookies-palla",
    name: "Cookies & Palla Italiana",
    category: "cookies",
    price: 21.90,
    desc: "Cookies amanteigados e palla italiana, feitos na casa.",
    image: "images/brownie.jpg",
    badge: "Novo",
  },
  {
    id: "brownie",
    name: "Brownie em Cubos",
    category: "cookies",
    price: 19.90,
    desc: "Brownie de chocolate cortado em cubos, macio por dentro.",
    image: "images/brownie.jpg",
  },

  /* ---------------- Iogurtes ---------------- */
  {
    id: "iogurte-grego",
    name: "Iogurte Grego com Granola",
    category: "iogurtes",
    price: 22.90,
    desc: "Iogurte grego cremoso com granola crocante e frutas.",
    image: "images/parfait-morango.jpg",
  },
  {
    id: "parfait-morango",
    name: "Parfait de Morango",
    category: "iogurtes",
    price: 24.90,
    desc: "Iogurte grego, granola e morangos frescos em camadas.",
    image: "images/parfait-morango.jpg",
  },

  /* ---------------- Drinks ---------------- */
  {
    id: "drink-aperol",
    name: "Aperol Spritz",
    category: "drinks",
    price: 28.90,
    desc: "Aperol, espumante e laranja, servido bem gelado no nosso pote.",
    image: "images/drink-aperol.jpg",
    badge: "Mais vendido",
  },
  {
    id: "drink-hugo",
    name: "Hugo Spritz",
    category: "drinks",
    price: 27.90,
    desc: "Xarope de flor de sabugueiro, espumante e folhas de hortelã.",
    image: "images/drink-amarelo.jpg",
  },
  {
    id: "drink-limoncello",
    name: "Limoncello Spritz",
    category: "drinks",
    price: 27.90,
    desc: "Limoncello, espumante e raspas de limão siciliano.",
    image: "images/drink-amarelo.jpg",
  },
  {
    id: "drink-vivapark",
    name: "Vivapark Spritz",
    category: "drinks",
    price: 26.90,
    desc: "Blend cítrico da casa com toque de maracujá e alecrim.",
    image: "images/drink-laranja.jpg",
  },

  /* ---------------- Água de Coco com Pedaços de Coco ---------------- */
  {
    id: "agua-coco",
    name: "Água de Coco Natural com Pedaços",
    category: "agua-coco",
    price: 16.90,
    desc: "Água de coco 100% natural com pedaços de coco fresco.",
    image: null,
  },
  {
    id: "agua-coco-gelada",
    name: "Água de Coco Gelada com Pedaços",
    category: "agua-coco",
    price: 16.90,
    desc: "Servida bem gelada, com bastante pedaço de coco.",
    image: null,
  },

  /* ---------------- Frutas Secas ---------------- */
  {
    id: "frutas-secas",
    name: "Frutas Secas Sortidas",
    category: "frutas-secas",
    price: 21.90,
    desc: "Seleção de frutas secas doces e nutritivas.",
    image: "images/frutas-secas.jpg",
  },
  {
    id: "verduras-secas",
    name: "Vegetais Desidratados",
    category: "frutas-secas",
    price: 19.90,
    desc: "Chips crocantes de vegetais desidratados, sem fritura.",
    image: "images/frutas-secas.jpg",
  },

  /* ---------------- Vinho ---------------- */
  {
    id: "vinho-branco",
    name: "Vinho Branco 250ml",
    category: "vinho",
    price: 32.90,
    desc: "Taça generosa de vinho branco gelado, pronta para brindar.",
    image: null,
  },
  {
    id: "vinho-rose",
    name: "Vinho Rosé 250ml",
    category: "vinho",
    price: 32.90,
    desc: "Vinho rosé fresco e leve, servido bem gelado.",
    image: null,
  },
];

/* Expõe os dados no escopo global — necessário para que cart.js e
   render.js consigam ler window.PRODUCTS / window.PRODUCT_CATEGORIES.
   (declarações "const" no topo do arquivo não viram propriedades de
   window automaticamente, por isso essa atribuição explícita.) */
window.PRODUCT_CATEGORIES = PRODUCT_CATEGORIES;
window.PRODUCTS = PRODUCTS;

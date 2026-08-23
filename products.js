// ============================================================
// LISTA DE PRODUTOS DA FRESHCAN
// ============================================================
// Para editar um produto: mude o texto entre aspas.
//   name  -> nome do produto
//   desc  -> descrição curta (aparece no cardápio)
//   price -> preço, no formato "R$ 00,00"
//   cat   -> categoria (não mude, controla o filtro do cardápio)
//   img   -> caminho da foto dentro da pasta /images
//
// Para ADICIONAR um produto novo: copie um bloco { ... } inteiro,
// cole no final da lista (antes do ']'), dê um novo id único,
// e coloque a foto correspondente dentro da pasta /images.
//
// Para REMOVER um produto: apague o bloco { ... } inteiro dele.
//
// Depois de editar, salve o arquivo e suba de novo para o GitHub.
// ============================================================

const PRODUCTS = [
  {
    id: 1,
    cat: 'castanhas',
    name: "Castanha de Caju Torrada",
    desc: "Castanhas de caju torradas, crocantes e selecionadas.",
    price: "R$ 16,90",
    img: 'images/castanha-caju.jpg'
  },
  {
    id: 2,
    cat: 'castanhas',
    name: "Amêndoas Torradas",
    desc: "Amêndoas torradas no ponto, sabor intenso e crocância.",
    price: "R$ 15,90",
    img: 'images/amendoas-torradas.jpg'
  },
  {
    id: 3,
    cat: 'castanhas',
    name: "Mix de Castanhas",
    desc: "Seleção de castanhas, nozes e frutas secas.",
    price: "R$ 18,50",
    img: 'images/mix-castanhas.jpg'
  },
  {
    id: 4,
    cat: 'castanhas',
    name: "Trail Mix FreshCan",
    desc: "O mesmo mix campeão, agora na lata transparente.",
    price: "R$ 18,50",
    img: 'images/mix-castanhas-lata.jpg'
  },
  {
    id: 5,
    cat: 'castanhas',
    name: "Amêndoas ao Chocolate",
    desc: "Amêndoas envolvidas em chocolate cremoso.",
    price: "R$ 17,90",
    img: 'images/amendoas-chocolate.jpg'
  },
  {
    id: 6,
    cat: 'castanhas',
    name: "Castanha de Caju Premium",
    desc: "Castanha de caju selecionada, na lata FreshCan.",
    price: "R$ 16,90",
    img: 'images/castanha-caju-lata.jpg'
  },
  {
    id: 7,
    cat: 'goloseimas',
    name: "Jujubas Coloridas",
    desc: "Goma macia e colorida, festa de sabores de fruta.",
    price: "R$ 12,90",
    img: 'images/jujubas.jpg'
  },
  {
    id: 8,
    cat: 'goloseimas',
    name: "Minhocas de Goma",
    desc: "A clássica goma em formato de minhoquinha.",
    price: "R$ 11,90",
    img: 'images/minhocas-goma.jpg'
  },
  {
    id: 9,
    cat: 'goloseimas',
    name: "Ácidas Cereja & Melancia",
    desc: "Goma açucarada com toque ácido de cereja e melancia.",
    price: "R$ 12,90",
    img: 'images/acidas-cereja.jpg'
  },
  {
    id: 10,
    cat: 'goloseimas',
    name: "Bananinhas de Goma",
    desc: "Goma macia e docinha com sabor de banana.",
    price: "R$ 11,50",
    img: 'images/bananinhas-goma.jpg'
  },
  {
    id: 11,
    cat: 'cookies',
    name: "Brownie em Cubos",
    desc: "Cubos de brownie amanteigado, intenso e macio.",
    price: "R$ 15,90",
    img: 'images/brownie-cubos.jpg'
  },
  {
    id: 12,
    cat: 'iogurt',
    name: "Parfait de Morango & Granola",
    desc: "Camadas de iogurt grego, morango fresco e granola.",
    price: "R$ 16,90",
    img: 'images/parfait-morango.jpg'
  },
  {
    id: 13,
    cat: 'sobremesas',
    name: "Tiramisù",
    desc: "Camadas de café, mascarpone e cacau, no ponto certo.",
    price: "R$ 17,90",
    img: 'images/tiramisu.jpg'
  },
  {
    id: 14,
    cat: 'sobremesas',
    name: "Banoffee",
    desc: "Banana, doce de leite e chantilly em camadas.",
    price: "R$ 16,90",
    img: 'images/banoffee.jpg'
  },
  {
    id: 15,
    cat: 'sobremesas',
    name: "Creme de Pistache",
    desc: "Creme aveludado de pistache com base crocante.",
    price: "R$ 18,90",
    img: 'images/creme-pistache.jpg'
  },
  {
    id: 16,
    cat: 'drinks',
    name: "Aperol Spritz",
    desc: "O clássico spritz italiano, laranja e refrescante.",
    price: "R$ 19,90",
    img: 'images/aperol-spritz.jpg'
  },
  {
    id: 17,
    cat: 'drinks',
    name: "Limoncello Spritz",
    desc: "Limoncello com toque espumante, puro frescor cítrico.",
    price: "R$ 19,90",
    img: 'images/limoncello-spritz.jpg'
  },
  {
    id: 18,
    cat: 'frutassecas',
    name: "Mix de Frutas Secas",
    desc: "Frutas e vegetais desidratados, doce natural e crocância.",
    price: "R$ 14,90",
    img: 'images/frutas-secas.jpg'
  },
  {
    id: 19,
    cat: 'aguacoco',
    name: "Água de Coco com Pedaços",
    desc: "Água de coco natural, gelada, com pedacinhos de coco.",
    price: "R$ 10,90",
    img: 'images/agua-coco.jpg'
  },
  {
    id: 20,
    cat: 'vinho',
    name: "Vinho Rosé 250ml",
    desc: "Vinho rosé leve e frutado, na medida certa.",
    price: "R$ 22,90",
    img: 'images/vinho-rose.jpg'
  },
  {
    id: 21,
    cat: 'vinho',
    name: "Vinho Branco 250ml",
    desc: "Vinho branco fresco e aromático, porção individual.",
    price: "R$ 22,90",
    img: 'images/vinho-branco.jpg'
  },
];

// IDs dos produtos que aparecem na vitrine "Destaques da semana" (Início)
// Os dois primeiros da lista ganham a etiqueta "Mais vendido".
const HIGHLIGHT_IDS = [1, 7, 13, 16, 12, 19];
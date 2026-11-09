export interface Recipe {
  id: string;
  name: string;
  image: string;
  minutes: number;
  rating: number;
  servings: number;
  description: string;
  ingredients: string[];
  machines: string[];
  steps: string[];
}
export const CATEGORIES = [
  {
    id: "vegetais",
    name: "Vegetais e Legumes",
    emoji: "🥬",
    items: [
      "Tomate",
      "Alface",
      "Cebola",
      "Alho",
      "Pepino",
      "Cenoura",
      "Batata",
      "Manjericão",
    ],
  },
  {
    id: "carnes",
    name: "Carnes",
    emoji: "🥩",
    items: ["Carne moída", "Frango", "Presunto", "Bacon"],
  },
  {
    id: "laticinios",
    name: "Laticínios",
    emoji: "🥛",
    items: [
      "Leite",
      "Ovo",
      "Queijo",
      "Manteiga",
      "Creme de leite",
      "Leite condensado",
      "Sorvete",
    ],
  },
  {
    id: "graos",
    name: "Grãos e Cereais",
    emoji: "🌾",
    items: ["Arroz", "Polvilho", "Farinha de trigo", "Milho"],
  },
  {
    id: "frutas",
    name: "Frutas",
    emoji: "🍎",
    items: [
      "Maçã",
      "Morango",
      "Banana",
      "Limão",
      "Laranja",
      "Manga",
      "Abacaxi",
      "Maracujá",
    ],
  },
  {
    id: "temperos",
    name: "Temperos",
    emoji: "🧂",
    items: ["Sal", "Pimenta", "Azeite", "Óleo", "Açúcar", "Chocolate em pó"],
  },
  {
    id: "enlatados",
    name: "Enlatados",
    emoji: "🥫",
    items: ["Molho de tomate", "Ervilha", "Atum"],
  },
  {
    id: "massas",
    name: "Massas e pães",
    emoji: "🍞",
    items: ["Macarrão", "Pão de hambúrguer", "Pão"],
  },
];
export const MACHINES = [
  { id: "fogao", name: "Fogão", emoji: "🔥" },
  { id: "microondas", name: "Micro-ondas", emoji: "📟" },
  { id: "airfryer", name: "Airfryer", emoji: "🍟" },
  { id: "panela", name: "Panela Elétrica", emoji: "🍲" },
  { id: "geladeira", name: "Geladeira", emoji: "🧊" },
  { id: "liquidificador", name: "Liquidificador", emoji: "🥤" },
  { id: "forno", name: "Forno Elétrico", emoji: "♨️" },
  { id: "churrasqueira", name: "Churrasqueira", emoji: "🍖" },
];
export const RECIPES: Recipe[] = [
  {
    id: "omelete-tomate",
    name: "Omelete com Tomate",
    image: "omelete.jpg",
    minutes: 15,
    rating: 4.5,
    servings: 2,
    description: "Rápida, leve e perfeita pro café da manhã.",
    ingredients: ["Ovo", "Tomate", "Sal", "Azeite"],
    machines: ["fogao"],
    steps: [
      "Bata os ovos com sal.",
      "Aqueça o azeite na frigideira.",
      "Despeje os ovos e distribua o tomate fatiado.",
      "Dobre e sirva.",
    ],
  },
  {
    id: "arroz-de-forno",
    name: "Arroz de Forno",
    image: "arrozdeforno.jpg",
    minutes: 30,
    rating: 4.2,
    servings: 4,
    description: "Aproveite o arroz de ontem num prato gratinado.",
    ingredients: ["Arroz", "Queijo", "Presunto", "Milho", "Creme de leite"],
    machines: ["forno", "airfryer"],
    steps: [
      "Misture o arroz com creme de leite, presunto e milho.",
      "Coloque num refratário e cubra com queijo.",
      "Leve ao forno a 200°C por 20 min.",
    ],
  },
  {
    id: "macarronada",
    name: "Macarronada",
    image: "macarronada.jpg",
    minutes: 25,
    rating: 4.4,
    servings: 3,
    description: "Clássico de domingo com molho de tomate e manjericão.",
    ingredients: [
      "Macarrão",
      "Molho de tomate",
      "Alho",
      "Azeite",
      "Sal",
      "Manjericão",
    ],
    machines: ["fogao", "panela"],
    steps: [
      "Cozinhe o macarrão em água com sal.",
      "Doure o alho no azeite e junte o molho.",
      "Misture o macarrão e finalize com manjericão.",
    ],
  },
  {
    id: "pao-de-queijo",
    name: "Pão de Queijo",
    image: "paodequeijo.jpg",
    minutes: 40,
    rating: 4.6,
    servings: 6,
    description: "Mineirinho, crocante por fora e macio por dentro.",
    ingredients: ["Polvilho", "Queijo", "Ovo", "Leite", "Óleo", "Sal"],
    machines: ["forno", "airfryer"],
    steps: [
      "Ferva leite, óleo e sal e escalde o polvilho.",
      "Junte ovos e queijo e sove.",
      "Modele bolinhas e asse a 180°C por 25 min.",
    ],
  },
  {
    id: "brigadeiro",
    name: "Brigadeiro",
    image: "brigadeiro.jpg",
    minutes: 20,
    rating: 4.9,
    servings: 20,
    description: "O docinho mais amado das festas.",
    ingredients: ["Leite condensado", "Chocolate em pó", "Manteiga"],
    machines: ["fogao", "microondas"],
    steps: [
      "Misture tudo na panela.",
      "Mexa em fogo baixo até desgrudar do fundo.",
      "Espere esfriar e enrole.",
    ],
  },
  {
    id: "hamburguer",
    name: "Hambúrguer Caseiro",
    image: "hamburguer.jpg",
    minutes: 25,
    rating: 4.8,
    servings: 2,
    description: "Suculento, com queijo derretido e salada.",
    ingredients: [
      "Carne moída",
      "Pão de hambúrguer",
      "Queijo",
      "Alface",
      "Tomate",
      "Sal",
      "Pimenta",
    ],
    machines: ["fogao", "churrasqueira", "airfryer"],
    steps: [
      "Tempere a carne e modele os discos.",
      "Grelhe 4 min de cada lado e cubra com queijo.",
      "Monte com alface e tomate.",
    ],
  },
  {
    id: "salada",
    name: "Salada Fresca",
    image: "salada.jpg",
    minutes: 10,
    rating: 4.1,
    servings: 2,
    description: "Crocante e colorida, sem precisar ligar nada.",
    ingredients: ["Alface", "Tomate", "Pepino", "Cebola", "Azeite", "Sal"],
    machines: [],
    steps: [
      "Lave e corte os vegetais.",
      "Tempere com azeite e sal.",
      "Sirva gelada.",
    ],
  },
  {
    id: "milkshake",
    name: "Milkshake de Morango",
    image: "milkshake.jpg",
    minutes: 5,
    rating: 4.7,
    servings: 2,
    description: "Cremoso, gelado e pronto em minutos.",
    ingredients: ["Sorvete", "Leite", "Morango"],
    machines: ["liquidificador"],
    steps: ["Bata tudo no liquidificador.", "Sirva num copo gelado."],
  },
];
export function matchRecipe(
  r: Recipe,
  ingredients: string[],
  machines: string[],
) {
  const missing = r.ingredients.filter((i) => !ingredients.includes(i));
  const hasMachine =
    !r.machines.length || r.machines.some((m) => machines.includes(m));
  return {
    recipe: r,
    missing,
    hasMachine,
    status:
      hasMachine && !missing.length
        ? "pode"
        : hasMachine && missing.length <= 2
          ? "quase"
          : "longe",
  };
}

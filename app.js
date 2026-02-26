/* ========================================
   Mi Dieta — App Logic + Recetas
   ======================================== */

// ---- 167 Alimentos (corregidos) ----
const FOODS=[
{n:"+ Proteina",q:"120",k:68,c:7,p:10,g:0,u:"u"},
{n:"+ Proteína Yogurt",q:"100 g",k:55,c:3,p:10,g:0,u:"g"},
{n:"12 Cereales",q:"1",k:108,c:16,p:4.3,g:2.3,u:"u"},
{n:"Aguacate",q:"100",k:160,c:8.5,p:2,g:15,u:"g"},
{n:"Alas de Pollo",q:"100",k:170,c:0,p:14.29,g:12.5,u:"g"},
{n:"Albondigas",q:"30",k:59.1,c:2.4,p:6.3,g:2.7,u:"u"},
{n:"Arándanos",q:"100",k:57,c:14.5,p:0.74,g:0.33,u:"g"},
{n:"Arepa",q:"100",k:219,c:37,p:5,g:5,u:"g"},
{n:"Arroz",q:"100",k:129,c:27.9,p:2.66,g:0.25,u:"g"},
{n:"Atun Girasol (52g)",q:"100",k:155,c:0,p:25,g:5.9,u:"g"},
{n:"Atún Natural (56g)",q:"100",k:90,c:0,p:20,g:0.6,u:"g"},
{n:"Auchan Protein+",q:"100",k:69,c:5.4,p:11,g:0.5,u:"g"},
{n:"Avena",q:"100",k:370,c:59.8,p:11.7,g:7.1,u:"g"},
{n:"Azucar",q:"100 g",k:400,c:100,p:0,g:0,u:"g"},
{n:"Bacalao",q:"100 g",k:74,c:0,p:17.7,g:0.4,u:"g"},
{n:"Bacon Loncha",q:"100",k:386,c:1.4,p:14,g:36,u:"g"},
{n:"Banana",q:"1",k:134,c:34.26,p:1.64,g:0.5,u:"u"},
{n:"BCDOG Five Guys",q:"1",k:549,c:36.1,p:26,g:31,u:"u"},
{n:"Bimbo 0% (25g)",q:"100",k:252,c:45,p:9.8,g:2.7,u:"g"},
{n:"Bimbo Artesano",q:"1",k:97,c:18,p:0.3,g:1,u:"u"},
{n:"Bimbo Maxi Hot Dog",q:"1",k:205,c:38,p:6.5,g:2.4,u:"u"},
{n:"Biscuit Mercadona",q:"1",k:369,c:37.8,p:4.5,g:21.6,u:"u"},
{n:"Bistec",q:"100",k:172,c:0,p:24,g:8,u:"g"},
{n:"Bistec (graso)",q:"100 g",k:252,c:0,p:27.29,g:15,u:"g"},
{n:"Bizcocho de Limon",q:"100 g",k:390,c:50,p:6,g:18,u:"g"},
{n:"Brocheta de Pollo",q:"100",k:102,c:0,p:16.7,g:3.7,u:"g"},
{n:"Brocoli",q:"100",k:34,c:7,p:2.8,g:0.4,u:"g"},
{n:"Buffet",q:"1",k:1000,c:30,p:50,g:30,u:"u"},
{n:"Burrito",q:"1",k:1179,c:116,p:61.12,g:11.53,u:"u"},
{n:"Cacahuete Desgrasado",q:"100",k:400,c:18,p:48.9,g:12,u:"g"},
{n:"Capuccino",q:"1",k:86,c:8.4,p:3.9,g:3.9,u:"u"},
{n:"Caraotas",q:"100 g",k:132,c:30,p:9,g:0.4,u:"g"},
{n:"Carne de cerdo",q:"75",k:169,c:0,p:18.9,g:9.8,u:"u"},
{n:"Carne de vacuno",q:"100",k:250,c:0,p:26,g:15,u:"g"},
{n:"Carne molida",q:"100",k:241,c:0,p:24,g:15,u:"g"},
{n:"CDOG Five Guys",q:"1",k:471,c:36.1,p:20,g:26,u:"u"},
{n:"Cerdo - Filete de Lomo Marinado",q:"100",k:126,c:0,p:21,g:4,u:"g"},
{n:"Cesar",q:"1",k:310,c:19.5,p:35.5,g:10,u:"u"},
{n:"Chococino",q:"1",k:123,c:15.6,p:4.2,g:4.3,u:"u"},
{n:"Chorizo",q:"100",k:455,c:1.9,p:24,g:38,u:"g"},
{n:"Chuleta de Cerdo",q:"100",k:231,c:0,p:24,g:14,u:"g"},
{n:"Chuleta Sajonia",q:"150 gr",k:360,c:0,p:30,g:27,u:"u"},
{n:"Chuleta Sajonia (naranja)",q:"100",k:275,c:5.9,p:20,g:19,u:"g"},
{n:"Churros",q:"100 g",k:360,c:40,p:5,g:18,u:"g"},
{n:"Clara de Huevo",q:"100",k:52,c:0.7,p:11,g:0.2,u:"g"},
{n:"Coca Cola 0%",q:"100",k:0,c:0,p:0,g:0,u:"g"},
{n:"Cocosette",q:"1",k:240,c:34,p:0,g:12,u:"u"},
{n:"Corn Flakes",q:"100",k:357,c:84,p:8,g:0.4,u:"g"},
{n:"Cotufas",q:"100 g",k:452,c:68,p:9.1,g:17,u:"g"},
{n:"Croissant",q:"100",k:400,c:47,p:8.5,g:19,u:"g"},
{n:"Cuscús",q:"100",k:112,c:23,p:3.8,g:0.2,u:"g"},
{n:"Doritos",q:"100 g",k:480,c:61,p:6.8,g:22,u:"g"},
{n:"Dulce de Leche",q:"2 cucharadas",k:120,c:22,p:3,g:2,u:"u"},
{n:"Empanada Venezolanisima",q:"1",k:550,c:45,p:25,g:20,u:"u"},
{n:"Esparragos",q:"100 g",k:20,c:3.8,p:2.2,g:0.1,u:"g"},
{n:"Ferrero",q:"100 g",k:603,c:44,p:8,g:42,u:"g"},
{n:"Fresa",q:"100",k:32,c:7.6,p:0.67,g:0.3,u:"g"},
{n:"Galleta canela",q:"1",k:21.65,c:3.4,p:0.33,g:0.7,u:"u"},
{n:"Galleta de soda",q:"1",k:140,c:22,p:3.7,g:3.6,u:"u"},
{n:"Galleta Lotus",q:"1",k:37,c:5.6,p:0.4,g:1.5,u:"u"},
{n:"Garbanzo",q:"100",k:340,c:55,p:19,g:5.5,u:"g"},
{n:"Gelatina +",q:"1",k:39,c:3.8,p:6,g:0,u:"u"},
{n:"Granola",q:"100 g",k:428,c:64,p:7,g:15,u:"g"},
{n:"Guacamole",q:"100 g",k:203,c:10.6,p:1.8,g:17.1,u:"g"},
{n:"Hamburguesa",q:"1",k:800,c:36,p:55,g:54,u:"u"},
{n:"Hamburguesa Supercor",q:"200 gr",k:320,c:0,p:35,g:21,u:"u"},
{n:"Harina de Trigo",q:"100",k:364,c:76,p:10,g:1,u:"g"},
{n:"Huevo",q:"1",k:80,c:0,p:9.1,g:7,u:"u"},
{n:"Hummus",q:"100 g",k:311,c:11,p:6,g:25,u:"g"},
{n:"Ilaollao con pistacho",q:"100 g",k:200,c:31,p:3.81,g:1.7,u:"g"},
{n:"Jamon Ahumado",q:"100",k:81,c:4,p:14,g:1,u:"g"},
{n:"Jamón Cocido",q:"100",k:101,c:0.9,p:18.6,g:2.5,u:"g"},
{n:"Jamon Serrano",q:"100",k:241,c:0,p:31,g:13,u:"g"},
{n:"Ketchup",q:"100 g",k:64,c:11,p:1.4,g:0.1,u:"g"},
{n:"Kiwi",q:"100",k:61,c:15,p:1.1,g:0.5,u:"g"},
{n:"Ladron de manzana",q:"1",k:120,c:0,p:0,g:0,u:"u"},
{n:"Lasaña",q:"100",k:135,c:15,p:7,g:4.9,u:"g"},
{n:"LBC Five Guys",q:"1",k:575,c:38.1,p:41.52,g:26.4,u:"u"},
{n:"LCB Five Guys",q:"1",k:497,c:38.1,p:27.6,g:26.4,u:"u"},
{n:"Leche",q:"200",k:116,c:9.4,p:6.2,g:7.6,u:"u"},
{n:"Leche avenizada / cacahuaterizada",q:"1",k:189,c:29.14,p:14.8,g:3.83,u:"u"},
{n:"Leche Desnatada",q:"100",k:34,c:4.7,p:3.2,g:0.25,u:"g"},
{n:"Lentejas",q:"100",k:116,c:20,p:9,g:3,u:"g"},
{n:"LH Five Guys",q:"1",k:433,c:37,p:24,g:21.52,u:"u"},
{n:"Magdalena",q:"225 g",k:214,c:26.5,p:2.5,g:11,u:"u"},
{n:"Malta",q:"1",k:60,c:12,p:0.5,g:0,u:"u"},
{n:"Manzana (180g)",q:"100",k:52,c:14,p:0.3,g:0.2,u:"g"},
{n:"Mayonesa (15)",q:"100 g",k:680,c:0.6,p:1,g:75,u:"g"},
{n:"Merluza",q:"100",k:65,c:0,p:11.93,g:2,u:"g"},
{n:"Miel (10g cucharada)",q:"100",k:304,c:82,p:0.3,g:0,u:"g"},
{n:"Mozzarella",q:"100",k:238,c:2,p:17,g:18,u:"g"},
{n:"Muslo de Pollo",q:"180 gr",k:318,c:0,p:43,g:14.4,u:"u"},
{n:"MyProtein Impact Whey",q:"25",k:103,c:1,p:21,g:1.9,u:"u"},
{n:"Nachos",q:"100",k:476,c:60,p:6.2,g:22,u:"g"},
{n:"Napolitana",q:"100 g",k:300,c:30,p:7,g:17,u:"g"},
{n:"Natillas + Proteina",q:"1",k:92,c:7,p:12,g:1.8,u:"u"},
{n:"Nuggets Alcampo",q:"100",k:201,c:13,p:12,g:11,u:"g"},
{n:"Optimum Nutrition",q:"30",k:113,c:1.7,p:24,g:1.3,u:"u"},
{n:"Paella",q:"1",k:379,c:40,p:22,g:13,u:"u"},
{n:"Palitos de pan",q:"100 g",k:394,c:80,p:11.5,g:2.3,u:"g"},
{n:"Pan bimbo perro",q:"1",k:145,c:25,p:5.2,g:2.1,u:"u"},
{n:"Pan Burguer Supercor",q:"100 g",k:290,c:51,p:9.7,g:4,u:"g"},
{n:"Pan de Barra",q:"75",k:200,c:37.5,p:5.73,g:2.46,u:"u"},
{n:"Pan de leche (35g)",q:"100",k:364,c:52,p:8.5,g:12,u:"g"},
{n:"Pan pequeño",q:"50 gr",k:133,c:25.3,p:3.82,g:1.64,u:"u"},
{n:"Pan TGB",q:"100",k:307,c:53,p:12,g:4.4,u:"g"},
{n:"Pancake Maizena",q:"100 g",k:180,c:30,p:6,g:3.7,u:"g"},
{n:"Pancito",q:"100 g",k:243,c:51,p:7.4,g:1,u:"g"},
{n:"Panqueque",q:"100",k:225,c:39,p:6,g:5,u:"g"},
{n:"Pasta",q:"200 gr",k:262,c:50,p:10,g:2.2,u:"u"},
{n:"Pasticho",q:"1",k:400,c:41,p:17,g:20,u:"u"},
{n:"Pastoret Desnatado Natural",q:"100",k:46,c:6,p:5,g:0,u:"g"},
{n:"Pata de cerdo",q:"100 g",k:200,c:0,p:17.5,g:14,u:"g"},
{n:"Patata Hervida",q:"100",k:77,c:17,p:2,g:0.1,u:"g"},
{n:"Patatas pequeñas Five Guys",q:"1",k:659,c:70,p:10,g:39,u:"u"},
{n:"Pechuga Braseada Mercadona (14g)",q:"100",k:84,c:1.3,p:16.9,g:1.2,u:"g"},
{n:"Pechuga de Pavo (Campofrio)",q:"100",k:81,c:4,p:14,g:1,u:"g"},
{n:"Pechuga de Pollo",q:"100",k:165,c:0,p:31,g:3.6,u:"g"},
{n:"Pechugitas de Pollo",q:"100",k:160,c:0.1,p:26.8,g:5.8,u:"g"},
{n:"Pepitos",q:"100 g",k:467,c:71,p:6.6,g:17,u:"g"},
{n:"Pesto",q:"1 Cucharada",k:70,c:2,p:2,g:7,u:"u"},
{n:"Pirulin",q:"21",k:100,c:15,p:2,g:4,u:"u"},
{n:"Pizza Carrefour",q:"100 g",k:228,c:25,p:11.2,g:8.8,u:"g"},
{n:"Pizza Dominos",q:"1",k:177,c:30,p:6,g:4,u:"u"},
{n:"Platano maduro",q:"100 g",k:122,c:30,p:1.38,g:0.5,u:"g"},
{n:"Platano Verde",q:"100",k:122,c:31.9,p:1.3,g:0.35,u:"g"},
{n:"Pollo de Kebab",q:"100 g",k:177,c:1,p:21,g:9.8,u:"g"},
{n:"Proteina",q:"1",k:322,c:46.75,p:29,g:3.4,u:"u"},
{n:"Puleva Chocolate",q:"1",k:60,c:9.1,p:3.2,g:1.2,u:"u"},
{n:"Queso Batido",q:"100",k:72,c:4,p:10,g:0,u:"g"},
{n:"Queso Cottage",q:"100",k:87,c:3.5,p:12,g:0,u:"g"},
{n:"Queso Crema",q:"1",k:40,c:1,p:2,g:3.5,u:"u"},
{n:"Queso Ligero",q:"1 Loncha",k:60.27,c:0.2,p:5.6,g:3.8,u:"u"},
{n:"Queso Loncha (cremoso)",q:"1 Loncha",k:84.48,c:0.2,p:5.76,g:4.53,u:"u"},
{n:"Repollo",q:"100",k:25,c:6,p:1.3,g:0.1,u:"g"},
{n:"Salami",q:"100",k:336,c:2.4,p:22,g:26,u:"g"},
{n:"Salchicha (55)",q:"100",k:233,c:1.3,p:12,g:20,u:"g"},
{n:"Salchicha Ikea",q:"100",k:246,c:7.3,p:8.3,g:20,u:"g"},
{n:"Salmon",q:"100 g",k:190,c:0,p:19,g:13.3,u:"g"},
{n:"Salmon marinado",q:"100 g",k:237,c:0.5,p:20,g:18,u:"g"},
{n:"Salpicon",q:"100 g",k:77,c:2,p:12.3,g:1.8,u:"g"},
{n:"Sardina",q:"100",k:323,c:0,p:18,g:28,u:"g"},
{n:"Shawarma",q:"1",k:600,c:60,p:50,g:40,u:"u"},
{n:"Sopa",q:"1",k:700,c:64,p:21,g:49,u:"u"},
{n:"Tarta de queso",q:"100 g",k:295,c:22,p:4,g:20,u:"g"},
{n:"Tarta Red Velvet",q:"100 g",k:399,c:40,p:5.3,g:24,u:"g"},
{n:"Tequeños (40 gr)",q:"100",k:343,c:27,p:13,g:17.9,u:"g"},
{n:"Tocineta",q:"16 gr",k:87,c:0.23,p:5.93,g:6.68,u:"u"},
{n:"Tomate",q:"100",k:22,c:3.5,p:0.88,g:0.21,u:"g"},
{n:"Tortilla de Arroz",q:"100 g",k:164,c:28,p:3.8,g:3.6,u:"g"},
{n:"Tortilla de Huevo",q:"100",k:164,c:11,p:5,g:11,u:"g"},
{n:"Tortilla de Trigo (Alcampo)",q:"40 gr",k:123,c:20,p:2.9,g:3.2,u:"u"},
{n:"Tortilla Patata",q:"100",k:156,c:14,p:4.3,g:8.8,u:"g"},
{n:"Totita de maiz jamon",q:"1",k:41,c:6,p:1,g:1,u:"u"},
{n:"Uva",q:"100",k:67,c:17,p:0.6,g:0.4,u:"g"},
{n:"Wok mercadona",q:"100 g",k:94,c:1,p:13,g:4.7,u:"g"},
{n:"Yogures Griego Oikos",q:"110",k:134,c:4.5,p:3.6,g:11,u:"u"},
{n:"Yogurt Bianca",q:"100 ml",k:67,c:10,p:2.8,g:1.5,u:"g"},
{n:"Yogurt Desnatado con Fresa",q:"100",k:38,c:5.3,p:3.9,g:0.1,u:"g"},
{n:"Yogurt Griego Natural",q:"100",k:129,c:3.9,p:3.9,g:10.9,u:"g"},
{n:"YoPro",q:"200",k:165,c:11,p:20,g:4.6,u:"u"},
{n:"YoPro Fresa",q:"100",k:58,c:5.4,p:8.3,g:0.4,u:"g"},
{n:"Yuca",q:"100",k:160,c:38,p:1.36,g:0.28,u:"g"},
{n:"Zanahoria Hervida",q:"100",k:54,c:8,p:0.74,g:2.48,u:"g"},
{n:"Zucaritas",q:"35 g",k:131,c:30,p:1.6,g:0.2,u:"u"},
{n:"Zumo de naranja",q:"100 ml",k:45,c:11,p:0.7,g:0.2,u:"g"},
{n:"Zumo Manzana",q:"200 ml",k:88,c:22,p:0,g:0,u:"u"}
];

// ---- Traffic Light System ----
function getLight(food) {
  const name = food.n.toLowerCase();
  const k = food.k;
  const ratio = k > 0 ? (food.p / k) * 100 : 0;

  const greenNames = ['brocoli','brócoli','tomate','repollo','espárrago','esparrago','zanahoria','fresa','arándano','arandano','clara de huevo','coca cola 0'];
  if (greenNames.some(g => name.includes(g))) return 'green';
  if (name === 'huevo') return 'green';
  if (name.includes('gelatina')) return 'green';

  const yellowNames = ['manzana','kiwi','uva','banana','plátano','platano'];
  if (yellowNames.some(y => name.includes(y)) && !name.includes('zumo') && !name.includes('ladron')) return 'yellow';
  const yellowCarbNames = ['arepa','arroz','pasta','yuca','aguacate','patata hervida','cuscús','cuscus'];
  if (yellowCarbNames.some(y => name === y || name.startsWith(y))) return 'yellow';

  const redNames = ['galleta','croissant','doritos','nachos','churros','mayonesa','azucar','azúcar','miel','pepitos','cocosette','pirulin','ferrero','tarta','bizcocho','magdalena','granola','cotufas'];
  if (redNames.some(r => name.includes(r))) return 'red';

  if (ratio >= 12) return 'green';
  if (ratio >= 8 && k < 250) return 'green';
  if (k >= 350 && ratio < 5) return 'red';
  if (k >= 300 && ratio < 3) return 'red';
  if (ratio >= 5) return 'yellow';
  if (k > 200) return 'red';
  return 'yellow';
}

// ---- Meal Definitions ----
const MEALS = [
  { key: 'desayuno', emoji: '☀️', title: 'Desayuno', max: 4 },
  { key: 'almuerzo', emoji: '🍽️', title: 'Almuerzo', max: 4 },
  { key: 'cena', emoji: '🌙', title: 'Cena pre-turno', max: 4 },
  { key: 'postturno', emoji: '🌃', title: 'Post-turno 11PM', max: 3 },
  { key: 'snacks', emoji: '🍎', title: 'Snacks / Café', max: 2 },
];

// ---- State ----
let currentDate = todayStr();
let meals = {};
let activeSearch = null;

function todayStr() {
  const d = new Date();
  return d.toISOString().split('T')[0];
}

function initMeals() {
  meals = {};
  MEALS.forEach(m => {
    meals[m.key] = new Array(m.max).fill(null).map(() => ({ food: null, qty: 0 }));
  });
}

// ---- LocalStorage ----
const STORE_KEY = 'midieta_history';
const RECIPES_KEY = 'midieta_recipes';

function loadHistory() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
  catch { return {}; }
}

function saveHistory(history) {
  localStorage.setItem(STORE_KEY, JSON.stringify(history));
}

function loadRecipes() {
  try { return JSON.parse(localStorage.getItem(RECIPES_KEY)) || []; }
  catch { return []; }
}

function saveRecipesStore(recipes) {
  localStorage.setItem(RECIPES_KEY, JSON.stringify(recipes));
}

function loadDayData(date) {
  const history = loadHistory();
  if (history[date]) {
    meals = {};
    MEALS.forEach(m => {
      const saved = history[date].meals[m.key] || [];
      meals[m.key] = new Array(m.max).fill(null).map((_, i) => {
        if (saved[i] && saved[i].food) {
          const foundFood = FOODS.find(f => f.n === saved[i].food.n);
          return { food: foundFood || saved[i].food, qty: saved[i].qty };
        }
        return { food: null, qty: 0 };
      });
    });
    return true;
  }
  return false;
}

// ---- Recipes ----
function saveAsRecipe(mealKey) {
  const items = meals[mealKey].filter(i => i.food && i.qty > 0);
  if (items.length === 0) {
    showToast('Agrega alimentos primero');
    return;
  }

  // Show recipe name modal
  showRecipeNameModal((name) => {
    const recipes = loadRecipes();
    const totalK = items.reduce((s, i) => {
      const mult = i.food.u === 'g' ? i.qty / 100 : i.qty;
      return s + Math.round(i.food.k * mult);
    }, 0);

    recipes.push({
      id: 'r_' + Date.now(),
      name: name,
      items: items.map(i => ({ food: { ...i.food }, qty: i.qty })),
      totalK
    });
    saveRecipesStore(recipes);
    showToast('📋 Receta guardada: ' + name);
    render();
  });
}

function applyRecipe(recipeId, mealKey, startIdx) {
  const recipes = loadRecipes();
  const recipe = recipes.find(r => r.id === recipeId);
  if (!recipe) return;

  const mealDef = MEALS.find(m => m.key === mealKey);
  if (!mealDef) return;

  // Fill starting from startIdx, using all available empty slots
  let slotIdx = 0;
  for (let i = 0; i < mealDef.max && slotIdx < recipe.items.length; i++) {
    if (!meals[mealKey][i].food) {
      const ri = recipe.items[slotIdx];
      const foundFood = FOODS.find(f => f.n === ri.food.n) || ri.food;
      meals[mealKey][i] = { food: foundFood, qty: ri.qty };
      slotIdx++;
    }
  }

  if (slotIdx < recipe.items.length) {
    showToast(`Se agregaron ${slotIdx} de ${recipe.items.length} items (sin espacio)`);
  }

  render();
}

function deleteRecipe(recipeId) {
  const recipes = loadRecipes();
  const idx = recipes.findIndex(r => r.id === recipeId);
  if (idx === -1) return;
  const name = recipes[idx].name;
  recipes.splice(idx, 1);
  saveRecipesStore(recipes);
  showToast('Receta eliminada: ' + name);
  renderRecipes();
}

// ---- Recipe Name Modal ----
function showRecipeNameModal(callback) {
  const modal = document.getElementById('recipe-name-modal');
  const input = document.getElementById('recipe-name-input');
  const btnSave = document.getElementById('recipe-name-save');
  const btnCancel = document.getElementById('recipe-name-cancel');

  input.value = '';
  modal.classList.add('show');
  setTimeout(() => input.focus(), 100);

  function cleanup() {
    modal.classList.remove('show');
    btnSave.removeEventListener('click', onSave);
    btnCancel.removeEventListener('click', onCancel);
    input.removeEventListener('keydown', onKey);
  }

  function onSave() {
    const name = input.value.trim();
    if (!name) { input.focus(); return; }
    cleanup();
    callback(name);
  }

  function onCancel() { cleanup(); }

  function onKey(e) {
    if (e.key === 'Enter') onSave();
    if (e.key === 'Escape') onCancel();
  }

  btnSave.addEventListener('click', onSave);
  btnCancel.addEventListener('click', onCancel);
  input.addEventListener('keydown', onKey);
}

// ---- Calculations ----
function calcItem(item) {
  if (!item.food || !item.qty) return { k: 0, c: 0, p: 0, g: 0 };
  const f = item.food;
  const mult = f.u === 'g' ? item.qty / 100 : item.qty;
  return {
    k: Math.round(f.k * mult),
    c: +(f.c * mult).toFixed(1),
    p: +(f.p * mult).toFixed(1),
    g: +(f.g * mult).toFixed(1),
  };
}

function calcMeal(mealKey) {
  const items = meals[mealKey] || [];
  return items.reduce((acc, item) => {
    const v = calcItem(item);
    acc.k += v.k; acc.c += v.c; acc.p += v.p; acc.g += v.g;
    return acc;
  }, { k: 0, c: 0, p: 0, g: 0 });
}

function calcTotal() {
  let total = { k: 0, c: 0, p: 0, g: 0 };
  MEALS.forEach(m => {
    const v = calcMeal(m.key);
    total.k += v.k; total.c += v.c; total.p += v.p; total.g += v.g;
  });
  return total;
}

// ---- Render ----
function render() {
  renderMeals();
  updateSummary();
}

function updateSummary() {
  const t = calcTotal();
  document.getElementById('summary-kcal').textContent = Math.round(t.k);
  document.getElementById('summary-p').textContent = Math.round(t.p) + 'g';
  document.getElementById('summary-c').textContent = Math.round(t.c) + 'g';
  document.getElementById('summary-g').textContent = Math.round(t.g) + 'g';

  const statusEl = document.getElementById('summary-status');
  if (t.k <= 2100) statusEl.textContent = '✅';
  else if (t.k <= 2300) statusEl.textContent = '⚠️';
  else statusEl.textContent = '🔴';
}

function renderMeals() {
  const container = document.getElementById('meals-container');
  container.innerHTML = '';

  MEALS.forEach(meal => {
    const section = document.createElement('div');
    section.className = 'meal-section';

    const mealCalc = calcMeal(meal.key);
    const hasItems = meals[meal.key].some(i => i.food);

    section.innerHTML = `
      <div class="meal-header">
        <span class="meal-title">${meal.emoji} ${meal.title}</span>
        <div class="meal-header-right">
          ${hasItems ? `<button class="btn-save-recipe" data-meal="${meal.key}" title="Guardar como receta">📋</button>` : ''}
          <span class="meal-subtitle">${Math.round(mealCalc.k)} kcal</span>
        </div>
      </div>
      <div class="meal-items" id="items-${meal.key}"></div>
    `;

    const itemsContainer = section.querySelector('.meal-items');

    meals[meal.key].forEach((item, idx) => {
      const itemEl = createItemEl(meal.key, idx, item);
      itemsContainer.appendChild(itemEl);
    });

    container.appendChild(section);
  });
}

function createItemEl(mealKey, idx, item) {
  const div = document.createElement('div');
  div.className = 'meal-item' + (item.food ? ' has-food' : '');
  div.dataset.meal = mealKey;
  div.dataset.idx = idx;

  if (!item.food) {
    div.innerHTML = `
      <div class="food-search-wrap">
        <input type="text" class="food-search" placeholder="Buscar alimento o receta..."
               data-meal="${mealKey}" data-idx="${idx}" autocomplete="off">
        <div class="search-results" id="sr-${mealKey}-${idx}"></div>
      </div>
    `;
  } else {
    const v = calcItem(item);
    const light = getLight(item.food);
    const unitLabel = item.food.u === 'g' ? 'gramos' : (item.food.q === '1' ? 'uds' : item.food.q);

    div.innerHTML = `
      <div class="selected-food show">
        <div class="sf-top">
          <span class="sf-name">
            <span class="sr-light ${light}"></span>
            ${item.food.n}
          </span>
          <button class="btn-remove" data-meal="${mealKey}" data-idx="${idx}">✕</button>
        </div>
        <div class="sf-qty-row">
          <input type="number" class="qty-input" value="${item.qty || ''}"
                 data-meal="${mealKey}" data-idx="${idx}"
                 placeholder="0" inputmode="decimal" min="0" step="any">
          <span class="qty-unit">${unitLabel}</span>
        </div>
        <div class="sf-macros">
          <div class="sf-macro kcal"><span class="sf-macro-val">${v.k}</span><span class="sf-macro-label">kcal</span></div>
          <div class="sf-macro prot"><span class="sf-macro-val">${v.p}</span><span class="sf-macro-label">prot</span></div>
          <div class="sf-macro"><span class="sf-macro-val">${v.c}</span><span class="sf-macro-label">carbs</span></div>
          <div class="sf-macro"><span class="sf-macro-val">${v.g}</span><span class="sf-macro-label">grasa</span></div>
        </div>
      </div>
    `;
  }

  return div;
}

// ---- Search (foods + recipes) ----
function normalize(str) {
  return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function searchAll(query) {
  if (!query || query.length < 1) return [];
  const q = normalize(query);

  // Search recipes first
  const recipes = loadRecipes()
    .filter(r => normalize(r.name).includes(q))
    .slice(0, 3)
    .map(r => ({ type: 'recipe', data: r }));

  // Then foods
  const foods = FOODS
    .filter(f => normalize(f.n).includes(q))
    .slice(0, 8)
    .map(f => ({ type: 'food', data: f }));

  return [...recipes, ...foods];
}

function showSearchResults(input, results) {
  const mealKey = input.dataset.meal;
  const idx = input.dataset.idx;
  const container = document.getElementById(`sr-${mealKey}-${idx}`);
  if (!container) return;

  if (results.length === 0) {
    container.classList.remove('show');
    return;
  }

  container.innerHTML = results.map(item => {
    if (item.type === 'recipe') {
      const r = item.data;
      const itemCount = r.items.length;
      return `<div class="search-result-item recipe-result" data-recipe-id="${r.id}"
                  data-meal="${mealKey}" data-item-idx="${idx}">
        <span class="sr-recipe-icon">📋</span>
        <span class="sr-name">${r.name}</span>
        <span class="sr-kcal">${r.totalK} kcal · ${itemCount} items</span>
      </div>`;
    } else {
      const f = item.data;
      const light = getLight(f);
      const kcalLabel = f.u === 'g' ? `${f.k} kcal/100g` : `${f.k} kcal`;
      return `<div class="search-result-item" data-food-idx="${FOODS.indexOf(f)}"
                  data-meal="${mealKey}" data-item-idx="${idx}">
        <span class="sr-light ${light}"></span>
        <span class="sr-name">${f.n}</span>
        <span class="sr-kcal">${kcalLabel}</span>
      </div>`;
    }
  }).join('');

  container.classList.add('show');
}

// ---- Date Handling ----
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  const days = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const isToday = dateStr === todayStr();
  const dayName = isToday ? 'Hoy' : days[d.getDay()];
  return `${dayName}, ${d.getDate()} ${months[d.getMonth()]}`;
}

function changeDate(delta) {
  const d = new Date(currentDate + 'T12:00:00');
  d.setDate(d.getDate() + delta);
  currentDate = d.toISOString().split('T')[0];
  initMeals();
  loadDayData(currentDate);
  document.getElementById('current-date').textContent = formatDate(currentDate);
  render();
}

// ---- History ----
function renderHistory() {
  const history = loadHistory();
  const dates = Object.keys(history).sort().reverse();
  const listEl = document.getElementById('history-list');
  const emptyEl = document.getElementById('history-empty');
  const avgEl = document.getElementById('history-avg');

  if (dates.length === 0) {
    listEl.innerHTML = '';
    avgEl.innerHTML = '';
    emptyEl.style.display = 'block';
    return;
  }

  emptyEl.style.display = 'none';

  const last7 = dates.slice(0, 7);
  const avg = Math.round(last7.reduce((s, d) => s + (history[d].totalKcal || 0), 0) / last7.length);
  avgEl.innerHTML = `
    <div class="avg-label">Promedio últimos ${last7.length} días</div>
    <div class="avg-value">${avg} kcal</div>
  `;

  listEl.innerHTML = dates.map(date => {
    const day = history[date];
    const kcal = day.totalKcal || 0;
    let status = '✅';
    if (kcal > 2300) status = '🔴';
    else if (kcal > 2100) status = '⚠️';

    return `<div class="history-item" data-date="${date}">
      <span class="hi-date">${formatDate(date)}</span>
      <span class="hi-right">
        <span class="hi-kcal">${kcal} kcal</span>
        <span class="hi-status">${status}</span>
        <span class="hi-arrow">›</span>
      </span>
    </div>`;
  }).join('');
}

function showDayDetail(date) {
  const history = loadHistory();
  const day = history[date];
  if (!day) return;

  document.getElementById('detail-title').textContent = formatDate(date);
  const body = document.getElementById('detail-body');

  let html = '';
  let totalK = 0, totalP = 0, totalC = 0, totalG = 0;

  MEALS.forEach(meal => {
    const items = day.meals[meal.key] || [];
    const hasItems = items.some(i => i.food);
    if (!hasItems) return;

    html += `<div class="detail-meal">
      <div class="detail-meal-title">${meal.emoji} ${meal.title}</div>`;

    items.forEach(item => {
      if (!item.food || !item.qty) return;
      const f = item.food;
      const mult = f.u === 'g' ? item.qty / 100 : item.qty;
      const kcal = Math.round(f.k * mult);
      totalK += kcal;
      totalP += f.p * mult;
      totalC += f.c * mult;
      totalG += f.g * mult;
      const light = getLight(f);

      html += `<div class="detail-food-item">
        <span class="detail-food-name">
          <span class="sr-light ${light}"></span>
          ${f.n} <small style="color:var(--text-muted)">(${item.qty}${f.u === 'g' ? 'g' : 'x'})</small>
        </span>
        <span class="detail-food-kcal">${kcal} kcal</span>
      </div>`;
    });

    html += `</div>`;
  });

  html += `<div class="detail-total">
    <span class="detail-total-kcal">${Math.round(totalK)} kcal</span>
    <span class="detail-total-macros">
      P: ${Math.round(totalP)}g · C: ${Math.round(totalC)}g · G: ${Math.round(totalG)}g
    </span>
  </div>`;

  body.innerHTML = html;
  document.getElementById('detail-modal').classList.add('show');
}

// ---- Recipes View ----
function renderRecipes() {
  const recipes = loadRecipes();
  const listEl = document.getElementById('recipes-list');
  const emptyEl = document.getElementById('recipes-empty');

  if (recipes.length === 0) {
    listEl.innerHTML = '';
    emptyEl.style.display = 'block';
    return;
  }

  emptyEl.style.display = 'none';

  listEl.innerHTML = recipes.map(r => {
    const itemNames = r.items.map(i => i.food.n).join(', ');
    return `<div class="recipe-card" data-recipe-id="${r.id}">
      <div class="recipe-card-top">
        <div class="recipe-card-info">
          <span class="recipe-card-name">📋 ${r.name}</span>
          <span class="recipe-card-detail">${r.items.length} items · ${r.totalK} kcal</span>
        </div>
        <button class="btn-delete-recipe" data-recipe-id="${r.id}" title="Eliminar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
      <div class="recipe-card-foods">${itemNames}</div>
    </div>`;
  }).join('');
}

// ---- Toast ----
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// ---- Save Day ----
function saveDay() {
  const total = calcTotal();
  if (total.k === 0) {
    showToast('Agrega alimentos antes de guardar');
    return;
  }

  const history = loadHistory();
  history[currentDate] = {
    meals: JSON.parse(JSON.stringify(meals)),
    totalKcal: Math.round(total.k),
    totalP: Math.round(total.p),
    totalC: Math.round(total.c),
    totalG: Math.round(total.g),
  };
  saveHistory(history);

  const btn = document.getElementById('btn-save');
  btn.textContent = '✓ Guardado';
  btn.classList.add('saved');
  setTimeout(() => {
    btn.textContent = 'Guardar día';
    btn.classList.remove('saved');
  }, 2000);

  showToast('Día guardado');
}

// ---- Event Listeners ----
function initEvents() {
  // Date navigation
  document.getElementById('prev-day').addEventListener('click', () => changeDate(-1));
  document.getElementById('next-day').addEventListener('click', () => changeDate(1));
  document.getElementById('current-date').addEventListener('click', () => {
    currentDate = todayStr();
    initMeals();
    loadDayData(currentDate);
    document.getElementById('current-date').textContent = formatDate(currentDate);
    render();
  });

  // Save
  document.getElementById('btn-save').addEventListener('click', saveDay);

  // Bottom nav
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      document.getElementById(`view-${view}`).classList.add('active');
      if (view === 'history') renderHistory();
      if (view === 'recipes') renderRecipes();
    });
  });

  // Rules modal
  document.getElementById('btn-rules').addEventListener('click', () => {
    document.getElementById('rules-modal').classList.add('show');
  });
  document.getElementById('close-rules').addEventListener('click', () => {
    document.getElementById('rules-modal').classList.remove('show');
  });
  document.getElementById('rules-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) e.currentTarget.classList.remove('show');
  });

  // Detail modal
  document.getElementById('close-detail').addEventListener('click', () => {
    document.getElementById('detail-modal').classList.remove('show');
  });
  document.getElementById('detail-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) e.currentTarget.classList.remove('show');
  });

  // Recipe name modal overlay close
  document.getElementById('recipe-name-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) e.currentTarget.classList.remove('show');
  });

  // Delegated events on main content
  document.getElementById('main-content').addEventListener('input', (e) => {
    // Food search
    if (e.target.classList.contains('food-search')) {
      const results = searchAll(e.target.value);
      showSearchResults(e.target, results);
      activeSearch = e.target;
    }
    // Quantity change
    if (e.target.classList.contains('qty-input')) {
      const mk = e.target.dataset.meal;
      const idx = +e.target.dataset.idx;
      const val = parseFloat(e.target.value) || 0;
      meals[mk][idx].qty = val;
      const item = meals[mk][idx];
      const v = calcItem(item);
      const parent = e.target.closest('.meal-item');
      const macroVals = parent.querySelectorAll('.sf-macro-val');
      if (macroVals.length === 4) {
        macroVals[0].textContent = v.k;
        macroVals[1].textContent = v.p;
        macroVals[2].textContent = v.c;
        macroVals[3].textContent = v.g;
      }
      updateSummary();
      const mealCalc = calcMeal(mk);
      const section = parent.closest('.meal-section');
      if (section) {
        const subtitle = section.querySelector('.meal-subtitle');
        if (subtitle) subtitle.textContent = Math.round(mealCalc.k) + ' kcal';
      }
    }
  });

  document.getElementById('main-content').addEventListener('click', (e) => {
    // Select RECIPE from search results
    const recipeResult = e.target.closest('.recipe-result');
    if (recipeResult) {
      const recipeId = recipeResult.dataset.recipeId;
      const mk = recipeResult.dataset.meal;
      const itemIdx = +recipeResult.dataset.itemIdx;
      applyRecipe(recipeId, mk, itemIdx);
      return;
    }

    // Select FOOD from search results
    const srItem = e.target.closest('.search-result-item');
    if (srItem && !srItem.classList.contains('recipe-result')) {
      const foodIdx = +srItem.dataset.foodIdx;
      const mk = srItem.dataset.meal;
      const itemIdx = +srItem.dataset.itemIdx;
      const food = FOODS[foodIdx];

      meals[mk][itemIdx] = {
        food: food,
        qty: food.u === 'g' ? 100 : 1
      };
      render();
      return;
    }

    // Remove food
    const removeBtn = e.target.closest('.btn-remove');
    if (removeBtn) {
      const mk = removeBtn.dataset.meal;
      const idx = +removeBtn.dataset.idx;
      meals[mk][idx] = { food: null, qty: 0 };
      render();
      return;
    }

    // Save as recipe button
    const saveRecipeBtn = e.target.closest('.btn-save-recipe');
    if (saveRecipeBtn) {
      saveAsRecipe(saveRecipeBtn.dataset.meal);
      return;
    }

    // Delete recipe in recipes view
    const deleteRecipeBtn = e.target.closest('.btn-delete-recipe');
    if (deleteRecipeBtn) {
      deleteRecipe(deleteRecipeBtn.dataset.recipeId);
      return;
    }

    // History item click
    const histItem = e.target.closest('.history-item');
    if (histItem) {
      showDayDetail(histItem.dataset.date);
      return;
    }
  });

  // Focus events for search
  document.getElementById('main-content').addEventListener('focusin', (e) => {
    if (e.target.classList.contains('food-search')) {
      activeSearch = e.target;
      if (e.target.value.length > 0) {
        const results = searchAll(e.target.value);
        showSearchResults(e.target, results);
      }
    }
  });

  // Close search results on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.food-search-wrap')) {
      document.querySelectorAll('.search-results.show').forEach(sr => sr.classList.remove('show'));
      activeSearch = null;
    }
  });
}

// ---- Init ----
function init() {
  initMeals();
  loadDayData(currentDate);
  document.getElementById('current-date').textContent = formatDate(currentDate);
  initEvents();
  render();
}

document.addEventListener('DOMContentLoaded', init);

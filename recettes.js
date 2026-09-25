// ============================================================
//  TES RECETTES
//
//  Le plus simple : sur le site, bouton "＋ Ajouter une recette".
//  Il génère le bloc de code tout prêt à coller ici.
//
//  À la main : copie un bloc { ... }, en entier,
//  et colle-le juste au-dessus de la ligne "↑ Colle tes nouvelles
//  recettes..." tout en bas. Chaque bloc se termine par "},"
//
//  categorie : "Entrée", "Plat", "Dessert", "Apéro", "Boisson" ou "Petit-déj"
//  tags      : ex. "végétarien", "vegan", "sans gluten"
//  temps     : en minutes (≤ 30 = filtre "Rapide")
//  difficulte: 1 (facile), 2 (moyen), 3 (on s'accroche)
//  proteines : grammes PAR PORTION (≥ 20 = filtre "Riche en protéines")
//  kcal      : calories PAR PORTION
//  proteines et kcal sont facultatifs, et ce sont des estimations.
// ============================================================

const RECETTES = [

  // ---------------- Riches en protéines ----------------

  {
    id: "poulet-teriyaki",
    titre: "Poulet teriyaki, riz et brocoli",
    emoji: "🍗",
    categorie: "Plat",
    tags: [],
    temps: 25,
    difficulte: 1,
    portions: 2,
    proteines: 42,
    kcal: 520,
    ingredients: [
      { qte: 300, unite: "g", nom: "blancs de poulet" },
      { qte: 150, unite: "g", nom: "riz basmati" },
      { qte: 200, unite: "g", nom: "brocoli" },
      { qte: 3, unite: "c. à soupe", nom: "sauce soja" },
      { qte: 1, unite: "c. à soupe", nom: "miel" },
      { qte: 1, unite: "gousse", nom: "ail" },
      { qte: 1, unite: "c. à café", nom: "gingembre râpé" },
      { qte: 1, unite: "c. à café", nom: "graines de sésame" }
    ],
    etapes: [
      "Lancer la cuisson du riz.",
      "Couper le poulet en morceaux et le faire dorer 6 à 7 minutes à la poêle.",
      "Mélanger la sauce soja, le miel, l'ail écrasé et le gingembre. Verser sur le poulet et laisser caraméliser 2 minutes.",
      "Cuire le brocoli 5 minutes à la vapeur.",
      "Servir le poulet sur le riz avec le brocoli, parsemer de sésame."
    ],
    astuce: "Se garde très bien 3 jours au frigo : parfait pour préparer les repas de la semaine."
  },
  {
    id: "bowl-saumon",
    titre: "Bowl saumon, quinoa et edamame",
    emoji: "🐟",
    categorie: "Plat",
    tags: [],
    temps: 25,
    difficulte: 1,
    portions: 2,
    proteines: 40,
    kcal: 650,
    ingredients: [
      { qte: 250, unite: "g", nom: "pavé de saumon" },
      { qte: 120, unite: "g", nom: "quinoa" },
      { qte: 100, unite: "g", nom: "edamame écossés (surgelés)" },
      { qte: 1, unite: "", nom: "avocat" },
      { qte: 0.5, unite: "", nom: "concombre" },
      { qte: 2, unite: "c. à soupe", nom: "sauce soja" },
      { qte: 1, unite: "c. à café", nom: "huile de sésame" },
      { qte: 1, unite: "", nom: "citron vert" }
    ],
    etapes: [
      "Cuire le quinoa 12 minutes dans l'eau bouillante, égoutter.",
      "Cuire le saumon 4 minutes de chaque côté à la poêle, puis l'effriter.",
      "Plonger les edamame 3 minutes dans l'eau bouillante.",
      "Trancher l'avocat et le concombre.",
      "Répartir le tout dans deux bols, arroser de sauce soja, d'huile de sésame et de jus de citron vert."
    ],
    astuce: "Le saumon peut être remplacé par 2 œufs mollets ou du tofu grillé pour une version végétarienne."
  },
  {
    id: "chili-sin-carne",
    titre: "Chili sin carne aux lentilles",
    emoji: "🌶️",
    categorie: "Plat",
    tags: ["végétarien", "vegan", "sans gluten"],
    temps: 45,
    difficulte: 1,
    portions: 4,
    proteines: 20,
    kcal: 340,
    ingredients: [
      { qte: 200, unite: "g", nom: "lentilles vertes" },
      { qte: 1, unite: "boîte", nom: "haricots rouges égouttés" },
      { qte: 800, unite: "g", nom: "tomates concassées" },
      { qte: 140, unite: "g", nom: "maïs" },
      { qte: 1, unite: "", nom: "oignon" },
      { qte: 1, unite: "", nom: "poivron rouge" },
      { qte: 2, unite: "c. à café", nom: "cumin" },
      { qte: 1, unite: "c. à café", nom: "paprika fumé" },
      { qte: 1, unite: "pincée", nom: "piment" }
    ],
    etapes: [
      "Faire revenir l'oignon et le poivron émincés 5 minutes.",
      "Ajouter les épices, puis les lentilles rincées, les tomates et 40 cl d'eau.",
      "Laisser mijoter 25 minutes à couvert, en remuant de temps en temps.",
      "Ajouter les haricots rouges et le maïs, cuire encore 5 minutes."
    ],
    astuce: "Une cuillère de skyr ou de yaourt grec sur le dessus ajoute des protéines et remplace la crème."
  },
  {
    id: "tofu-saute-cacahuetes",
    titre: "Tofu sauté, brocoli et cacahuètes",
    emoji: "🥦",
    categorie: "Plat",
    tags: ["végétarien", "vegan"],
    temps: 25,
    difficulte: 1,
    portions: 2,
    proteines: 34,
    kcal: 460,
    ingredients: [
      { qte: 400, unite: "g", nom: "tofu ferme" },
      { qte: 300, unite: "g", nom: "brocoli" },
      { qte: 30, unite: "g", nom: "cacahuètes" },
      { qte: 3, unite: "c. à soupe", nom: "sauce soja" },
      { qte: 1, unite: "c. à soupe", nom: "sirop d'érable" },
      { qte: 1, unite: "c. à café", nom: "maïzena" },
      { qte: 1, unite: "gousse", nom: "ail" }
    ],
    etapes: [
      "Éponger le tofu dans un torchon, le couper en cubes et l'enrober de maïzena.",
      "Le faire dorer 10 minutes à feu vif dans un filet d'huile, en le retournant.",
      "Ajouter le brocoli en petits bouquets et 3 c. à soupe d'eau, couvrir 4 minutes.",
      "Verser la sauce soja, le sirop d'érable et l'ail, mélanger 1 minute. Parsemer de cacahuètes concassées."
    ],
    astuce: "Plus le tofu est sec avant la cuisson, plus il devient croustillant. Les valeurs n'incluent pas le riz."
  },
  {
    id: "pates-thon",
    titre: "Pâtes au thon, tomate et câpres",
    emoji: "🍝",
    categorie: "Plat",
    tags: [],
    temps: 20,
    difficulte: 1,
    portions: 2,
    proteines: 35,
    kcal: 550,
    ingredients: [
      { qte: 180, unite: "g", nom: "pâtes" },
      { qte: 1, unite: "boîte", nom: "thon au naturel (140 g égoutté)" },
      { qte: 400, unite: "g", nom: "tomates concassées" },
      { qte: 1, unite: "gousse", nom: "ail" },
      { qte: 1, unite: "c. à soupe", nom: "câpres" },
      { qte: 30, unite: "g", nom: "parmesan râpé" }
    ],
    etapes: [
      "Cuire les pâtes.",
      "Pendant ce temps, faire revenir l'ail, ajouter les tomates et laisser réduire 8 minutes.",
      "Hors du feu, ajouter le thon émietté et les câpres.",
      "Mélanger avec les pâtes et servir avec le parmesan."
    ],
    astuce: "Le repas de secours idéal : tout se garde au placard."
  },
  {
    id: "salade-lentilles-oeuf-feta",
    titre: "Salade de lentilles, œuf mollet et feta",
    emoji: "🥚",
    categorie: "Entrée",
    tags: ["végétarien", "sans gluten"],
    temps: 30,
    difficulte: 1,
    portions: 2,
    proteines: 22,
    kcal: 410,
    ingredients: [
      { qte: 100, unite: "g", nom: "lentilles vertes" },
      { qte: 2, unite: "", nom: "œufs" },
      { qte: 60, unite: "g", nom: "feta" },
      { qte: 1, unite: "", nom: "échalote" },
      { qte: 2, unite: "c. à soupe", nom: "huile d'olive" },
      { qte: 1, unite: "c. à soupe", nom: "vinaigre de cidre" },
      { qte: 1, unite: "c. à café", nom: "moutarde" }
    ],
    etapes: [
      "Cuire les lentilles 20 minutes dans l'eau non salée, égoutter.",
      "Cuire les œufs 6 minutes dans l'eau bouillante, les passer sous l'eau froide et les écaler.",
      "Préparer la vinaigrette avec l'huile, le vinaigre, la moutarde et l'échalote ciselée.",
      "Mélanger les lentilles tièdes avec la vinaigrette, ajouter la feta émiettée et les œufs coupés en deux."
    ],
    astuce: "Avec une tranche de pain complet, ça devient un vrai plat."
  },
  {
    id: "pancakes-proteines",
    titre: "Pancakes protéinés à la banane",
    emoji: "🥞",
    categorie: "Petit-déj",
    tags: ["végétarien"],
    temps: 20,
    difficulte: 1,
    portions: 2,
    proteines: 22,
    kcal: 360,
    ingredients: [
      { qte: 80, unite: "g", nom: "flocons d'avoine" },
      { qte: 3, unite: "", nom: "œufs" },
      { qte: 200, unite: "g", nom: "fromage blanc 0 %" },
      { qte: 1, unite: "", nom: "banane bien mûre" },
      { qte: 1, unite: "c. à café", nom: "levure chimique" }
    ],
    etapes: [
      "Mixer tous les ingrédients jusqu'à obtenir une pâte lisse.",
      "Dans une poêle légèrement huilée, verser de petites louches de pâte.",
      "Cuire 2 minutes, retourner quand des bulles apparaissent, puis 1 minute de l'autre côté."
    ],
    astuce: "Avec des flocons d'avoine certifiés sans gluten, la recette le devient aussi."
  },
  {
    id: "overnight-oats-skyr",
    titre: "Overnight oats au skyr",
    emoji: "🫙",
    categorie: "Petit-déj",
    tags: ["végétarien"],
    temps: 5,
    difficulte: 1,
    portions: 1,
    proteines: 27,
    kcal: 400,
    ingredients: [
      { qte: 50, unite: "g", nom: "flocons d'avoine" },
      { qte: 150, unite: "g", nom: "skyr nature" },
      { qte: 100, unite: "ml", nom: "lait" },
      { qte: 1, unite: "c. à soupe", nom: "graines de chia" },
      { qte: 80, unite: "g", nom: "fruits rouges" }
    ],
    etapes: [
      "Mélanger les flocons, le skyr, le lait et les graines de chia dans un bocal.",
      "Fermer et laisser au frigo toute la nuit.",
      "Le matin, ajouter les fruits rouges."
    ],
    astuce: "Le temps indiqué n'inclut pas la nuit au frigo. Prépare-en trois bocaux d'un coup."
  },
  {
    id: "smoothie-proteine",
    titre: "Smoothie banane et cacahuète",
    emoji: "🥤",
    categorie: "Boisson",
    tags: ["végétarien"],
    temps: 5,
    difficulte: 1,
    portions: 1,
    proteines: 27,
    kcal: 470,
    ingredients: [
      { qte: 250, unite: "ml", nom: "lait" },
      { qte: 100, unite: "g", nom: "skyr nature" },
      { qte: 1, unite: "", nom: "banane" },
      { qte: 30, unite: "g", nom: "flocons d'avoine" },
      { qte: 1, unite: "c. à soupe", nom: "beurre de cacahuète" }
    ],
    etapes: [
      "Mettre tous les ingrédients dans le blender.",
      "Mixer 1 minute et boire aussitôt."
    ],
    astuce: "Une banane congelée en rondelles rend le smoothie épais et frais, sans glaçons."
  },
  {
    id: "creme-chocolat-skyr",
    titre: "Crème au chocolat express au skyr",
    emoji: "🍮",
    categorie: "Dessert",
    tags: ["végétarien", "sans gluten"],
    temps: 5,
    difficulte: 1,
    portions: 2,
    proteines: 17,
    kcal: 170,
    ingredients: [
      { qte: 300, unite: "g", nom: "skyr nature" },
      { qte: 15, unite: "g", nom: "cacao en poudre non sucré" },
      { qte: 2, unite: "c. à soupe", nom: "sirop d'érable" },
      { qte: 10, unite: "g", nom: "chocolat noir en copeaux" }
    ],
    etapes: [
      "Fouetter le skyr avec le cacao et le sirop d'érable.",
      "Répartir dans deux verres et parsemer de copeaux de chocolat."
    ],
    astuce: "Un dessert qui passe même les soirs d'entraînement."
  },

  // ---------------- Le reste du carnet ----------------

  {
    id: "curry-pois-chiches",
    titre: "Curry de pois chiches au lait de coco",
    emoji: "🍛",
    categorie: "Plat",
    tags: ["végétarien", "vegan", "sans gluten"],
    temps: 30,
    difficulte: 1,
    portions: 4,
    proteines: 13,
    kcal: 370,
    ingredients: [
      { qte: 2, unite: "boîtes", nom: "pois chiches égouttés" },
      { qte: 400, unite: "ml", nom: "lait de coco" },
      { qte: 400, unite: "g", nom: "tomates concassées" },
      { qte: 1, unite: "", nom: "oignon" },
      { qte: 2, unite: "gousses", nom: "ail" },
      { qte: 2, unite: "c. à soupe", nom: "curry en poudre" },
      { qte: 100, unite: "g", nom: "pousses d'épinards" }
    ],
    etapes: [
      "Émincer l'oignon et l'ail, les faire revenir 5 minutes dans un filet d'huile.",
      "Ajouter le curry et remuer 1 minute pour réveiller les épices.",
      "Verser les tomates, le lait de coco et les pois chiches. Laisser mijoter 15 minutes.",
      "Ajouter les épinards à la fin, ils fondent en 2 minutes. Saler, goûter, servir avec du riz."
    ],
    astuce: "Encore meilleur le lendemain. Un filet de citron vert juste avant de servir change tout."
  },
  {
    id: "shakshuka",
    titre: "Shakshuka",
    emoji: "🍳",
    categorie: "Plat",
    tags: ["végétarien", "sans gluten"],
    temps: 25,
    difficulte: 1,
    portions: 2,
    proteines: 18,
    kcal: 310,
    ingredients: [
      { qte: 4, unite: "", nom: "œufs" },
      { qte: 400, unite: "g", nom: "tomates concassées" },
      { qte: 1, unite: "", nom: "poivron rouge" },
      { qte: 1, unite: "", nom: "oignon" },
      { qte: 1, unite: "c. à café", nom: "cumin" },
      { qte: 1, unite: "c. à café", nom: "paprika" },
      { qte: 50, unite: "g", nom: "feta" }
    ],
    etapes: [
      "Faire revenir l'oignon et le poivron émincés 8 minutes à la poêle.",
      "Ajouter les épices puis les tomates. Laisser réduire 8 minutes.",
      "Creuser 4 petits puits, y casser les œufs. Couvrir et cuire 5 minutes.",
      "Émietter la feta par-dessus et servir directement dans la poêle."
    ],
    astuce: "Avec 6 œufs au lieu de 4, on passe au-dessus de 20 g de protéines par portion."
  },
  {
    id: "risotto-champignons",
    titre: "Risotto aux champignons",
    emoji: "🍄",
    categorie: "Plat",
    tags: ["végétarien"],
    temps: 40,
    difficulte: 2,
    portions: 4,
    proteines: 12,
    kcal: 400,
    ingredients: [
      { qte: 300, unite: "g", nom: "riz arborio" },
      { qte: 400, unite: "g", nom: "champignons de Paris" },
      { qte: 1, unite: "l", nom: "bouillon de légumes chaud" },
      { qte: 1, unite: "", nom: "échalote" },
      { qte: 10, unite: "cl", nom: "vin blanc sec" },
      { qte: 50, unite: "g", nom: "parmesan râpé" },
      { qte: 30, unite: "g", nom: "beurre" }
    ],
    etapes: [
      "Poêler les champignons émincés à feu vif, réserver.",
      "Dans la même casserole, faire suer l'échalote puis nacrer le riz 2 minutes.",
      "Déglacer au vin blanc, puis ajouter le bouillon louche par louche en remuant, environ 18 minutes.",
      "Hors du feu, ajouter le beurre, le parmesan et les champignons. Couvrir 2 minutes avant de servir."
    ],
    astuce: "Le bouillon doit être chaud, sinon la cuisson du riz se bloque à chaque louche."
  },
  {
    id: "veloute-butternut",
    titre: "Velouté de butternut coco",
    emoji: "🎃",
    categorie: "Entrée",
    tags: ["végétarien", "vegan", "sans gluten"],
    temps: 35,
    difficulte: 1,
    portions: 4,
    proteines: 4,
    kcal: 200,
    ingredients: [
      { qte: 1, unite: "", nom: "courge butternut" },
      { qte: 1, unite: "", nom: "oignon" },
      { qte: 20, unite: "cl", nom: "lait de coco" },
      { qte: 70, unite: "cl", nom: "bouillon de légumes" },
      { qte: 1, unite: "c. à café", nom: "gingembre râpé" }
    ],
    etapes: [
      "Éplucher et couper la butternut en cubes, émincer l'oignon.",
      "Faire revenir l'oignon, ajouter la courge, le gingembre et le bouillon.",
      "Cuire 20 minutes à couvert, jusqu'à ce que la courge s'écrase à la fourchette.",
      "Mixer avec le lait de coco. Ajuster sel et poivre."
    ],
    astuce: "Quelques graines de courge grillées à la poêle sur le dessus, et c'est un plat de restaurant."
  },
  {
    id: "houmous",
    titre: "Houmous maison",
    emoji: "🧆",
    categorie: "Apéro",
    tags: ["végétarien", "vegan", "sans gluten"],
    temps: 10,
    difficulte: 1,
    portions: 4,
    proteines: 6,
    kcal: 200,
    ingredients: [
      { qte: 1, unite: "boîte", nom: "pois chiches égouttés" },
      { qte: 2, unite: "c. à soupe", nom: "tahini" },
      { qte: 1, unite: "", nom: "citron (jus)" },
      { qte: 1, unite: "gousse", nom: "ail" },
      { qte: 3, unite: "c. à soupe", nom: "huile d'olive" }
    ],
    etapes: [
      "Mettre tous les ingrédients dans le mixeur avec 3 c. à soupe d'eau froide.",
      "Mixer 2 bonnes minutes, jusqu'à obtenir une texture lisse.",
      "Servir avec un filet d'huile d'olive et une pincée de paprika."
    ],
    astuce: "Plus tu mixes longtemps, plus il est crémeux. Sois patiente avec le mixeur."
  },
  {
    id: "mousse-chocolat",
    titre: "Mousse au chocolat",
    emoji: "🍫",
    categorie: "Dessert",
    tags: ["végétarien", "sans gluten"],
    temps: 20,
    difficulte: 2,
    portions: 4,
    proteines: 13,
    kcal: 380,
    ingredients: [
      { qte: 200, unite: "g", nom: "chocolat noir" },
      { qte: 6, unite: "", nom: "œufs" },
      { qte: 1, unite: "pincée", nom: "sel" }
    ],
    etapes: [
      "Faire fondre le chocolat au bain-marie, laisser tiédir.",
      "Séparer les blancs des jaunes. Incorporer les jaunes au chocolat.",
      "Monter les blancs en neige ferme avec le sel.",
      "Incorporer délicatement les blancs au chocolat en soulevant la masse.",
      "Réserver au frais au moins 3 heures."
    ],
    astuce: "Le temps indiqué n'inclut pas le repos au frigo. Prévois-la la veille."
  },
  {
    id: "crumble-pommes-poires",
    titre: "Crumble pommes-poires",
    emoji: "🍏",
    categorie: "Dessert",
    tags: ["végétarien"],
    temps: 45,
    difficulte: 1,
    portions: 6,
    proteines: 3,
    kcal: 370,
    ingredients: [
      { qte: 3, unite: "", nom: "pommes" },
      { qte: 3, unite: "", nom: "poires" },
      { qte: 150, unite: "g", nom: "farine" },
      { qte: 100, unite: "g", nom: "sucre roux" },
      { qte: 100, unite: "g", nom: "beurre froid" },
      { qte: 1, unite: "c. à café", nom: "cannelle" }
    ],
    etapes: [
      "Préchauffer le four à 180 °C.",
      "Couper les fruits en morceaux, les mettre dans un plat avec la cannelle.",
      "Sabler du bout des doigts la farine, le sucre et le beurre en cubes.",
      "Répartir la pâte sur les fruits et enfourner 30 minutes, jusqu'à ce que ce soit doré."
    ],
    astuce: "Remplace 50 g de farine par de la poudre d'amande pour un crumble plus fondant."
  },

  // ↑ Colle tes nouvelles recettes juste au-dessus de cette ligne
];

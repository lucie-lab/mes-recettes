// ============================================================
//  TES RECETTES
//  Pour en ajouter une : copie un bloc { ... } en entier,
//  colle-le avant le "];" final, puis modifie-le.
//  ⚠️ Chaque bloc se termine par une virgule "},"
//
//  categorie : "Entrée", "Plat", "Dessert", "Apéro", "Boisson" ou "Petit-déj"
//  tags      : ce que tu veux, ex. "végétarien", "vegan", "sans gluten"
//  temps     : en minutes (≤ 30 = apparaît dans le filtre "Rapide")
//  difficulte: 1 (facile), 2 (moyen), 3 (on s'accroche)
// ============================================================

const RECETTES = [
  {
    id: "curry-pois-chiches",
    titre: "Curry de pois chiches au lait de coco",
    emoji: "🍛",
    categorie: "Plat",
    tags: ["végétarien", "vegan", "sans gluten"],
    temps: 30,
    difficulte: 1,
    portions: 4,
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
    astuce: "Le jaune doit rester coulant : surveille à partir de 4 minutes."
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
  }
];

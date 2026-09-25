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
    id: "le-meilleur-fondant-au-chocolat",
    titre: "Le meilleur fondant au chocolat",
    emoji: "🍫",
    categorie: "Dessert",
    tags: ["végétarien"],
    temps: 70,
    difficulte: 2,
    portions: 10,
    proteines: 6,
    kcal: 400,
    ingredients: [
      { qte: 200, unite: "g", nom: "chocolat noir" },
      { qte: 200, unite: "g", nom: "beurre" },
      { qte: 6, unite: "", nom: "œufs" },
      { qte: 210, unite: "g", nom: "sucre (80 g pour les blancs, 130 g pour les jaunes)" },
      { qte: 35, unite: "g", nom: "farine" },
      { qte: 35, unite: "g", nom: "cacao en poudre" },
      { qte: 1, unite: "pincée", nom: "sel" }
    ],
    etapes: [
      "Préchauffer le four à 180 °C et beurrer le moule.",
      "Faire fondre le chocolat et le beurre ensemble, puis ajouter la farine tamisée et le cacao. Bien mélanger.",
      "Séparer les blancs des jaunes.",
      "Blanchir les jaunes avec 130 g de sucre, puis ajouter le mélange au chocolat et mélanger jusqu'à ce que ce soit homogène.",
      "Monter les blancs en neige avec la pincée de sel, puis les serrer avec 80 g de sucre.",
      "Incorporer délicatement les blancs au mélange chocolaté, en soulevant la pâte.",
      "Verser les trois quarts de la pâte dans le moule et enfourner 25 minutes.",
      "Sortir le fondant du four et le laisser reposer quelques minutes.",
      "Étaler le reste de la pâte sur le dessus, puis remettre au four 10 minutes."
    ],
    astuce: "Une cuillère à café de café soluble dissoute dans le chocolat fondu pour que le chocolat paraisse plus profond. C'est le plus connu des secrets de pâtissier.\n\nQuelques grains de fleur de sel sur le dessus à la sortie du four."
  },
  
  // ↑ Colle tes nouvelles recettes juste au-dessus de cette ligne
];

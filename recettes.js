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


  {
    id: "poulet-cremeux-ail-parmesan-champignons-et-epinards",
    titre: "Poulet crémeux ail-parmesan, champignons et épinards",
    emoji: "🧄",
    categorie: "Plat",
    tags: [],
    temps: 30,
    difficulte: 1,
    portions: 2,
    proteines: 70,
    kcal: 900,
    ingredients: [
      { qte: 400, unite: "g", nom: "blancs de poulet" },
      { qte: 1, unite: "c. à café", nom: "paprika fumé" },
      { qte: 1, unite: "c. à café", nom: "sel" },
      { qte: 0.5, unite: "c. à café", nom: "poivre noir" },
      { qte: 1, unite: "c. à soupe", nom: "huile d'olive" },
      { qte: 200, unite: "g", nom: "champignons de Paris émincés" },
      { qte: 3, unite: "gousses", nom: "ail hachées" },
      { qte: 150, unite: "ml", nom: "crème fraîche épaisse" },
      { qte: 50, unite: "g", nom: "parmesan râpé" },
      { qte: 100, unite: "g", nom: "pousses d'épinards" },
      { qte: 160, unite: "g", nom: "pâtes (tagliatelles ou penne)" }
    ],
    etapes: [
      "Mettre l'eau des pâtes à chauffer. Couper les blancs de poulet en deux dans l'épaisseur et les assaisonner avec le paprika, le sel et le poivre.",
      "Chauffer l'huile à feu vif dans une grande poêle et dorer le poulet 4 à 5 minutes par face sans le bouger, jusqu'à ce qu'il ne soit plus rosé à cœur. Réserver sur une assiette.",
      "Lancer la cuisson des pâtes dans l'eau salée. Garder une tasse d'eau de cuisson avant d'égoutter.",
      "Dans la même poêle, sans la laver, faire dorer les champignons à feu vif en remuant peu, 5 à 6 minutes. Ajouter l'ail et cuire 1 minute.",
      "Verser un peu d'eau des pâtes pour décoller les sucs du fond, puis ajouter la crème et laisser épaissir 3 minutes à feu doux.",
      "Hors du feu, ajouter le parmesan en remuant jusqu'à ce qu'il fonde, puis les épinards, qui tombent en une minute.",
      "Couper le poulet en tranches et le remettre dans la sauce avec son jus, puis ajouter les pâtes égouttées. Mélanger 1 minute à feu doux, avec un peu d'eau des pâtes si la sauce est trop épaisse."
    ],
    astuce: "Ajouter 40g de tomates séchées avec l'ail pour une version toscane. Un zeste de citron juste avant de servir réveille toute la sauce. Pour alléger, remplacer la moitié de la crème par du skyr (à ajouter hors du feu)."
  },
  
  
  // ↑ Colle tes nouvelles recettes juste au-dessus de cette ligne
];

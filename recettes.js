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
    tags: ["volaille"],
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

    {
    id: "soupe-de-pommes-de-terre",
    titre: "Soupe de pommes de terre",
    emoji: "🥔",
    categorie: "Plat",
        tags: ["viande"],
      temps: 50,
    difficulte: 1,
    portions: 6,
    proteines: 22,
    kcal: 680,
    ingredients: [
      { qte: 200, unite: "g", nom: "lardons fumés" },
      { qte: 40, unite: "g", nom: "beurre" },
      { qte: 1, unite: "", nom: "oignon jaune" },
      { qte: 3, unite: "gousses", nom: "ail" },
      { qte: 1, unite: "c. à café", nom: "paprika" },
      { qte: 0.5, unite: "c. à café", nom: "épices chili con carne" },
      { qte: 0.5, unite: "", nom: "cube de bouillon de volaille émietté" },
      { qte: 35, unite: "g", nom: "farine" },
      { qte: 25, unite: "cl", nom: "crème liquide entière" },
      { qte: 50, unite: "cl", nom: "lait entier" },
      { qte: 80, unite: "cl", nom: "bouillon de volaille (2 cubes)" },
      { qte: 1.2, unite: "kg", nom: "pommes de terre à chair farineuse" },
      { qte: 200, unite: "g", nom: "cheddar affiné râpé" },
      { qte: 60, unite: "g", nom: "crème fraîche épaisse, plus un peu pour le service" },
      { qte: 1, unite: "", nom: "petit bouquet de ciboulette" },
      { qte: "", unite: "", nom: "Sel et poivre" }
    ],
    etapes: [
      "Dans une cocotte en fonte (ou une grande casserole ou un faitout), faire dorer les lardons à feu moyen. Les réserver en laissant un peu de gras dans la cocotte.",
      "Ajouter le beurre, puis l'oignon coupé en dés. Cuire 5 minutes à feu moyen-doux jusqu'à ce qu'il soit transparent.",
      "Ajouter l'ail haché, le paprika, les épices chili, le poivre et le demi-cube de bouillon émietté. Remuer 1 minute.",
      "Ajouter la farine et remuer 1 à 2 minutes pour qu'elle perde son goût cru.",
      "Verser le bouillon petit à petit en fouettant pour éviter les grumeaux.",
      "Ajouter les pommes de terre coupées en dés d'environ 2 cm. Porter à ébullition, puis baisser à feu moyen-doux (garder un frémissement). Couvrir et cuire 15 à 20 minutes, jusqu'à ce qu'elles s'écrasent facilement à la fourchette.",
      "Baisser à feu doux, verser la crème liquide et le lait, puis réchauffer 3 à 4 minutes en remuant (sans faire bouillir).",
      "Hors du feu, ajouter le cheddar et la crème fraîche, puis écraser grossièrement au presse-purée.",
      "Ajouter les lardons, en gardant une poignée pour le service. Goûter, et saler seulement maintenant si besoin.",
      "Servir avec le reste des lardons, la ciboulette ciselée et une petite cuillère de crème fraîche."
    ],
    astuce: "Pommes de terre farineuses (type Bintje) donnent une soupe onctueuse. Prendre le cheddar le plus affiné possible (pour le caractère)."
  },

    {
    id: "shakshuka-du-lendemain-d-entrainement",
    titre: "Shakshuka du lendemain d'entraînement",
    emoji: "🍳",
    categorie: "Plat",
    tags: ["poisson"],
    temps: 35,
    difficulte: 1,
    portions: 2,
    proteines: 40,
    kcal: 680,
    ingredients: [
      { qte: 4, unite: "", nom: "tomates bien mûres" },
      { qte: 1, unite: "c. à soupe", nom: "concentré de tomate" },
      { qte: 1, unite: "", nom: "poivron rouge" },
      { qte: 1, unite: "", nom: "poivron jaune" },
      { qte: 1, unite: "", nom: "oignon" },
      { qte: 2, unite: "gousses", nom: "ail" },
      { qte: 2, unite: "c. à café", nom: "huile d'olive" },
      { qte: 1, unite: "c. à café", nom: "cumin" },
      { qte: 1, unite: "c. à café", nom: "paprika" },
      { qte: 1, unite: "pincée", nom: "piment (facultatif)" },
      { qte: 80, unite: "g", nom: "thon au naturel égoutté" },
      { qte: 4, unite: "", nom: "œufs" },
      { qte: "", unite: "", nom: "Sel et poivre" },
      { qte: 1, unite: "", nom: "petit bouquet de persil ou de coriandre" },
      { qte: 300, unite: "g", nom: "pain complet" }
    ],
    etapes: [
      "Couper les tomates en morceaux, émincer l'oignon, couper les poivrons en petits cubes et hacher l'ail.",
      "Chauffer l'huile dans une grande poêle à feu moyen. Faire revenir l'oignon et les poivrons 8 minutes (jusqu'à ce qu'ils ramollissent).",
      "Ajouter l'ail, le cumin, le paprika et le piment. Remuer 1 minute.",
      "Ajouter les tomates et le concentré de tomate, saler et poivrer. Laisser mijoter 10 minutes (jusqu'à obtenir une sauce épaisse et fondante).",
      "Incorporer le thon émietté.",
      "Former quatre creux dans la sauce et y casser les œufs. Saler légèrement, couvrir et cuire 5 à 7 minutes à feu doux (le jaune doit être encore coulant).",
      "Parsemer de persil ou de coriandre et servir directement dans la poêle, avec le pain complet grillé."
    ],
    astuce: "Des tomates fades ? Remplacer-les par une boîte de 400 g de tomates concassées. 50 g de feta émiettée sur le dessus ajoutent environ 4 g de protéines par portion."
  },  
  
  // ↑ Colle tes nouvelles recettes juste au-dessus de cette ligne
];

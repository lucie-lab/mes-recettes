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
  
  {
    id: "dinde-a-l-estragon-sauce-moutarde-et-legumes-mijotes-a-la-tomate-2",
    titre: "Dinde à l'estragon, sauce moutarde et légumes mijotés à la tomate",
    emoji: "🦃",
    categorie: "Plat",
    tags: [],
    temps: 40,
    difficulte: 1,
    portions: 2,
    proteines: 47,
    kcal: 850,
    ingredients: [
      { qte: 2, unite: "", nom: "filets de dinde (environ 300 g)" },
      { qte: 500, unite: "g", nom: "petites pommes de terre (grenaille)" },
      { qte: 200, unite: "g", nom: "haricots verts" },
      { qte: 1, unite: "", nom: "oignon jaune" },
      { qte: 2, unite: "", nom: "échalotes" },
      { qte: 2, unite: "gousses", nom: "ail" },
      { qte: 2, unite: "c. à soupe", nom: "huile d'olive" },
      { qte: 10, unite: "g", nom: "beurre" },
      { qte: 1, unite: "c. à soupe", nom: "concentré de tomate" },
      { qte: 1, unite: "boîte", nom: "tomates concassées (400 g)" },
      { qte: 0.5, unite: "", nom: "cube de bouillon de volaille" },
      { qte: 30, unite: "cl", nom: "eau chaude" },
      { qte: 1, unite: "feuille", nom: "laurier" },
      { qte: 1, unite: "pincée", nom: "sucre" },
      { qte: 5, unite: "cl", nom: "vin blanc sec (facultatif)" },
      { qte: 1, unite: "c. à soupe", nom: "moutarde de Dijon" },
      { qte: 15, unite: "cl", nom: "crème liquide entière" },
      { qte: 1, unite: "", nom: "petite poignée d'estragon frais (une dizaine de feuilles)" },
      { qte: 0.5, unite: "", nom: "citron" },
      { qte: "", unite: "", nom: "Sel et poivre" }
    ],
    etapes: [
      "Émincer l'oignon et une échalote, hacher l'ail. Couper les plus grosses pommes de terre en deux et équeuter les haricots verts. Dissoudre le demi-cube de bouillon dans l'eau chaude.",
      "Dans une sauteuse, chauffer 1 c. à soupe d'huile à feu moyen et faire revenir l'oignon, l'échalote et l'ail 3 à 4 minutes.",
          "Ajouter le concentré de tomate et remuer 1 minute. Verser le bouillon, ajouter les pommes de terre et le laurier. Couvrir et cuire 15 minutes à feu moyen, jusqu'à ce que les pommes de terre soient presque tendres.",
      "Ajouter les tomates concassées et le sucre. Poivrer et saler légèrement.",
      "Ajouter les haricots verts et cuire encore 10 minutes à découvert, pour que la sauce épaississe. Retirer le laurier.",
      "Pendant ce temps, placer les filets de dinde entre deux feuilles de papier cuisson et les aplatir avec le fond d'une casserole, jusqu'à environ 1 cm d'épaisseur. Ciseler la seconde échalote et hacher l'estragon.",
      "Dans une poêle, chauffer le reste de l'huile avec le beurre à feu moyen-vif. Dorer la dinde 3 minutes par face (jusqu'à ce qu'elle ne soit plus rosée à cœur). Saler, poivrer et réserver sur une assiette.",
      "Baisser le feu et faire suer l'échalote 1 minute dans la même poêle, puis déglacer au vin blanc, ou avec 3 c. à soupe d'eau, en grattant bien les sucs.",
      "Ajouter la moutarde, la crème et la moitié de l'estragon. Laisser frémir 2 à 3 minutes à feu doux, jusqu'à ce que la sauce nappe la cuillère.",
      "Remettre la dinde et son jus dans la sauce 1 minute pour la réchauffer. Hors du feu, ajouter le reste de l'estragon et quelques gouttes de jus de citron. Goûter et ajuster le sel et le poivre.",
      "Servir la dinde nappée de sauce, avec les légumes à la tomate."
    ],
    astuce: "Pour plus de caractère, ajoute 1 c. à café de moutarde à l'ancienne en même temps que la moutarde de Dijon. Ne laisse pas la dinde mijoter longtemps dans la sauce, sinon elle sèche (une minute suffit)."
  },

  {
    id: "boeuf-mijote-d-automne-et-puree-a-l-ail-roti",
    titre: "Bœuf mijoté d'automne et purée à l'ail rôti",
    emoji: "🍂",
    categorie: "Plat",
    tags: [],
    temps: 195,
    difficulte: 2,
    portions: 2,
    proteines: 58,
    kcal: 1200,
    ingredients: [
      { qte: 500, unite: "g", nom: "paleron de bœuf (en un morceau)" },
      { qte: 1, unite: "", nom: "oignon jaune" },
      { qte: 1, unite: "", nom: "branche de céleri" },
      { qte: 2, unite: "", nom: "grosses carottes" },
      { qte: 250, unite: "g", nom: "petites pommes de terre (facultatif)" },
      { qte: 3, unite: "gousses", nom: "ail" },
      { qte: 1, unite: "c. à soupe", nom: "huile" },
      { qte: 1, unite: "c. à soupe", nom: "concentré de tomate" },
      { qte: 15, unite: "cl", nom: "vin rouge" },
      { qte: 50, unite: "cl", nom: "bouillon de bœuf (1 cube)" },
      { qte: 1, unite: "c. à soupe", nom: "fond de veau en poudre" },
      { qte: 1, unite: "c. à soupe", nom: "sauce Worcestershire" },
      { qte: 1, unite: "feuille", nom: "laurier" },
      { qte: 1, unite: "", nom: "branche de romarin" },
      { qte: 5, unite: "", nom: "brins de thym" },
      { qte: 45, unite: "g", nom: "beurre" },
      { qte: 500, unite: "g", nom: "pommes de terre à chair farineuse" },
      { qte: 1, unite: "", nom: "tête d'ail" },
      { qte: 10, unite: "cl", nom: "crème liquide entière" },
      { qte: 1, unite: "pincée", nom: "muscade" },
      { qte: "", unite: "", nom: "Persil frais" },
      { qte: "", unite: "", nom: "Sel et poivre" }
    ],
    etapes: [
      "Sortir la viande du frigo 30 minutes avant, puis la saler et la poivrer de tous les côtés. Émincer l'oignon, couper le céleri en dés et les carottes en gros tronçons, hacher les 3 gousses d'ail.",
      "Dans un faitout, chauffer l'huile à feu vif et saisir la viande 3 à 4 minutes sur chaque face, jusqu'à ce qu'elle soit bien dorée. Réserver sur une assiette.",
      "Baisser à feu moyen, faire revenir l'oignon et le céleri 8 minutes jusqu'à ce qu'ils caramélisent, puis ajouter l'ail haché 1 minute.",
      "Ajouter le concentré de tomate et remuer 1 minute. Verser le vin rouge en grattant bien les sucs du fond, et laisser réduire de moitié.",
      "Ajouter le bouillon, le fond de veau, la sauce Worcestershire et le laurier. Remettre la viande et son jus, avec le romarin et 3 brins de thym. Le liquide doit arriver aux deux tiers de la viande : compléter avec un peu d'eau si besoin.",
      "Porter à frémissement, couvrir et cuire 1 h 30 à feu très doux, en retournant la viande à mi-cuisson.",
      "Ajouter les carottes, les petites pommes de terre et 15 g de beurre. Couvrir et cuire encore 1 heure, jusqu'à ce que la viande se défasse à la fourchette.",
      "45 minutes avant la fin, préchauffer le four à 180 °C. Couper le haut de la tête d'ail, l'arroser d'un filet d'huile, l'emballer dans du papier aluminium et l'enfourner 35 minutes.",
      "Pendant ce temps, mettre les pommes de terre à chair farineuse épluchées et coupées en morceaux dans une casserole d'eau froide salée. Porter à ébullition et cuire 20 minutes, jusqu'à ce qu'elles soient tendres.",
      "Dans une petite casserole, chauffer la crème avec 30 g de beurre et 2 brins de thym, sans faire bouillir. Retirer le thym.",
      "Égoutter les pommes de terre et les remettre 1 minute sur le feu pour les sécher. Presser les gousses d'ail rôti dessus, écraser au presse-purée, puis ajouter la crème chaude petit à petit. Saler, poivrer et ajouter la muscade.",
      "Retirer les herbes et le laurier du faitout. Si la sauce est trop liquide, sortir la viande et les légumes et la faire réduire 5 à 10 minutes à découvert. Goûter et ajuster le sel.",
      "Servir la purée en fond d'assiette, avec la viande en gros morceaux, les légumes et beaucoup de sauce. Parsemer de persil."
    ],
    astuce: "Comme tous les plats mijotés, il est encore meilleur le lendemain. Se garde 3 jours au frigo ; réchauffer la purée avec un peu de lait. \nSans vin, remplacer par du bouillon et 1 c. à café de vinaigre balsamique."
  },

  {
    id: "lasagnes-vegetariennes-aux-lentilles-champignons-et-ricotta-epinards",
    titre: "Lasagnes végétariennes aux lentilles, champignons et ricotta-épinards",
    emoji: "🍅",
    categorie: "Plat",
    tags: ["végétarien"],
    temps: 110,
    difficulte: 2,
    portions: 4,
    proteines: 40,
    kcal: 700,
    ingredients: [
      { qte: 180, unite: "g", nom: "lentilles vertes" },
      { qte: 2, unite: "c. à soupe", nom: "huile d'olive" },
      { qte: 250, unite: "g", nom: "champignons de Paris" },
      { qte: 1, unite: "", nom: "oignon" },
      { qte: 1, unite: "", nom: "carotte" },
      { qte: 2, unite: "gousses", nom: "ail" },
      { qte: 1.5, unite: "c. à soupe", nom: "concentré de tomate" },
      { qte: 50, unite: "cl", nom: "coulis de tomate (passata)" },
      { qte: 15, unite: "cl", nom: "bouillon de légumes" },
      { qte: 1, unite: "c. à soupe", nom: "sauce soja" },
      { qte: 1, unite: "c. à café", nom: "origan séché" },
      { qte: 0.5, unite: "c. à café", nom: "sel" },
      { qte: 200, unite: "g", nom: "épinards frais" },
      { qte: 250, unite: "g", nom: "ricotta" },
      { qte: 1, unite: "", nom: "œuf" },
      { qte: 50, unite: "g", nom: "parmesan ou grana végétarien râpé" },
      { qte: 1, unite: "pincée", nom: "noix de muscade" },
      { qte: 0.5, unite: "", nom: "citron (zeste)" },
      { qte: 170, unite: "g", nom: "feuilles de lasagne sans précuisson" },
      { qte: 1, unite: "", nom: "boule de mozzarella (125 g)" },
      { qte: "", unite: "", nom: "Poivre" }
    ],
    etapes: [
      "Rincer les lentilles et les cuire 15 minutes dans un grand volume d'eau non salée (elles doivent rester un peu fermes). Égoutter.",
      "Pendant ce temps, hacher finement les champignons et l'oignon, couper la carotte en petits dés et hacher l'ail.",
      "Dans une sauteuse, chauffer 1 c. à soupe d'huile à feu vif et faire dorer les champignons 8 minutes en remuant peu jusqu'à ce que leur eau soit évaporée et qu'ils soient bien colorés. Réserver.",
      "Baisser à feu moyen, ajouter le reste de l'huile, l'oignon et la carotte, cuire 5 minutes.",
      "Ajouter l'ail et le concentré de tomate, remuer 1 minute. Remettre les champignons, puis ajouter le coulis, le bouillon, la sauce soja, l'origan, le sel et les lentilles. Laisser mijoter 20 minutes. La sauce doit rester un peu liquide car les feuilles de lasagne vont absorber ce jus en cuisant.",
      "Faire tomber les épinards 2 minutes à la poêle, les presser très fort pour retirer l'eau, puis les hacher. Les mélanger avec la ricotta, l'œuf, la moitié du parmesan, la muscade, le zeste de citron, du sel et du poivre.",
      "Préchauffer le four à 180 °C. Égoutter la mozzarella, la déchirer en morceaux et la sécher sur du papier absorbant.",
      "Si le moule est à charnière, envelopper le dessous et le bas des côtés de papier aluminium et le poser sur une plaque, pour éviter les fuites.",
      "Monter les lasagnes : une fine couche de bolognaise, une couche de feuilles de lasagne cassées pour suivre la forme du moule, de la bolognaise, puis de la crème ricotta-épinards. Répéter jusqu'à avoir 3 couches de pâtes. Terminer par de la bolognaise, la mozzarella et le reste du parmesan.",
      "Couvrir de papier aluminium et enfourner 25 minutes. Retirer l'aluminium et laisser gratiner encore 15 à 20 minutes.",
      "Laisser reposer 15 minutes avant de couper : les couches se tiennent et les parts sont nettes."
    ],
    astuce: "Pour un moule rond de 24 cm ou un plat rectangulaire d'environ 20 × 25 cm. Le parmesan classique est fabriqué avec de la présure animale (pour une version strictement végétarienne choisir un grana portant la mention végétarien). Se garde 3 jours au frigo et se réchauffe très bien."
  },



    {
    id: "boeuf-bourguignon",
    titre: "Bœuf bourguignon",
    emoji: "🍷",
    categorie: "Plat",
    tags: [],
    temps: 270,
    difficulte: 2,
    portions: 4,
    proteines: 57,
    kcal: 750,
    ingredients: [
      { qte: 1, unite: "kg", nom: "bœuf à mijoter (joue, paleron ou jarret)" },
      { qte: 75, unite: "cl", nom: "vin rouge (Bourgogne de préférence)" },
      { qte: 1, unite: "", nom: "oignon" },
      { qte: 3, unite: "", nom: "clous de girofle" },
      { qte: 3, unite: "gousses", nom: "ail" },
      { qte: 3, unite: "", nom: "carottes" },
      { qte: 4, unite: "", nom: "brins de thym" },
      { qte: 2, unite: "feuilles", nom: "laurier" },
      { qte: 200, unite: "g", nom: "lard fumé (poitrine fumée en morceau)" },
      { qte: 2, unite: "c. à soupe", nom: "huile" },
      { qte: 2, unite: "c. à soupe", nom: "farine" },
      { qte: 1, unite: "c. à soupe", nom: "concentré de tomate" },
      { qte: 50, unite: "cl", nom: "bouillon de bœuf (à hauteur)" },
      { qte: 15, unite: "", nom: "oignons grelots" },
      { qte: 250, unite: "g", nom: "champignons de Paris" },
      { qte: 30, unite: "g", nom: "beurre" },
      { qte: 1, unite: "pincée", nom: "sucre" },
      { qte: 1, unite: "", nom: "carré de chocolat noir à 70 % minimum" },
      { qte: "", unite: "", nom: "Sel et poivre" }
    ],
    etapes: [
      "La veille, couper la viande en gros cubes d'environ 5 cm. Éplucher les carottes et les couper en rondelles épaisses, écraser l'ail et piquer l'oignon avec les clous de girofle. Mettre le tout dans un grand récipient avec le thym et le laurier, couvrir de vin et laisser mariner 12 heures au frigo.",
      "Le jour même, égoutter la viande et les légumes, et filtrer la marinade au chinois ou dans une passoire fine en la gardant. Éponger soigneusement la viande avec du papier absorbant.",
      "Porter la marinade à ébullition dans une casserole, retirer la mousse grise qui se forme en surface, puis laisser bouillir 5 minutes.",
      "Couper le lard en lardons. Les mettre dans le faitout à froid, puis chauffer à feu moyen pour qu'ils rendent leur gras et dorent. Réserver.",
      "Dans ce gras, avec un peu d'huile si besoin, saisir la viande à feu vif en plusieurs fois, sans surcharger le faitout, jusqu'à ce qu'elle soit bien colorée de tous les côtés. Réserver.",
      "Faire revenir les carottes quelques minutes, ajouter le concentré de tomate, puis saupoudrer de farine et remuer 1 à 2 minutes.",
      "Remettre la viande, verser la marinade chaude en grattant bien les sucs du fond, puis compléter avec le bouillon jusqu'à hauteur. Ajouter l'oignon piqué, l'ail, le thym et le laurier. Poivrer, mais ne pas saler.",
      "Porter à frémissement, couvrir et cuire 3 à 4 heures à feu très doux, en remuant de temps en temps, jusqu'à ce que la viande se défasse à la fourchette.",
      "Pendant la dernière heure, éplucher les oignons grelots. Les mettre dans une poêle avec 15 g de beurre, le sucre et de l'eau à mi-hauteur. Cuire jusqu'à ce que l'eau s'évapore, puis les laisser caraméliser en les roulant. Réserver.",
      "Dans la même poêle, faire dorer les champignons coupés en quartiers dans le reste du beurre, à feu vif. Réserver.",
      "Retirer l'oignon piqué, le thym et le laurier. Ajouter les oignons grelots, les champignons et les lardons, puis laisser cuire 20 à 30 minutes à découvert, jusqu'à ce que la sauce nappe la cuillère.",
      "Hors du feu, faire fondre le carré de chocolat dans la sauce. Goûter, puis saler et poivrer."
    ],
    astuce: "Encore meilleur réchauffé le lendemain. Se garde 3 jours au frigo et se congèle très bien. Pour éplucher facilement les grelots frais, les plonger 1 minute dans l'eau bouillante, la peau glisse toute seule. Pas besoin d'un excellent vin. Servir avec des pommes de terre vapeur, des tagliatelles fraîches ou une purée."
  },


  {
    id: "boeuf-bourguignon-au-four",
    titre: "Bœuf bourguignon au four",
    emoji: "🥘",
    categorie: "Plat",
    tags: [],
    temps: 250,
    difficulte: 2,
    portions: 4,
    proteines: 57,
    kcal: 750,
    ingredients: [
      { qte: 1, unite: "kg", nom: "bœuf à mijoter (joue, paleron ou jarret)" },
      { qte: 75, unite: "cl", nom: "vin rouge (Bourgogne de préférence)" },
      { qte: 1, unite: "", nom: "oignon" },
      { qte: 3, unite: "", nom: "clous de girofle" },
      { qte: 3, unite: "gousses", nom: "ail" },
      { qte: 3, unite: "", nom: "carottes" },
      { qte: 4, unite: "", nom: "brins de thym" },
      { qte: 2, unite: "feuilles", nom: "laurier" },
      { qte: 200, unite: "g", nom: "lard fumé (poitrine fumée)" },
      { qte: 2, unite: "c. à soupe", nom: "huile" },
      { qte: 2, unite: "c. à soupe", nom: "farine" },
      { qte: 1, unite: "c. à soupe", nom: "concentré de tomate" },
      { qte: 70, unite: "cl", nom: "bouillon de bœuf" },
      { qte: 15, unite: "", nom: "oignons grelots" },
      { qte: 250, unite: "g", nom: "champignons de Paris" },
      { qte: 30, unite: "g", nom: "beurre" },
      { qte: 1, unite: "pincée", nom: "sucre" },
      { qte: 1, unite: "", nom: "carré de chocolat noir à 70 % minimum" },
      { qte: "", unite: "", nom: "Sel et poivre" }
    ],
    etapes: [
      "La veille, couper la viande en gros cubes d'environ 5 cm. Éplucher les carottes et les couper en rondelles épaisses, écraser l'ail et piquer l'oignon avec les clous de girofle. Mettre le tout dans un grand récipient ou un sac de congélation avec le thym et le laurier, couvrir de vin et laisser mariner 12 heures au frigo.",
      "Le jour même, préchauffer le four à 150 °C. Égoutter la viande et les légumes, filtrer la marinade dans une passoire fine en la gardant, et éponger soigneusement la viande avec du papier absorbant.",
      "Dans une casserole, porter la marinade à ébullition, retirer la mousse grise qui se forme en surface, puis laisser bouillir 5 minutes.",
      "Couper le lard en lardons. Les mettre dans une grande poêle à froid, puis chauffer à feu moyen pour qu'ils rendent leur gras et dorent. Réserver.",
      "Dans le gras de la poêle, avec l'huile, saisir la viande à feu vif en plusieurs fois, jusqu'à ce qu'elle soit bien colorée de tous les côtés. La disposer dans un plat allant au four, en une seule couche bien serrée.",
      "Dans la même poêle, faire revenir les carottes 3 minutes, ajouter le concentré de tomate, puis saupoudrer de farine et remuer 1 minute. Déglacer avec une louche de marinade chaude en grattant bien les sucs.",
      "Verser le contenu de la poêle dans la casserole de marinade, ajouter le bouillon et porter à frémissement en fouettant, jusqu'à ce que la sauce épaississe légèrement.",
      "Verser la sauce sur la viande et ajouter l'oignon piqué, l'ail, le thym et le laurier. Le liquide doit couvrir la viande aux deux tiers au moins : compléter avec un peu d'eau si besoin. Poivrer, mais ne pas saler. Couvrir de deux couches de papier aluminium bien serrées sur les bords.",
      "Enfourner 3 heures. À mi-cuisson, retourner les morceaux de viande et vérifier le niveau du liquide, en ajoutant un peu d'eau s'il a trop baissé. En fin de cuisson, la viande doit se défaire à la fourchette ; sinon, prolonger de 30 minutes.",
      "Pendant la dernière demi-heure, mettre les oignons grelots épluchés dans la poêle avec 15 g de beurre, le sucre et de l'eau à mi-hauteur. Cuire jusqu'à ce que l'eau s'évapore, puis les laisser caraméliser en les roulant. Réserver, puis faire dorer les champignons coupés en quartiers dans le reste du beurre, à feu vif.",
      "Sortir le plat du four et retirer l'oignon piqué, le thym et le laurier. Verser la sauce dans la casserole, en laissant la viande et les carottes dans le plat recouvert d'aluminium. Faire réduire la sauce 15 à 20 minutes à feu moyen, jusqu'à ce qu'elle nappe la cuillère.",
      "Hors du feu, faire fondre le chocolat dans la sauce. Goûter, puis saler et poivrer. Reverser la sauce sur la viande, ajouter les lardons, les oignons grelots et les champignons, et servir."
    ],
    astuce: "Choisir un plat juste assez grand pour contenir la viande en une couche serrée : plus il est large, plus il faut de liquide. L'aluminium remplace le couvercle de la cocotte, il doit être bien hermétique. Encore meilleur réchauffé le lendemain, se garde 3 jours au frigo et se congèle très bien. Servir avec des pommes de terre vapeur, des tagliatelles fraîches ou une purée."
  },


  {
    id: "cookies-au-beurre-noisette-et-deux-chocolats",
    titre: "Cookies au beurre noisette et deux chocolats",
    emoji: "🍪",
    categorie: "Dessert",
    tags: ["végétarien"],
    temps: 75,
    difficulte: 1,
    portions: 15,
    proteines: 2,
    kcal: 180,
    ingredients: [
      { qte: 100, unite: "g", nom: "beurre doux" },
      { qte: 50, unite: "g", nom: "sucre en poudre" },
      { qte: 75, unite: "g", nom: "cassonade" },
      { qte: 2, unite: "c. à soupe", nom: "crème fraîche épaisse" },
      { qte: 1, unite: "c. à café", nom: "extrait de vanille" },
      { qte: 115, unite: "g", nom: "farine" },
      { qte: 0.5, unite: "c. à café", nom: "bicarbonate de soude alimentaire (ou 2 c. à café rases de levure chimique)" },
      { qte: 0.5, unite: "c. à café", nom: "sel" },
      { qte: 0.5, unite: "c. à café", nom: "fécule de maïs (facultatif)" },
      { qte: 100, unite: "g", nom: "pépites de chocolat" },
      { qte: 80, unite: "g", nom: "chocolat noir à 60-70 %" },
      { qte: 1, unite: "pincée", nom: "fleur de sel" }
    ],
    etapes: [
      "Faire fondre le beurre dans une petite casserole à feu moyen, puis le laisser cuire 4 à 6 minutes en remuant, jusqu'à ce qu'il mousse, devienne doré et sente la noisette. Le verser aussitôt dans un saladier, avec les petits grains bruns du fond : ce sont eux qui donnent le goût.",
      "Laisser tiédir le beurre 15 minutes au frigo : il doit être tiède, pas chaud.",
      "Ajouter le sucre et la cassonade, et mélanger bien. Ajouter la crème fraîche et la vanille, puis mélanger jusqu'à ce que ce soit lisse.",
      "Dans un autre bol, mélanger la farine, le bicarbonate, le sel et la fécule. Les verser dans le saladier et mélanger juste jusqu'à ce qu'il n'y ait plus de farine visible, sans trop travailler la pâte.",
      "Hacher grossièrement le chocolat noir au couteau. L'ajouter à la pâte avec les pépites, en gardant une petite poignée de pépites pour la fin.",
      "Former des boules d'environ 35 g, de la taille d'une balle de ping-pong, et les poser sur une plaque recouverte de papier cuisson. Placer au frigo au moins 30 minutes.",
      "Préchauffer le four à 180 °C. Espacer les boules d'au moins 5 cm, car elles s'étalent, et cuire en deux fournées si besoin.",
      "Enfourner 10 à 11 minutes, jusqu'à ce que les bords soient dorés et que le centre paraisse encore un peu cru.",
      "À la sortie du four, piquer quelques pépites sur le dessus et parsemer d'un peu de fleur de sel. Laisser reposer 10 minutes sur la plaque : les cookies finissent de cuire et se raffermissent en refroidissant."
    ],
    astuce: "Pour des cookies encore meilleurs, laisser les boules de pâte une nuit au frigo : le goût caramel devient plus profond. Elles se congèlent aussi très bien, et se cuisent sans décongeler en ajoutant 1 à 2 minutes de cuisson. Avec de la levure chimique à la place du bicarbonate, les cookies seront un peu plus gonflés. Se gardent 4 à 5 jours dans une boîte hermétique."
  },
  
  
  // ↑ Colle tes nouvelles recettes juste au-dessus de cette ligne
];

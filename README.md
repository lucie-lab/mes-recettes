# Mes recettes

Un petit site de recettes, sans serveur ni base de données, hébergé gratuitement sur GitHub Pages.

## Les fichiers

- `recettes.js` : **tes recettes**. C'est le seul fichier que tu modifieras au quotidien.
- `index.html`, `style.css`, `app.js` : le site lui-même. Tu n'as pas besoin d'y toucher.

## Ajouter une recette

1. Sur le site, clique sur **＋ Ajouter une recette** et remplis la fiche.
2. Clique sur **Générer le code**, puis sur **Copier le code**.
3. Clique sur **Ouvrir recettes.js sur GitHub** : l'éditeur s'ouvre directement.
4. Colle le code juste au-dessus de la ligne `// ↑ Colle tes nouvelles recettes…`, tout en bas.
5. Clique sur **Commit changes**. Le site se met à jour en une à deux minutes. Si l'ancienne version s'affiche encore, rafraîchis avec Cmd + Maj + R.

Pour les ingrédients, écris-les comme tu parles : `200 g de farine`, `3 œufs`, `2 gousses d'ail`, `1/2 citron`. Le site sépare tout seul la quantité, l'unité et l'ingrédient.

Si le site affiche « Le fichier recettes.js contient une erreur », c'est presque toujours une virgule oubliée ou un bloc collé au mauvais endroit dans la dernière recette ajoutée.

## Protéines et calories

Chaque recette peut indiquer `proteines` et `kcal` **par portion**. À partir de 20 g de protéines par portion, elle apparaît dans le filtre **💪 Riche en protéines**. Ce seuil se change en haut de `app.js` (`SEUIL_PROTEINES`).

Les valeurs des recettes fournies sont des estimations faites à partir de tables nutritionnelles classiques, pas des mesures. Elles donnent un ordre de grandeur fiable, pas une précision au gramme près.

## Ce que fait le site

- La recherche porte sur le nom, les ingrédients et les tags.
- Les onglets affichent chaque catégorie, et les filtres se combinent (protéines, végétarien, rapide, favoris…).
- Le tri classe par nom, par protéines ou par temps de préparation.
- Le bouton 🎲 tire une recette au hasard, en respectant les filtres actifs.
- Dans une fiche, tu peux ajuster les portions (les quantités suivent), cocher les ingrédients, barrer les étapes, copier la liste de courses, partager la recette et garder l'écran allumé.
- Chaque recette a son propre lien (`…/#poulet-teriyaki`).
- Les favoris ★ sont gardés dans le navigateur : ils ne se synchronisent pas entre appareils.

## Sur téléphone

Dans Safari, ouvre le site puis Partager → **Sur l'écran d'accueil**. Tu obtiens une icône comme une app.

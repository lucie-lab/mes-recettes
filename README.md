# Mes recettes

Un petit site de recettes, sans serveur ni base de données, hébergé gratuitement sur GitHub Pages.

## Les fichiers

- `recettes.js` : **tes recettes**. C'est le seul fichier que tu modifieras au quotidien.
- `index.html`, `style.css`, `app.js` : le site lui-même. Tu n'as pas besoin d'y toucher.

## Mettre le site en ligne

1. Sur GitHub, crée un nouveau dépôt (par exemple `mes-recettes`). Il doit être **public**, sauf si tu as un compte payant.
2. Clique sur **Add file → Upload files** et dépose les 4 fichiers (`index.html`, `style.css`, `app.js`, `recettes.js`).
3. Va dans **Settings → Pages**, puis dans **Source**, choisis **Deploy from a branch**, puis la branche `main` et le dossier `/ (root)`. Enregistre.
4. Au bout d'une minute ou deux, ton site est disponible sur `https://ton-pseudo.github.io/mes-recettes/`.

## Ajouter une recette

Tout se fait depuis le navigateur, sans rien installer :

1. Ouvre `recettes.js` sur GitHub et clique sur le crayon ✏️.
2. Copie un bloc de recette en entier, de `{` jusqu'à `},`.
3. Colle-le juste avant le `];` final, puis modifie le texte.
4. Clique sur **Commit changes**. Le site se met à jour en une minute environ.

Quelques règles à respecter :
- l'`id` doit être unique, sans espace ni accent (ex. `tarte-poireaux`) ;
- chaque bloc se termine par une virgule `},` ;
- les textes sont entre guillemets `"..."`. Si ta phrase contient elle-même un guillemet droit, remplace-le par « » ;
- pour une quantité « à votre goût », mets `qte: ""`.

Si le site affiche « Le fichier recettes.js contient une erreur », c'est presque toujours une virgule oubliée dans la dernière recette ajoutée.

## Ce que fait le site

- La recherche porte sur le nom, les ingrédients et les tags (« chocolat », « courgette », « vegan »…).
- Les onglets affichent chaque catégorie, et les filtres se combinent (végétarien, rapide, favoris…).
- Le bouton 🎲 tire une recette au hasard, en respectant les filtres actifs.
- Dans une fiche, tu peux ajuster le nombre de portions (les quantités suivent), cocher les ingrédients, barrer les étapes, et garder l'écran allumé.
- Chaque recette a son propre lien (`…/#mousse-chocolat`), pratique pour la partager.
- Les favoris ★ sont gardés dans ton navigateur : ils ne se synchronisent pas entre ton téléphone et ton ordinateur.

## Tester en local

Il suffit d'ouvrir `index.html` dans ton navigateur par un double-clic.

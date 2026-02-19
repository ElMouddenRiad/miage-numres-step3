# Q1 : Donner la tailles des fichiers générer par la commande.
Réponse:
polyfills.js        | polyfills     |  90.20 kB | 
main.js             | main          |  18.18 kB | 
styles.css          | styles        |  95 bytes | 


# Q2 : Donner la tailles des fichiers générer par la commande.
Réponse:
Initial chunk files   | Names         |  Raw size | Estimated transfer size
main-FT3QBEBB.js      | main          | 208.48 kB |                56.93 kB
polyfills-FFHMD2TL.js | polyfills     |  34.52 kB |                11.28 kB
styles-5INURTSO.css   | styles        |   0 bytes |                 0 bytes

# Q3 : Est-ce que le fichier est lisible ? Quel est l'intêret de minifier les fichiers d'un point de vue éco-responsable ? Pourquoi on ne minifie pas les fichiers générer en mode dev ?
Réponse:
Le ficheir n'est pas lisible, il est compressé et sans indentation, de vue éco-responsable, l'interet de minifier les fichiers est pour avoir moins de temps CPU navigateur, moins de données transférées, moins d’énergie réseau. Par contre en mode dev on vveut lire le code, avoir des traces claires et debugger
# Q4 : Donner la tailles des fichiers générer par la commande.
Réponse:
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/assets/index-Ck_6z9u0.css    5.65 kB │ gzip:  1.40 kB
dist/assets/index-DjOYzNxq.js   144.35 kB │ gzip: 46.39 kB

# Q5: Quel est l'intérêt du HMR ?
Réponse:
Le Hot Module Reload permet le chargement automatique deset instantané du navigateur sans recharger react, cela permet un gain de temps et une rpoductivité rapided
# Q6: Donner la tailles des fichiers générer par la commande. Pourquoi il faut être vigilant sur les libraires et autre composant qu'on ajoute dans nos applications d'un point de vue éco-responsable ?
Réponse:
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/assets/index-Ck_6z9u0.css    5.65 kB │ gzip:  1.40 kB
dist/assets/index-CXkX2fal.js   157.22 kB │ gzip: 51.92 kB

Il faut etre vigilant et éviter d’ajouter des dépendances, car chaque librairie augmente le poids JS, augmente le temps de chargement, augmente la consommation énergétique

# Q7: Noter les nom des différents fichiers qui ont été générés par la commande.
Réponse:

vite v6.4.1 building for production...
✓ 8 modules transformed.
dist/about/index.html           0.53 kB │ gzip: 0.32 kB
dist/index.html                 0.65 kB │ gzip: 0.37 kB
dist/assets/style-b4SyXn9O.css  2.18 kB │ gzip: 0.79 kB
dist/assets/about-D08RWGIN.js   0.15 kB │ gzip: 0.16 kB
dist/assets/style-Dgd37vtf.js   0.71 kB │ gzip: 0.40 kB
dist/assets/main-QCVwn2m0.js    3.19 kB │ gzip: 1.13 kB
✓ built in 170ms


# Q8 : Noter les nom des différents fichiers .js qui sont chargés au moment du chargement de la page.
Réponse:
main-QCVwn2m0.js
style-Dgd37vtf.js
local-storage.js
util.js
fte-utils.js
express-fte.js
etc..
vendor.js

# Q9 : Noter les nom des différents fichiers .js qui sont chargés au moment du changement de page.
Réponse:
about-D08RWGIN.js
style-Dgd37vtf.js
etc...
C’est du code splitting


# Q10: Quel est l'intérêt de lu Code Splitting d'un point de vue éco-responsable ?
Réponse:
Charger uniquement ce qui est nécessaire et réduire le JS initial donc moins d’énergie consommée.


# Q11: Ajouter le screen de votre score :
Screen:


# Q12:  Proposition 1
Description:
Nb de requête total du parcours de l'utilisateur:
Taille total des requêtes du parcours de l'utilisateur:
Taille total des fichiers généré :

# Q13:  Proposition 2
Description:
Nb de requête total du parcours de l'utilisateur:
Taille total des requêtes du parcours de l'utilisateur:
Taille total des fichiers généré :

# Q14:  Proposition 3
Description:
Nb de requête total du parcours de l'utilisateur:
Taille total des requêtes du parcours de l'utilisateur:
Taille total des fichiers générés :
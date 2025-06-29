---
id: advanced-player-parameters
title: Paramètres avancés
---

# ⚙️ Paramètres avancés

Vous pouvez utiliser des paramètres de chaîne de requête pour personnaliser le comportement du client de jeu QuizWitz. Ces paramètres peuvent être ajoutés à n’importe quel lien de jeu grâce à la fonction **Paramètres avancés du jeu**.

Exemple :

https://play.quizwitz.com/13305:qyHBEVVBqT?theme=emerald

📘 [Qu’est-ce qu’une chaîne de requête ?](https://fr.wikipedia.org/wiki/Cha%C3%AEne_de_requ%C3%AAte)

---

## Paramètres disponibles :

| Paramètre                |              Défaut             |           Exemple           | Explication                                                                                                                                                                                                                        |
| ------------------------ | :-----------------------------: | :-------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `language`               | (navigateur) |              en             | Code langue ISO-639 à charger et utiliser comme langue de base                                                                                                                                                                     |
| `theme`                  |             quizted             |           emerald           | Nom (ou URL approuvé) du thème à charger                                                                                                                                                                        |
| `reservation`            |                /                |            abcdef           | Jeton de réservation à utiliser (dans les jeux en direct)                                                                                                                                                       |
| `remote`                 |   quizwitz.tv   | quizwitz.tv | Serveur CatLab Remote à utiliser                                                                                                                                                                                                   |
| `server`                 |                /                |              10             | ID du serveur CatLab Remote à utiliser (avec découverte automatique)                                                                                                                                            |
| `publisher`              |                /                |           QuizWitz          | Nom de l’éditeur qui organise le jeu. Ceci est utilisé pour personnaliser les vues                                                                                                                                 |
| `smileys`                |                1                |              0              | Mettre à 0 pour désactiver les smileys dans le jeu                                                                                                                                                                                 |
| `outroPlayers`           |                12               |          5,4,3,1,2          | Définit la quantité (nombre) OU l’ordre des joueurs (liste de positions séparées par des virgules) qui seront annoncés lors de l’outro du jeu.                               |
| `focusPositions`         |                /                |            50,100           | Définissez une liste de positions supplémentaires qui seront affichées dans l’application quizmaster                                                                                                                               |
| `translations`           |                1                |              0              | Mettre à 0 pour désactiver le chargement des traductions du quiz que vous chargez                                                                                                                                                  |
| `cycleTranslations`      |                0                |              1              | Mettre à 1 pour passer en revue toutes les langues disponibles du quiz par question                                                                                                                                                |
| `showLongQuestions`      |                0                |              1              | Mettre à 1 pour afficher la "longue question" à l’écran de jeu                                                                                                                                                                     |
| `forcePiecharts`         |                0                |              1              | Mettre à 1 pour toujours afficher tous les retours sous forme de diagrammes circulaires                                                                                                                                            |
| `forceNoPiecharts`       |                0                |              1              | Mettre à 1 pour ne jamais regrouper tous les retours dans des diagrammes circulaires.                                                                                                                              |
| `piechartPercentages`    |                0                |              1              | Mettre à 1 pour afficher les pourcentages au lieu des valeurs absolues dans tous les diagrammes circulaires                                                                                                                        |
| `monitors`               |                /                |            nl,fr            | Si défini, dans les jeux en direct des codes séparés seront créés pour afficher un « moniteur » dans cette langue spécifique pour les présentateurs localisés.                                                     |
| `allowLogin`             |                1                |              0              | Mettre à 0 pour interdire la connexion des utilisateurs                                                                                                                                                                            |
| `tracker`                |                1                |              0              | Mettre à 0 pour désactiver tout suivi. Aucun rapport de quiz ne sera disponible                                                                                                                                    |
| `random`                 |                0                |              1              | Mettre à 1 pour charger un « quiz aléatoire »                                                                                                                                                                                      |
| `delay`                  |                0                |            30000            | Définir la durée en millisecondes de retard de toutes les interactions des joueurs (pour les livestreams)                                                                                                       |
| `countdown`              |                10               |              60             | Définir le nombre de secondes du compte à rebours en mode présentation.                                                                                                                                            |
| `autoCountdown`          |                0                |              1              | Mettre à 1 pour démarrer automatiquement le compte à rebours après la première connexion d’un joueur en mode présentation.                                                                                         |
| `autoRestart`            |                0                |              1              | Mettre à 1 pour redémarrer automatiquement le jeu après sa fin.                                                                                                                                                    |
| `waitForPlayers`         |                0                |              1              | Mettre à 1 pour ne pas attendre de joueurs quand `autoCountdown` est activé                                                                                                                                                        |
| `askEmail`               |                1                |              0              | Mettre à 0 pour ne pas demander l’adresse e-mail de l’utilisateur en mode présentation.                                                                                                                            |
| `beacon`                 |                /                |           my-beacn          | Définir un jeton de balise CatLab Remote qui peut être utilisé pour connecter automatiquement l’application quizmaster.                                                                                            |
| `rounds`                 |                5                |              7              | Définir le nombre de manches qui seront générées dans un quiz aléatoire.                                                                                                                                           |
| `questions`              |                7                |              7              | Définir le nombre de questions qui seront générées pour chaque manche dans un quiz aléatoire.                                                                                                                      |
| `showListenQuotes`       |                1                |              0              | Mettre à 0 pour désactiver les citations « merci d’écouter » humoristiques.                                                                                                                                        |
| `shared`                 |                /                |  123:abcdef | Le jeton d’accès d’une entrée partagée.                                                                                                                                                                            |
| `music`                  |                1                |              0              | Mettre à 0 pour désactiver toute la musique (de jeu). L’audio téléchargé continuera de jouer.                                                                                   |
| `connectMusic`           |                1                |              0              | Mettre à 0 pour désactiver la musique (de jeu) qui joue pendant la phase de "connexion".                                                                                                        |
| `slideshowVideoInterval` |               300               |             300             | Quand des vidéos sont téléchargées dans la phase d’écran de connexion, cela définit le nombre de secondes entre chaque lecture de vidéo.                                                                           |
| `slideshowImageInterval` |                20               |              60             | Quand des images sont téléchargées dans la phase d’écran de connexion, cela définit le nombre de secondes pendant lesquelles chaque image sera affichée.                                                           |
| `skipOnAllAnswered`      |                1                |              0              | Mettre à 0 pour remplacer la valeur `skipOnAllAnswered` des entrées                                                                                                                                                                |
| `departments`            |                1                |            A,B,C            | Mettre à 0 pour désactiver le chargement des départements. Mettre une liste de noms séparés par des virgules pour assigner automatiquement tous les joueurs connectant à un département aléatoire. |
| `showRankInDepartment`   |                1                |              0              | Mettre à 0 pour empêcher les utilisateurs de voir leur classement dans leur département.                                                                                                                           |
| `showDepartmentRanking`  |                1                |              0              | Mettre à 0 pour désactiver l’affichage du classement des départements entre les manches.                                                                                                                           |
| `preloadVideo`           |                0                |              1              | Mettre à 1 pour forcer le préchargement de tous les fragments vidéo.                                                                                                                                               |
| `n`                      |                /                |          `_prompt_`         | Définir (ou demander en mettant `_prompt_`) un nom pour le groupe de joueurs jouant la partie. Ce nom est envoyé dans le rapport du quiz.                                       |

---

## 💡 Astuces d’utilisation

- Plusieurs paramètres peuvent être combinés en utilisant `&`
- Utilisez ces options avec les **Paramètres avancés du jeu** lors du partage ou de l’intégration de liens
- Beaucoup d’options sont utiles pour l’optimisation des livestreams ou les événements multilingues

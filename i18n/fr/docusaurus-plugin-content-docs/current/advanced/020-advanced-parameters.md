---
id: advanced-player-parameters
title: Paramètres avancés
---

# ⚙️ Paramètres avancés

Vous pouvez utiliser les paramètres de chaîne de requête pour personnaliser le comportement du client de jeu QuizWitz. Ces paramètres peuvent être ajoutés à n'importe quel lien de jeu en utilisant la fonctionnalité **Paramètres avancés du jeu**.

Exemple :

https://play.quizwitz.com/13305:qyHBEVVBqT?theme=emerald

📘 [Qu'est-ce qu'une chaîne de requête ?](https://en.wikipedia.org/wiki/Query_string)

---

## Paramètres disponibles :

| Paramètre                |            Par défaut           |           Exemple           | Explication                                                                                                                                                                                                                       |
| ------------------------ | :-----------------------------: | :-------------------------: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `language`               | (navigateur) |              en             | Code langue ISO-639 à charger et utiliser comme langue de base                                                                                                                                                                    |
| `theme`                  |             quizted             |           emerald           | Nom (ou URL approuvé) du thème à charger                                                                                                                                                                       |
| `reservation`            |                /                |            abcdef           | Jeton de réservation à utiliser (dans les jeux en direct)                                                                                                                                                      |
| `remote`                 |   quizwitz.tv   | quizwitz.tv | Serveur CatLab Remote à utiliser                                                                                                                                                                                                  |
| `server`                 |                /                |              10             | ID du serveur CatLab Remote à utiliser (avec découverte automatique)                                                                                                                                           |
| `publisher`              |                /                |           QuizWitz          | Nom de l'éditeur qui héberge le jeu. Cela sert à personnaliser les vues                                                                                                                                           |
| `smileys`                |                1                |              0              | Mettre à 0 pour désactiver les smileys dans le jeu                                                                                                                                                                                |
| `outroPlayers`           |                12               |          5,4,3,1,2          | Définit le nombre OU l'ordre des joueurs (liste de positions séparées par des virgules) qui seront annoncés pendant la fin du jeu.                                                             |
| `focusPositions`         |                /                |            50,100           | Définir une liste de positions supplémentaires qui seront affichées dans l'application quizmaster                                                                                                                                 |
| `translations`           |                1                |              0              | Mettre à 0 pour désactiver le chargement des traductions du quiz que vous chargez                                                                                                                                                 |
| `cycleTranslations`      |                0                |              1              | Mettre à 1 pour parcourir toutes les langues disponibles du quiz à chaque question                                                                                                                                                |
| `showLongQuestions`      |                0                |              1              | Mettre à 1 pour afficher la "question longue" à l'écran du jeu                                                                                                                                                                    |
| `forcePiecharts`         |                0                |              1              | Mettre à 1 pour toujours afficher tous les retours sous forme de graphiques en secteurs                                                                                                                                           |
| `forceNoPiecharts`       |                0                |              1              | Mettre à 1 pour ne jamais regrouper tous les retours dans des graphiques en secteurs.                                                                                                                             |
| `piechartPercentages`    |                0                |              1              | Mettre à 1 pour afficher les pourcentages au lieu des valeurs absolues dans tous les graphiques en secteurs                                                                                                                       |
| `monitors`               |                /                |            nl,fr            | Si défini, dans les jeux en direct, des codes séparés seront créés pour afficher un 'moniteur' dans cette langue spécifique pour les présentateurs localisés.                                                     |
| `allowLogin`             |                1                |              0              | Mettre à 0 pour interdire aux utilisateurs de se connecter                                                                                                                                                                        |
| `tracker`                |                1                |              0              | Mettre à 0 pour désactiver tout le suivi. Aucun rapport de quiz ne sera disponible                                                                                                                                |
| `random`                 |                0                |              1              | Mettre à 1 pour charger un « quiz aléatoire »                                                                                                                                                                                     |
| `delay`                  |                0                |            30000            | Définir le délai en millisecondes pour toutes les interactions des joueurs (pour les diffusions en direct)                                                                                                     |
| `countdown`              |                10               |              60             | Définir le nombre de secondes du compte à rebours en mode présentation.                                                                                                                                           |
| `autoCountdown`          |                0                |              1              | Mettre à 1 pour démarrer automatiquement le compte à rebours après la première connexion d'un joueur en mode présentation.                                                                                        |
| `autoRestart`            |                0                |              1              | Mettre à 1 pour redémarrer automatiquement le jeu après sa fin.                                                                                                                                                   |
| `waitForPlayers`         |                0                |              1              | Mettre à 1 pour ne pas attendre de joueurs lorsque `autoCountdown` est activé                                                                                                                                                     |
| `askEmail`               |                1                |              0              | Mettre à 0 pour ne pas demander l'adresse e-mail de l'utilisateur en mode présentation.                                                                                                                           |
| `beacon`                 |                /                |           my-beacn          | Définir un jeton beacon CatLab Remote qui peut être utilisé pour connecter automatiquement l'application quizmaster.                                                                                              |
| `rounds`                 |                5                |              7              | Définir le nombre de manches qui seront générées dans un quiz aléatoire.                                                                                                                                          |
| `questions`              |                7                |              7              | Définir le nombre de questions qui seront générées pour chaque manche dans un quiz aléatoire.                                                                                                                     |
| `showListenQuotes`       |                1                |              0              | Mettre à 0 pour désactiver les citations drôles "merci d'écouter".                                                                                                                                                |
| `shared`                 |                /                |  123:abcdef | Le jeton d'accès d'une entrée partagée.                                                                                                                                                                           |
| `music`                  |                1                |              0              | Mettre à 0 pour désactiver toute la musique (de jeu). Les audios téléchargés continueront de jouer.                                                                            |
| `connectMusic`           |                1                |              0              | Mettre à 0 pour désactiver la musique (de jeu) jouée pendant la phase de connexion.                                                                                                            |
| `slideshowVideoInterval` |               300               |             300             | Lorsque des vidéos sont téléchargées lors de la phase d'écran de connexion, ceci définit le nombre de secondes entre chaque lecture de vidéo.                                                                     |
| `slideshowImageInterval` |                20               |              60             | Lorsque des images sont téléchargées lors de la phase d'écran de connexion, ceci définit le nombre de secondes pendant lesquelles chaque image sera affichée.                                                     |
| `skipOnAllAnswered`      |                1                |              0              | Mettre à 0 pour ignorer la propriété `skipOnAllAnswered` des entrées                                                                                                                                                              |
| `departments`            |                1                |            A,B,C            | Mettre à 0 pour désactiver le chargement des départements. Mettre une liste de noms séparés par des virgules pour assigner automatiquement tous les joueurs connectés à un département aléatoire. |
| `showRankInDepartment`   |                1                |              0              | Mettre à 0 pour empêcher les utilisateurs de voir leur classement au sein de leur département.                                                                                                                    |
| `showDepartmentRanking`  |                1                |              0              | Mettre à 0 pour désactiver l'affichage du classement des départements entre les manches.                                                                                                                          |
| `preloadVideo`           |                0                |              1              | Mettre à 1 pour forcer le préchargement de tous les fragments vidéo.                                                                                                                                              |
| `n`                      |                /                |          `_prompt_`         | Définir (ou demander en mettant `_prompt_`) un nom pour le groupe de joueurs participant au jeu. Ce nom est envoyé au rapport du quiz.                                         |

---

## 💡 Conseils d'utilisation

- Plusieurs paramètres peuvent être combinés avec `&`
- Utilisez ces options avec les **Paramètres avancés du jeu** lors du partage ou de l'intégration des liens
- Beaucoup d'options sont utiles pour l'optimisation des livestreams ou les événements multilingues

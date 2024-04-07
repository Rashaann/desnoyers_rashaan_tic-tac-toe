# Tic-Tac-Toe TP
Le TP est à rendre au plus tard **lundi 8 avril 2024, minuit**, par mail en signalant votre nom, prénom et le lien du repository public sur lequel se trouve vos livrables, le mail d'envoi **et** l'historique des commits faisant foi.

Il vous est possible de vous entre-aider mais votre rendu est **personnel** sauf mention contraire expresse pour les situations identifiées en amont.

## Instructions

### Préparer son environnement
- A partir du docker-compose disponible sur le repository [docker-gitlab-jenkins](https://github.com/June-Ruth/docker-gitlab-jenkins)

### Récupérer le projet en local
- Clôner le projet en local
- Mettre en place le projet sur le GitLab local avec le nom formaté selon le schéma suivant : **_nom_prenom_tic-tac-toe_**

### Création d'une pipeline d'intégration et de déploiement
La pipeline doit être formatée selon le schéma suivant : **_nom_prenom_tic-tac-toe_**
#### Outils
- La pipeline doit être éxécutée à partir de la plateforme d'intégration continue Jenkins
#### Fréquence
- La pipeline doit pouvoir être exécutée manuellement
- La pipeline doit être exécutée à chaque action de push et de merge request
##### Contenu
- La pipeline doit exécuter les tests
- Le stage de test doit mentionner le type de tests exéutés selon la pyramide des tests (soit dans son nom, soit dans la console lors de l'exécution)
- La pipeline doit fournir un rapport de couverture Clover
- La pipeline doit fournir les artefacts de distribution nécessaires au déploiement

### Correction des tests
- Les tests non-validés par la pipeline doivent être corrigés afin d'être valides

## Livrables
- Le code final sera rendu disponible sur un repository public
- La branche principale (main) sera à jour de l'ensemble des modifications
- Le code final devra conserver l'historique des branches et commits
- Le README présentera le workflow Git choisi en expliquant ses avantages et/ou inconvénients
- Le repository disposera d'un package spécifique pour les documents issus de la pipeline :
  - le rapport de couverture Clover fourni lors du dernier cycle Jenkins (format .html)
  - une copie (format .pdf) du dashboard principal de la **pipeline** sur Jenkins présentant au moins un cycle exécuté de manière automatique, les artefacts issue du build et le résumé de la couverture Clover
  - une copie (format .pdf) des paramètres mis en place sur GitLab servant à l'intégration de Jenkins
 
## Attention
- Les projets qui ne respectent pas les conventions de nommage ne seront pas évalués.
- Les projets dont l'historique git n'est pas accessible ne seront pas évalués.
- Les repository innaccessibles (adresse erronée, settings non-public) ne seront pas évaluées.

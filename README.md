# Application Prévisions Météo

Ce projet est une application de prévisions météo, réalisé avec **Reactjs**, **Typescript** et **TailwindCSS**. Les données utilisées proviennent de l'api **OpenWeather API**.

Elle permet de rechercher un lieu ou une ville, puis affiche les prévisions météorologiques de ce lieu pour la journée en cours, ainsi que pour les prochains jours.

![Screenshot de la page d'accueil de l'application](/public/Home_Screenshot2.JPG "Page d'accueil et Recherche")

![Screenshot de la Prévisions Méteo](/public/Forecast_Screenshot.JPG 'Page de Prévisions Méteo')

## Stack Technique

- React.Js
- Typescript
- TailwindCSS
- Prettier (code formatter)
- Node 18 (voir .nvmrc)

## Installation et Lancement

Si vous lancez ce projet pour la première fois, assurez-vous d'avoir installé nvm(node version manager).

Si nvm n'est pas intallé, utilisez la commande suivante :<br>
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash` <br>
<br>
Une fois nvm installé, utilisez `nvm i` , puis `nvm use` (pour utiliser la bonne version de Node)

Une fois la bonne version de node activée, utilisez `npm i` pour installer les dépendences du projet.

Après avoir installé les dépendences, utilisez `npm run start` et rendez-vous à l'adresse : http://localhost:3000

## Appels API

Attention :<br>
L'api OpenWeather API utilise une clé API personnelle. Vous trouverez à la racine du projet un fichier `.env.example`, que vous devrez enregistrer sous le nom `.env` et dans lequel il faudra coller la valeur de votre clé API (Vous pouvez obtenir une clé gratuitement sur le site d'[OpenWeather API](https://openweathermap.org/api)).

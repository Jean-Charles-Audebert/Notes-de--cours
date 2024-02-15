# Le DOM en JS

## I. Les Tableaux en JavaScript

### A. Déclaration et Initialisation

Les tableaux en JavaScript sont des structures de données flexibles permettant de stocker plusieurs valeurs. Déclarer un tableau se fait en utilisant la syntaxe `let nomDuTableau = [valeur1, valeur2, ...];`. Vous pouvez créer un tableau vide ou initialiser des valeurs lors de la déclaration. Les éléments d'un tableau sont indexés, commençant souvent par 0.

**Exemple :**
```javascript
let fruits = ['Pomme', 'Banane', 'Orange'];
let tableauVide = [];
let premierFruit = fruits[0]; // Accès au premier élément (Pomme)
```

### B. Opérations de Base

Manipuler les tableaux implique l'ajout, la suppression et le parcours des éléments. Les méthodes intégrées telles que `push`, `pop`, `shift` et `unshift` facilitent ces opérations. La boucle `for` est souvent utilisée pour parcourir les éléments d'un tableau.

**Opérations de Base :**
1. **Ajout d'Éléments :**
   ```javascript
   fruits.push('Fraise'); // Ajoute 'Fraise' à la fin du tableau
   ```

2. **Suppression d'Éléments :**
   ```javascript
   fruits.pop(); // Supprime le dernier élément du tableau
   ```

3. **Parcours avec une Boucle :**
   ```javascript
   for (let i = 0; i < fruits.length; i++) {
     console.log(fruits[i]);
   }
   ```

### C. Tableaux Multidimensionnels

Les tableaux multidimensionnels permettent de stocker des données de manière structurée en utilisant plusieurs niveaux d'index. Ils sont utiles pour représenter des grilles ou des matrices.

**Création et Utilisation :**
```javascript
let grille = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let valeur = grille[1][2]; // Accès à l'élément à la deuxième ligne, troisième colonne (6)
```

**Parcours de Tableaux Multidimensionnels :**
```javascript
for (let i = 0; i < grille.length; i++) {
  for (let j = 0; j < grille[i].length; j++) {
    console.log(grille[i][j]);
  }
}
```

## II. Accès au DOM en JavaScript

### A. Introduction au DOM

Le Document Object Model (DOM) est une interface de programmation qui représente la structure d'une page web sous forme d'arbre d'objets. Chaque élément HTML devient un nœud dans cet arbre, facilitant la manipulation dynamique de la page.

**Structure Hiérarchique du DOM :**
- Chaque page commence par un nœud `<html>` qui contient des nœuds `<head>` et `<body>`.
- Les éléments HTML, tels que `<div>` et `<p>`, deviennent des nœuds dans l'arbre DOM.

**Différence entre DOM et HTML :**
- Le DOM est une représentation dynamique de la structure de la page, tandis que le code HTML est la source statique initial.

### B. Sélection d'Éléments

Pour interagir avec le DOM, vous devez d'abord sélectionner des éléments. JavaScript offre plusieurs méthodes pour cela, telles que `getElementById`, `getElementsByClassName`, `getElementsByTagName`, et `querySelector`.

**Sélection par ID :**
```javascript
let monElement = document.getElementById('idElement');
```

**Sélection par Classe :**
```javascript
let elements = document.getElementsByClassName('nomClasse');
```

**Sélection par Balise :**
```javascript
let paragraphes = document.getElementsByTagName('p');
```

**Sélection avec QuerySelector :**
```javascript
let premierParagraphe = document.querySelector('p');
```

### C. Manipulation d'Éléments

Maintenant que vous avez sélectionné des éléments, voyons comment les manipuler.

**Modification de Contenu :**
```javascript
monElement.innerHTML = 'Nouveau Contenu';
```

**Modification de Style :**
```javascript
monElement.style.color = 'red';
```

**Ajout/Suppression de Classes :**
```javascript
monElement.classList.add('nouvelleClasse');
monElement.classList.remove('ancienneClasse');
```

**Manipulation d'Attributs :**
```javascript
monElement.setAttribute('src', 'nouvelleImage.jpg');
```

**Création d'Éléments :**
```javascript
let nouveauParagraphe = document.createElement('p');
nouveauParagraphe.innerHTML = 'Nouveau Paragraphe';
document.body.appendChild(nouveauParagraphe);
```

## III. Événements du DOM

### A. Introduction aux Événements

Les événements du DOM sont des actions détectées par votre page web, telles que le clic de la souris, la pression sur une touche du clavier, ou le chargement de la page. JavaScript permet de réagir à ces événements en associant des fonctions (gestionnaires d'événements) à des éléments spécifiques.

**Exemples d'Événements :**
- `click` : déclenché lorsqu'un élément est cliqué.
- `keydown` : déclenché lorsqu'une touche est enfoncée.

**Écouter un Événement :**
```javascript
monElement.addEventListener('click', maFonction);
```

### B. Gestionnaires d'Événements

Les gestionnaires d'événements sont des fonctions qui sont exécutées en réponse à un événement spécifique. Vous pouvez les définir en ligne ou les référencer comme des fonctions distinctes.

**Exemple avec Fonction en Ligne :**
```javascript
monElement.addEventListener('click', function() {
  console.log('Élément cliqué!');
});
```

**Exemple avec Fonction Distincte :**
```javascript
function gestionnaireClic() {
  console.log('Élément cliqué!');
}

monElement.addEventListener('click', gestionnaireClic);
```

**Suppression d'un Événement :**
```javascript
monElement.removeEventListener('click', gestionnaireClic);
```

### C. Événements Courants

Explorons quelques-uns des événements les plus couramment utilisés.

**Clic de la Souris :**
```javascript
monElement.addEventListener('click', function(event) {
  console.log('Clic de la souris');
  console.log('Coordonnées :', event.clientX, event.clientY);
});
```

**Appui sur une Touche :**
```javascript
window.addEventListener('keydown', function(event) {
  console.log('Touche enfoncée :', event.key);
});
```

**Chargement de la Page :**
```javascript
window.addEventListener('load', function() {
  console.log('La page est complètement chargée.');
});
```

**Modification de Valeur d'un Champ de Saisie :**
```javascript
let champSaisie = document.getElementById('monChamp');
champSaisie.addEventListener('input', function(event) {
  console.log('Nouvelle valeur :', event.target.value);
});
```

## IV. Manipulation Avancée du DOM

### A. Traverser le DOM

La traversée du DOM consiste à naviguer entre les éléments, leurs parents, enfants et frères.

**Nœud Parent :**
```javascript
let parent = monElement.parentNode;
```

**Nœuds Enfants :**
```javascript
let enfants = monElement.childNodes;
```

**Premier/ Dernier Enfant :**
```javascript
let premierEnfant = monElement.firstChild;
let dernierEnfant = monElement.lastChild;
```

**Nœud Frère Suivant/Précédent :**
```javascript
let frereSuivant = monElement.nextSibling;
let frerePrecedent = monElement.previousSibling;
```

### B. Éléments Dynamiques

Dans certains cas, vous devrez manipuler des éléments de manière dynamique, c'est-à-dire les créer ou les supprimer pendant l'exécution.

**Supprimer un Élément :**
```javascript
monElement.parentNode.removeChild(monElement);
```

**Remplacer un Élément :**
```javascript
let nouvelElement = document.createElement('div');
monElement.parentNode.replaceChild(nouvelElement, monElement);
```

**Cloner un Élément :**
```javascript
let cloneElement = monElement.cloneNode(true);
```

**Créer un Fragment de Document :**
```javascript
let fragment = document.createDocumentFragment();
```

## V. Requêtes AJAX en JavaScript

### A. Introduction aux Requêtes AJAX

Les requêtes AJAX (Asynchronous JavaScript and XML) permettent de communiquer avec un serveur en arrière-plan sans recharger la page entière. Cela permet des mises à jour dynamiques du contenu et des interactions sans interruption pour l'utilisateur.

**Création d'une Requête AJAX :**
```javascript
let xhr = new XMLHttpRequest();
```

**Définir la Méthode et l'URL :**
```javascript
xhr.open('GET', 'https://api.example.com/data', true);
```

**Définir la Fonction de Gestion de la Réponse :**
```javascript
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log('Réponse reçue :', xhr.responseText);
  } else {
    console.error('Erreur de requête :', xhr.statusText);
  }
};
```

**Envoyer la Requête :**
```javascript
xhr.send();
```

### B. Utilisation d'une Bibliothèque AJAX (ex: Fetch)

L'API Fetch, introduite avec ES6, simplifie la réalisation de requêtes AJAX. Elle retourne une Promise et permet d'écrire du code plus lisible.

**Exemple de Requête Fetch :**
```javascript
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur de requête : ' + response.statusText);
    }
    return response.json();
  })
  .then(data => console.log('Données reçues :', data))
  .catch(error => console.error('Erreur :', error));
```

**Envoyer des Données avec Fetch :**
```javascript
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ key: 'value' })
})
  .then(response => response.json())
  .then(data => console.log('Réponse :', data))
  .catch(error => console.error('Erreur :', error));
```

**Utiliser Async/Await avec Fetch :**
```javascript
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Erreur de requête : ' + response.statusText);
    }
    let data = await response.json();
    console.log('Données reçues :', data);
  } catch (error) {
    console.error('Erreur :', error);
  }
}

fetchData();
```

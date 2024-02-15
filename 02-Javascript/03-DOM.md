## Correction OneMillion, avec validation w3.org, en corrigeant les erreurs.

## Cours Javascript par Sofiane.

1. hoisting (le code est lu de haut en bas, la dernière commande est appliquée, exemple sur le css) => on déclare le script javascript à la fin du document html (juste avant </html>), ou en head mais en ajoutant `defer`. Doc à consulter (https://developer.mozilla.org/fr/docs/Web/API/Document/DOMContentLoaded_event). Le sens de lecture du code se fait dans le sens d'écriture du html. 1- phase de capture (dans le sens html, affecte tous les comportements), 2 - phase de bouillonnement (remonte dans le code avec les valeurs calculées dans la phase 1). => il faut toujours déclarer d'abord les variables en haut du fichier. (https://developer.mozilla.org/fr/docs/Glossary/Hoisting)
2. `console.log("Hi);` : 
	1. `console` est un `objet`
	2. `.log` est une `méthode`, il en existe d'autres pour `console` comme `error`, `table`, `warn`, etc... doc(https://developer.mozilla.org/fr/docs/Web/API/console)
	3. 
3. Différence entre les getElementBy... et querySelector : 
	1. getElementBy... : 
		   - méthode de `document` qui permet de slectionner un élément, ou une collection, correspondant à une classe, une id, ou une balise (donc un élément du DOM)

Question :
> Quelle est la différence entre getElementBy... et querySelector ?

Réponse :

  getElementBy... : 
   - méthode de `document` qui permet de slectionner un élément, ou une collection, correspondant à une classe, une id, ou une balise (donc un     élément du DOM)
 
  querySelector :
   - méthode  qui permet d'accéder à un élément HTML en utilisant un selecteur CSS pour le référencer. 
   - cette méthode peut être utilisée pour accéder au premier éléments HTML, ce qui rend querySelector très flexible.
   - par exemple const premierParagraphe = document.querySelector('#myDiv p'); sélectionne le premier élément <p> à l'intérieur de la div ayant l'id #myDiv. On peut ainsi le modifier avec un premierParagraphe.textContent = "..." La même fonction avec getElement devrait se faire en 2 étapes : 
   1. Sélectionner la div avec l'ID "myDiv"
        const div = document.getElementById('myDiv');
    2. Sélectionner le premier paragraphe à l'intérieur de la div
        const premierParagraphe = div.getElementsByTagName('p')[0];
    3. Modifier le contenu texte du premier paragraphe sélectionné
        premierParagraphe.textContent = "Je suis le premier paragraphe sélectionné avec getElementById !";

 Conclusion :
 getElementBy... est utile pour une sélection rapide basée sur l'ID, la classe ou la balise, tandis que querySelector offre plus de flexibilité et permet une sélection plus avancée en utilisant des sélecteurs CSS.

### Exercice

Dans le html, on a 3 div avec un texte : 

```html
<div>A</div>
<div>B</div>
<div>C</div>
```

Dans le css, on les formatte : 

```css
div {
    height: 80px;
    width: 80px;
    border: 1px solid #333;
}
```

Objectif : Lorsqu'on clique sur une div, la console doit afficher le texte de la div.

```js
const allDiv = document.querySelectorAll("div");

allDiv.forEach(div => {
    div.addEventListener('click', () => {
      console.log(div.innerText);
    });
  });

// console.log("allDiv :",allDiv[0].innerText);
// console.log("allDiv :",allDiv[1].innerText);
// console.log("allDiv :",allDiv[2].innerText);
```

Note : innerText et innerHtml ; innerText renvoie le texte. innerHtml renvoie tout ce qui est contenu dans un élément, y compris les balises html (sécurité!!!!!)

### Les écouteurs d'évènement

(https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener)

EventTarget.addEventListener() 

### Les tableaux

```js
const monTableau = ["a", "b", "c", "d", "e"];
console.log("monTableau : ", monTableau); 
console.log("Le premier élément est : ", monTableau[0]);
console.log(`Le deuxième élément est : ${monTableau[1]}`);

```

#### Boucles

```js
const monTableau = document.querySelectorAll("div");

//---------------FOR------------------
for(let i=0; i<monTableau.length; i++){
    console.log(i + ": " + monTableau[i].innerText);
}

//---------------FOREACH------------------
monTableau.forEach(div => {
    div.addEventListener('click', () => {
      console.log(div.innerText);
    });
  });

```

### Callback
Une fonction de callback (ou rappel) est une fonction qui est passée en paramètre d'une autre fonction.

```js
const  maFonction = (string, function) => {
  ...
}
```
## SetAttribute, getAttribute
(https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute)

setAttribute remplace.  Si l’attribut n’existe pas, il est créé. Sinon,  sa valeur est modifiée.

Ce n'est pas adapté à ce que l'on chercher.

classList est fait pour renvoyer une collection (liste, objet) et a des propriétés pour les manipuler.
(https://developer.mozilla.org/fr/docs/Web/API/Element/classList)

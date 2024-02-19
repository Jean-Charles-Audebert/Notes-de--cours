# REGEX

## Bootstrap

(https://getbootstrap.com/)

Bibliothèque CSS faite par twitter à l'origine pour normaliser les habitudes des utilisateurs.

Inclure dans le html par lien cdn

Bootstrap fonctionne essentiellement sur les flex et les grid, sur 12 colonnes (car divisible par 2, 3, 4...).

Fournit des composants. Tous sont divisés en 12 colonnes.

## Rappels sur les tableaux

```js
["🍌, 🍉, 🍇, 🍐, 🍒"].length;
["🍌, 🍉, 🍇, 🍐, 🍒"].push("🥝"); // ajoute un élément à la fin du tableau
["🍌, 🍉, 🍇, 🍐, 🍒"].pop(); // supprime le dernier élément
["🍌, 🍉, 🍇, 🍐, 🍒"].shift(); // supprime le premier élément
["🍌, 🍉, 🍇, 🍐, 🍒"].unshift("🥝"); // ajoute 1 ou plusieurs éléments au début du tableau
["🍌, 🍉, 🍇, 🍐, 🍒"].concat(["🥝"]); // fusionne plusieurs tableaux
["🍌, 🍉, 🍇, 🍐, 🍒"].join("-"); // renvoie une nouvelle chaine de caractères
["🍌, 🍉, 🍇, 🍐, 🍒"].indexOf("🍐"); // renvoie l'index de l'élément
["🍌, 🍉, 🍇, 🍐, 🍒"].includes("🍐"); // renvoie true ou false
["🍌, 🍉, 🍇, 🍐, 🍒"].reverse(); // renvoie le tableau inversé
["🍌, 🍉, 🍇, 🍐, 🍒"].at(3); // renvoie l'élément à l'index 3
["🍌, 🍉, 🍇, 🍐, 🍒"].every(function (element)); // vérifie si tous les éléments répondent à une fonction. renvoie true ou false
["🍋","🍋" ,"🍋" ].map(("🍌")=>{
    console.log("")
}); // résultat ["🍌","🍌","🍌"]

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

//------------Strings------------------

"Prenom".match("Prenom"); // [ 'prenom', index: 0, input: 'prenom', groups: undefined ]
"Prenom".match("nom"); // [ 'nom', index: 3, input: 'prenom', groups: undefined ] résultat est donc 3

"Prenom".search("Prenom"); // 0
console.log(("prenom").search("nom")) // 3

.trim() // enlève les espaces avant et après

"apprenants".includes("pp"); // true
```



## Regex

Regular expression

(https://www.w3schools.com/js/js_regexp.asp)
(https://regex101.com/)
(https://www.pierre-giraud.com/javascript-apprendre-coder-cours/introduction-expression-reguliere-rationnelle/)

```js
"apprenants".includes("pp"); // true
/^[a-z]+$/.test('azerty'); // false
```
### Options
- `i` : Insensible aux majuscules (case insensitive)
- `g`  : Recherche globale 

```js
/[A-za-z1-9] // toutes les lettres et les chiffres
/^[A-za-z1-9] // le contraire
```

```js
let var1 = "Regardez ce cours et gardez le à l'esprit."
let regex1 = /gardez/g // [A-Z][a-z]/g{1,12} lettres maj ou min, 
let regex2 = /gardez/
console.log("avec l'option g : ", var1.match(regex1));
console.log("sans l'option g : ", var1.match(regex2));
```


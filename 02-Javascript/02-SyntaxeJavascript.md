# La syntaxe JavaScript

Rappels sur la séparation des concepts :

HTML => structure des contenus (définition),
CSS => présentation des contenus (mise en forme),
JavaScript => gestion des interactions (entre l’utilisateur et le navigateur) + évolution dynamique du contenu

## Commentaires

En JavaScript, comme avec tous les langages de programmation, on écrit des instructions à destination de la machine, pour obtenir un résultat. L’ensemble de ces instructions forme un programme, qui dans l’idéal fait quelque chose d’intéressant et viable 🙈

Mais avant de commencer à écrire des instructions pour la machine, on va pouvoir faire des commentaires,comme en HTML et en CSS, par exemple pour donner des indications uniquement destinées aux développeurs, c’est-à-dire vous et vos collègues : les êtres humains.

Deux types de commentaires existent en JavaScript (JS) :

* Sur une ligne, en la faisant commencer par // : la ligne est ignorée par la machine.
* Sur plusieurs lignes, avec /* et */ (comme en CSS) : le bloc de lignes est ignoré par la machine.

```js

// Une ligne de commentaire

/*
  Un bloc
  de commentaires
  sur plusieurs lignes
*/

``` 

Attention, avec la syntaxe // il est possible d’ajouter un commentaire sur une ligne où du code est déjà présent, sans que ce code ne soit lui-même mis en commentaire (et donc ignoré par la machine) : voir des exemples ci-après.

## Variables

Les variables permettent de mémoriser une information, puis éventuellement, de la faire évoluer. C’est au développeur de choisir le nom de ses variables. Il existe des bonnes pratiques de nommage (age plutôt que abc pour stocker l’âge d’une personne), ainsi que des conventions de nommage, c’est-à-dire des conventions syntaxiques.

La convention de nommage la plus en vogue pour les variables JS (et pour les fonctions JS, et pour les variables et fonctions PHP également !) est appelée *camelCase*. En camelCase, le nom d’une variable :

* commence par une minuscule
* possède une majuscule à chaque nouveau « mot » dans le nommage sans espace entre les mots.

```js
// Trois noms de variables respectant la convention camelCase :
jeSuisUneVariableJS
moiAussi
user
```

## Déclaration d’une variable

Dans tous les langages de programmation, les variables permettent de retenir une valeur en mémoire, en lui donnant un nom.
Pour créer une variable, on utilise un mot-clé (fourni par le langage JS) `let`, `const` ou `var` :

```js
const age = 33;
```
Une instruction qui possède la structure suivante :

```js
const nomDeVariable = valeur;
```

est de type « création + affectation de variable », car en une seule ligne, une variable est crée, et une valeur lui est associée.

On peut aussi créer une variable sans lui donner de valeur, auquel cas elle vaut en fait `undefined` (qui représente en JS l’absence de valeur explicite/concrète) :

```js
let taille; // taille stocke la valeur undefined
```

On privilégiera `const` autant que possible.

On se servira de `let` uniquement lorsque la valeur initiale doit être modifiée au cours de l’exécution.

## Types de variables

En fonction de la valeur stockée dans une variable à un moment m, on dira que la variable est « du type » X ou Y. Selon le type d’une variable, il est possible de lui appliquer certains traitements spécifiques (cf. ci-après Opérateurs).

*Les types de variables de base, sont sensiblement les mêmes dans tous les langages de programmation. Cependant des différences existent sur les détails et les traitements possibles sur ces types de variables.*

### number

Le type number désigne tous les nombres, entiers et décimaux.

Attention, en programmation, on utilise `10.12`, notation anglo-saxonne, et non `10,12`, notation française, pour les nombres décimaux.

```js
const age = 18;
const salaireHoraire = 10.53;
```

### boolean

Un booléen est une donnée binaire, c’est-à-dire qui ne peut avoir que deux états, logiquement opposés.

Une variable booléenne ne peut prendre que deux valeurs : `true` ou `false`. Le sens exact de `true` et `false` dépendra du contexte.

```js
const aSonPermis = true;
const voitureDisponible = false;
```

### string

Une chaîne de caractère, *string* en anglais, est la version informatique d’un « bout de texte. » Ce peut-être une lettre, un mot, une phrase, un paragraphe ou n’importe quoi de représentable sous la forme d’une entité de type texte.

`""` et `''` permettent d’encadrer une chaîne de caractères. Pas de différence entre les deux, en tout cas en JS.

 permet d' »échapper » les caractères spéciaux (par ex les " si je suis dans une chaîne délimitée par des "")

```js
const maChaineDoubleQuotes = "Chaine de caractères entre double quotes "" ";
const maChaineSimpleQuotes = 'Chaine de caractères entre simple quotes '' ';
```

>Note 1 : attention à bien différencier, dans le code, le nom d’une variable (interprété par la machine pour aller récupérer sa valeur stockée) et une chaîne de caractère (simple texte, ne contient pas de donnée autre que ce texte lui-même) :
```js
const maVariable = "ceci est du texte intéressant";
const maChaine = "maVariable"; // la variable maChaine contient bien le texte "maVariable" tel quel
```

>Note 2 : une bonne pratique consiste à privilégier les simples quotes ' pour les chaînes de caractères. C’est une pure convention, pas une obligation technique.

### Array

Le type « tableau », c’est-à-dire liste ordonnée.

Très utile pour stocker plusieurs valeurs dans une même variable. On utilise souvent les tableaux pour contenir une série d’éléments de même type, même s’il n’est pas obligatoire que tous les éléments soient du même types. *Exemple: une liste de fruits, d’élèves, de noms de planètes à afficher, de courses…*

Les tableaux en javascript sont ordonnées, c’est-à-dire que leurs éléments sont indexés : à chaque case du tableau est assignée un index numérique, en partant de 0.

>Notez bien que chaque case de tableau peut contenir une variable de tout type (y compris un tableau !).

```js
// déclarer un tableau :
const fruits = ["cerise", "banane", "kiwi"];

// accéder à un élément du tableau avec la syntaxe [index] :
fruits[0]; // => accède à "cerise"
fruits[2]; // => accède à "kiwi"
```

Tableaux [MDN]([MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array))

### Objets

Un objet peut stocker de multiples valeurs (comme un tableau), mais chaque valeur est indexée non pas par un nombre, mais par un nom : sa clé.

>Convention de nommage pour les clés d’objets : camelCase.

```js
// déclarer un objet :
const fruits = {
  superbon : "cerise",
  sucre : "banane",
  acide : "kiwi"
};
```

>On parle de structure cle: valeur. Un objet contient zéro, une ou plusieurs paires de cle: valeur.

En JS, on accède aux éléments d’un objet :

* avec la notation `fruits["key"]`
* avec la notation `fruits.key`

```js
// Lire une valeur :
fruits["acide"]; // retourne "kiwi"
// syntaxe alternative, résultat équivalent :
fruits.acide;

// Modifier une valeur :
fruits.acide = "citron";
```

Utiliser les objets ([MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Working_with_objects))


### Inspecter une variable

Pour voir ce que contient une variable, on peut utiliser la fonction `console.log`.

```js
const prenom = "Clark";
console.log(prenom); // affiche "Clark" dans la console du navigateur (F12 / onglet Console)

const notes = [10, 12, 15, 15, 20];
console.log(notes); // affiche le tableau et son contenu dans la console
```

### Type d’une variable

Le mot-clé `typeof` permet de vérifier le type d’une variable (ie. de son contenu) :

```js
typeof 12 //=> "number"
typeof 'coucou' //=> "string"
typeof true //=> "boolean"
```

>Attention, `typeof` n’est pas une fonction (voir ci-après) : il n’y a pas de parenthèses, on n’écrit pas typeof(12) par exemple.

### Instructions

Par opposition aux variables qui stockent simplement les données du programme, les instructions sont les traitements qui manipulent ces données.

En JS, on écrit une instruction par ligne et on signale explicitement à la machine la fin d’une instruction par un ; final.

Le ; en fin d’instruction est techniquement facultatif, mais son absence pose problème dans certains cas. La bonne pratique est de systématiquement écrire un ; explicite pour s’éviter des ennuis.

### Affectation de variable

L’attribution d’une valeur à une variable se fait avec l’opérateur =.

Dans cet exemple, on stocke la chaîne de caractères "Lucie" dans la variable `prenom` :

```js
const prenom = "Lucie";
```

>Rappel : l’instruction ci-dessus réalise deux choses, la création d’une variable prenom, et l’affectation de cette variable (stockage d’une valeur dans prenom, en l’occurence la chaîne de caractère "Lucie").

```js
// assignation d'une valeur à une case d'un tableau :
const fruits = ['pomme', 'poire'];
fruits[2] = 'abricot'; // ajoute un élément au tableau
```

### Opérateurs

JS reconnaît un certain nombre d’opérateurs, qui permettent de manipuler facilement les données (en direct, ou stockées dans des variables).

Parmi tous les opérateurs disponibles, les opérateurs arithmétiques `(+,` `-,`` *`, `/`, `%`) permettent d’exécuter les calculs de base sur des number.

```js
1 + 1; // retourne 2
10 / 5 // retourne 2
1 * 2 // retourne 2 (décidemment)
666 - 42 // retourne 624
25 * 4 + 10 // retourne 110, sans parenthèses * et / l'emportent sur le + et -
25 * (4 + 10) // retourne 350, les parenthèses permettent de changer la précédence des opérateurs
```

### Raccourcis

Certains opérateurs dits raccourcis permettent de faire 2 opérations en 1 instruction :

L’opérateur `+=` :

* additionne une quantité à la valeur actuellement stockée à une variable,
* et assigne le résultat dans cette même variable.

On parle **d’incrémentation**.

```js
// la variable nbLivres est initialisée à 1
let nbLivres = 1;

// avec l'instruction ci-dessous, nbLivres prend la valeur nbLivres + 4
nbLivres += 4; // 5, c'est-à-dire équivalent à avoir écrit : nbLivres = nbLivres + 4;
```

Fonctionnent sur le même principe : `-=` (décrémentation), `*=` et `/=`.

Il est possible de gérer l’incrémentation ou la décrémentation de **1** avec un autre raccourci syntaxique :

```js
// la variable nbVies est initialisée à 1
let nbVies = 1;

nbVies++; // j'ajoute 1 à la valeur de nbVies => 2
nbVies--; // j'enlève 1 à la valeur de nbVies => 1
```

### Concaténation

Concaténer 2 chaînes de caractères veut dire « les coller bout à bout. » L’ordre de la concaténation importe.

Pour concaténer deux chaînes, on utilise l’opérateur `+` :

```js
'salut' + ' ' + 'les gens'; // équivalent à la chaîne de caractère 'salut les gens'
```

>Cette fois-ci, il ne s’agit pas de l’addition : la sémantique et l’effet de l’opérateur + dépendent de ce à quoi il est appliqué. Quand les opérandes (les éléments à gauche et à droite de l’opérateur) sont des chaînes de caractères, le + signifie « concaténation. »

Il est possible de concaténer des variables contenant une chaîne de caractères :

```js
let nom = "world";
let message = "Hello " + nom;
// La variable message contient désormais la chaîne "Hello world"
```

### Opérateurs logiques

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_logiques

Il est possible de combiner des valeurs booléennes, selon une logique particulière. Le résultat d’une opération booléenne est toujours une valeur booléenne, donc `true` ou `false`.

L’opérateur `&&` signifie « ET » :

`const canDrive = isEighteen && hasLicence;`

si `isEighteen` vaut `true` **ET** que `hasLicence` vaut `true`, alors `canDrive` prendra la valeur `true`.

L’opérateur `||` signifie « OU » :

`const takeUmbrella = isRaining || willRainToday ;`

si `isRaining` vaut `true` **OU** que `willRainToday` vaut `true`, **ou les deux**, alors `takeUmbrella` prendra la valeur `true`.

### Opérateurs de comparaison

Les opérateurs de comparaison permettent de vérifier 2 valeurs entre elles. Une comparaison renvoit toujours un boolean.

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_de_comparaison

égalité
Le signe `=` peut signifier des choses différentes, selon comment on l’utilise :

```js
= : opérateur d'affectation (pour changer la valeur d'une variable, d'un élément de tableau…)
== : opérateur de comparaison souple (ne compare que la valeur, pas le type)
=== : opérateur de comparaison stricte (compare type & valeur)
```

Ainsi :

```js
1 == '1'; // true : les types sont différents (number vs string), mais la valeur est considérée être la même
1 === '1'; // false : la valeur est la même, mais les types sont différents
1 == 1; // true : la valeur est la même (et le type aussi, mais ce n'est pas vérifié)
1 === 1; // true : la valeur et le type sont les mêmes, tout va bien
```

#### supérieur, inférieur

```js
const age = 28;

age < 30; // age (28) est inférieur à 30 ? true
age <= 30; // age (28) est inférieur ou égal à 30 ? true

age > 30; // age (28) est supérieur à 30 ? false
age >= 30; // age (28) est supérieur ou égal à 30 ? false
```


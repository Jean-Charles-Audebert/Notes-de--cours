# Programmation Fonctionnelle

(https://www.youtube.com/watch?v=TS-dSdacsSA)

Paradigmes de programmation :
- impérative
- objet
- fonctionnelle

La programmation fonctionnelle consiste à concevoir son programme, non pas comme une suite d'instructions, mais comme un ensemble de fonctions.

## Exemples

### impérative : 

```js 
var prenoms = ["Martin", "Marc", "Maxime"];
var eleves = []
for (var i = 0; i< prenoms.length;i++) {
    eleves.push(prenoms[i].toUpperCase())
}
eleves.sort()
console.log(eleves) // ["MARC", "MARTIN", "MAXIME"]
```

### Fonctionnelle : 

```js
var eleves = Immutable.List(["Martin", "Marc", "Maxime"])
    .map(prenom => prenom.toUpperCase())
    .sort()
    .toArray()

console.log('first', eleves); // ["MARC", "MARTIN" ,"MAXIME"]
```

## Immutabilité

Interdit la modification d'une variable. Cela permet d'en garder l'accès.

mutable : 

```js
var eleves = ["Jean"]
eleves.push("Marc") // Mutation
eleves // ["Jean", "Marc"]
```

immutable :  (utilisation de la librairie immutable (js ))

```js
var eleves = ["Jean"]
var nouvelle_classe = [...eleves, "Marc"]
nouvelle_classe
```
## Fonction pure
Une fonction pure n'a aucun effet de bord
 
### Exemple
sans immutable :

```js
var eleve = {name: "Marc", notes: [18, 20]}

let ajouterNote = function (eleve, note) {
    let nouvelles_notes = [...eleve.notes, note]
    return Object.assign({}, eleve, {notes: nouvelles_notes})
}
ajouterNote(eleve, 15)
// { name: 'Marc', notes: [ 18, 20, 15 ] }

```

avec immutable : 

```bash
npm install immutable 
```

```js
let Immutable = require('immutable')
var eleve = {name: "Marc", notes: [18, 20]}

let ajouterNote = function (eleve, note) {
    let new_eleve = Immutable.fromJS(eleve) // devient un Map
    let new_notes = new_eleve.get('notes' ).push(note);
    return new_eleve.set('notes',new_notes).toJS()
}
ajouterNote(eleve, 15)
// { name: 'Marc', notes: [ 18, 20, 15 ] }

``` 
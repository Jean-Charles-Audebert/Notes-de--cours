# Markdown

Markdown est une syntaxe  de balisage léger utilisée pour écrire des documents en format texte simple mais avec une apparence plus structurée. Il peut être converti en HTML ou en d'autres applications:

* Slack
* Discord
* github (les readme, la page de présentation, etc...)
* ...

Ce document est écrit en markdown depuis VSC, j'utilise aussi le logiciel "Obsidian" : [le site de obsidian](https://obsidian.md/)

Sous VSC,  il est possible de fractionner l'éditeur (bouton en haut à droite de la fenêtre, et de visualiser le rendu en temps réel (ctrl+K V))

Par exemple, si j’écris le texte suivant en markdown 

`Je suis *en italique* et je suis **en gras**`

Va donner comme résultat au rendu :

Je suis en *italique* et je suis en **gras**

Le texte markdown sera donc systématiquement lu par un logiciel pour être analysé et affiché avec la mise en forme souhaitée.

## La syntaxe

```md
**gras**
*italique*
_italique_
***italique et gras***
___italique et gras___
~~barré~~
#  Titre 1
## Titre 2
###  Titre 3
#### Titre 4
#####  Titre 5
###### Titre 6
```

>Ceci est une **zone en retrait**.
>La zone continue ici

>Ceci est une autre **zone de retrait**.
Cette zone continue également dans la ligne suivante.

Cependant, cette ligne n’est plus en retrait

- Liste1
- Liste 2
- Liste 3

1. Liste 1
2. Liste 2
3. Liste 3

[ ] A

[x] B

[ ] C

On utilise les `backtites` pour  définir des mots ou lignes de code:

C’est le `code`

``C’est tout le `code`.``

On utilise les triples `backtites` pour  définir des blocs de code, en précisant le langage pour que l'affichage soit amélioré:
```

```html
<html>
  <head>
  </head>
</html>
```

```CSS
p {
    color: blue;
}
```

```js
const message = "Hello World";
console.log(message);
```

On peut échapper des caractères en md :

\- element

\- deleqmsldfkf

tables
|Nom de la promo|participants|Année|
|---|---|---|
|CampusDEV|12|2024|

## Références

[Github](https://docs.github.com/fr/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

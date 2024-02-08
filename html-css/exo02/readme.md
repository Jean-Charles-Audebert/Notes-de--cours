# Bouton café toggle CSS

(https://youtu.be/oUsZZOcTzQM?list=TLGGZttOFZ0Qu28wNjAyMjAyNA)

## HTML

Très léger, 

```html
<label >
    <input type="checkbox" />
    <span></span>
    <b></b>
    <i class="fa-solid fa-check"></i>
    <i class="fa-solid fa-xmark"></i>
  </label>
```

Un label représente le fond, un input pour le checkbox, un span qui intègre l'image et un <b> qui gère la couleur du fond, les effets et la transition.

Tout se passe ensuite dans le CSS.

## CSS

### Mise en place du fond
```css
* {
    ...
}
```
Reset la mise en page par défaut.

```css
label {
    position: relative;
    width: 300px;
    height: 150px;
    background: #3e3e3e;
    box-shadow: 0 0 0 4px #222;
    border-radius: 75px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}
```
Défini un bouton toggle. Par défaut, un checkbox a une marque (coche). On la supprime avec : 

```css
label input {
    appearance: none;
}
```
### Mise en place de la tasse, état initial

Le conteneur
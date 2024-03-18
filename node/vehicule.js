const voiture = {
    chevaux: 4,
    annee: 2024,
    energie: "diesel",
    a: () => console.log(this), //ES6 => fonction fléchée n'a pas de this
    b: function () {
        console.log(this);
    }
}

/* console.log(voiture);
console.log(voiture.energie);
console.log(voiture["energie"]); */
//voiture.a;
voiture.a();
voiture.b();


const {chevaux, annee, energie} = voiture;
console.log(annee);
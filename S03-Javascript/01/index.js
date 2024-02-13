
let param = document.getElementById("firstP");
let title = document.getElementsByClassName("titlePage");
let div = document.getElementsByTagName("div");


// console.log(param); //renvoie une value car 1 seule id possible
// console.log(title); //renvoie une collection (car plusieurs possibilités de sélection sur une classe)
// console.log(div); //renvoie une collection (car plusieurs possibilités de sélection sur une div)
// console.log(div[1]); //renvoie la seconde div

/**
 * Question :
 * Quelle est la différence entre getElementBy... et querySelector ?
 */

/**
 * Réponse :
 * 
 * getElementBy... : 
 *  - méthode de `document` qui permet de slectionner un élément, ou une collection, correspondant à une classe, une id, ou une balise (donc un     élément du DOM)
 *
 * querySelector :
 *  - méthode  qui permet d'accéder à un élément HTML en utilisant un selecteur CSS pour le référencer. 
 *  - cette méthode peut être utilisée pour accéder au premier éléments HTML, ce qui rend querySelector très flexible.
 *  - par exemple const premierParagraphe = document.querySelector('#myDiv p'); sélectionne le premier élément <p> à l'intérieur de la div ayant l'id #myDiv. On peut ainsi le modifier avec un premierParagraphe.textContent = "..." La même fonction avec getElement devrait se faire en 2 étapes : 
 *  1. Sélectionner la div avec l'ID "myDiv"
        const div = document.getElementById('myDiv');
    2. Sélectionner le premier paragraphe à l'intérieur de la div
        const premierParagraphe = div.getElementsByTagName('p')[0];
    3. Modifier le contenu texte du premier paragraphe sélectionné
        premierParagraphe.textContent = "Je suis le premier paragraphe sélectionné avec getElementById !";

* Conclusion :
* getElementBy... est utile pour une sélection rapide basée sur l'ID, la classe ou la balise, tandis que querySelector offre plus de flexibilité et permet une sélection plus avancée en utilisant des sélecteurs CSS.
 */

const allDiv = document.querySelectorAll("div");

allDiv.forEach(div => {
    div.addEventListener('click', () => {
      console.log(div.innerText);
    });
  });

// console.log("allDiv :",allDiv[0].innerText);
// console.log("allDiv :",allDiv[1].innerText);
// console.log("allDiv :",allDiv[2].innerText);

allDiv[0].addEventListener("click", (event) => {
    //console.log(event);
   console.log(event.target.innerText);
})


for(let i=0; i<allDiv.length; i++){
    console.log(i + ": " + allDiv[i].innerText);
}

const toutesMesDivs = document.querySelectorAll("div");
for(let index = 0; index < toutesMesDivs.length; index++){
    toutesMesDivs[index].addEventListener("click", (event) =>{
        console.log(event.target.innerText);
    })
}


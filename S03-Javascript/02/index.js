// Sélectionner toutes les divs contenues dans #box1
const toutesMesDivs = document.querySelectorAll('#box1 div');

// Sélectionner la div #bot dans #box2
const bot = document.querySelector('#box2 #bot');

// Ajouter un gestionnaire d'événements de clic à chaque div de #box1
toutesMesDivs.forEach(div => {
    div.addEventListener('click', () => {
        // Récupérer le texte de la div cliquée
        const texteDivCliquee = div.textContent;

        // Afficher le texte de la div cliquée dans la div #bot de #box2
        bot.textContent = texteDivCliquee;
    });
});


const monTableau = ["A", "B", "C"];
let botChoice ="";
let playerChoice = "";

function addBotChoice() {
    return botChoice = monTableau[Math.floor(Math.random() * monTableau.length)];    
}

function addPlayerChoice(value) {
    return playerChoice = value;
}

for (let i = 0; i < toutesMesDivs.length; i++) {
    toutesMesDivs[i].addEventListener("click", (event) => {
        console.log(addPlayerChoice(event.target.innerText));
        bot.innerText = addBotChoice();
    });
}


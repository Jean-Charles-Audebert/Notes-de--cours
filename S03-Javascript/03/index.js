let toutesMesDivs = document.querySelectorAll("div");
let bot = document.getElementById("bot");
let btn = document.querySelector("button");
let monTableau = ["A", "B", "C"];
let botChoice = "";
let playerChoice = "";

// for(initialisation de la variable index; condition tant que; instruction)
for (let index = 0; index < monTableau.length; index++) {
    console.log(monTableau[index]);
}

function addBotChoice() {
    return botChoice = monTableau[Math.floor(Math.random() * monTableau.length)];
}

for (let i = 0; i < toutesMesDivs.length - 1; i++) {

    toutesMesDivs[i].addEventListener('click', (event) => {
        addBotChoice();
        bot.innerText = botChoice;
        playerChoice = event.target.innerText;
    });
}

// btn.addEventListener("click", ()=> {
//     let result = isEqual(playerChoice, botChoice) ? "Egalité" : "Inégal";
//     console.log("result :", result);
// });

// //console.log("playerChoice :", playerChoice);

// function isEqual(a, b) {
//     if (a === b) {
//         return true;
//     };
// }


btn.addEventListener("click", ()=> {
    if ((playerChoice === "A" && botChoice === "C") || (playerChoice === "C" && botChoice === "B") || (playerChoice === "B" && botChoice === "A")) {
        console.log("You Win");       
    } else if(playerChoice === botChoice) {
        console.log("It's a tie");
    } else{
        console.log("You loose");
    }
});

//console.log("playerChoice :", playerChoice);



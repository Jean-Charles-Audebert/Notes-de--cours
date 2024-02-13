let playeur = document.querySelectorAll('.playeur input');
let form = document.querySelector('.playeur');
let browser = document.querySelector('.browser label i');
let items = ["fa-regular fa-hand-back-fist", "fa-regular fa-hand", "fa-regular fa-hand-scissors"];
const values = ["Pierre", "Papier", "Ciseaux"];
let browserChoise;
let playerChoice;
const title = document.getElementsByTagName('h1')[0];

const getBrowserChoise = () => {
    browserChoise = Math.floor(Math.random() * 3);
    browser.setAttribute("class", items[browserChoise]);
    browserChoise != 2 ? browser.style.rotate = '-90deg' : browser.style.rotate = '0deg'
}

playeur.forEach(element => {
    element.addEventListener('click', (e) => {
        playerChoice = e.target.value;
        getBrowserChoise();
        const botChoice = values[browserChoise];

        if (
            (playerChoice === "Pierre" && botChoice === "Ciseaux") ||
            (playerChoice === "Papier" && botChoice === "Pierre") ||
            (playerChoice === "Ciseaux" && botChoice === "Papier")
        ) {
            title.innerText = "You WIN!";
        } else if (playerChoice === botChoice) {
            title.innerText = "It's a tie";
        } else {
            title.innerText = "You LOOSE!";
        }
    });
});


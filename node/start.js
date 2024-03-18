const prenom = "JC";
const nom = "Audebert";
let age = 46 ;

const message = `Bonjour, je m'appelle ${prenom} ${nom} et j'ai ${age} ans.`

const date = new Date();
const year = date.getFullYear();

const birthYear = year - age;

console.log(message);
console.log(year);
console.log(birthYear);
// Min 1 maj
// Min lenght 12
// Min un spacial caractere
// Min 1 num
// Min 1 min
let form = document.querySelector('form');
let inputEmail = document.querySelector('#InputEmail');
let inputPassword = document.querySelector('#InputPassword');
let InputConfirmPassword = document.querySelector('#InputConfirmPassword');
let regexPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){1,12}$/gm


form.addEventListener("submit", e => e.preventDefault());

const getValidClass = element => {
    element.classList.add('is-valid');
    element.classList.remove('is-invalid');
}
const getInvalidClass = element => {
    element.classList.add('is-invalid');
    element.classList.remove('is-valid');
}

inputPassword.addEventListener("input", e => {
    let input = e.target.value;
    console.log(regexPassword.test(input));
    if (regexPassword.test(input)) {
        getValidClass(inputPassword)
    } else {
        getInvalidClass(inputPassword)
    }
})



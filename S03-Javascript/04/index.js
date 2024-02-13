const div = document.querySelectorAll('div');
const btns = document.querySelectorAll('button');
const btn = document.querySelector('#toggle');

const addClass = () => {
    for (let i = 0; i < div.length; i++) {
        const element = div[ i ];
        element.classList.add("active");
    }
}

const removeClass = () => {
    for (let i = 0; i < div.length; i++) {
        const element = div[ i ];
        element.classList.remove("active");
    }
}

btns.forEach(element => {
    element.addEventListener("click", () => {
        if (element.id == "prev") {
            addClass();
        };
        if (element.id == "next") {
            removeClass();
        }
    })
});

btn.addEventListener("click", () => {
    for (let i = 0; i < div.length; i++) {
        const element = div[ i ];
        element.classList.toggle("active");
    }
});
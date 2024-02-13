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

const toggleClass = () => {
    for (let i = 0; i < div.length; i++) {
        const element = div[ i ];
        element.classList.toggle("active");
    }
}

/* btns.forEach(element => {
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
}); */


/**
 * déplacer la class active selon les boutons next et prev
 */


let currentIndex = 0; // initialisation de la variable qui stocke l'index de la div visée

/**
 * setActive Div() : fonction qui place la class active sur la div visée
 * @param {*} index :  index de la div à placer en active
 *  
 */
const setActive = (index) => {
    div.forEach((element, i) => {
        if (i === index) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
};

/**
 * next : fonction  qui deplace la class active vers la droite
 */


const next = () => {
    currentIndex = (currentIndex + 1) % div.length;  // on revient au début une fois qu'on est arrivé à la fin
    /**
     * on incrément currentIndex. par exemple si currentIndex était 1 il devient 2. Si current index devient égal à div.length, avec le calcul du modulo, cela ramène currentInndex à 0. 
     */
    setActive(currentIndex);
};

/**
 * prev : fonction qui déplace la class active vers la gauche
 */
const prev = () => {
    currentIndex = (currentIndex - 1 + div.length) % div.length; //  on utilise le modulo pour que si on est au premier élément on arrive au dernier
    setActive(currentIndex);
};

btns.forEach(element => {
    element.addEventListener('click', () => {   // on pose l'écouteur sur le clic
        if (element.id === 'next') {            // si l'on clique sur le bouton next
            removeClass();                      // on enlève active
            next();                             // on appelle next
        } else if (element.id === 'prev') {     // sinon si on clique sur le bouton prev
            removeClass();                      // on enlève active
            prev();                             // on appelle prev
        } else if (element.id === 'toggle') {   // si l'on clique sur le bouton toggle
            toggleClass();                      // on appelle la fonction toggleClass
        }
    });
});

setActive(currentIndex);                        // on appelle la fonction pour mettre la class active au bon élément
const div = document.querySelectorAll('div');
const btns = document.querySelectorAll('button');
const btn = document.querySelector('#toggle');

let currentIndex = 0; // initialisation de la variable qui stocke l'index de la div visée
let caterpillarInterval; // intervalle pour la chenille

const toggleClass = () => {
    for (let i = 0; i < div.length; i++) {
        const element = div[ i ];
        element.classList.toggle("active");
    }
}

/**
 * déplacer la class active selon les boutons next et prev
 */

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

/**
 * Faire une chenille sur les div :)
 */
const caterpillar = (btn) => {

    if (caterpillarInterval) {
        btn.innerText = "Chenille";
        clearInterval(caterpillarInterval);
        caterpillarInterval = null;
    } else {
        btn.innerText = "Stop";
        caterpillarInterval = setInterval(() => {
            next();
        }, 500);
    }
}

const easeOutQuad = (t) => {
    return t * (2 - t);
};

const divAnimation = (delay, startTime, duration) => {
    setTimeout(() => {
        let timeDiff = duration - (Date.now() - startTime);
        const progression = 500 * (1 - easeOutQuad(timeDiff / duration));
        next();
        if (timeDiff > 0) {
            divAnimation(progression, startTime, duration);
        }
    }, delay)
}

const loto = () => {
    const randomTime = 2000 + Math.floor(Math.random() * 5000);
    const start = Date.now();
    const setIntevalId = divAnimation(0, start, randomTime);

}

btns.forEach(element => {
    element.addEventListener('click', () => {  
        switch (element.id) {
            case 'next':
                next();
                break;
            case 'prev':
                prev();
                break;
            case 'toggle':
                toggleClass();
                break;
            case 'caterpillar':
                caterpillar(element);
                break;
            case 'loto':
                loto();
                break;
            default:
                break;
        }
    });
});


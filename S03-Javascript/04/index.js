const divs = document.querySelectorAll('.box');
const btns = document.querySelectorAll('button');

let currentIndex = 0;
let caterpillarInterval;

const toggleClass = () => {
    divs.forEach(div => div.classList.toggle('active'));
};

const setActive = (index) => {
    divs.forEach((div, i) => {
        div.classList.toggle('active', i === index);
    });
};

const next = () => {
    currentIndex = (currentIndex + 1) % divs.length;
    setActive(currentIndex);
};

const prev = () => {
    currentIndex = (currentIndex - 1 + divs.length) % divs.length;
    setActive(currentIndex);
};

const caterpillar = (btn) => {
    if (caterpillarInterval) {
        btn.innerText = "Chenille";
        clearInterval(caterpillarInterval);
        caterpillarInterval = null;
    } else {
        btn.innerText = "Stop";
        caterpillarInterval = setInterval(next, 500);
    }
};

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
    divAnimation(0, start, randomTime);
}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        switch (btn.id) {
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
                caterpillar(btn);
                break;
            case 'loto':
                loto();
                break;
            default:
                break;
        }
    });
});



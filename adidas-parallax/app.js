// Select Elements
const container = document.querySelector('.parallax-card__container');
const card = document.querySelector('.parallax-card__card');

// Select Card Items
const img = document.querySelector('.parallax-card__img');
const title = document.querySelector('.parallax-card__title');
const subtitle = document.querySelector('.parallax-card__subtitle');
const sizes = document.querySelector('.parallax-card__sizes');
const purchase = document.querySelector('.parallax-card__purchase');

// Event Listeners
container.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    const yAxis = (window.innerWidth / 2 - e.pageY) / 10;
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

container.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
    img.style.transform = `translateZ(120px) rotateZ(-25deg) scale3d(1.3, 1.3, 1.3)`;
    title.style.transform = `translateZ(90px)`;
    subtitle.style.transform = `translateZ(90px)`;
    sizes.style.transform = `translateZ(80px)`;
    purchase.style.transform = `translateZ(80px)`;
});

container.addEventListener('mouseleave', () => {
    card.style.transition = 'all .5s ease';
    card.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
    resetZIndex([img, title, subtitle, sizes, purchase]);
});

function resetZIndex(elArr) {
    elArr.forEach((el) => {
        el.style.transform = `translateZ(0)`;
    });
}

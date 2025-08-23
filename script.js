const hamburger = document.querySelector('.bar');
const nav = document.querySelector('nav')

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
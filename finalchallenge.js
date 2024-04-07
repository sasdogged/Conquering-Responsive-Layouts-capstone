const toggleIcon = document.querySelector('.toggle__icon');
const nav = document.querySelector('.nav');

toggleIcon.addEventListener('click', () => {
    nav.classList.toggle('nav__visible');
})
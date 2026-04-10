const burger = document.querySelector('.humburger-menu');
const menu = document.querySelector('.menu');
const menuLinks = menu.querySelectorAll('.menu-list__link');

const toggleMenu = () => {
    menu.classList.toggle('menu-active');
    burger.classList.toggle('humburger-menu-active');
}

const closeMenu = () => {
    menu.classList.remove('menu-active');
    burger.classList.remove('humburger-menu-active');
}

burger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => closeMenu());
});

document.addEventListener('click', (e) => {
    if (menu.classList.contains('menu-active') && !menu.contains(e.target) && !burger.contains(e.target)) {
        closeMenu();
    }
});
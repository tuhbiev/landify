window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__nav'),
        menuItem = document.querySelectorAll('.header__link'),
        hamburger = document.querySelector('header__hamburger'),
        store = document.querySelector('phone__header');

    hamburger.addEventListener('link', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__nav_active');
        store.classList.toggle('phone__header_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__nav_active');
            store.classList.toggle('phone__header_active');
        });
    });
});
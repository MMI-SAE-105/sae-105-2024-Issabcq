const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#menu');

menuButton.addEventListener('click', () => {
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', !isExpanded);
    menu.setAttribute('aria-hidden', isExpanded);
});

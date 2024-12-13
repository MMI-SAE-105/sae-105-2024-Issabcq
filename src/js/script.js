// Sélection des éléments
const menuButton = document.querySelector('.header__menu-button');
const menu = document.getElementById('menu');
const menuCloseButton = document.querySelector('.header__menu-close');

// Fonction pour ouvrir/fermer le menu
function toggleMenu() {
    const isMenuOpen = menu.getAttribute('aria-hidden') === 'false'; // Vérifie si le menu est ouvert
    menu.setAttribute('aria-hidden', isMenuOpen ? 'true' : 'false'); // Met à jour l'état `aria-hidden`
    menuButton.setAttribute('aria-expanded', !isMenuOpen); // Met à jour l'état `aria-expanded`
}

// Écouteurs d'événements
menuButton.addEventListener('click', toggleMenu); // Ouvrir le menu
menuCloseButton.addEventListener('click', toggleMenu); // Fermer le menu

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


document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel__track');
    const items = Array.from(track.children);
    const nextButton = document.querySelector('.carousel__button--next');
    const prevButton = document.querySelector('.carousel__button--prev');

    let currentIndex = 0;

    const updateCarousel = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });
});


// Sélectionner tous les boutons des dates
const dateButtons = document.querySelectorAll('.program__day-button');

// Ajouter un gestionnaire d'événement de clic à chaque bouton
dateButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtenir le texte du bouton (ex: "Lundi 21 Juillet")
        const dateText = button.textContent.trim();

        // Trouver l'élément correspondant en parcourant les titres des dates
        const dateSections = document.querySelectorAll('.program__date h2');
        let targetSection = null;

        dateSections.forEach(section => {
            if (section.textContent.trim() === dateText) {
                targetSection = section;
            }
        });

        // Si l'élément est trouvé, scroller jusqu'à lui
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Animation fluide
                block: 'start'      // Positionner en haut de la vue
            });
        } else {
            console.warn(`Aucune section trouvée pour la date : ${dateText}`);
        }
    });
});

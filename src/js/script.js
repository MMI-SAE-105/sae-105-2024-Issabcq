const menuButton = document.querySelector('.header__menu-button');
const menu = document.getElementById('menu');
const menuCloseButton = document.querySelector('.header__menu-close');


function toggleMenu() {
    const isMenuOpen = menu.getAttribute('aria-hidden') === 'false'; 
    menu.setAttribute('aria-hidden', isMenuOpen ? 'true' : 'false'); 
    menuButton.setAttribute('aria-expanded', !isMenuOpen); 
}


menuButton.addEventListener('click', toggleMenu); 
menuCloseButton.addEventListener('click', toggleMenu); 


const track = document.querySelector('.carousel__track');
const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');
const items = document.querySelectorAll('.carousel__item');

let currentIndex = 0;
let isDragging = false;
let startX = 0, currentTranslate = 0, previousTranslate = 0;


const updateCarousel = () => {
    
    if (currentIndex >= items.length) currentIndex = 0;
    
    if (currentIndex < 0) currentIndex = items.length - 1;

    track.style.transform = `translateX(-${currentIndex * 100}%)`;
};

const moveToNextSlide = () => {
    currentIndex++;
    updateCarousel();
};


const moveToPrevSlide = () => {
    currentIndex--;
    updateCarousel();
};


const startDrag = (e) => {
    isDragging = true;
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    previousTranslate = -currentIndex * 100;
    track.style.transition = 'none'; 
};

const drag = (e) => {
    if (!isDragging) return;
    const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    const deltaX = currentX - startX;
    currentTranslate = previousTranslate + (deltaX / track.offsetWidth) * 100;
    track.style.transform = `translateX(${currentTranslate}%)`;
};

const stopDrag = () => {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = 'transform 0.5s ease-in-out'; 

    
    const movedBy = currentTranslate - previousTranslate;
    if (movedBy < -20) currentIndex++;
    if (movedBy > 20) currentIndex--;

    updateCarousel();
};


track.addEventListener('mousedown', startDrag);
track.addEventListener('mousemove', drag);
track.addEventListener('mouseup', stopDrag);
track.addEventListener('mouseleave', stopDrag);

track.addEventListener('touchstart', startDrag);
track.addEventListener('touchmove', drag);
track.addEventListener('touchend', stopDrag);


nextButton.addEventListener('click', moveToNextSlide);
prevButton.addEventListener('click', moveToPrevSlide);




const dateButtons = document.querySelectorAll('.program__day-button');


dateButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        const dateText = button.textContent.trim();

       
        const dateSections = document.querySelectorAll('.program__date h2');
        let targetSection = null;

        dateSections.forEach(section => {
            if (section.textContent.trim() === dateText) {
                targetSection = section;
            }
        });

        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', 
                block: 'start'      
            });
        } else {
            console.warn(`Aucune section trouvée pour la date : ${dateText}`);
        }
    });
});

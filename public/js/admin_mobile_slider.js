const menuButton = document.querySelector('#slider_menu');
const mobileSlider = document.querySelector('.admin_aside_mobile');

menuButton.addEventListener('click', function () {
    if ( mobileSlider.style.transform != 'translateX(0%)' ) {
        mobileSlider.style.transform = 'translateX(0%)';
        menuButton.style.color = 'white';
    } else {
        mobileSlider.style.transform = 'translateX(-200%)';
        menuButton.style.color = 'black';
    }
});
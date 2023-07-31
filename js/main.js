// Слайдеры
$(document).ready(function() {
    $('.slider-about-club').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        touchMove: true,
        waitForAnimate: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1141,
              settings: {
                arrows: false,
                // slidesToShow: 3
              }
            },
            {
              breakpoint: 851,
              settings: {
                arrows: false,
                slidesToShow: 1,
              }
            }
          ]
    });
});

// Мобильное меню 
const menuBtn = document.querySelector('.mobile-menu__btn');
const closeMenuBtn = document.querySelector('.menu-mobile__close-btn');
const menuMobile = document.querySelector('.menu-mobile');

menuBtn.addEventListener('click', function() {
    menuMobile.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenuBtn.addEventListener('click', function() {
    menuMobile.classList.remove('active');
    document.body.style.overflow = 'auto';
});



// Кнопка скролла наверх 
const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');

scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

function toggleScrollToTopBtn() {
    if (window.scrollY > 600) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
}

window.addEventListener('scroll', toggleScrollToTopBtn);
toggleScrollToTopBtn();
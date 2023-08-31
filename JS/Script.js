$(document).ready(function() {
    const carousel = $('.carousel');
    const items = $('.item');
  
    let currentIndex = 0;
  
    // Cambiar de item cuando se hace clic en el carrusel
    carousel.on('click', function() {
      currentIndex = (currentIndex + 1) % items.length;
      const displacement = -currentIndex * items.width();
      carousel.css('transform', `translateX(${displacement}px)`);
    });
  });
$(document).ready(function() {
    const toggleButton = $('#toggle-button');
    const socialIcons = $('.social-icons');
  
    toggleButton.on('click', function() {
      socialIcons.slideToggle(); // Mostrar u ocultar íconos al hacer clic
    });
  });
    
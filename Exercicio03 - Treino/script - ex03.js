let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');

  function changeSlide(n) {
    currentIndex += n;
    showSlides();
  }

  function showSlides() {
    const totalItems = items.length;

    if (currentIndex < 0) {
      currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
      currentIndex = 0;
    }

    items.forEach(item => item.classList.remove('active'));
    items[currentIndex].classList.add('active');
  }
  
  showSlides();
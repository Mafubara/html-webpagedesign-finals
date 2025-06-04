document.addEventListener('DOMContentLoaded', function() {
  // Set active navigation link
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-items a').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (currentPage === linkPage) {
      link.classList.add('active');
    }
  });

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.innerHTML = nav.classList.contains('active') 
      ? '<i class="fas fa-times"></i>' 
      : '<i class="fas fa-bars"></i>';
  });

  // Close mobile menu when clicking on links
  document.querySelectorAll('.nav-items a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.card, .section-title');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        el.classList.add('slide-up');
      }
    });
  };

  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();
});
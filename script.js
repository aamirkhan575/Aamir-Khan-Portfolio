// Scroll Reveal Animation
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal, .reveal-scale');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      const delay = element.getAttribute('data-delay');
      if (delay) {
        setTimeout(() => {
          element.classList.add('active');
        }, delay * 100);
      } else {
        element.classList.add('active');
      }
    }
  });
}

// Initialize scroll reveal
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      if (navLink) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.style.opacity = '1';
        });
        navLink.style.opacity = '0.6';
      }
    }
  });
});

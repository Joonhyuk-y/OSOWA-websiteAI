// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Navigation scroll effect
  const navbar = document.querySelector('.navbar');
  
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  
  // Adjust hero elements based on viewport size
  function adjustHeroElements() {
    const logo = document.querySelector('.hero-logo');
    const heroText = document.querySelector('.hero-heading');
    const viewportWidth = window.innerWidth;
    
    if (logo && heroText) {
      if (viewportWidth > 900) {
        // Adjust size for larger screens
        const newLogoSize = viewportWidth * 0.06; // 6% of the viewport width
        logo.style.width = `${newLogoSize}px`;
        
        const newFontSize = viewportWidth * 0.05; // 5% of the viewport width
        heroText.style.fontSize = `${newFontSize}px`;
      } else {
        // Adjust size for smaller screens
        const newLogoSize = viewportWidth * 0.09; // 9% of the viewport width
        logo.style.width = `${newLogoSize}px`;
        
        const newFontSize = viewportWidth * 0.08; // 8% of the viewport width
        heroText.style.fontSize = `${newFontSize}px`;
      }
    }
  }
  
  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      }
      
      // Close mobile menu if open
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });
  
  // Form submission handling
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Simple validation
      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      // Here you would typically send the form data to a server
      // For this example, we'll just show a success message
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
  
  // Initialize event listeners
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', adjustHeroElements);
  
  // Run on page load
  handleScroll();
  adjustHeroElements();
});
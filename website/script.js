// Wait for DOM to fully load before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    // Toggle mobile menu visibility when button is clicked
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        // Change icon between bars and X
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu when clicking a navigation link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            // Reset icon to bars
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump behavior
            
            // Get target section ID from href attribute
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate position to scroll to (account for fixed header)
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                // Smooth scroll animation
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button functionality
    const backToTopBtn = document.getElementById('backToTop');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) { // Show after scrolling 300px
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    // Scroll to top when button is clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Contact form submission handling
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        // In a real implementation, this would send data to a server
        // For this demo, we'll just show a success message
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData.entries());
        
        // Log form data to console (for demo purposes)
        console.log('Form submitted:', formValues);
        
        // Show success message (in real app, replace with proper UI)
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form fields
        contactForm.reset();
    });

    // Add scroll animation to elements
    const animateOnScroll = function() {
        // Get all elements with animation class
        const animatedElements = document.querySelectorAll('.section-header');
        
        animatedElements.forEach(element => {
            // Get element position relative to viewport
            const elementPosition = element.getBoundingClientRect().top;
            // Get viewport height
            const windowHeight = window.innerHeight;
            
            // If element is in viewport, add animation class
            if (elementPosition < windowHeight * 0.85) {
                element.classList.add('animate-in');
            }
        });
    };

    // Run animation check on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});

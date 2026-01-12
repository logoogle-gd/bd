// Logoogle Studio - Premium Professional JavaScript

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const headerNav = document.querySelector('header nav');
const navLinks = document.querySelectorAll('nav a');
const startProjectBtn = document.querySelector('.start-project-btn');

// Mobile Menu Toggle
function toggleMobileMenu() {
    headerNav.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    
    if (headerNav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        document.body.style.overflow = 'hidden';
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        document.body.style.overflow = 'auto';
    }
}

// Close Mobile Menu
function closeMobileMenu() {
    if (headerNav.classList.contains('active')) {
        headerNav.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        document.body.style.overflow = 'auto';
    }
}

// Smooth Scrolling for Anchor Links
function smoothScroll(event) {
    event.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#' || this.classList.contains('start-project-btn') || this.classList.contains('cta-button')) {
        return;
    }
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Close mobile menu after clicking a link
        if (window.innerWidth <= 768) {
            closeMobileMenu();
        }
    }
}

// Header Scroll Effect
function handleHeaderScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.padding = '20px 0';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
    } else {
        header.style.padding = '24px 0';
        header.style.boxShadow = 'none';
    }
}

// Intersection Observer for Animations
function createObserver(options = {}) {
    return new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add delay for staggered animation
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...options
    });
}

// Initialize Animations
function initializeAnimations() {
    const observer = createObserver();
    
    // Animate service cards
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.classList.add('fade-in');
        observer.observe(card);
    });
    
    // Animate project cards
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.classList.add('fade-in');
        observer.observe(card);
    });
    
    // Animate process steps
    document.querySelectorAll('.process-step').forEach((step, index) => {
        step.classList.add('fade-in');
        observer.observe(step);
    });
    
    // Animate founder section
    const founderObserver = createObserver({ threshold: 0.3 });
    const founderImage = document.querySelector('.founder-image');
    const founderText = document.querySelector('.founder-text');
    
    if (founderImage) {
        founderImage.classList.add('slide-in-left');
        founderObserver.observe(founderImage);
    }
    
    if (founderText) {
        founderText.classList.add('slide-in-right');
        founderObserver.observe(founderText);
    }
    
    // Animate contact section items
    document.querySelectorAll('.email-item').forEach((item, index) => {
        item.classList.add('fade-in');
        observer.observe(item);
    });
}

// Project Filtering (for future enhancement)
function initializeProjectFilter() {
    // This function can be expanded to add filtering functionality
    const projectCards = document.querySelectorAll('.project-card');
    
    // Example filter buttons (can be added to HTML later)
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filterValue = this.getAttribute('data-filter');
                
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter projects
                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        card.classList.add('fade-in');
                    } else {
                        card.style.display = 'none';
                        card.classList.remove('fade-in');
                    }
                });
            });
        });
    }
}

// Form Validation (for future contact form)
function initializeFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            contactForm.reset();
        });
    }
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
}

// Lazy loading for images
function initializeLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}

// Back to top button
function createBackToTopButton() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    
    document.body.appendChild(backToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Active navigation highlighting
function setActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const headerHeight = document.querySelector('header').offsetHeight;
            
            if (scrollY >= (sectionTop - headerHeight - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// WhatsApp integration
function initializeWhatsAppIntegration() {
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn, .start-project-btn, .cta-button[href*="whatsapp"]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (!this.getAttribute('href').includes('whatsapp')) return;
            
            // Optional: Add analytics or tracking here
            console.log('WhatsApp button clicked');
            
            // The link will open in a new tab automatically
            // We can add confirmation or tracking here
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only apply smooth scrolling to anchor links
            if (this.getAttribute('href').startsWith('#')) {
                smoothScroll.call(this, e);
                closeMobileMenu();
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize project filtering (if needed)
    initializeProjectFilter();
    
    // Initialize form validation (if contact form exists)
    initializeFormValidation();
    
    // Initialize lazy loading
    initializeLazyLoading();
    
    // Create back to top button
    createBackToTopButton();
    
    // Set active navigation
    setActiveNav();
    
    // Initialize WhatsApp integration
    initializeWhatsAppIntegration();
    
    // Add CSS for animations and components
    addDynamicStyles();
});

// Add dynamic CSS styles for JS components
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Animation Styles */
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .slide-in-left {
            opacity: 0;
            transform: translateX(-50px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .slide-in-left.visible {
            opacity: 1;
            transform: translateX(0);
        }
        
        .slide-in-right {
            opacity: 0;
            transform: translateX(50px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .slide-in-right.visible {
            opacity: 1;
            transform: translateX(0);
        }
        
        /* Notification Styles */
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: white;
            padding: 16px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-width: 300px;
            max-width: 400px;
            z-index: 9999;
            transform: translateX(150%);
            transition: transform 0.3s ease;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification.success {
            border-left: 4px solid #10B981;
        }
        
        .notification.error {
            border-left: 4px solid #EF4444;
        }
        
        .notification.info {
            border-left: 4px solid #3366FF;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 1;
        }
        
        .notification i {
            font-size: 20px;
        }
        
        .notification.success i {
            color: #10B981;
        }
        
        .notification.error i {
            color: #EF4444;
        }
        
        .notification.info i {
            color: #3366FF;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: #666;
            cursor: pointer;
            font-size: 14px;
            padding: 4px;
            margin-left: 10px;
        }
        
        /* Back to Top Button */
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: var(--primary-black);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: all 0.3s ease;
            z-index: 999;
        }
        
        .back-to-top.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        .back-to-top:hover {
            background: var(--primary-blue);
            transform: translateY(-5px);
        }
        
        /* Active Navigation */
        .nav-links a.active {
            color: var(--primary-blue) !important;
            font-weight: 600;
        }
        
        /* Lazy Loading */
        img.lazy {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        img.lazy.loaded {
            opacity: 1;
        }
        
        /* Mobile Menu Active State */
        @media (max-width: 768px) {
            nav.active {
                display: flex;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                background-color: var(--primary-white);
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 80px 20px;
            }
            
            .nav-links.active {
                display: flex;
                flex-direction: column;
                gap: 30px;
                text-align: center;
            }
            
            .start-project-btn.active {
                display: inline-flex;
                margin-top: 40px;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// Export functions for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleMobileMenu,
        closeMobileMenu,
        smoothScroll,
        handleHeaderScroll,
        initializeAnimations,
        showNotification,
        setActiveNav
    };
}
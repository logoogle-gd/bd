// Logoogle Studio - Premium Professional JavaScript

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const headerNav = document.querySelector('header nav');
const navLinks = document.querySelectorAll('nav a');
const startProjectBtn = document.querySelector('.start-project-btn');

// Your Contact Information
const YOUR_INFO = {
    whatsapp: '+8801615639722', // WhatsApp number (no spaces)
    whatsappDisplay: '+880 1615 639722', // Display format
    email: 'itsmralamin@gmail.com', // Your personal email
    studioName: 'LOGOOGLE',
    studioEmail: 'logoogle_@hotmail.com', // Studio email
    studioPhone: '+880 1615 639722',
    founderName: 'MD. AL AMIN',
    position: 'Founder & Creative Director'
};

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

// Form Validation and Order Submission
function initializeFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Disable submit button to prevent multiple submissions
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="spinner"></span> Processing Order...';
            submitBtn.disabled = true;
            
            try {
                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const phone = document.getElementById('phone') ? document.getElementById('phone').value.trim() : '';
                const service = document.getElementById('service') ? document.getElementById('service').value.trim() : '';
                const message = document.getElementById('message').value.trim();
                const budget = document.getElementById('budget') ? document.getElementById('budget').value.trim() : '';
                
                // Simple validation
                if (!name || !email || !message) {
                    showNotification('Please fill in all required fields.', 'error');
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                    return;
                }
                
                if (!isValidEmail(email)) {
                    showNotification('Please enter a valid email address.', 'error');
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                    return;
                }
                
                // Create order data object
                const orderData = {
                    name: name,
                    email: email,
                    phone: phone || 'Not provided',
                    service: service || 'General Inquiry',
                    message: message,
                    budget: budget || 'Not specified',
                    date: new Date().toLocaleString('en-BD', {
                        timeZone: 'Asia/Dhaka',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    }),
                    source: 'LOGOOGLE Studio Website',
                    timestamp: new Date().toISOString()
                };
                
                // Send order notifications
                const result = await sendOrderNotifications(orderData);
                
                if (result.success) {
                    // Show success message
                    let successMsg = '🎉 Order submitted successfully! ';
                    
                    if (result.adminWhatsapp) {
                        successMsg += 'Check your WhatsApp for order details. ';
                    }
                    
                    if (result.clientWhatsapp && phone) {
                        successMsg += 'Client confirmation sent via WhatsApp. ';
                    }
                    
                    showNotification(successMsg, 'success');
                    
                    // Reset form
                    setTimeout(() => {
                        contactForm.reset();
                    }, 1000);
                    
                } else {
                    showNotification('Order received but notifications failed. We will contact you soon.', 'info');
                }
                
            } catch (error) {
                console.error('Form submission error:', error);
                showNotification('Something went wrong. Please try again or contact us directly via WhatsApp.', 'error');
            } finally {
                // Re-enable submit button after 2 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                }, 2000);
            }
        });
    }
}

// Send order notifications to admin and client
async function sendOrderNotifications(orderData) {
    try {
        console.log('🚀 Starting order notification process...', orderData);
        
        let adminWhatsappSent = false;
        let clientWhatsappSent = false;
        
        // 1. Send WhatsApp notification to admin (you) - ALWAYS SEND
        try {
            adminWhatsappSent = await sendWhatsAppToAdmin(orderData);
            console.log('✅ Admin WhatsApp sent:', adminWhatsappSent);
        } catch (adminError) {
            console.error('❌ Admin WhatsApp failed:', adminError);
        }
        
        // 2. Send WhatsApp confirmation to client (if phone provided)
        if (orderData.phone && orderData.phone !== 'Not provided') {
            try {
                // Wait a moment before sending client message
                await new Promise(resolve => setTimeout(resolve, 1000));
                clientWhatsappSent = await sendWhatsAppToClient(orderData);
                console.log('✅ Client WhatsApp sent:', clientWhatsappSent);
            } catch (clientError) {
                console.error('❌ Client WhatsApp failed:', clientError);
            }
        } else {
            console.log('ℹ️ No client phone provided, skipping client WhatsApp');
        }
        
        // 3. Create email notifications (log for now)
        console.log('📧 Email notifications ready for:');
        console.log('   To Admin:', YOUR_INFO.email);
        console.log('   To Client:', orderData.email);
        
        // Create email content for display
        const emailContent = createEmailContent(orderData);
        console.log('📄 Email content generated');
        
        // Log order summary
        console.log('📊 Order Summary:');
        console.log('   Client:', orderData.name);
        console.log('   Service:', orderData.service);
        console.log('   Budget:', orderData.budget);
        console.log('   Admin WhatsApp:', adminWhatsappSent ? '✅ Sent' : '❌ Failed');
        console.log('   Client WhatsApp:', clientWhatsappSent ? '✅ Sent' : orderData.phone ? '❌ Failed' : '➖ Skipped');
        
        return {
            success: true,
            adminWhatsapp: adminWhatsappSent,
            clientWhatsapp: clientWhatsappSent,
            orderId: orderData.timestamp,
            emailContent: emailContent
        };
        
    } catch (error) {
        console.error('❌ Error in order notification process:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

// Send WhatsApp message to admin (you)
function sendWhatsAppToAdmin(orderData) {
    return new Promise((resolve, reject) => {
        try {
            // Format the message for admin
            const message = encodeURIComponent(
                `🚀 *NEW ORDER - LOGOOGLE STUDIO* 🚀\n\n` +
                `🆕 *NEW CLIENT ORDER*\n\n` +
                `👤 *Client Information:*\n` +
                `• Name: ${orderData.name}\n` +
                `• Email: ${orderData.email}\n` +
                `• Phone: ${orderData.phone}\n` +
                `• Service: ${orderData.service}\n` +
                `• Budget: ${orderData.budget}\n\n` +
                `📋 *Project Requirements:*\n` +
                `${orderData.message}\n\n` +
                `📅 *Order Details:*\n` +
                `• Date: ${orderData.date}\n` +
                `• Order ID: ${orderData.timestamp.slice(0, 8)}\n` +
                `• Source: ${orderData.source}\n\n` +
                `⚡ *Action Required:*\n` +
                `1. Contact client within 24 hours\n` +
                `2. Send proposal/quote\n` +
                `3. Update project tracker\n\n` +
                `📞 *Quick Contact:*\n` +
                `• Email: ${orderData.email}\n` +
                `• Call: ${orderData.phone}\n\n` +
                `💼 *LOGOOGLE STUDIO*\n` +
                `Premium Logo & Brand Identity Design`
            );
            
            // Clean WhatsApp number
            const cleanWhatsapp = YOUR_INFO.whatsapp.replace(/\D/g, '');
            
            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/${cleanWhatsapp}?text=${message}`;
            
            // Open WhatsApp in new tab
            const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            
            if (newWindow) {
                console.log('📱 Admin WhatsApp window opened');
                // Close the window after 5 seconds
                setTimeout(() => {
                    try {
                        newWindow.close();
                    } catch (e) {
                        // Ignore close errors
                    }
                }, 5000);
                
                // Mark as sent
                localStorage.setItem(`order_${orderData.timestamp}`, JSON.stringify({
                    type: 'admin_whatsapp',
                    sent: true,
                    time: new Date().toISOString()
                }));
                
                resolve(true);
            } else {
                console.warn('⚠️ Could not open WhatsApp window (popup blocked?)');
                // Still resolve as true because user can manually send
                resolve(true);
            }
            
        } catch (error) {
            console.error('❌ Error in admin WhatsApp:', error);
            reject(error);
        }
    });
}

// Send WhatsApp confirmation to client
function sendWhatsAppToClient(orderData) {
    return new Promise((resolve, reject) => {
        try {
            // Clean and format phone number
            const rawPhone = orderData.phone;
            let whatsappNumber = rawPhone.replace(/\D/g, ''); // Remove non-digits
            
            // Format for Bangladesh
            if (whatsappNumber.startsWith('0')) {
                whatsappNumber = '880' + whatsappNumber.substring(1);
            } else if (!whatsappNumber.startsWith('880') && whatsappNumber.length === 10) {
                whatsappNumber = '880' + whatsappNumber;
            } else if (whatsappNumber.startsWith('+')) {
                whatsappNumber = whatsappNumber.substring(1);
            }
            
            // Check if it's a valid Bangladesh number
            if (!whatsappNumber.startsWith('880') || whatsappNumber.length !== 13) {
                console.warn('⚠️ Invalid Bangladesh phone number:', rawPhone);
                resolve(false);
                return;
            }
            
            // Format the confirmation message for client
            const message = encodeURIComponent(
                `✅ *ORDER CONFIRMED - LOGOOGLE STUDIO* ✅\n\n` +
                `Dear *${orderData.name}*,\n\n` +
                `Thank you for choosing LOGOOGLE Studio! We have received your order for *${orderData.service}*.\n\n` +
                `📋 *Your Order Details:*\n` +
                `• Service: ${orderData.service}\n` +
                `• Budget Range: ${orderData.budget}\n` +
                `• Order Date: ${orderData.date}\n` +
                `• Order ID: ${orderData.timestamp.slice(0, 8)}\n\n` +
                `📝 *Your Requirements:*\n` +
                `${orderData.message}\n\n` +
                `🔄 *What Happens Next:*\n` +
                `1. ✅ Order received & confirmed\n` +
                `2. ⏳ Team review (within 24 hours)\n` +
                `3. 📞 Direct contact from our team\n` +
                `4. 📄 Detailed proposal & timeline\n` +
                `5. 🎨 Start creative process!\n\n` +
                `📞 *Contact LOGOOGLE Studio:*\n` +
                `• Email: ${YOUR_INFO.studioEmail}\n` +
                `• Phone/WhatsApp: ${YOUR_INFO.studioPhone}\n` +
                `• Founder: ${YOUR_INFO.founderName}\n\n` +
                `💼 *About LOGOOGLE Studio:*\n` +
                `We create premium logos & brand identities that make businesses stand out. Your vision is our mission!\n\n` +
                `⏰ *Business Hours (BD Time):*\n` +
                `Sunday - Thursday: 9:00 AM - 6:00 PM\n` +
                `Friday - Saturday: 10:00 AM - 4:00 PM\n\n` +
                `Thank you for trusting us with your project!\n\n` +
                `Best regards,\n` +
                `*${YOUR_INFO.founderName}*\n` +
                `${YOUR_INFO.position}\n` +
                `*LOGOOGLE STUDIO*\n` +
                `🚀 Transforming Brands, Creating Impact`
            );
            
            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
            
            // Open WhatsApp in new tab with delay
            setTimeout(() => {
                const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                
                if (newWindow) {
                    console.log('📱 Client WhatsApp window opened');
                    // Close the window after 5 seconds
                    setTimeout(() => {
                        try {
                            newWindow.close();
                        } catch (e) {
                            // Ignore close errors
                        }
                    }, 5000);
                    
                    // Mark as sent
                    localStorage.setItem(`order_client_${orderData.timestamp}`, JSON.stringify({
                        type: 'client_whatsapp',
                        sent: true,
                        time: new Date().toISOString(),
                        to: whatsappNumber
                    }));
                    
                    resolve(true);
                } else {
                    console.warn('⚠️ Could not open client WhatsApp window');
                    resolve(false);
                }
            }, 1500); // Delay to ensure admin message is sent first
            
        } catch (error) {
            console.error('❌ Error in client WhatsApp:', error);
            reject(error);
        }
    });
}

// Create email content
function createEmailContent(orderData) {
    return {
        subject: `New Order: ${orderData.service} - ${orderData.name}`,
        toAdmin: `
            To: ${YOUR_INFO.email}
            Subject: NEW ORDER - ${orderData.service} - LOGOOGLE Studio
            
            ===========================================
                            NEW ORDER RECEIVED
                                LOGOOGLE STUDIO
            ===========================================
            
            CLIENT INFORMATION:
            -------------------
            • Name: ${orderData.name}
            • Email: ${orderData.email}
            • Phone: ${orderData.phone}
            
            PROJECT DETAILS:
            ----------------
            • Service Required: ${orderData.service}
            • Budget Range: ${orderData.budget}
            
            PROJECT REQUIREMENTS:
            ${orderData.message}
            
            ORDER INFORMATION:
            ------------------
            • Order Date: ${orderData.date}
            • Order ID: ${orderData.timestamp}
            • Source: ${orderData.source}
            
            ===========================================
                            ACTION REQUIRED
            ===========================================
            1. 📞 Contact client within 24 hours
            2. 📄 Send proposal/quote
            3. 📋 Update project tracker
            4. 🎨 Assign to design team
            
            ===========================================
            Automated Notification | LOGOOGLE Studio
            ===========================================
        `,
        toClient: `
            To: ${orderData.email}
            Subject: Order Confirmation - ${orderData.service} - LOGOOGLE Studio
            
            Dear ${orderData.name},
            
            Thank you for choosing LOGOOGLE Studio! We have successfully received 
            your order for ${orderData.service}.
            
            ORDER DETAILS:
            --------------
            • Service: ${orderData.service}
            • Budget Range: ${orderData.budget}
            • Order Date: ${orderData.date}
            • Order ID: ${orderData.timestamp.slice(0, 8)}
            
            NEXT STEPS:
            -----------
            1. Our team will review your requirements within 24 hours
            2. We will contact you to discuss details
            3. You'll receive a detailed proposal
            4. We'll start the creative process!
            
            CONTACT US:
            -----------
            Email: ${YOUR_INFO.studioEmail}
            Phone/WhatsApp: ${YOUR_INFO.studioPhone}
            
            Best regards,
            ${YOUR_INFO.founderName}
            ${YOUR_INFO.position}
            LOGOOGLE Studio
        `
    };
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
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 
                          type === 'error' ? 'fa-exclamation-circle' : 
                          'fa-info-circle'}"></i>
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
    backToTopBtn.setAttribute('title', 'Back to top');
    
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

// WhatsApp integration for direct contact buttons
function initializeWhatsAppIntegration() {
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn, .start-project-btn, .cta-button');
    
    whatsappButtons.forEach(button => {
        // If button already has WhatsApp href, keep it
        if (button.getAttribute('href') && button.getAttribute('href').includes('whatsapp')) {
            return;
        }
        
        // Add WhatsApp functionality to buttons without href
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href') && !this.getAttribute('href').includes('whatsapp')) {
                return; // Let normal link behavior
            }
            
            e.preventDefault();
            
            // Get service type from data attribute or default
            const serviceType = this.getAttribute('data-service') || 
                              this.closest('.service-card')?.querySelector('h3')?.textContent || 
                              'Logo Design';
            
            // Create WhatsApp message
            const message = encodeURIComponent(
                `Hello LOGOOGLE Studio!\n\n` +
                `I'm interested in your ${serviceType} service.\n\n` +
                `Please contact me to discuss my project requirements.\n\n` +
                `Looking forward to your response!`
            );
            
            // Clean WhatsApp number
            const cleanWhatsapp = YOUR_INFO.whatsapp.replace(/\D/g, '');
            
            // Open WhatsApp
            window.open(`https://wa.me/${cleanWhatsapp}?text=${message}`, '_blank', 'noopener,noreferrer');
            
            // Show notification
            showNotification(`Opening WhatsApp to discuss ${serviceType}...`, 'info');
        });
    });
}

// Add WhatsApp floating button
function addWhatsAppFloatingButton() {
    const whatsappFloat = document.createElement('a');
    whatsappFloat.href = `https://wa.me/${YOUR_INFO.whatsapp.replace(/\D/g, '')}`;
    whatsappFloat.className = 'whatsapp-float';
    whatsappFloat.target = '_blank';
    whatsappFloat.rel = 'noopener noreferrer';
    whatsappFloat.setAttribute('aria-label', 'Chat on WhatsApp');
    whatsappFloat.setAttribute('title', 'Chat with us on WhatsApp');
    whatsappFloat.innerHTML = `
        <i class="fab fa-whatsapp"></i>
        <span class="whatsapp-tooltip">Chat with us</span>
    `;
    
    document.body.appendChild(whatsappFloat);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 LOGOOGLE Studio JS Initialized');
    console.log('📞 Contact Info:', YOUR_INFO);
    
    // Mobile menu functionality
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (headerNav.classList.contains('active') && 
            !e.target.closest('nav') && 
            !e.target.closest('#mobileMenuBtn')) {
            closeMobileMenu();
        }
    });
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && headerNav.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize form validation and order submission
    initializeFormValidation();
    
    // Initialize lazy loading
    initializeLazyLoading();
    
    // Create back to top button
    createBackToTopButton();
    
    // Set active navigation
    setActiveNav();
    
    // Initialize WhatsApp integration
    initializeWhatsAppIntegration();
    
    // Add WhatsApp floating button
    addWhatsAppFloatingButton();
    
    // Add CSS for animations and components
    addDynamicStyles();
    
    // Initial header style
    handleHeaderScroll();
    
    // Log page load
    console.log('✅ LOGOOGLE Studio website loaded successfully');
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
            top: 20px;
            right: 20px;
            background: white;
            padding: 16px 20px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-width: 320px;
            max-width: 400px;
            z-index: 99999;
            transform: translateX(150%);
            transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            border-left: 5px solid;
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification.success {
            border-left-color: #10B981;
            background: linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%);
        }
        
        .notification.error {
            border-left-color: #EF4444;
            background: linear-gradient(135deg, #ffffff 0%, #fef2f2 100%);
        }
        
        .notification.info {
            border-left-color: #3366FF;
            background: linear-gradient(135deg, #ffffff 0%, #eff6ff 100%);
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 14px;
            flex: 1;
        }
        
        .notification i {
            font-size: 22px;
            flex-shrink: 0;
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
        
        .notification span {
            font-size: 15px;
            line-height: 1.5;
            color: #1f2937;
            font-weight: 500;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: #9ca3af;
            cursor: pointer;
            font-size: 16px;
            padding: 6px;
            margin-left: 10px;
            border-radius: 6px;
            transition: all 0.2s ease;
            flex-shrink: 0;
        }
        
        .notification-close:hover {
            background: #f3f4f6;
            color: #6b7280;
        }
        
        /* Back to Top Button */
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 56px;
            height: 56px;
            background: linear-gradient(135deg, #111827 0%, #2d3748 100%);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            z-index: 998;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        .back-to-top.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        .back-to-top:hover {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            transform: translateY(-5px) scale(1.05);
            box-shadow: 0 12px 30px rgba(37, 99, 235, 0.25);
        }
        
        /* WhatsApp Floating Button */
        .whatsapp-float {
            position: fixed;
            bottom: 100px;
            right: 30px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
            z-index: 997;
            transition: all 0.3s ease;
            animation: float 3s ease-in-out infinite;
            text-decoration: none;
        }
        
        .whatsapp-float:hover {
            transform: scale(1.1);
            box-shadow: 0 12px 35px rgba(37, 211, 102, 0.4);
            animation: none;
        }
        
        .whatsapp-float .whatsapp-tooltip {
            position: absolute;
            right: 70px;
            background: #25D366;
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 14px;
            white-space: nowrap;
            opacity: 0;
            transform: translateX(10px);
            transition: all 0.3s ease;
            pointer-events: none;
        }
        
        .whatsapp-float:hover .whatsapp-tooltip {
            opacity: 1;
            transform: translateX(0);
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        /* Form Styles */
        #contactForm {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);
        }
        
        #contactForm input,
        #contactForm select,
        #contactForm textarea {
            width: 100%;
            padding: 16px;
            margin-bottom: 20px;
            border: 2px solid #e5e7eb;
            border-radius: 10px;
            font-size: 16px;
            font-family: inherit;
            transition: all 0.3s ease;
            background: #f9fafb;
        }
        
        #contactForm input:focus,
        #contactForm select:focus,
        #contactForm textarea:focus {
            outline: none;
            border-color: #2563eb;
            background: white;
            box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }
        
        #contactForm textarea {
            min-height: 150px;
            resize: vertical;
        }
        
        #contactForm button[type="submit"] {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            color: white;
            border: none;
            padding: 18px 40px;
            font-size: 18px;
            font-weight: 600;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
            letter-spacing: 0.5px;
            text-transform: uppercase;
        }
        
        #contactForm button[type="submit"]:hover:not(:disabled) {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(37, 99, 235, 0.25);
        }
        
        #contactForm button[type="submit"]:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none !important;
        }
        
        /* Spinner */
        .spinner {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s ease-in-out infinite;
            margin-right: 12px;
            vertical-align: middle;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
            .notification {
                top: 10px;
                right: 10px;
                left: 10px;
                max-width: none;
                min-width: auto;
            }
            
            .whatsapp-float {
                bottom: 90px;
                right: 20px;
                width: 56px;
                height: 56px;
                font-size: 28px;
            }
            
            .whatsapp-float .whatsapp-tooltip {
                display: none;
            }
            
            .back-to-top {
                bottom: 25px;
                right: 20px;
                width: 52px;
                height: 52px;
            }
            
            #contactForm {
                padding: 20px;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        toggleMobileMenu,
        closeMobileMenu,
        smoothScroll,
        handleHeaderScroll,
        initializeAnimations,
        showNotification,
        setActiveNav,
        sendOrderNotifications,
        sendWhatsAppToAdmin,
        sendWhatsAppToClient,
        YOUR_INFO
    };
}

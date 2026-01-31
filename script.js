// Logoogle Studio - Complete WhatsApp & Email Automation System
const YOUR_INFO = {
    whatsapp: '8801615639722', // WhatsApp number without +
    email: 'itsmralamin@gmail.com',
    studioEmail: 'logoogle_@hotmail.com',
    studioName: 'LOGOOGLE',
    studioPhone: '+8801615639722',
    founderName: 'MD. AL AMIN',
    position: 'Founder & Creative Director'
};

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const headerNav = document.querySelector('header nav');
const navLinks = document.querySelectorAll('nav a');
const startProjectBtn = document.querySelector('.start-project-btn');

// WhatsApp API URL (আপনার দেওয়া লিঙ্ক)
const WHATSAPP_API_URL = 'https://api.whatsapp.com/send/?phone=8801615639722&text&type=phone_number&app_absent=0';

// ==================== CORE ORDER SYSTEM ====================

class OrderSystem {
    constructor() {
        this.orderData = null;
        this.isProcessing = false;
        this.init();
    }

    init() {
        this.initializeForm();
        this.initializeMobileMenu();
        this.initializeScrollEffects();
        this.initializeAnimations();
        this.initializeWhatsAppButtons();
        this.addFloatingButtons();
        this.addStyles();
    }

    // ==================== FORM HANDLING ====================

    initializeForm() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) {
            console.warn('Contact form not found');
            return;
        }

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            if (this.isProcessing) return;
            this.isProcessing = true;

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            try {
                // Show processing state
                submitBtn.innerHTML = '<span class="spinner"></span> Sending Order...';
                submitBtn.disabled = true;

                // Collect form data
                this.collectOrderData(contactForm);
                
                // Validate data
                if (!this.validateOrderData()) {
                    throw new Error('Please fill all required fields correctly');
                }

                // Send all notifications
                const results = await this.sendNotifications();
                
                // Handle results
                this.handleNotificationResults(results);
                
                // Reset form on success
                if (results.success) {
                    setTimeout(() => contactForm.reset(), 1000);
                }

            } catch (error) {
                console.error('Order Error:', error);
                this.showNotification(error.message, 'error');
            } finally {
                // Reset button state
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    this.isProcessing = false;
                }, 2000);
            }
        });
    }

    collectOrderData(form) {
        this.orderData = {
            name: this.getValue(form, '#name'),
            email: this.getValue(form, '#email'),
            phone: this.getValue(form, '#phone') || 'Not provided',
            service: this.getValue(form, '#service') || 'Logo Design',
            budget: this.getValue(form, '#budget') || 'Not specified',
            message: this.getValue(form, '#message'),
            date: new Date().toLocaleString('en-BD', {
                timeZone: 'Asia/Dhaka',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }),
            orderId: 'LOG-' + Date.now().toString().slice(-8),
            timestamp: Date.now(),
            source: 'LOGOOGLE Website'
        };

        console.log('📋 Order Data:', this.orderData);
    }

    getValue(form, selector) {
        const element = form.querySelector(selector);
        return element ? element.value.trim() : '';
    }

    validateOrderData() {
        const { name, email, message } = this.orderData;
        
        if (!name || !email || !message) {
            this.showNotification('Name, Email and Message are required', 'error');
            return false;
        }

        if (!this.isValidEmail(email)) {
            this.showNotification('Please enter a valid email address', 'error');
            return false;
        }

        return true;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // ==================== NOTIFICATION SYSTEM ====================

    async sendNotifications() {
        const results = {
            success: false,
            adminWhatsapp: false,
            clientWhatsapp: false,
            adminEmail: false,
            clientEmail: false
        };

        try {
            // 1. Send to Admin WhatsApp
            results.adminWhatsapp = await this.sendToAdminWhatsApp();
            
            // 2. Send to Client WhatsApp (if phone provided)
            if (this.orderData.phone && this.orderData.phone !== 'Not provided') {
                await this.delay(1000);
                results.clientWhatsapp = await this.sendToClientWhatsApp();
            }

            // 3. Send to Admin Email
            results.adminEmail = await this.sendToAdminEmail();
            
            // 4. Send to Client Email
            results.clientEmail = await this.sendToClientEmail();

            results.success = true;
            return results;

        } catch (error) {
            console.error('Notification Error:', error);
            results.error = error.message;
            return results;
        }
    }

    // ADMIN WHATSAPP
    async sendToAdminWhatsApp() {
        const message = `🚀 *NEW ORDER - LOGOOGLE STUDIO* 🚀

📋 *CLIENT INFORMATION*
━━━━━━━━━━━━━━━━━━━━━━
• 👤 Name: ${this.orderData.name}
• 📧 Email: ${this.orderData.email}
• 📞 Phone: ${this.orderData.phone}
• 💼 Service: ${this.orderData.service}
• 💰 Budget: ${this.orderData.budget}

📝 *PROJECT REQUIREMENTS*
━━━━━━━━━━━━━━━━━━━━━━
${this.orderData.message}

📅 *ORDER DETAILS*
━━━━━━━━━━━━━━━━━━━━━━
• Date: ${this.orderData.date}
• Order ID: ${this.orderData.orderId}
• Source: ${this.orderData.source}

⚡ *ACTION REQUIRED*
1. Contact client within 24 hours
2. Send proposal/quote
3. Update project tracker

📍 *LOGOOGLE STUDIO*
Premium Logo & Brand Identity Design`;

        const url = this.generateWhatsAppUrl(YOUR_INFO.whatsapp, message);
        return await this.openWhatsAppWindow(url, 'admin');
    }

    // CLIENT WHATSAPP
    async sendToClientWhatsApp() {
        const phone = this.formatPhoneNumber(this.orderData.phone);
        if (!phone) return false;

        const message = `✅ *ORDER CONFIRMED - LOGOOGLE STUDIO* ✅

Dear ${this.orderData.name},

Thank you for choosing LOGOOGLE Studio! Your order has been received successfully.

📋 *YOUR ORDER DETAILS*
━━━━━━━━━━━━━━━━━━━━━━
• Service: ${this.orderData.service}
• Budget: ${this.orderData.budget}
• Order Date: ${this.orderData.date}
• Order ID: ${this.orderData.orderId}

📝 *YOUR REQUIREMENTS*
${this.orderData.message}

🔄 *NEXT STEPS*
1. Our team will review your requirements
2. We'll contact you within 24 hours
3. We'll provide detailed proposal
4. Start creative process!

📞 *CONTACT US*
• WhatsApp: ${YOUR_INFO.studioPhone}
• Email: ${YOUR_INFO.studioEmail}
• Founder: ${YOUR_INFO.founderName}

⏰ *BUSINESS HOURS*
Sunday - Thursday: 9:00 AM - 6:00 PM
Friday - Saturday: 10:00 AM - 4:00 PM

Thank you for trusting us!

Best regards,
${YOUR_INFO.founderName}
${YOUR_INFO.position}
LOGOOGLE STUDIO
🚀 Transforming Brands, Creating Impact`;

        const url = this.generateWhatsAppUrl(phone, message);
        return await this.openWhatsAppWindow(url, 'client');
    }

    // ADMIN EMAIL
    async sendToAdminEmail() {
        const emailData = {
            to: YOUR_INFO.email,
            subject: `🚀 NEW ORDER: ${this.orderData.service} - ${this.orderData.name}`,
            body: `
NEW ORDER RECEIVED - LOGOOGLE STUDIO
=====================================

CLIENT INFORMATION:
-------------------
• Name: ${this.orderData.name}
• Email: ${this.orderData.email}
• Phone: ${this.orderData.phone}

ORDER DETAILS:
--------------
• Service: ${this.orderData.service}
• Budget: ${this.orderData.budget}
• Date: ${this.orderData.date}
• Order ID: ${this.orderData.orderId}

PROJECT REQUIREMENTS:
---------------------
${this.orderData.message}

ORDER INFORMATION:
------------------
• Source: ${this.orderData.source}
• Timestamp: ${new Date().toISOString()}

ACTION REQUIRED:
----------------
1. Contact client within 24 hours
2. Send proposal/quote
3. Update project tracker

=====================================
Automated Notification System
LOGOOGLE Studio
=====================================`
        };

        return await this.openEmailWindow(emailData, 'admin');
    }

    // CLIENT EMAIL
    async sendToClientEmail() {
        const emailData = {
            to: this.orderData.email,
            subject: `✅ Order Confirmation - ${this.orderData.service} - LOGOOGLE Studio`,
            body: `
Dear ${this.orderData.name},

Thank you for choosing LOGOOGLE Studio! We have successfully received your order.

ORDER DETAILS:
--------------
• Service: ${this.orderData.service}
• Budget: ${this.orderData.budget}
• Order Date: ${this.orderData.date}
• Order ID: ${this.orderData.orderId}

YOUR REQUIREMENTS:
------------------
${this.orderData.message}

NEXT STEPS:
-----------
1. Our team will review your requirements within 24 hours
2. We will contact you to discuss details
3. You'll receive a detailed proposal
4. We'll start the creative process!

CONTACT INFORMATION:
--------------------
• Email: ${YOUR_INFO.studioEmail}
• Phone/WhatsApp: ${YOUR_INFO.studioPhone}
• Founder: ${YOUR_INFO.founderName}

BUSINESS HOURS:
---------------
Sunday - Thursday: 9:00 AM - 6:00 PM
Friday - Saturday: 10:00 AM - 4:00 PM

We're excited to work with you!

Best regards,
${YOUR_INFO.founderName}
${YOUR_INFO.position}
LOGOOGLE Studio
Transforming Brands, Creating Impact`
        };

        return await this.openEmailWindow(emailData, 'client');
    }

    // ==================== UTILITY FUNCTIONS ====================

    generateWhatsAppUrl(phoneNumber, message) {
        const encodedMessage = encodeURIComponent(message);
        return `${WHATSAPP_API_URL}${phoneNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;
    }

    async openWhatsAppWindow(url, recipient) {
        return new Promise((resolve) => {
            setTimeout(() => {
                try {
                    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
                    if (newWindow) {
                        console.log(`✅ ${recipient} WhatsApp opened`);
                        // Auto close after 3 seconds
                        setTimeout(() => {
                            try { newWindow.close(); } catch(e) {}
                        }, 3000);
                        resolve(true);
                    } else {
                        console.warn(`⚠️ ${recipient} WhatsApp popup blocked`);
                        // Show clickable link
                        this.showNotification(
                            `Click to send ${recipient} WhatsApp: <a href="${url}" target="_blank" style="color:#25D366;font-weight:bold;">📱 Open WhatsApp</a>`,
                            'info',
                            10000
                        );
                        resolve(false);
                    }
                } catch (error) {
                    console.error(`❌ ${recipient} WhatsApp error:`, error);
                    resolve(false);
                }
            }, recipient === 'admin' ? 500 : 1500);
        });
    }

    async openEmailWindow(emailData, recipient) {
        return new Promise((resolve) => {
            const { to, subject, body } = emailData;
            const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            setTimeout(() => {
                try {
                    const newWindow = window.open(emailUrl, '_blank', 'noopener,noreferrer,width=800,height=600');
                    if (newWindow) {
                        console.log(`✅ ${recipient} email opened`);
                        resolve(true);
                    } else {
                        console.warn(`⚠️ ${recipient} email popup blocked`);
                        resolve(false);
                    }
                } catch (error) {
                    console.error(`❌ ${recipient} email error:`, error);
                    resolve(false);
                }
            }, 1000);
        });
    }

    formatPhoneNumber(phone) {
        if (!phone || phone === 'Not provided') return null;
        
        let cleaned = phone.replace(/\D/g, '');
        
        if (cleaned.startsWith('0')) {
            cleaned = '880' + cleaned.substring(1);
        } else if (!cleaned.startsWith('880') && cleaned.length === 10) {
            cleaned = '880' + cleaned;
        } else if (cleaned.startsWith('+')) {
            cleaned = cleaned.substring(1);
        }
        
        // Check if valid Bangladesh number
        if (cleaned.startsWith('880') && cleaned.length === 13) {
            return cleaned;
        }
        
        return null;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    handleNotificationResults(results) {
        let message = '';
        
        if (results.success) {
            message = '🎉 Order submitted successfully! ';
            
            if (results.adminWhatsapp) {
                message += 'Check your WhatsApp for order details. ';
            }
            
            if (results.clientWhatsapp) {
                message += 'Client confirmation sent. ';
            }
            
            if (results.adminEmail || results.clientEmail) {
                message += 'Email drafts created. ';
            }
            
            this.showNotification(message, 'success');
            
            // Play success sound (optional)
            this.playSuccessSound();
            
        } else {
            this.showNotification('Order received but notifications failed. We will contact you soon.', 'info');
        }
    }

    playSuccessSound() {
        try {
            const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-correct-answer-tone-2870.mp3');
            audio.volume = 0.3;
            audio.play().catch(e => console.log('Audio play failed:', e));
        } catch (e) {
            // Ignore audio errors
        }
    }

    // ==================== NOTIFICATION SYSTEM ====================

    showNotification(message, type = 'info', duration = 5000) {
        // Remove existing notifications
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : 
                              type === 'error' ? 'fa-exclamation-circle' : 
                              'fa-info-circle'}"></i>
                <div>${message}</div>
            </div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        document.body.appendChild(notification);
        
        // Show with animation
        setTimeout(() => notification.classList.add('show'), 10);
        
        // Auto remove
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, duration);
        
        // Close button
        notification.querySelector('.notification-close').onclick = () => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        };
    }

    // ==================== UI INITIALIZATION ====================

    initializeMobileMenu() {
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
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
            });
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (headerNav.classList.contains('active') && 
                !e.target.closest('nav') && 
                !e.target.closest('#mobileMenuBtn')) {
                this.closeMobileMenu();
            }
        });
        
        // Close on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && headerNav.classList.contains('active')) {
                this.closeMobileMenu();
            }
        });
        
        // Close menu when clicking nav links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    this.closeMobileMenu();
                }
            });
        });
    }

    closeMobileMenu() {
        if (headerNav.classList.contains('active')) {
            headerNav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            document.body.style.overflow = 'auto';
        }
    }

    initializeScrollEffects() {
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.padding = '20px 0';
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
            } else {
                header.style.padding = '24px 0';
                header.style.boxShadow = 'none';
            }
        });
        
        // Smooth scrolling for anchor links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const headerHeight = document.querySelector('header').offsetHeight;
                        const targetPosition = target.offsetTop - headerHeight - 20;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
        
        // Back to top button
        this.addBackToTopButton();
    }

    addBackToTopButton() {
        const backToTopBtn = document.createElement('button');
        backToTopBtn.className = 'back-to-top';
        backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        backToTopBtn.title = 'Back to top';
        
        document.body.appendChild(backToTopBtn);
        
        window.addEventListener('scroll', () => {
            backToTopBtn.classList.toggle('visible', window.scrollY > 500);
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    initializeAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        
        // Animate elements
        ['service-card', 'project-card', 'process-step', 'email-item'].forEach(selector => {
            document.querySelectorAll(`.${selector}`).forEach(el => {
                el.classList.add('fade-in');
                observer.observe(el);
            });
        });
    }

    initializeWhatsAppButtons() {
        const whatsappButtons = document.querySelectorAll('.whatsapp-btn, .start-project-btn, .cta-button');
        
        whatsappButtons.forEach(button => {
            if (button.getAttribute('href') && button.getAttribute('href').includes('whatsapp')) {
                return;
            }
            
            button.addEventListener('click', (e) => {
                if (button.getAttribute('href') && !button.getAttribute('href').includes('whatsapp')) {
                    return;
                }
                
                e.preventDefault();
                
                const serviceType = button.getAttribute('data-service') || 
                                  button.closest('.service-card')?.querySelector('h3')?.textContent || 
                                  'Logo Design';
                
                const message = `Hello LOGOOGLE Studio! I'm interested in your ${serviceType} service. Please contact me to discuss my project.`;
                const url = `${WHATSAPP_API_URL}${YOUR_INFO.whatsapp}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
                
                window.open(url, '_blank', 'noopener,noreferrer');
                this.showNotification(`Opening WhatsApp to discuss ${serviceType}...`, 'info');
            });
        });
    }

    addFloatingButtons() {
        // WhatsApp floating button
        const whatsappFloat = document.createElement('a');
        whatsappFloat.href = `${WHATSAPP_API_URL}${YOUR_INFO.whatsapp}&type=phone_number&app_absent=0`;
        whatsappFloat.className = 'whatsapp-float';
        whatsappFloat.target = '_blank';
        whatsappFloat.rel = 'noopener noreferrer';
        whatsappFloat.title = 'Chat on WhatsApp';
        whatsappFloat.innerHTML = '<i class="fab fa-whatsapp"></i>';
        document.body.appendChild(whatsappFloat);
        
        // Test button (for development)
        if (window.location.hostname === 'localhost' || window.location.hostname.includes('127.0.0.1')) {
            const testBtn = document.createElement('button');
            testBtn.className = 'test-button';
            testBtn.innerHTML = '🔄 Test System';
            testBtn.title = 'Test WhatsApp & Email System';
            testBtn.onclick = () => this.testSystem();
            document.body.appendChild(testBtn);
        }
    }

    testSystem() {
        const testData = {
            name: 'Test Client',
            email: 'test@example.com',
            phone: '01712345678',
            service: 'Logo Design',
            budget: '5,000-10,000 BDT',
            message: 'This is a test order to check the WhatsApp and email system.',
            date: new Date().toLocaleString(),
            orderId: 'TEST-' + Date.now().toString().slice(-6),
            source: 'System Test'
        };
        
        this.orderData = testData;
        this.showNotification('🚀 Starting system test...', 'info');
        
        setTimeout(async () => {
            const results = await this.sendNotifications();
            this.handleNotificationResults(results);
        }, 1000);
    }

    addStyles() {
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
            
            /* Notification Styles */
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                padding: 16px 20px;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                max-width: 400px;
                z-index: 99999;
                transform: translateX(150%);
                transition: transform 0.3s ease;
                border-left: 4px solid;
            }
            
            .notification.show { transform: translateX(0); }
            .notification.success { border-left-color: #10B981; background: #f0fdf4; }
            .notification.error { border-left-color: #EF4444; background: #fef2f2; }
            .notification.info { border-left-color: #3B82F6; background: #eff6ff; }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .notification i {
                font-size: 20px;
                flex-shrink: 0;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: #666;
                cursor: pointer;
                margin-left: 10px;
            }
            
            /* WhatsApp Floating Button */
            .whatsapp-float {
                position: fixed;
                bottom: 100px;
                right: 30px;
                width: 60px;
                height: 60px;
                background: #25D366;
                color: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 32px;
                box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
                z-index: 998;
                text-decoration: none;
                animation: float 3s ease-in-out infinite;
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            
            /* Back to Top Button */
            .back-to-top {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                background: #111827;
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
                z-index: 997;
            }
            
            .back-to-top.visible {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
            
            /* Test Button */
            .test-button {
                position: fixed;
                bottom: 170px;
                right: 30px;
                background: #8B5CF6;
                color: white;
                border: none;
                padding: 10px 15px;
                border-radius: 25px;
                cursor: pointer;
                z-index: 996;
                font-size: 14px;
            }
            
            /* Spinner */
            .spinner {
                display: inline-block;
                width: 20px;
                height: 20px;
                border: 3px solid rgba(255,255,255,0.3);
                border-radius: 50%;
                border-top-color: white;
                animation: spin 1s linear infinite;
                margin-right: 10px;
            }
            
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
            
            /* Mobile Menu */
            @media (max-width: 768px) {
                nav.active {
                    display: flex !important;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background: white;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 80px 20px;
                    z-index: 999;
                }
                
                .notification {
                    left: 10px;
                    right: 10px;
                    max-width: none;
                }
                
                .whatsapp-float {
                    bottom: 90px;
                    right: 20px;
                    width: 56px;
                    height: 56px;
                    font-size: 28px;
                }
                
                .back-to-top {
                    bottom: 25px;
                    right: 20px;
                }
                
                .test-button {
                    bottom: 160px;
                    right: 20px;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ==================== INITIALIZE SYSTEM ====================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 LOGOOGLE Studio System Initializing...');
    console.log('📞 WhatsApp:', YOUR_INFO.whatsapp);
    console.log('📧 Email:', YOUR_INFO.email);
    
    // Initialize order system
    window.orderSystem = new OrderSystem();
    
    // Test link in console
    const testLink = `${WHATSAPP_API_URL}${YOUR_INFO.whatsapp}&text=Hello%20LOGOOGLE%20Studio&type=phone_number&app_absent=0`;
    console.log('🔗 Test WhatsApp Link:', testLink);
    
    console.log('✅ LOGOOGLE Studio System Ready!');
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { OrderSystem, YOUR_INFO };
}

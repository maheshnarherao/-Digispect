// ==========================================
// DIGISPECT TECHNOLOGIES - JAVASCRIPT
// ==========================================

// ==========================================
// PARTICLE ANIMATION
// ==========================================

const texts = [
    "We Build Modern Websites",
    "We Create Powerful Apps",
    "We Grow Your Business Online",
    "Digital Solutions for Your Success"
];

let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const element = document.querySelector(".typing-text");
    if (!element) return;

    const currentText = texts[index];
    element.textContent = currentText.substring(0, charIndex);

    if (!isDeleting) {
        charIndex++;
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

    initParticles() 
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.3
            });
        }
    

    drawParticles() 
        this.particles.forEach(particle => {
            this.ctx.fillStyle = `rgba(0, 217, 255, ${particle.opacity})`;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fill();
        });
    

    drawConnections() 
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const p1 = this.particles[i];
                const p2 = this.particles[j];
                const distance = Math.hypot(p2.x - p1.x, p2.y - p1.y);

                if (distance < this.connectionDistance) {
                    const opacity = (1 - distance / this.connectionDistance) * 0.3;
                    this.ctx.strokeStyle = `rgba(0, 217, 255, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                }
            }
        }
    

    updateParticles() 
        this.particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Bounce off walls
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.speedX *= -1;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.speedY *= -1;
            }

            // Keep in bounds
            particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));

            // Gentle opacity pulse
            particle.opacity += (Math.random() - 0.5) * 0.01;
            particle.opacity = Math.max(0.2, Math.min(0.8, particle.opacity));
        });
    

    animate() 
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.updateParticles();
        this.drawParticles();
        this.drawConnections();

        requestAnimationFrame(() => this.animate());
    


// ==========================================
// TYPING ANIMATION
// ==========================================

class TypingAnimation {
    constructor() {
        this.typingElement = document.querySelector('.typing-text');
        if (!this.typingElement) return;

        this.text = 'Build Tomorrow\'s Technology Today';
        this.charIndex = 0;
        this.isDeleting = false;
        this.speed = 100;
        this.deleteSpeed = 50;
        this.pauseTime = 2000;

        this.type();
    }

    type() {
        if (!this.typingElement) return;

        const displayText = this.text.substring(0, this.charIndex);
        this.typingElement.textContent = displayText;

        if (!this.isDeleting) {
            if (this.charIndex < this.text.length) {
                this.charIndex++;
                setTimeout(() => this.type(), this.speed);
            } else {
                // Pause before deleting
                setTimeout(() => {
                    this.isDeleting = true;
                    this.type();
                }, this.pauseTime);
            }
        } else {
            if (this.charIndex > 0) {
                this.charIndex--;
                setTimeout(() => this.type(), this.deleteSpeed);
            } else {
                // Pause before typing again
                this.isDeleting = false;
                setTimeout(() => this.type(), 500);
            }
        }
    }
}

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================

function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!hamburger) return;

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Close menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ==========================================
// FORM VALIDATION & HANDLING
// ==========================================

class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value ?? '',
            email: document.getElementById('email').value ?? '',
            subject: document.getElementById('subject').value ?? '',
            message: document.getElementById('message').value ?? ''
        };

        // Validation
        if (!formData.name.trim()) {
            alert('Please enter your name');
            return;
        }

        if (!formData.email.trim()) {
            alert('Please enter your email');
            return;
        }

        if (!this.validateEmail(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        if (!formData.subject.trim()) {
            alert('Please enter a subject');
            return;
        }

        if (!formData.message.trim() || formData.message.trim().length < 10) {
            alert('Please enter a message with at least 10 characters');
            return;
        }

        // Log form data
        console.log('Form submitted:', formData);

        // Show success message
        alert('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');

        // Reset form
        this.form.reset();
    }
}

// ==========================================
// SMOOTH SCROLL BEHAVIOR
// ==========================================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ==========================================
// INTERSECTION OBSERVER FOR FADE-IN EFFECTS
// ========================================== 

function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe stat cards and service cards
    document.querySelectorAll('.stat-card, .service-card, .mvv-card, .benefit-item, .team-member').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ==========================================
// ACTIVE NAV LINK DETECTION
// ==========================================

function setupActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Set initial active state
    navLinks.forEach(link => link.classList.remove('active'));
    if (navLinks[0]) navLinks[0].classList.add('active');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ==========================================
// ADD SCROLL SHADOW TO NAVBAR
// ==========================================

function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px rgba(0, 217, 255, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
}

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Digispect Technologies - Website Loaded');

    // Initialize particle animation
    new ParticleAnimation('particleCanvas');

    // Initialize typing animation (if typing text element exists)
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        new TypingAnimation();
    }

    // Initialize contact form
    new ContactForm();

    // Setup mobile menu
    setupMobileMenu();

    // Setup smooth scroll
    setupSmoothScroll();

    // Setup intersection observer
    setupIntersectionObserver();

    // Setup active nav link
    setupActiveNavLink();

    // Setup navbar scroll effect
    setupNavbarScroll();

    // Log performance
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', () => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
        });
    }
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Get viewport information
function getViewportInfo() {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 768
    };
}

// Animate element on scroll
function animateOnScroll(element, animation) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = animation;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(element);
}

// ==========================================
// SERVICE WORKER REGISTRATION (Optional)
// ==========================================

if ('serviceWorker' in navigator) {
    // Uncomment to enable service worker for offline support
    // navigator.serviceWorker.register('sw.js').then(reg => {
    //     console.log('Service Worker registered', reg);
    // }).catch(err => {
    //     console.log('Service Worker registration failed', err);
    // });
}

// ==========================================
// ANALYTICS EVENT TRACKING
// ==========================================

function trackEvent(eventName, data = {}) {
    console.log(`📊 Event: ${eventName}`, data);
    // Use this function to send events to your analytics service
    // Example: Google Analytics, Mixpanel, etc.
}

// Track button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = button.textContent || button.value;
        trackEvent('button_click', { button: buttonText });
    });
});

// Track link clicks
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href.startsWith('#')) {
            trackEvent('link_click', { url: href });
        }
    });
});

// ==========================================
// DEVELOPER HELPERS
// ========================================== 

// Log animation FPS
let lastTime = Date.now();
let frameCount = 0;

function logFPS() {
    frameCount++;
    const currentTime = Date.now();
    if (currentTime >= lastTime + 1000) {
        console.log(`📈 FPS: ${frameCount}`);
        frameCount = 0;
        lastTime = currentTime;
    }
    requestAnimationFrame(logFPS);
}

// Uncomment to enable FPS logging
// logFPS();

console.log('✅ All systems initialized successfully'); 
const cards = document.querySelectorAll(".portfolio-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
});

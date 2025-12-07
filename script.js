// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Login Modal
const loginModal = document.getElementById('loginModal');
const loginLinks = document.querySelectorAll('a[href="#login"]');
const closeModal = document.querySelector('.close');

loginLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.add('active');
        loginModal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    loginModal.classList.remove('active');
    loginModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('active');
        loginModal.style.display = 'none';
    }
});

// Back to Home link in modal
document.querySelector('.back-link').addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.remove('active');
    loginModal.style.display = 'none';
});

// Login Form Submission
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const studentId = loginForm.querySelector('input[type="text"]').value;
    const fullName = loginForm.querySelectorAll('input[type="text"]')[1].value;
    
    // Simulate verification
    alert(`Welcome ${fullName}!\nStudent ID: ${studentId}\n\nYou can now proceed to vote.`);
    loginForm.reset();
});

// Contact Form Submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    alert(`Thank you ${name}!\nYour message has been sent successfully.\nWe'll get back to you at ${email}`);
    contactForm.reset();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#login' && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 61, 61, 1)';
    } else {
        navbar.style.background = 'rgba(10, 61, 61, 0.95)';
    }
});

// Animation on scroll
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

// Observe all cards
document.querySelectorAll('.about-card, .objective-card, .structure-column, .election-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Futuristic Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    initNavigation();
    
    // AI Assistant functionality
    initAIAssistant();
    
    // Smooth scrolling
    initSmoothScrolling();
    
    // Form handling
    initContactForm();
    
    // Intersection Observer for animations
    initScrollAnimations();
});

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    // Update active navigation based on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
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

// AI Assistant
function initAIAssistant() {
    const aiToggle = document.getElementById('aiToggle');
    const aiChat = document.getElementById('aiChat');
    const aiInput = document.getElementById('aiInput');
    const aiSend = document.getElementById('aiSend');
    const aiMessages = document.getElementById('aiMessages');
    const aiTyping = document.getElementById('aiTyping');
    
    let isOpen = false;
    let isTyping = false;
    
    // Toggle chat
    aiToggle.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
            aiChat.classList.add('open');
            aiInput.focus();
        } else {
            aiChat.classList.remove('open');
        }
    });
    
    // Send message
    function sendMessage() {
        const message = aiInput.value.trim();
        if (!message || isTyping) return;
        
        // Add user message
        addMessage(message, 'user');
        aiInput.value = '';
        
        // Show typing indicator
        showTypingIndicator();
        
        // Simulate AI response
        setTimeout(() => {
            hideTypingIndicator();
            const response = generateAIResponse(message);
            addMessage(response, 'bot');
        }, 1500 + Math.random() * 1000);
    }
    
    aiSend.addEventListener('click', sendMessage);
    aiInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    function addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message ai-message-${sender}`;
        messageDiv.innerHTML = `<div class="ai-message-content">${content}</div>`;
        aiMessages.appendChild(messageDiv);
        aiMessages.scrollTop = aiMessages.scrollHeight;
    }
    
    function showTypingIndicator() {
        isTyping = true;
        aiTyping.style.display = 'block';
        aiMessages.scrollTop = aiMessages.scrollHeight;
    }
    
    function hideTypingIndicator() {
        isTyping = false;
        aiTyping.style.display = 'none';
    }
    
    function generateAIResponse(userMessage) {
        const responses = [
            "I'm excited to help you explore this portfolio! Each section showcases cutting-edge AI and web development projects.",
            "This portfolio represents the intersection of artificial intelligence and creative technology. What specific area interests you most?",
            "The neural network visualization you see demonstrates real-time data processing capabilities. Would you like to know more about the technical implementation?",
            "As an AI assistant, I can provide insights into the development process, technologies used, or answer any questions about the projects featured here.",
            "The holographic interface elements you're seeing are built with advanced CSS animations and WebGL. The attention to detail creates an immersive experience.",
            "Each project in this portfolio pushes the boundaries of what's possible with modern web technologies and AI integration.",
            "I'm here to guide you through this futuristic portfolio experience. Feel free to ask about any specific projects or technologies!",
            "The neon aesthetic isn't just for show - it represents the energy and innovation that drives AI development in the modern era."
        ];
        
        // Simple keyword-based responses
        const lowerMessage = userMessage.toLowerCase();
        
        if (lowerMessage.includes('project')) {
            return "The featured projects showcase AI/ML applications, from computer vision systems to quantum computing interfaces. Each one represents months of research and development.";
        } else if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
            return "The core technologies include Python, TensorFlow, React, Node.js, and cutting-edge AI frameworks. The focus is on creating intelligent, responsive systems.";
        } else if (lowerMessage.includes('contact') || lowerMessage.includes('hire')) {
            return "Great! You can reach out through the contact form below or via the provided email. I'm always excited to discuss new AI projects and collaborations.";
        } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return "Hello! Welcome to this futuristic AI portfolio. I'm NEXUS, your guide through this digital experience. What would you like to explore?";
        } else {
            return responses[Math.floor(Math.random() * responses.length)];
        }
    }
}

// Smooth scrolling
function initSmoothScrolling() {
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
}

// Contact form
function initContactForm() {
    const form = document.querySelector('.contact-form form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const message = form.querySelector('textarea').value;
            
            // Simulate form submission
            showFormFeedback('Message sent successfully! I\'ll get back to you soon.', 'success');
            
            // Reset form
            form.reset();
        });
    }
}

function showFormFeedback(message, type) {
    // Create feedback element
    const feedback = document.createElement('div');
    feedback.className = `form-feedback ${type}`;
    feedback.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        background: var(--gradient-primary);
        color: var(--text-primary);
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    feedback.textContent = message;
    
    document.body.appendChild(feedback);
    
    // Remove after 3 seconds
    setTimeout(() => {
        feedback.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 300);
    }, 3000);
}

// Scroll animations
function initScrollAnimations() {
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
    
    // Observe elements for animation
    document.querySelectorAll('.skill-card, .project-card, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Dynamic background effects
function initBackgroundEffects() {
    // Create floating particles
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--neon-cyan);
            border-radius: 50%;
            animation: float ${8 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 8}s;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${0.3 + Math.random() * 0.4};
        `;
        particleContainer.appendChild(particle);
    }
    
    document.body.appendChild(particleContainer);
}

// Initialize background effects
initBackgroundEffects();

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        25% { transform: translateY(-20px) translateX(10px); }
        50% { transform: translateY(-10px) translateX(-5px); }
        75% { transform: translateY(-15px) translateX(5px); }
    }
`;
document.head.appendChild(style);

// Performance optimization
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

// Optimize scroll events
window.addEventListener('scroll', debounce(() => {
    // Any scroll-based animations or effects
}, 16)); // ~60fps

// Preload critical resources
function preloadResources() {
    // Preload any images or resources that might be needed
    const resources = [
        // Add any image URLs or other resources here
    ];
    
    resources.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
    });
}

preloadResources();
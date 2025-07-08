document.addEventListener('DOMContentLoaded', function() {
    
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.fact-card, .journey-item, .interest-image, .profile-passion-image');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.2s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.2s ease';
        });
    });
    
    const linkedinIcon = document.querySelector('.fab.fa-linkedin');
    if (linkedinIcon) {
        linkedinIcon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.color = '#ec4899';
        });
        
        linkedinIcon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.color = '#be185d';
        });
    }
});

const style = document.createElement('style');
style.textContent = `
    .section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .section.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
document.addEventListener('DOMContentLoaded', function() {
    // Document link functionality
    const showPrd = document.querySelector('.show-prd');
    const prdModal = document.getElementById('prdModal');
    const allCloseModals = document.querySelectorAll('.close-modal');
    
    // Show PRD modal
    if (showPrd) {
        showPrd.addEventListener('click', function(e) {
            e.preventDefault();
            prdModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close all modals when clicking on X
    allCloseModals.forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Close any modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    // Smooth scrolling for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Button click handlers
    const ctaPrimary = document.querySelector('.cta-primary');
    if (ctaPrimary) {
        ctaPrimary.addEventListener('click', function() {
            // Scroll to timeline section
            const timelineSection = document.querySelector('.timeline-section');
            if (timelineSection) {
                timelineSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    const ctaSecondary = document.querySelector('.cta-secondary');
    if (ctaSecondary) {
        ctaSecondary.addEventListener('click', function() {
            // Scroll to features section
            const featuresSection = document.querySelector('.core-features');
            if (featuresSection) {
                featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // Modal Functionality
    const modal = document.getElementById('featureBreakdownModal');
    const viewDetailsBtn = document.querySelector('.view-details-btn');
    const closeModalBtn = document.querySelector('.close-modal');
    
    if (viewDetailsBtn) {
        viewDetailsBtn.addEventListener('click', function() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
        });
    }
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });
    }
    
    // Close the modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Add animation on scroll
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('animate');
            }
        });
    };

    // Initial check on load
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
});

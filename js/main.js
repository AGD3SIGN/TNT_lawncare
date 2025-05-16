// Main JavaScript file - All functionality consolidated
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all components
    initNavigation();
    initProgressBar();
    initScrollTop();
    initAnimations();
    initImageSliders();
    initTestimonials();
});

// Initialize navigation functionality
function initNavigation() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const closeMenuBtn = document.querySelector('.close-menu');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function () {
        mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });

    // Close mobile menu
    closeMenuBtn.addEventListener('click', function () {
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });

    // Close mobile menu when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileNavOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Get header height for offset
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active navigation link based on scroll position
    function setActiveNavLink() {
        const scrollPosition = window.scrollY;

        // Get header height for offset
        const headerHeight = document.querySelector('header').offsetHeight;

        // Check each section's position
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100; // Add some buffer
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Add active class to corresponding link
                const correspondingLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }

    // Add scroll event listener for active link highlighting
    window.addEventListener('scroll', setActiveNavLink);

    // Set active link on page load
    setActiveNavLink();
}

// Initialize progress bar
function initProgressBar() {
    const progressBar = document.getElementById('progressBar');

    // Update progress bar width based on scroll position
    function updateProgressBar() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = scrollPercentage + '%';
    }

    // Add scroll event listener
    window.addEventListener('scroll', updateProgressBar);

    // Initialize progress bar on page load
    updateProgressBar();
}

// Initialize scroll to top button
function initScrollTop() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    // Show/hide scroll to top button based on scroll position
    function toggleScrollTopBtn() {
        if (document.documentElement.scrollTop > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }

    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add scroll event listener
    window.addEventListener('scroll', toggleScrollTopBtn);

    // Initialize button state on page load
    toggleScrollTopBtn();
}

// Initialize AOS animations
function initAnimations() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        });

        // Refresh AOS when window is resized
        window.addEventListener('resize', function () {
            AOS.refresh();
        });
    }
}

// Initialize image comparison sliders
function initImageSliders() {
    const sliders = document.querySelectorAll('.comparison-slider');

    sliders.forEach(slider => {
        const beforeImage = slider.querySelector('.before-image');
        const sliderHandle = slider.querySelector('.slider-handle');
        let isDragging = false;

        // Set initial position
        positionElements(slider, 50);

        // Add mouse and touch event listeners
        sliderHandle.addEventListener('mousedown', startDrag);
        sliderHandle.addEventListener('touchstart', startDrag, { passive: true });

        window.addEventListener('mousemove', drag);
        window.addEventListener('touchmove', drag, { passive: false });

        window.addEventListener('mouseup', endDrag);
        window.addEventListener('touchend', endDrag);

        // Click anywhere on slider to move handle
        slider.addEventListener('click', function (e) {
            if (e.target !== sliderHandle && !sliderHandle.contains(e.target)) {
                const sliderRect = slider.getBoundingClientRect();
                const position = ((e.clientX - sliderRect.left) / sliderRect.width) * 100;
                positionElements(slider, position);
            }
        });

        // Functions for drag behavior
        function startDrag(e) {
            isDragging = true;
            slider.classList.add('dragging');
            e.preventDefault();
        }

        function drag(e) {
            if (!isDragging) return;

            // Prevent default to stop scrolling on touch devices
            if (e.type === 'touchmove') {
                e.preventDefault();
            }

            const sliderRect = slider.getBoundingClientRect();
            const clientX = e.clientX || e.touches[0].clientX;
            let position = ((clientX - sliderRect.left) / sliderRect.width) * 100;

            // Constrain position between 0 and 100
            position = Math.max(0, Math.min(position, 100));

            positionElements(slider, position);
        }

        function endDrag() {
            isDragging = false;
            slider.classList.remove('dragging');
        }

        function positionElements(slider, position) {
            const beforeImage = slider.querySelector('.before-image');
            const sliderHandle = slider.querySelector('.slider-handle');

            // Update positions
            beforeImage.style.width = `${position}%`;
            sliderHandle.style.left = `${position}%`;
        }
    });
}

// Initialize testimonials carousel
function initTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    // Hide all testimonials except the first one
    testimonials.forEach((testimonial, index) => {
        if (index !== 0) {
            testimonial.style.display = 'none';
        }
    });

    // Add click event to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showTestimonial(index);
        });
    });

    // Function to show testimonial by index
    function showTestimonial(index) {
        // Hide current testimonial
        testimonials[currentIndex].style.display = 'none';
        dots[currentIndex].classList.remove('active');

        // Show selected testimonial
        testimonials[index].style.display = 'block';
        dots[index].classList.add('active');

        // Update current index
        currentIndex = index;
    }

    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        const nextIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }, 5000);
}
// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // Variables
    const header = document.querySelector('.header');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const themeToggle = document.getElementById('themeToggle');
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const progressBar = document.getElementById('progressBar');

    // Function to toggle mobile navigation
    function toggleMobileNav() {
        hamburgerBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');

        // Animate hamburger icon
        const spans = hamburgerBtn.querySelectorAll('span');
        if (hamburgerBtn.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }

    // Function to close mobile navigation
    function closeMobileNav() {
        hamburgerBtn.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.classList.remove('no-scroll');

        // Reset hamburger icon
        const spans = hamburgerBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }

    // Function to toggle theme
    function toggleTheme() {
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
    }

    // Function to update progress bar
    function updateProgressBar() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;
        const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
        progressBar.style.width = `${progress}%`;

        // Show/hide scroll to top button
        if (scrollPosition > 300) {
            scrollToTopBtn.classList.add('active');
        } else {
            scrollToTopBtn.classList.remove('active');
        }
    }

    // Function to scroll to top
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Function to check and set theme from localStorage
    function checkTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
    }

    // Function to handle active navigation links
    function handleActiveNavLinks() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.desktop-nav a');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Event Listeners
    hamburgerBtn.addEventListener('click', toggleMobileNav);

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });

    themeToggle.addEventListener('click', toggleTheme);

    scrollToTopBtn.addEventListener('click', scrollToTop);

    window.addEventListener('scroll', () => {
        updateProgressBar();
        handleActiveNavLinks();
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && mobileNav.classList.contains('active')) {
            closeMobileNav();
        }
    });

    // Initialize
    checkTheme();
    updateProgressBar();
    handleActiveNavLinks();
});
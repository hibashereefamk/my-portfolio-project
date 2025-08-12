document.addEventListener('DOMContentLoaded', () => {

    // === ACTIVE LINK ON SCROLL & STICKY HEADER ===
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    let header = document.querySelector('.header');

    window.onscroll = () => {
        header.classList.toggle('sticky', window.scrollY > 100);

        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    };

    // === SCROLL REVEAL ANIMATION ===
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .projects-container, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.about-img', { origin: 'left' });
    ScrollReveal().reveal('.about-content', { origin: 'right' });


    // === TYPED.JS FOR HERO SECTION ===
    const typed = new Typed('.multiple-text', {
        strings: ['Full-Stack Developer', 'Frontend Specialist', 'UI/UX Enthusiast'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });


    // === DARK/LIGHT MODE TOGGLE ===
    let darkModeIcon = document.querySelector('#darkMode-icon');
    let htmlElement = document.documentElement;

    // Check for saved theme in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        htmlElement.classList.add('d"ark-mode');
        darkModeIcon.classList.remove('bx-moon');
        darkModeIcon.classList.add('bx-sun');
    }

    darkModeIcon.onclick = () => {
        htmlElement.classList.toggle('dark-mode');
        let isDarkMode = htmlElement.classList.contains('dark-mode');
        
        if (isDarkMode) {
            darkModeIcon.classList.remove('bx-moon');
            darkModeIcon.classList.add('bx-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            darkModeIcon.classList.remove('bx-sun');
            darkModeIcon.classList.add('bx-moon');
            localStorage.setItem('theme', 'light');
        }
    };
});
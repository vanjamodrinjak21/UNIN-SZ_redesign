document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });

    // Close menu when window is resized
    window.addEventListener('resize', () => {
        if (window.innerWidth > 968 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
}); 
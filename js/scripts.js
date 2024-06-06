document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Set interval to switch slides every 10 seconds
    setInterval(nextSlide, 10000);

    // Navigation bar functionality
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to set the active navigation link
    function setActiveNavLink(clickedLink) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        clickedLink.classList.add('active');
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            setActiveNavLink(link);

            // Optionally, you can scroll to the section smoothly
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Initially set the active navigation link based on the current URL hash
    const currentHash = window.location.hash.substring(1);
    if (currentHash) {
        const currentLink = document.querySelector(`.nav-link[href="#${currentHash}"]`);
        if (currentLink) {
            setActiveNavLink(currentLink);
        }
    } else {
        // Set the first link as active if no hash is present
        setActiveNavLink(navLinks[0]);
    }
});

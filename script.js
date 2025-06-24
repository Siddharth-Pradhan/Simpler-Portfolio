const body = document.body;
body.classList.add( localStorage.getItem('theme') || 'theme-6');

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
})

// Toggle theme 
const themeChange = () => {
    const themes = ['theme-1','theme-2','theme-3','theme-4','theme-5','theme-6'];
    const body = document.body;
    const n = body.classList[0];
    const nextTheme = themes[(themes.indexOf(n) + 1) % themes.length];
    body.classList.replace(n, nextTheme);
    localStorage.setItem('theme', nextTheme);
}

// Animation on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions)
document.querySelectorAll('.about-image, .about-text, .skill-card, .project-card, .contact-item, .contact-form').forEach(el => {
    observer.observe(el);
})
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});
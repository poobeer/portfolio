document.addEventListener('DOMContentLoaded', () => {
    // Dane o projektach
    const projects = [
        {
            title: "Strona Demostracja 1 (Pizzeria)",
            description: "To jest demostracyjna landing page pizzeri fikcyjnej",
            imageUrl: "zdjecia/pizzeria.png", // Zmień na obrazek z Twojego projektu
            link: "pizza/index.html" // Zmień na link do Twojej strony demo
        },
        {
            title: "Strona Demostracja 2(Komis Samochodowy)",
            description: "Drugi projekt demo. Landing page komisu samochodowego.",
            imageUrl: "zdjecia/komis.png",
            link: "komis/index.html"
        },
        {
            title: "Dopiero Bedzie",
            description: "Trzeci projekt demo.",
            imageUrl: "https://i.scdn.co/image/ab67616d0000b27323a8321bd17fe693210812fe",
            link: ""
        }
    ];

    const projectsGrid = document.querySelector('.projects-grid');

    // Generowanie kart projektów
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">Zobacz Demo</a>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });

    // Płynne przewijanie do sekcji portfolio
    const ctaButton = document.querySelector('.cta-button');
    const portfolioSection = document.querySelector('.portfolio-section');

    ctaButton.addEventListener('click', () => {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Animacja przy przewijaniu
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
});
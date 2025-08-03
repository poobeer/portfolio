document.addEventListener('DOMContentLoaded', () => {
    // Dane o projektach
    const projects = [
        {
            title: "Strona Demostracja 1 (Pizzeria)",
            description: "To jest demostracyjna landing page pizzeri fikcyjnej",
            imageUrl: "https://via.placeholder.com/400x200?text=Projekt+1", // Zmień na obrazek z Twojego projektu
            link: "https://twoja-strona-demo1.com" // Zmień na link do Twojej strony demo
        },
        {
            title: "Strona Demostracja 2",
            description: "Drugi projekt demo. Skomplikowany design e-commerce z dynamicznymi elementami.",
            imageUrl: "https://via.placeholder.com/400x200?text=Projekt+2",
            link: "https://twoja-strona-demo2.com"
        },
        {
            title: "Strona Demostracja 3",
            description: "Trzeci projekt, prosty blog z efektem paralaksy w nagłówku.",
            imageUrl: "https://via.placeholder.com/400x200?text=Projekt+3",
            link: "https://twoja-strona-demo3.com"
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
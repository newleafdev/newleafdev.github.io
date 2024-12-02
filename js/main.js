// Update your projects here
const projects = [
    {
        title: "Project Title",
        description: "Project description goes here. Explain what the project does and what technologies you used.",
        techStack: ["Tech1", "Tech2", "Tech3"],
        link: "https://github.com/your-username/project-repo",
        image: "https://via.placeholder.com/300x200" // Optional: Add project screenshots
    }
    // Add more projects as needed
];

// Create project cards
function createProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const content = `
            <div class="card-content">
                <h2 class="card-title">${project.title}</h2>
                <p class="card-description">${project.description}</p>
                <div class="tech-stack">
                    ${project.techStack.map(tech => `
                        <span class="tech-badge">${tech}</span>
                    `).join('')}
                </div>
                <a href="${project.link}" class="card-link" target="_blank">View Project</a>
            </div>
        `;
        
        card.innerHTML = content;
        projectsGrid.appendChild(card);

        // Add tilt effect
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
    });
}

// Tilt effect functions
function handleTilt(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = -(x - centerX) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
}

function resetTilt(e) {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
}

// Smooth scroll
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// Update copyright year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Initialize
document.addEventListener('DOMContentLoaded', createProjectCards);
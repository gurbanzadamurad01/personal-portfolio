// Portfolio Website JavaScript

class PortfolioApp {
    constructor() {
        this.projects = [];
        this.filteredProjects = [];
        this.selectedTech = [];
        this.searchTerm = '';
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.loadProjects();
        this.renderProjects();
    }
    
    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.filterProjects();
        });
        
        // Tech filter dropdown
        const techFilterBtn = document.getElementById('techFilterBtn');
        const techFilterDropdown = document.getElementById('techFilterDropdown');
        
        techFilterBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            techFilterDropdown.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            techFilterDropdown.classList.add('hidden');
        });
        
        techFilterDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        // Tech filter checkboxes
        const techFilters = document.querySelectorAll('.tech-filter');
        techFilters.forEach(filter => {
            filter.addEventListener('change', (e) => {
                const tech = e.target.value;
                if (e.target.checked) {
                    this.selectedTech.push(tech);
                } else {
                    this.selectedTech = this.selectedTech.filter(t => t !== tech);
                }
                this.filterProjects();
            });
        });
        
        // Contact modal
        const contactBtn = document.getElementById('contactBtn');
        const contactModal = document.getElementById('contactModal');
        const closeContactModal = document.getElementById('closeContactModal');
        
        contactBtn.addEventListener('click', () => {
            contactModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
        
        closeContactModal.addEventListener('click', () => {
            contactModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
        
        // Project modal
        const projectModal = document.getElementById('projectModal');
        const closeModal = document.getElementById('closeModal');
        
        closeModal.addEventListener('click', () => {
            projectModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
        
        // Close modals on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                contactModal.classList.add('hidden');
                projectModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Close modals on backdrop click
        [contactModal, projectModal].forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }
            });
        });
    }
    
    loadProjects() {
        // Sample projects to demonstrate the layout
        this.projects = [
            {
                id: 1,
                title: "Multi Vendor E Commerce",
                description: "Build and Deploy a Multi Vendor E Commerce With Nextjs, React & Stripe Connect",
                fullDescription: "You’ll build your own multi-vendor e-commerce app where creators have their own storefronts, sell digital products, and get paid through Stripe Connect. You’ll cover features like subdomains, product reviews, personal libraries, file delivery, and automatic platform fees. There’s also an admin dashboard with role-based access control. Built with Next.js 15, Payload and Stripe Connect. A solid, practical project with everything you need to learn how modern platforms like this are made.",
                technologies: ["react", "node", "nextjs", "stripe", "javascript", "tailwindcss", "payload", "shadcnui", "mongodb"],
                image: "./images/ecommerce/ecommerce_design.png",
                images: [
                    "./images/ecommerce/homepage.png",
                    "./images/ecommerce/register.png",
                    "./images/ecommerce/checkout.png"
                ],
                features: [
                    "Multi-tenant architecture",
                    "Vendor subdomains",
                    "Custom merchant storefronts",
                    "Stripe Connect integration",
                    "Automatic platform fees",
                    "Product ratings & reviews",
                    "User purchase library",
                    "Role-based access control",
                    "Admin dashboard",
                    "Merchant dashboard",
                    "Payload CMS backend",
                    "Category & product filtering",
                    "Search functionality",
                    "Image upload support",
                    "Built with Next.js 15",
                    "TailwindCSS V4 styling",
                    "ShadcnUI components",
                ],
                liveUrl: "https://ecommerce-peach-ten-55.vercel.app/",
                githubUrl: "https://github.com/gurbanzadamurad01/ecommerce"
            },
            {
                id: 2,
                title: "Chat App",
                description: "MERN Stack Project: Realtime Chat App Tutorial - React.js & Socket.io",
                fullDescription: "Build a Realtime Chat App with MERN Stack. Completely beginner friendly.",
                technologies: ["react", "node", "javascript", "socket.io"],
                image: "./images/chat_app/chat_app_backlop.png",
                images: [
                    "./images/chat_app/chat_app_home.png",
                    "./images/chat_app/chat_app_tablet.png",
                    "./images/chat_app/chat_piece_message.png"
                ],
                features: [
                    "Real-time collaboration",
                    "Task assignment and tracking",
                    "Project timeline visualization",
                    "Team communication tools",
                    "Progress analytics and reporting"
                ],
                liveUrl: "#",
                githubUrl: "#"
            },
            {
                id: 3,
                title: "Weather Dashboard",
                description: "Real-time weather monitoring application",
                fullDescription: "An interactive weather dashboard that provides real-time weather data, forecasts, and weather maps using multiple APIs and data visualization libraries.",
                technologies: ["javascript", "python"],
                image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
                images: [
                    "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=400&h=300&fit=crop"
                ],
                features: [
                    "Current weather conditions",
                    "7-day weather forecast",
                    "Interactive weather maps",
                    "Location-based weather alerts",
                    "Historical weather data analysis"
                ],
                liveUrl: "#",
                githubUrl: "#"
            },
            {
                id: 4,
                title: "AI Chat Interface",
                description: "Intelligent chatbot with natural language processing",
                fullDescription: "An advanced AI-powered chat interface built with React and integrated with OpenAI's API for natural language conversations and intelligent responses.",
                technologies: ["react", "node", "javascript"],
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
                images: [
                    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1676299081847-824916de030a?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1675557009874-d5eb2d1d0d13?w=400&h=300&fit=crop"
                ],
                features: [
                    "Natural language processing",
                    "Context-aware conversations",
                    "Multi-language support",
                    "Chat history and export",
                    "Custom personality settings"
                ],
                liveUrl: "#",
                githubUrl: "#"
            },
            {
                id: 5,
                title: "Data Analytics Platform",
                description: "Business intelligence and data visualization",
                fullDescription: "A comprehensive data analytics platform built with Python and React, featuring advanced data visualization, machine learning insights, and interactive dashboards for business intelligence.",
                technologies: ["python", "react", "javascript"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
                images: [
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop"
                ],
                features: [
                    "Interactive data visualization",
                    "Machine learning insights",
                    "Custom dashboard creation",
                    "Data export and reporting",
                    "Real-time data processing"
                ],
                liveUrl: "#",
                githubUrl: "#"
            },
            {
                id: 6,
                title: "Social Media Platform",
                description: "Connect and share with friends worldwide",
                fullDescription: "A modern social media platform with real-time messaging, content sharing, and community features built using the latest web technologies.",
                technologies: ["react", "node", "javascript"],
                image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
                images: [
                    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=300&fit=crop",
                    "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop"
                ],
                features: [
                    "Real-time messaging",
                    "Photo and video sharing",
                    "Community groups",
                    "Live streaming",
                    "Privacy controls"
                ],
                liveUrl: "#",
                githubUrl: "#"
            }
        ];
        this.filteredProjects = [...this.projects];
    }
    
    filterProjects() {
        this.filteredProjects = this.projects.filter(project => {
            // Search filter
            const matchesSearch = project.title.toLowerCase().includes(this.searchTerm) ||
                                project.description.toLowerCase().includes(this.searchTerm) ||
                                project.technologies.some(tech => tech.toLowerCase().includes(this.searchTerm));
            
            // Tech filter
            const matchesTech = this.selectedTech.length === 0 ||
                               this.selectedTech.some(tech => project.technologies.includes(tech));
            
            return matchesSearch && matchesTech;
        });
        
        this.renderProjects();
    }
    
    renderProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        
        if (this.filteredProjects.length === 0) {
            // Show empty state
            const emptyMessage = this.projects.length === 0 ? 
                'No projects to display' : 
                'No projects match your filters';
            
            const emptySubMessage = this.projects.length === 0 ? 
                'Add your projects to showcase your work' : 
                'Try adjusting your search or filter criteria';
            
            projectsGrid.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <div class="text-gray-400 empty-state">
                        <i class="fas fa-folder-open text-4xl mb-4"></i>
                        <p class="text-lg">${emptyMessage}</p>
                        <p class="text-sm mt-2">${emptySubMessage}</p>
                    </div>
                </div>
            `;
            return;
        }
        
        // Render projects
        let projectsHTML = '';
        this.filteredProjects.forEach((project, index) => {
            const isLarge = index % 3 === 0; // Every third project is large
            projectsHTML += this.createProjectCard(project, isLarge);
        });
        
        projectsGrid.innerHTML = projectsHTML;
        
        // Add click listeners to project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.addEventListener('click', () => {
                this.showProjectDetails(this.filteredProjects[index]);
            });
        });
    }
    
    createProjectCard(project, isLarge = false) {
        return `
            <div class="project-card ${isLarge ? 'large' : ''}" data-project-id="${project.id}">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-info">
                    <h3 class="text-lg font-semibold mb-2">${project.title}</h3>
                    <p class="text-sm text-gray-300 mb-3">${project.description}</p>
                    <div class="flex flex-wrap gap-1">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }
    
    showProjectDetails(project) {
        const modal = document.getElementById('projectModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalContent = document.getElementById('modalContent');
        
        modalTitle.textContent = project.title;
        
        modalContent.innerHTML = `
            <div class="project-detail-images">
                <div class="main-image">
                    <img src="${project.images[0]}" alt="${project.title} - Main" class="w-full h-full object-cover">
                </div>
                ${project.images.slice(1, 3).map(img => `
                    <div class="side-image">
                        <img src="${img}" alt="${project.title}" class="w-full h-full object-cover">
                    </div>
                `).join('')}
            </div>
            
            <div class="space-y-4">
                <div>
                    <h3 class="text-lg font-semibold mb-2 text-accent-blue">Description</h3>
                    <p class="text-gray-300">${project.fullDescription}</p>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-2 text-accent-blue">Technologies Used</h3>
                    <div class="flex flex-wrap gap-2">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div>
                    <h3 class="text-lg font-semibold mb-2 text-accent-blue">Key Features</h3>
                    <ul class="list-disc list-inside space-y-1 text-gray-300">
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                ${project.liveUrl || project.githubUrl ? `
                    <div class="flex space-x-4 pt-4">
                        ${project.liveUrl ? `
                            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" 
                               class="px-6 py-2 bg-accent-blue text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 flex items-center space-x-2">
                                <i class="fas fa-external-link-alt"></i>
                                <span>Live Demo</span>
                            </a>
                        ` : ''}
                        ${project.githubUrl ? `
                            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" 
                               class="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition-colors duration-300 flex items-center space-x-2">
                                <i class="fab fa-github"></i>
                                <span>View Code</span>
                            </a>
                        ` : ''}
                    </div>
                ` : ''}
            </div>
        `;
        
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
    
    // Method to add projects (for future use)
    addProject(project) {
        this.projects.push(project);
        this.filterProjects();
    }
    
    // Method to update user info (for future use)
    updateUserInfo(name, title, avatar, socialLinks) {
        document.querySelector('h1').textContent = name;
        document.querySelector('aside p').textContent = title;
        document.querySelector('.avatar-container img').src = avatar;
        
        const socialLinkElements = document.querySelectorAll('.social-link');
        if (socialLinks.github) {
            socialLinkElements[0].href = socialLinks.github;
        }
        if (socialLinks.linkedin) {
            socialLinkElements[1].href = socialLinks.linkedin;
        }
    }
    
    // Method to update contact info (for future use)
    updateContactInfo(phone) {
        document.querySelector('#contactModal .font-mono').textContent = phone;
    }
}

// Initialize the portfolio app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioApp = new PortfolioApp();
});

// Smooth scroll utility
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Utility function to handle image loading errors
function handleImageError(img) {
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMjAyMDIwIi8+CjxwYXRoIGQ9Ik0xNTAgNzVMMTI1IDEwMEwxNzUgMTAwTDE1MCA3NVoiIGZpbGw9IiM0MDQwNDAiLz4KPGNpcmNsZSBjeD0iMTIwIiBjeT0iODAiIHI9IjEwIiBmaWxsPSIjNDA0MDQwIi8+CjxyZWN0IHg9IjUwIiB5PSIxMjAiIHdpZHRoPSIyMDAiIGhlaWdodD0iNDAiIGZpbGw9IiM0MDQwNDAiLz4KPC9zdmc+';
    img.alt = 'Image not available';
}

// Add error handling to all images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', () => handleImageError(img));
    });
});

// Performance optimization: Lazy loading for images
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        }
    });
}, observerOptions);

// Observe images with data-src attribute for lazy loading
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
});

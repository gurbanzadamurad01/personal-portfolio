# Portfolio Website

A responsive portfolio website with dark theme, project showcase grid, and interactive features.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Theme**: Modern dark color scheme with gradient accents
- **Project Showcase**: Grid layout with large and small project cards
- **Interactive Elements**: 
  - Hover effects with smooth animations
  - Search functionality for projects
  - Technology filter dropdown
  - Project detail modals
  - Contact information modal
- **Animations**: Pure CSS animations throughout the interface
- **Typography**: Clean Roboto font family

## Technologies Used

- HTML5
- CSS3 (Custom animations)
- JavaScript (ES6+)
- Tailwind CSS
- Font Awesome Icons
- Google Fonts

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS animations and styles
├── script.js           # JavaScript functionality
├── assets/
│   └── avatar.svg      # Profile avatar image
└── README.md           # Project documentation
```

## Features Overview

### Left Sidebar
- Profile avatar with animated gradient border
- Full name and title ("Web Developer")
- Social links (GitHub, LinkedIn)

### Main Content Area
- Search bar for filtering projects
- Technology filter dropdown with multi-select
- "Working with Me" contact button
- Project grid with mixed large/small cards
- Project detail modals with multiple images

### Interactive Elements
- **Search**: Filter projects by title, description, or technology
- **Technology Filter**: Multi-select dropdown to filter by tech stack
- **Project Cards**: Click to view detailed information
- **Contact Modal**: Display phone number for direct contact

## Customization

### Adding Your Information

1. **Update Profile Information**:
   ```javascript
   // In script.js, use the updateUserInfo method
   portfolioApp.updateUserInfo(
       "Your Name",
       "Your Title", 
       "path/to/your/avatar.svg",
       {
           github: "https://github.com/yourusername",
           linkedin: "https://linkedin.com/in/yourusername"
       }
   );
   ```

2. **Update Contact Information**:
   ```javascript
   // In script.js, use the updateContactInfo method
   portfolioApp.updateContactInfo("+1 (555) 123-4567");
   ```

3. **Add Your Projects**:
   ```javascript
   // In script.js, replace the sample projects in loadProjects() method
   const yourProject = {
       id: 1,
       title: "Your Project Title",
       description: "Brief project description",
       fullDescription: "Detailed project description",
       technologies: ["react", "node", "javascript"],
       image: "path/to/project/image.jpg",
       images: [
           "path/to/main/image.jpg",
           "path/to/side/image1.jpg", 
           "path/to/side/image2.jpg"
       ],
       features: [
           "Feature 1",
           "Feature 2",
           "Feature 3"
       ],
       liveUrl: "https://your-project-url.com",
       githubUrl: "https://github.com/yourusername/project"
   };
   ```

### Color Customization

The color scheme can be customized in both CSS variables and Tailwind config:

```css
:root {
    --dark-bg: hsl(0 0% 4%);
    --dark-card: hsl(0 0% 10%);
    --dark-border: hsl(0 0% 16%);
    --accent-blue: hsl(217 91% 60%);
    --accent-purple: hsl(258 70% 65%);
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Lazy loading for images
- Smooth scrolling
- Optimized animations
- Responsive image loading

## Accessibility

- Keyboard navigation support
- Focus indicators
- ARIA labels
- Semantic HTML structure

## Setup

1. Clone or download the project files
2. Open `index.html` in a web browser
3. For development, use a local server:
   ```bash
   python -m http.server 5000
   ```
4. Navigate to `http://localhost:5000`

## License

This project is open source and available under the MIT License.
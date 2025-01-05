
// Generate stars dynamically via JavaScript
const starContainer = document.querySelector('.falling-stars');
for (let i = 0; i < 40; i++) {
    let star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random duration between 5s and 10s
    star.style.animationDelay = `${Math.random() * 3}s`; // Random delay
    star.style.opacity = Math.random(); // Random opacity for variation
    starContainer.appendChild(star);
}


// <!-- JavaScript for Filtering Projects -->

function filterProjects(category) {
    // Hide all projects
    let allProjects = document.querySelectorAll('.project');
    allProjects.forEach(function (project) {
        project.style.display = 'none';
    });

    // Show projects based on the category
    if (category === 'all') {
        let allProjects = document.querySelectorAll('.project');
        allProjects.forEach(function (project) {
            project.style.display = 'block';
        });
    } else {
        let filteredProjects = document.querySelectorAll('.project.' + category);
        filteredProjects.forEach(function (project) {
            project.style.display = 'block';
        });
    }
}

// Smooth scrolling when clicking on the navigation links
document.querySelectorAll('.project-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



AOS.init(); // AOS initialization for animations

// Typing animation for dynamic text
const typingEffect = document.getElementById('typing-effect');
const skills = ["UI/UX Designer", "Software Engineer", "Web Developer", "Tech Enthusiast"];
let skillIndex = 0;
let charIndex = 0;
let currentText = '';

function typeText() {
    currentText = skills[skillIndex].slice(0, charIndex);
    typingEffect.textContent = currentText;
    charIndex++;

    if (charIndex > skills[skillIndex].length) {
        skillIndex = (skillIndex + 1) % skills.length;
        charIndex = 0;
        setTimeout(typeText, 1500); // Pause before starting to type again
    } else {
        setTimeout(typeText, 150);
    }
}

typeText(); // Start typing effect




function shatterImage(event) {
    const container = event.currentTarget;
    const image = container.querySelector('img');
    const rect = image.getBoundingClientRect();
    const imageSrc = image.src;
    const numPieces = 9;  // Breaking the image into 9 pieces (3x3 grid)

    // Hide the original image temporarily
    image.style.opacity = 0;

    // Create shattered pieces
    for (let i = 0; i < numPieces; i++) {
        const piece = document.createElement('div');
        piece.classList.add('shattered-piece');

        // Calculate position for each piece (using grid positions)
        const row = Math.floor(i / 3);  // 3 pieces per row
        const col = i % 3;  // Column number
        const xPos = col * 100;  // Each piece width (100px)
        const yPos = row * 100;  // Each piece height (100px)

        // Randomize rotation for a more natural effect
        const rotate = (Math.random() * 720 - 360);  // Random rotation angle

        // Set background position to get the right part of the image
        piece.style.backgroundPosition = `-${xPos}px -${yPos}px`;
        piece.style.left = `${xPos}px`;  // Position pieces correctly on the screen
        piece.style.top = `${yPos}px`;

        // Set random movement for pieces to scatter
        piece.style.setProperty('--x', `${(Math.random() * 400 - 200)}px`);
        piece.style.setProperty('--y', `${(Math.random() * 400 - 200)}px`);
        piece.style.setProperty('--rotate', `${rotate}deg`);

        container.appendChild(piece);
    }

    // Reset image visibility after animation
    setTimeout(() => {
        image.style.opacity = 1;
    }, 2000);  // Adjust the reset delay to match animation
}

// Smooth scroll animation
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
}

// Console welcome message
console.log("✨ Welcome to Shristi Khare’s Portfolio Website!");

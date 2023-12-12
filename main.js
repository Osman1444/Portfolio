const skillsContainer = document.getElementById('Scontainer'); // Get the element to append images

// Array of image file names in the 'Source/Skills' directory
for (let i = 1; i <= 10; i++) {
  const img = new Image(); // Create a new image element
  img.src = `Source/Skills/${i}.png`; // Set the image source dynamically
  skillsContainer.appendChild(img); 
}
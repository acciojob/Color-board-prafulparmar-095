// Get a reference to the container element
const container = document.getElementById('container');
// Define the number of squares to create
const SQUARES = 800;

// Array of vibrant colors for the squares
const colors = [
    '#e74c3c', // Alizarin
    '#8e44ad', // Amethyst
    '#3498db', // Belize Hole
    '#2ecc71', // Emerald
    '#f1c40f', // Sunflower
    '#e67e22', // Carrot
    '#9b59b6', // Wisteria
    '#1abc9c', // Turquoise
    '#d35400', // Pumpkin
    '#27ae60', // Nephritis
    '#c0392b', // Pomegranate
    '#7f8c8d'  // Asbestos (a bit muted, for contrast)
];

/**
 * Function to get a random color from the colors array.
 * @returns {string} A random hex color code.
 */
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * Function to set the background color of a square on hover.
 * @param {HTMLElement} element - The square element.
 */
function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
}

/**
 * Function to reset the background color of a square after mouse leaves.
 * The CSS transition handles the smooth 1-second fade.
 * @param {HTMLElement} element - The square element.
 */
function removeColor(element) {
    element.style.backgroundColor = '#222'; // Reset to default square color
}

// Dynamically create squares and add them to the container
for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    // Add event listeners for hover effects
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));

    container.appendChild(square);
}

// Adjust grid columns based on the container width for better distribution
// This ensures that the 800 squares form a neat grid.
window.onload = () => {
    // Calculate how many squares fit per row based on container width and square size
    const squareSize = 20; // from CSS
    const gapSize = 1; // from CSS
    const containerWidth = container.clientWidth;
    // Ensure at least one column to prevent division by zero or invalid grid
    const columns = Math.max(1, Math.floor(containerWidth / (squareSize + gapSize)));
    container.style.gridTemplateColumns = `repeat(${columns}, ${squareSize}px)`;
};

// Re-adjust columns on window resize
window.addEventListener('resize', () => {
    const squareSize = 20;
    const gapSize = 1;
    const containerWidth = container.clientWidth;
    // Ensure at least one column
    const columns = Math.max(1, Math.floor(containerWidth / (squareSize + gapSize)));
    container.style.gridTemplateColumns = `repeat(${columns}, ${squareSize}px)`;
});

// --- Theme Toggle Logic ---
const themeButton = document.getElementById('theme-button');
const themeText = themeButton.querySelector('.text');

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // Update the button text based on the active mode (using Kurdish text from your request)
    if (document.body.classList.contains('light-mode')) {
        themeText.innerText = 'مۆدی تاریک'; // Text changed in light mode
    } else {
        themeText.innerText = 'مۆدی ڕووناک'; // Default for dark mode
    }
});

// --- Three.js 3D Background (Refined Bio-Motion) ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight * 0.7), 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight * 0.7);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Create a smoother, organic-like particle field
const geometry = new THREE.TorusKnotGeometry(12, 3, 200, 20); // Refined geometry
const material = new THREE.PointsMaterial({
    color: 0x2ecc71, // Specific green from your original request
    size: 0.08, // Adjust particle size for subtlety
    blending: THREE.AdditiveBlending, // Enhances glow in dark mode
    transparent: true,
    opacity: 0.7
});
const particles = new THREE.Points(geometry, material);
scene.add(particles);

// Set camera position (farther out for a softer look)
camera.position.z = 45;

function animate() {
    requestAnimationFrame(animate);
    // Subtle, slow rotations
    particles.rotation.y += 0.003;
    particles.rotation.x += 0.001;
    renderer.render(scene, camera);
}

// Ensure responsiveness on resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / (window.innerHeight * 0.7);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight * 0.7);
});

// Initialize animation loop
animate();
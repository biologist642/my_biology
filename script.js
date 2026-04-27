// Theme Toggle Logic
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Three.js 3D Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight * 0.6), 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight * 0.6);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Create a green "DNA/Cell" particle field
const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.PointsMaterial({ color: 0x2ecc71, size: 0.05 });
const particles = new THREE.Points(geometry, material);
scene.add(particles);

camera.position.z = 30;

function animate() {
    requestAnimationFrame(animate);
    particles.rotation.y += 0.005;
    particles.rotation.z += 0.002;
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / (window.innerHeight * 0.6);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight * 0.6);
});

animate();
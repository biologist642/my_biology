// وەرگرتنی توخمەکان
const splash = document.getElementById('splash-screen');
const mainContent = document.getElementById('main-content');

// سیستەمی سپلاش سکرین (٥ چرکە)
window.addEventListener('load', () => {
    setTimeout(() => {
        splash.classList.add('splash-hidden');
        mainContent.classList.add('show-content');
        // ڕێگەدان بە سکرۆڵ کردن دوای نەمانی سپلاش
        document.body.style.overflow = 'auto';
    }, 5000);
});

// ڕێگری لە سکرۆڵ کردن تا سپلاش تەواو دەبێت
document.body.style.overflow = 'hidden';

// --- Three.js 3D Animation ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('hero-canvas').appendChild(renderer.domElement);

// دروستکردنی شێوەیەکی ئەندازەیی مۆدێرن
const geometry = new THREE.IcosahedronGeometry(10, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x2ecc71, wireframe: true });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

camera.position.z = 25;

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.005;
    renderer.render(scene, camera);
}
animate();

// گونجاندن لەگەڵ گۆڕینی قەبارەی شاشە
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
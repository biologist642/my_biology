// مۆشنی دەرکەوتن (Reveal Animation)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// بانگکردنی بۆ جاری یەکەم
reveal();

// 3D Background بۆ هێدەرەکە (کاڵتر و هێمنتر)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight * 0.4), 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight * 0.4);
document.getElementById('canvas-container').appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(10, 32, 32);
const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, transparent: true, opacity: 0.2 });
const points = new THREE.Points(geometry, material);
scene.add(points);

camera.position.z = 20;

function animate() {
    requestAnimationFrame(animate);
    points.rotation.y += 0.003;
    renderer.render(scene, camera);
}
animate();
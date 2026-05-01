// 1. Splash Screen Logic (3 Seconds)
const splash = document.getElementById('splash-screen');
const mainContent = document.getElementById('main-content');

window.addEventListener('load', () => {
    setTimeout(() => {
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.style.display = 'none';
            mainContent.classList.add('show-content');
        }, 800);
    }, 3000); // 3000ms = 3 Seconds
});

// 2. Dark/Light Mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// 3. Multi-Language Logic
const translations = {
    ku: {
        home: "سەرەکی", cell: "خانەناسی",
        title: "BioQuest ٢٠٢٦", desc: "پێشەنگ لە بڵاوکردنەوەی زانیاری بایۆلۆجی و تەکنەلۆژیا",
        btn: "دەستپێبکە", dir: "rtl"
    },
    ar: {
        home: "الرئيسية", cell: "علم الخلايا",
        title: "BioQuest ٢٠٢٦", desc: "رائد في نشر المعلومات البيولوجية والتكنولوجيا",
        btn: "ابدأ الآن", dir: "rtl"
    },
    en: {
        home: "Home", cell: "Cytology",
        title: "BioQuest 2026", desc: "Leader in biological information and technology",
        btn: "Get Started", dir: "ltr"
    }
};

function changeLanguage() {
    const lang = document.getElementById('lang-select').value;
    const t = translations[lang];
    
    document.documentElement.dir = t.dir;
    document.getElementById('nav-home').innerText = t.home;
    document.getElementById('nav-cell').innerText = t.cell;
    document.getElementById('hero-title').innerText = t.title;
    document.getElementById('hero-desc').innerText = t.desc;
    document.getElementById('btn-text').innerText = t.btn;
}

// 4. Three.js Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('hero-canvas').appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.MeshBasicMaterial({ color: 0x2ecc71, wireframe: true });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 30;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.003;
    sphere.rotation.x += 0.002;
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
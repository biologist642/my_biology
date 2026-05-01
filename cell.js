// مۆدی تاریک
const modeBtn = document.getElementById('mode-btn');
modeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// ئەنیمەیشنی سکرۆڵ
function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    reveals.forEach(el => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) el.classList.add("active");
    });
}
window.addEventListener("scroll", reveal);
reveal(); // بۆ دەرکەوتنی یەکەمجار

// سیستەمی زمان تەنها بۆ بەشی خانەناسی
const cellLang = {
    ku: { title: "زانستی خانە (Cytology)", back: "🏠 گەڕانەوە", qT: "خانە چییە؟", qD: "خانە بچووکترین یەکەی پەیکەری و فرمانییە لە زیندەوەراندا.", dir: "rtl" },
    ar: { title: "علم الخلايا (Cytology)", back: "🏠 العودة", qT: "ما هي الخلية؟", qD: "الخلية هي أصغر وحدة هيكلية ووظيفية في الكائنات الحية.", dir: "rtl" },
    en: { title: "Cell Biology (Cytology)", back: "🏠 Back Home", qT: "What is a Cell?", qD: "The cell is the smallest structural and functional unit of organisms.", dir: "ltr" }
};

function translateCell(lang) {
    document.body.dir = cellLang[lang].dir;
    document.getElementById('main-title').innerText = cellLang[lang].title;
    document.getElementById('back-btn').innerText = cellLang[lang].back;
    document.getElementById('q-title').innerText = cellLang[lang].qT;
    document.getElementById('q-desc').innerText = cellLang[lang].qD;
}

// 3D Motion (Three.js)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight * 0.45), 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight * 0.45);
document.getElementById('canvas-container').appendChild(renderer.domElement);

const geometry = new THREE.IcosahedronGeometry(10, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x2ecc71, wireframe: true, transparent: true, opacity: 0.3 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 20;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.003;
    renderer.render(scene, camera);
}
animate();
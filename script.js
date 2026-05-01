// سیستەمی زمانەکان
const content = {
    ku: {
        desc: "گەشتێکی زانستی بۆ ناو قوڵایی ژیان",
        home: "سەرەکی",
        cell: "خانەناسی",
        title: "زانستی خانەناسی",
        text: "خانە یەکەی بنەڕەتی ژیانە، لێرە هەموو زانیارییەکان فێربە.",
        btn: "زیاتر بخوێنەوە",
        dir: "rtl"
    },
    ar: {
        desc: "رحلة علمية في أعماق الحياة",
        home: "الرئيسية",
        cell: "علم الخلايا",
        title: "علم الخلايا",
        text: "الخلية هي الوحدة الأساسية للحياة، تعلم كل المعلومات هنا.",
        btn: "اقرأ المزيد",
        dir: "rtl"
    },
    en: {
        desc: "A scientific journey into the depths of life",
        home: "Home",
        cell: "Cytology",
        title: "Cell Science",
        text: "The cell is the basic unit of life, learn all information here.",
        btn: "Read More",
        dir: "ltr"
    }
};

function setLanguage(lang) {
    document.body.dir = content[lang].dir;
    document.getElementById('hero-desc').innerText = content[lang].desc;
    document.getElementById('nav-home').innerText = content[lang].home;
    document.getElementById('nav-cell').innerText = content[lang].cell;
    document.getElementById('cell-title').innerText = content[lang].title;
    document.getElementById('cell-text').innerText = content[lang].text;
    document.getElementById('btn-text').innerText = content[lang].btn;
}

// مۆدی تاریک و ڕووناک
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    themeBtn.innerText = document.body.classList.contains('dark-mode') ? "☀️ مۆدی ڕووناک" : "🌓 مۆدی تاریک";
});

// 3D Motion (Three.js) - کاڵتر
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight * 0.5), 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight * 0.5);
document.getElementById('canvas-container').appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshBasicMaterial({ color: 0x2ecc71, wireframe: true, transparent: true, opacity: 0.2 });
const shape = new THREE.Mesh(geometry, material);
scene.add(shape);

camera.position.z = 30;

function animate() {
    requestAnimationFrame(animate);
    shape.rotation.y += 0.005;
    renderer.render(scene, camera);
}
animate();

// چاککردنی قەبارە لە کاتی گۆڕینی شاشە
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight * 0.5);
    camera.aspect = window.innerWidth / (window.innerHeight * 0.5);
    camera.updateProjectionMatrix();
});
// Splash Screen Logic
window.addEventListener('load', () => {
    AOS.init({ duration: 1000, once: true });
    setTimeout(() => {
        document.getElementById('splash-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('splash-screen').style.display = 'none';
            document.getElementById('main-content').classList.remove('hidden');
        }, 500);
    }, 2000);
});

// 3D Mouse Motion for Header
const scene = document.getElementById('scene');
const content = document.querySelector('.hero-content');

scene.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 20;
    const y = (window.innerHeight / 2 - e.pageY) / 20;
    content.style.transform = `rotateX(${y}deg) rotateY(${x}deg) translateZ(50px)`;
});

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('theme-btn');
    btn.innerText = document.body.classList.contains('dark-mode') ? "☀️" : "🌙";
}

// Language Switcher (Simple Version)
function changeLang(lang) {
    const data = {
        ku: { title: "BioQuest", sub: "گەشتێکی زانستی بۆ ناو قوڵایی ژیان", card: "بچۆ ناو وانەکە" },
        en: { title: "BioQuest", sub: "A Scientific Journey into Life", card: "Enter Lesson" }
    };
    
    document.getElementById('title').innerText = data[lang].title;
    document.getElementById('subtitle').innerText = data[lang].sub;
    document.querySelector('.pulse-btn').innerText = data[lang].card;
    
    document.documentElement.dir = (lang === 'ku') ? 'rtl' : 'ltr';
}
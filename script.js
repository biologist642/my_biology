// مۆدی تاریک و ڕووناک
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('#theme-toggle i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
}

// 3D Mouse Movement Effect
const hero = document.getElementById('hero');
hero.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 20;
    const y = (window.innerHeight / 2 - e.pageY) / 20;
    document.querySelector('.hero-3d-wrap').style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// گۆڕینی زمان
const texts = {
    ku: { title: "BioQuest", sub: "گەشتێکی زانستی بۆ ناو قوڵایی ژیان", ch: "زانستی خانەناسی" },
    en: { title: "BioQuest", sub: "A Scientific Journey into Depths", ch: "Cell Biology" }
};

function changeLang(lang) {
    document.getElementById('main-title').innerText = texts[lang].title;
    document.getElementById('sub-title').innerText = texts[lang].sub;
    document.getElementById('card-h').innerText = texts[lang].ch;
    document.documentElement.dir = (lang === 'ku') ? 'rtl' : 'ltr';
}

// Loader Removal
window.addEventListener('load', () => {
    document.getElementById('loader').style.display = 'none';
});
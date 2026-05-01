// مۆدی تاریک و ڕووناک
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-toggle');
    body.classList.toggle('dark-mode');
    
    if(body.classList.contains('dark-mode')) {
        btn.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        btn.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
}

// مۆشنی 3D بۆ هێدەر
const hero = document.getElementById('hero-3d');
if(hero) {
    hero.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 25;
        const y = (window.innerHeight / 2 - e.pageY) / 25;
        document.querySelector('.hero-text').style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
}

// گۆڕینی زمان
const translations = {
    ku: {
        title: "بەخێربێیت بۆ BioQuest",
        sub: "داهاتووی بایۆلۆجی لێرەوە دەست پێ دەکات",
        cardT: "زانستی خانەناسی",
        cardD: "گەشتێک بکە بۆ ناو یەکەی بنەڕەتی ژیان و وردەکارییەکان ببینە."
    },
    en: {
        title: "Welcome to BioQuest",
        sub: "The future of biology starts here",
        cardT: "Cell Biology",
        cardD: "Take a journey into the fundamental unit of life and see the details."
    }
};

function changeLang(lang) {
    document.getElementById('main-title').innerText = translations[lang].title;
    document.getElementById('sub-title').innerText = translations[lang].sub;
    document.getElementById('card-title').innerText = translations[lang].cardT;
    document.getElementById('card-desc').innerText = translations[lang].cardD;
    
    document.documentElement.dir = (lang === 'ku') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
}

// بارکردنی ستایلی پاشەکەوتکراو
window.onload = () => {
    if(localStorage.getItem('theme') === 'dark') toggleTheme();
};
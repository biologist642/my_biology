// Theme Toggle Logic
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    
    const themeBtn = document.getElementById('theme-btn');
    themeBtn.innerHTML = isDark ? "☀️ مۆدی ڕووناک" : "🌙 مۆدی تاریک";
    
    // Save preference
    localStorage.setItem('bioquest-theme', isDark ? 'dark' : 'light');
}

// Language Translations
const langData = {
    ku: {
        title: "BioQuest",
        sub: "گەشتێکی زانستی بۆ ناو قوڵایی ژیان",
        ch: "زانستی خانە (Cell Biology)",
        cp: "خانە یەکەی بنەڕەتی پێکهاتنی هەموو زیندەوەرانە. لێرەدا دەتوانیت دەربارەی وردەکارییەکانی خانە فێرببیت.",
        bt: "بچۆ ناو وانە"
    },
    en: {
        title: "BioQuest",
        sub: "A Scientific Journey into the Depths of Life",
        ch: "Cell Biology",
        cp: "The cell is the basic structural unit of all living organisms. Here you can learn about cellular details.",
        bt: "Enter Lesson"
    }
};

function changeLang(lang) {
    document.getElementById('main-title').innerText = langData[lang].title;
    document.getElementById('sub-title').innerText = langData[lang].sub;
    document.getElementById('card-h').innerText = langData[lang].ch;
    document.getElementById('card-p').innerText = langData[lang].cp;
    document.getElementById('btn-text').innerText = langData[lang].bt;
    
    // Set Direction
    document.documentElement.dir = (lang === 'ku') ? 'rtl' : 'ltr';
    document.body.style.textAlign = (lang === 'ku') ? 'right' : 'left';
}

// Mouse Parallax for Hero
document.getElementById('hero').addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;
    document.querySelector('.hero-content').style.transform = `translateX(${x}px) translateY(${y}px)`;
});
// Splash Logic - 3 Seconds
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden-content');
    }, 3000);
});

// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('theme-toggle');
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        btn.innerHTML = "☀️ مۆدی ڕووناک";
    } else {
        btn.innerHTML = "🌙 مۆدی تاریک";
    }
}

// Tab Switching
function showSection(section) {
    const homeBtn = document.getElementById('tab-home');
    const cellBtn = document.getElementById('tab-cell');
    const title = document.getElementById('section-title');
    
    if (section === 'home') {
        homeBtn.classList.add('active');
        cellBtn.classList.remove('active');
        title.innerText = "بەخێرهاتن بۆ BioQuest";
    } else {
        cellBtn.classList.add('active');
        homeBtn.classList.remove('active');
        title.innerText = "زانیاری خانەناسی";
    }
}

// Language Logic
const texts = {
    ku: { subtitle: "گەشتێکی زانستی بۆ ناو قوڵایی ژیان", home: "سەرەکی", cell: "خانەناسی", read: "زیاتر بخوێنەوە", dir: "rtl" },
    ar: { subtitle: "رحلة علمية في أعماق الحياة", home: "الرئيسية", cell: "علم الخلايا", read: "اقرأ المزيد", dir: "rtl" },
    en: { subtitle: "A scientific journey into the depths of life", home: "Home", cell: "Cytology", read: "Read More", dir: "ltr" }
};

function setLang(lang) {
    const t = texts[lang];
    document.documentElement.dir = t.dir;
    document.getElementById('hero-subtitle').innerText = t.subtitle;
    document.getElementById('tab-home').innerText = t.home;
    document.getElementById('tab-cell').innerText = t.cell;
    document.getElementById('read-more').innerText = t.read;
    
    // Update active button style
    document.querySelectorAll('.lang-switcher button').forEach(btn => btn.classList.remove('active-lang'));
    event.target.classList.add('active-lang');
}
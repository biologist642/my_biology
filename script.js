// 1. Splash Screen - کاتی سپلاش بۆ ٣ چرکە
window.addEventListener('load', () => {
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        splash.style.opacity = '0';
        setTimeout(() => {
            splash.style.display = 'none';
            document.getElementById('main-content').classList.remove('hidden-content');
        }, 800);
    }, 3000);
});

// 2. Dark Mode Toggle
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

// 3. Tab Navigation Logic
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
        title.innerText = "زانستی خانەناسی";
    }
}

// 4. Language Switcher
const translations = {
    ku: { subtitle: "گەشتێکی زانستی بۆ ناو قوڵایی ژیان", home: "سەرەکی", cell: "خانەناسی", read: "زیاتر بخوێنەوە", dir: "rtl" },
    ar: { subtitle: "رحلة علمية في أعماق الحياة", home: "الرئيسية", cell: "علم الخلايا", read: "اقرأ المزيد", dir: "rtl" },
    en: { subtitle: "A scientific journey into the depths of life", home: "Home", cell: "Cytology", read: "Read More", dir: "ltr" }
};

function setLang(lang) {
    const t = translations[lang];
    document.documentElement.dir = t.dir;
    document.getElementById('hero-subtitle').innerText = t.subtitle;
    document.getElementById('tab-home').innerText = t.home;
    document.getElementById('tab-cell').innerText = t.cell;
    document.getElementById('read-more').innerText = t.read;
    
    // ڕێکخستنی شێوەی دوگمەی چالاک
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        btn.classList.remove('active-lang');
        if(btn.innerText.toLowerCase().includes(lang === 'ku' ? 'kurd' : lang)) {
            btn.classList.add('active-lang');
        }
    });
}
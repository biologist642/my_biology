// Splash Logic
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden-content');
    }, 3000);
});

// Theme Toggle
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const btn = document.getElementById('theme-toggle');
    btn.innerHTML = body.classList.contains('dark-mode') ? "☀️ مۆدی ڕووناک" : "🌙 مۆدی تاریک";
}

// Tab Switch
function showSection(section) {
    const title = document.getElementById('section-title');
    const homeBtn = document.getElementById('tab-home');
    const cellBtn = document.getElementById('tab-cell');
    
    if (section === 'home') {
        title.innerText = "بەخێرهاتن بۆ BioQuest";
        homeBtn.classList.add('active');
        cellBtn.classList.remove('active');
    } else {
        title.innerText = "زانیاری خانەناسی";
        cellBtn.classList.add('active');
        homeBtn.classList.remove('active');
    }
}

// Lang Switch
function setLang(lang) {
    const dirs = { ku: 'rtl', ar: 'rtl', en: 'ltr' };
    document.documentElement.dir = dirs[lang];
}
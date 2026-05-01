AOS.init({ duration: 1200, once: true });

// Splash Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splash-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('splash-screen').style.display = 'none';
            document.getElementById('main-content').classList.remove('hidden-content');
            document.getElementById('main-content').style.opacity = '1';
        }, 600);
    }, 2500);
});

// Advanced 3D Mouse Tracker
const create3DEffect = (boxId, containerId) => {
    const box = document.getElementById(boxId);
    const container = document.getElementById(containerId);
    
    container.addEventListener('mousemove', (e) => {
        let x = (window.innerWidth / 2 - e.pageX) / 25;
        let y = (window.innerHeight / 2 - e.pageY) / 25;
        box.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    });
    
    container.addEventListener('mouseleave', () => {
        box.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
};

create3DEffect('hero-content', 'hero-3d-box');
create3DEffect('footer-content', 'footer-3d-box');

// Theme Switcher
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('theme-toggle').innerText = isDark ? "☀️ مۆدی ڕووناک" : "🌙 مۆدی تاریک";
}

// Lang Switcher (Simulated)
function setLang(lang) {
    document.documentElement.dir = (lang === 'en') ? 'ltr' : 'rtl';
    document.querySelectorAll('.lang-switcher button').forEach(b => b.classList.remove('active-lang'));
    event.target.classList.add('active-lang');
}
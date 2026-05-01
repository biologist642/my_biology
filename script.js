// بارکردنی وێبسایتەکە
window.onload = () => {
    AOS.init({ duration: 1000 });
    setTimeout(() => {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden-content');
    }, 2500);
};

// 3D Motion
const hero = document.getElementById('hero-area');
const target = document.getElementById('hero-target');

if(hero) {
    hero.addEventListener('mousemove', (e) => {
        let x = (window.innerWidth / 2 - e.pageX) / 25;
        let y = (window.innerHeight / 2 - e.pageY) / 25;
        target.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
    hero.addEventListener('mouseleave', () => {
        target.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
}

// Dark Mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('theme-toggle').innerText = isDark ? "☀️ مۆدی ڕووناک" : "🌙 مۆدی تاریک";
}
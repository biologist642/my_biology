function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const icon = document.querySelector('#mode-toggle i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
}

const langContent = {
    ku: { title: "زانستی بایۆلۆجی", sub: "گەشتێکی فێربوونی مۆدێرن لە جیهانی زیندەوەراندا", cardH: "بەشی خانەناسی", cardP: "وردەکارییەکانی خانە و فەرمانەکانی ببینە." },
    en: { title: "Biological Science", sub: "A modern learning journey in the world of organisms", cardH: "Cell Biology Department", cardP: "Explore cell details and their functions." }
};

function changeLang(lang) {
    document.getElementById('main-title').innerText = langContent[lang].title;
    document.getElementById('sub-title').innerText = langContent[lang].sub;
    document.getElementById('card-h').innerText = langContent[lang].cardH;
    document.getElementById('card-p').innerText = langContent[lang].cardP;
    
    document.documentElement.dir = (lang === 'ku') ? 'rtl' : 'ltr';
}
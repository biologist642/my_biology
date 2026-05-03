// دەستپێکردنی ئەنیمەیشنەکان
AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

// گۆڕینی مۆد (Light/Dark)
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeBtn.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// وەرگێڕانی زمانەکان
const langData = {
    ku: {
        title: "ئەتڵەسی پێشکەوتووی ڕوەک",
        sub: "گەشتێک بەناو خانە، مۆرفۆلۆژیا و تاقیگەی ڕوەکناسی",
        ch1: "مۆرفۆلۆژیا", ch2: "فیسیۆلۆژیا", ch3: "تاقیگە", ch4: "پۆلێنکردن",
        dir: "rtl"
    },
    en: {
        title: "Advanced Plant Atlas",
        sub: "A Journey Through Cells, Morphology, and Botany Lab",
        ch1: "Morphology", ch2: "Physiology", ch3: "Laboratory", ch4: "Taxonomy",
        dir: "ltr"
    },
    ar: {
        title: "أطلس النبات المتقدم",
        sub: "رحلة عبر الخلايا والمورفولوجيا ومختبر علم النبات",
        ch1: "المورفولوجيا", ch2: "الفسيولوجيا", ch3: "المختبر", ch4: "التصنيف",
        dir: "rtl"
    }
};

function changeLanguage() {
    const lang = document.getElementById('langSwitcher').value;
    const content = langData[lang];
    
    document.getElementById('mainHtml').setAttribute('dir', content.dir);
    document.getElementById('mainTitle').innerText = content.title;
    document.getElementById('mainSub').innerText = content.sub;

    document.querySelectorAll('.ch-text').forEach(el => {
        const key = el.getAttribute('data-key');
        el.innerText = content[key];
    });
}

// Smooth scroll بۆ لینکەکان
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
AOS.init({ duration: 800, once: true });

const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeBtn.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

const langData = {
    ku: {
        chTitle1: "مۆرفۆلۆژیای ڕوەک", chTitle2: "فیسیۆلۆژیا و وزە", chTitle3: "تاقیگە: Salinity Stress",
        dir: "rtl"
    },
    en: {
        chTitle1: "Plant Morphology", chTitle2: "Physiology & Energy", chTitle3: "Lab: Salinity Stress",
        dir: "ltr"
    },
    ar: {
        chTitle1: "مورفولوجيا النبات", chTitle2: "الفسيولوجيا والطاقة", chTitle3: "المختبر: إجهاد الملوحة",
        dir: "rtl"
    }
};

function changeLanguage() {
    const lang = document.getElementById('langSwitcher').value;
    const content = langData[lang];
    document.getElementById('mainHtml').dir = content.dir;
    
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if(content[key]) el.innerText = content[key];
    });
}
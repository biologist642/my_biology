// چالاککردنی مۆشنەکان
AOS.init();

// دوگمەی دارک مۆد
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeBtn.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// سیستەمی وەرگێڕان
const translations = {
    ku: { ch1: "مۆرفۆلۆژیا", ch2: "فیسیۆلۆژیا", ch3: "تاقیگە", ch1Title: "مۆرفۆلۆژیای ڕوەک", dir: "rtl" },
    en: { ch1: "Morphology", ch2: "Physiology", ch3: "Lab", ch1Title: "Plant Morphology", dir: "ltr" },
    ar: { ch1: "المورفولوجيا", ch2: "الفسيولوجيا", ch3: "المختبر", ch1Title: "مورفولوجيا النبات", dir: "rtl" }
};

function changeLanguage() {
    const lang = document.getElementById('langSwitcher').value;
    const data = translations[lang];
    
    document.getElementById('mainHtml').dir = data.dir;
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if(data[key]) el.innerText = data[key];
    });
}
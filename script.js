// چالاککردنی مۆشنەکان
AOS.init({ duration: 1000, once: true });

// دوگمەی دارک مۆد
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeBtn.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// سیستەمی زمان
const translations = {
    ku: { title: "ئەتڵەسی پێشکەوتووی ڕوەک", ch1: "مۆرفۆلۆژیا", ch2: "فیسیۆلۆژیا", ch3: "تاقیگە", dir: "rtl" },
    en: { title: "Advanced Plant Atlas", ch1: "Morphology", ch2: "Physiology", ch3: "Laboratory", dir: "ltr" },
    ar: { title: "أطلس النبات المتقدم", ch1: "المورفولوجيا", ch2: "الفسيولوجيا", ch3: "المختبر", dir: "rtl" }
};

function changeLanguage() {
    const lang = document.getElementById('langSwitcher').value;
    const data = translations[lang];
    document.getElementById('mainHtml').dir = data.dir;
    document.getElementById('mainTitle').innerText = data.title;
    
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if(data[key]) el.innerText = data[key];
    });
}
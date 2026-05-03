// چالاککردنی ئەنیمەیشن
AOS.init();

// دارک مۆد
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    if(document.body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// سیستەمی وەرگێڕان
const translations = {
    ku: {
        title: "ئەتڵەسی زانستی ڕوەک",
        sub: "گەڕان لە قووڵایی فیسیۆلۆژیا و مۆرفۆلۆژیای ڕوەک",
        ch1: "مۆرفۆلۆژیا", ch2: "فیسیۆلۆژیا", ch3: "تاقیگە", ch4: "پۆلێنکردن",
        dir: "rtl"
    },
    ar: {
        title: "أطلس علم النبات",
        sub: "استكشاف في أعماق فسيولوجيا ومورفولوجيا النبات",
        ch1: "المورفولوجيا", ch2: "الفسيولوجيا", ch3: "المختبر", ch4: "التصنيف",
        dir: "rtl"
    },
    en: {
        title: "Scientific Plant Atlas",
        sub: "Exploring Physiology and Morphology of Plants",
        ch1: "Morphology", ch2: "Physiology", ch3: "Laboratory", ch4: "Taxonomy",
        dir: "ltr"
    }
};

function changeLanguage() {
    const lang = document.getElementById('langSwitcher').value;
    const data = translations[lang];
    
    document.getElementById('mainHtml').dir = data.dir;
    document.getElementById('mainTitle').innerText = data.title;
    document.getElementById('mainSub').innerText = data.sub;
    
    // نوێکردنەوەی ناوی چاپتەرەکان لە سایدبار
    document.querySelectorAll('.ch-text').forEach(el => {
        const key = el.getAttribute('data-key');
        el.innerText = data[key];
    });
}
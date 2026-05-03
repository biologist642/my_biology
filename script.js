// چالاککردنی مۆشن
AOS.init({ duration: 1000 });

// دارک مۆد
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// وەرگێڕان
const translations = {
    ku: { title: "ئەتڵەسی زانستی ڕوەک", ch1: "مۆرفۆلۆژیا", dir: "rtl" },
    en: { title: "Plant Science Atlas", ch1: "Morphology", dir: "ltr" },
    ar: { title: "أطلس علم النبات", ch1: "المورفولوجيا", dir: "rtl" }
};

function changeLanguage() {
    const lang = document.getElementById('langSwitcher').value;
    const data = translations[lang];
    document.getElementById('mainHtml').dir = data.dir;
    document.getElementById('mainTitle').innerText = data.title;
    // دەتوانیت هەموو ناوەکان لێرە بگۆڕیت
}
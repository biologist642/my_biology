AOS.init({
    duration: 900,
    once: true,
    easing: 'ease-out-cubic',
    offset: 80
});

const navbar = document.querySelector('.navbar');
const sideLinks = document.querySelectorAll('.side-link');
const sections = document.querySelectorAll('.chapter-card');

window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 40);

    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 140;
        if (window.scrollY >= top) current = section.getAttribute('id');
    });

    sideLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
}, { passive: true });

const themeBtn = document.getElementById('themeToggle');
themeBtn?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    const icon = themeBtn.querySelector('i');
    icon?.classList.toggle('fa-moon');
    icon?.classList.toggle('fa-sun');
});

const translations = {
    ku: {
        title: 'ئەتڵەسی پێشکەوتووی زانستی ڕوەک',
        sub: 'گەشتێک بۆ ناو جیهانی مۆرفۆلۆژیا، فیسیۆلۆژیا و تاقیگەی بایۆلۆجی',
        ch1: 'مۆرفۆلۆژیا',
        ch2: 'فیسیۆلۆژیا',
        ch3: 'تاقیگە',
        cell: 'خانەناسی',
        ch1Title: 'مۆرفۆلۆژیای ڕوەک',
        ch2Title: 'فیسیۆلۆژیا و وزە',
        ch3Title: 'تاقیگەی کرداری',
        mediaLabel: 'وێنەی مۆرفۆلۆژیا',
        viewImage: 'بینینی گەورە',
        clickZoom: 'کلیک بکە بۆ گەورەکردن',
        imageCaption: 'نموونەی گەڵا و پێکهاتەی ڕەگی ڕوەک لە ژێر میکرۆسکۆپ',
        lightboxTitle: 'مۆرفۆلۆژیای ڕوەک',
        dir: 'rtl'
    },
    en: {
        title: 'Advanced Plant Science Atlas',
        sub: 'A journey through morphology, physiology, and biology laboratory',
        ch1: 'Morphology',
        ch2: 'Physiology',
        ch3: 'Laboratory',
        cell: 'Cytology',
        ch1Title: 'Plant Morphology',
        ch2Title: 'Physiology & Energy',
        ch3Title: 'Practical Laboratory',
        mediaLabel: 'Morphology Image',
        viewImage: 'View Full Size',
        clickZoom: 'Click to enlarge',
        imageCaption: 'Example of leaf and root structure under study',
        lightboxTitle: 'Plant Morphology',
        dir: 'ltr'
    },
    ar: {
        title: 'أطلس علوم النبات المتقدم',
        sub: 'رحلة في عالم المورفولوجيا والفسيولوجيا ومختبر الأحياء',
        ch1: 'المورفولوجيا',
        ch2: 'الفسيولوجيا',
        ch3: 'المختبر',
        cell: 'علم الخلية',
        ch1Title: 'مورفولوجيا النبات',
        ch2Title: 'الفسيولوجيا والطاقة',
        ch3Title: 'المختبر العملي',
        mediaLabel: 'صورة المورفولوجيا',
        viewImage: 'عرض بالحجم الكامل',
        clickZoom: 'انقر للتكبير',
        imageCaption: 'مثال على بنية الأوراق والجذور تحت الدراسة',
        lightboxTitle: 'مورفولوجيا النبات',
        dir: 'rtl'
    }
};

function changeLanguage() {
    const lang = document.getElementById('langSwitcher').value;
    const data = translations[lang];
    if (!data) return;

    document.getElementById('mainHtml').dir = data.dir;
    document.getElementById('mainTitle').innerText = data.title;
    const sub = document.getElementById('mainSub');
    if (sub && data.sub) sub.innerText = data.sub;

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (data[key]) el.innerText = data[key];
    });
}

const lightbox = document.getElementById('imageLightbox');
const lightboxImg = document.getElementById('lightboxImg');
const ch1Preview = document.getElementById('ch1PreviewImg');
const openLightboxBtn = document.getElementById('openLightbox');
const ch1ImageTrigger = document.getElementById('ch1ImageTrigger');
const closeLightboxBtn = document.getElementById('closeLightbox');
const lightboxBackdrop = document.getElementById('lightboxBackdrop');

function openImageLightbox() {
    if (!lightbox || !ch1Preview || !lightboxImg) return;
    const fullSrc = ch1Preview.dataset.full || ch1Preview.src;
    lightboxImg.src = fullSrc;
    lightboxImg.alt = ch1Preview.alt;
    lightbox.removeAttribute('hidden');
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
}

function closeImageLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('hidden', '');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    if (lightboxImg) lightboxImg.src = '';
}

openLightboxBtn?.addEventListener('click', e => { e.stopPropagation(); openImageLightbox(); });
ch1ImageTrigger?.addEventListener('click', openImageLightbox);
closeLightboxBtn?.addEventListener('click', closeImageLightbox);
lightboxBackdrop?.addEventListener('click', closeImageLightbox);

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox?.classList.contains('is-open')) {
        closeImageLightbox();
    }
});

sideLinks.forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (!href?.startsWith('#')) return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offset = 100;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});
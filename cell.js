const translations = {
    ku: {
        title: "زانستی خانەناسی", sub: "گەشتێک بۆ ناو جیهانی مایکرۆسکۆپی",
        aboutT: "خانە چییە؟", aboutD: "خانە بچووکترین یەکەی پەیکەری و فرمانییە لە هەموو زیندەوەراندا.",
        p1t: "ناوک", p1d: "ناوەندی زانیارییە و دی ئێن ئەی تێدایە.",
        p2t: "مایتۆکۆندریا", p2d: "وزەی پێویست بۆ چالاکییەکان بەرهەم دەهێنێت.",
        p3t: "پەردەی خانە", p3d: "پارێزگاری لە خانە دەکات و هاتووچۆ ڕێکدەخات.",
        v: "ڤیدیۆی فێرکاری", dir: "rtl"
    },
    ar: {
        title: "علم الأحياء الخلوي", sub: "رحلة إلى العالم المجهري",
        aboutT: "ما هي الخلية؟", aboutD: "الخلية هي أصغر وحدة هيكلية ووظيفية في جميع الكائنات الحية.",
        p1t: "النواة", p1d: "مركز المعلومات وتحتوي على الحمض النووي (DNA).",
        p2t: "الميتوكوندريا", p2d: "تنتج الطاقة اللازمة للأنشطة الحيوية.",
        p3t: "غشاء الخلية", p3d: "يحمي الخلية وينظم حركة المواد.",
        v: "فيديو تعليمي", dir: "rtl"
    },
    en: {
        title: "Cell Biology", sub: "A journey into the microscopic world",
        aboutT: "What is a Cell?", aboutD: "The cell is the smallest structural and functional unit in all living organisms.",
        p1t: "Nucleus", p1d: "The control center containing DNA.",
        p2t: "Mitochondria", p2d: "Produces energy (ATP) for cellular activities.",
        p3t: "Cell Membrane", p3d: "Protects the cell and regulates transport.",
        v: "Educational Video", dir: "ltr"
    }
};

function updateLang(lang) {
    const t = translations[lang];
    document.documentElement.dir = t.dir;
    document.getElementById('c-title').innerText = t.title;
    document.getElementById('c-sub').innerText = t.sub;
    document.getElementById('about-t').innerText = t.aboutT;
    document.getElementById('about-d').innerText = t.aboutD;
    document.getElementById('p1-t').innerText = t.p1t;
    document.getElementById('p1-d').innerText = t.p1d;
    document.getElementById('p2-t').innerText = t.p2t;
    document.getElementById('p2-d').innerText = t.p2d;
    document.getElementById('p3-t').innerText = t.p3t;
    document.getElementById('p3-d').innerText = t.p3d;
    document.getElementById('v-title').innerText = t.v;
}

// Scroll Reveal Logic
window.addEventListener('scroll', () => {
    document.querySelectorAll('.reveal').forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 50) el.classList.add('active');
    });
});
window.dispatchEvent(new Event('scroll'));
<!DOCTYPE html>
<html lang="ku" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BioQuest | خانەناسی</title>
    <link href="https://cdn.jsdelivr.net/gh/rastikurd/kurdit-fonts@main/Rabar/font.css" rel="stylesheet">
    <link rel="stylesheet" href="cell.css">
</head>
<body class="cell-page">

    <nav class="lang-bar">
        <div class="btns">
            <button onclick="updateLang('ku')">Kurdî</button>
            <button onclick="updateLang('ar')">عربي</button>
            <button onclick="updateLang('en')">English</button>
        </div>
        <a href="index.html" class="home-icon">🏠</a>
    </nav>

    <main class="cell-container">
        <header class="cell-header reveal">
            <h1 id="c-title">زانستی خانەناسی</h1>
            <p id="c-sub">گەشتێک بۆ ناو جیهانی مایکرۆسکۆپی</p>
        </header>

        <section class="glass-info reveal">
            <h2 id="about-t">خانە چییە؟</h2>
            <p id="about-d">خانە بچووکترین یەکەی پەیکەری و فرمانییە لە هەموو زیندەوەراندا. هەموو چالاکییە کیمیاییەکانی ژیان لە ناو ئەم جیهانە بچووکەدا ڕوودەدەن.</p>
        </section>

        <div class="cards-grid">
            <div class="card reveal" style="--d: 0.2s">
                <div class="icon">🧬</div>
                <h3 id="p1-t">ناوک</h3>
                <p id="p1-d">ناوەندی زانیارییە و دی ئێن ئەی (DNA) تێدایە.</p>
            </div>
            <div class="card reveal" style="--d: 0.4s">
                <div class="icon">⚡</div>
                <h3 id="p2-t">مایتۆکۆندریا</h3>
                <p id="p2-d">وزەی پێویست (ATP) بۆ چالاکییەکان بەرهەم دەهێنێت.</p>
            </div>
            <div class="card reveal" style="--d: 0.6s">
                <div class="icon">🛡️</div>
                <h3 id="p3-t">پەردەی خانە</h3>
                <p id="p3-d">پارێزگاری لە خانە دەکات و هاتووچۆ ڕێکدەخات.</p>
            </div>
        </div>

        <section class="video-section reveal">
            <h2 id="v-title">ڤیدیۆی فێرکاری</h2>
            <div class="vid-wrap">
                <iframe src="https://www.youtube.com/embed/8IlzKri08kk" allowfullscreen></iframe>
            </div>
        </section>
    </main>

    <script src="cell.js"></script>
</body>
</html>
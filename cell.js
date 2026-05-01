/* Variables */
:root {
    --header-green: #1b5e20; /* سەوزی تۆخ بۆ لایت مۆد */
    --accent-green: #2ecc71;
    --text-color: #2c3e50;
    --transition: all 0.5s ease-in-out;
}

body {
    margin: 0; font-family: 'Rabar', sans-serif;
    transition: var(--transition);
    background-color: #f8faf9;
}

/* Theme Modes */
body.dark-mode { background-color: #0d1117; color: #e6edf3; }
body.dark-mode .intro-card .glass-effect { background: #161b22; color: white; }
body.dark-mode .part-item { background: #21262d; }

/* Responsive Top Bar */
.top-bar {
    display: flex; justify-content: space-between; padding: 10px 5%;
    background: rgba(255,255,255,0.8); backdrop-filter: blur(10px);
    position: sticky; top: 0; z-index: 100;
}

/* Header with 3D */
.cell-hero {
    height: 45vh; background: var(--header-green);
    position: relative; overflow: hidden;
    display: flex; align-items: center; justify-content: center;
}

#canvas-container {
    position: absolute; width: 100%; height: 100%; opacity: 0.2; /* کاڵکراوەتەوە */
}

.hero-info { text-align: center; color: white; z-index: 5; }
.back-link { color: var(--accent-green); text-decoration: none; font-weight: bold; }

/* Main Content & Cards */
.container { max-width: 1000px; margin: 0 auto; padding: 20px; }

.intro-card .glass-effect {
    background: white; padding: 40px; border-radius: 25px;
    margin-top: -60px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    text-align: center;
}

.main-img { width: 100%; max-width: 600px; border-radius: 20px; margin-top: 20px; transition: 0.4s; }
.main-img:hover { transform: scale(1.02); }

/* Grid for Parts */
.parts-container {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px; margin-top: 40px;
}

.part-item {
    background: white; padding: 30px; border-radius: 20px;
    text-align: center; transition: var(--transition);
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.part-item:hover { transform: translateY(-10px); background: var(--accent-green); color: white; }
.part-item .icon { font-size: 2.5rem; display: block; margin-bottom: 10px; }

/* Scroll Reveal Animation */
.reveal { opacity: 0; transform: translateY(30px); transition: 0.8s ease-out; }
.reveal.active { opacity: 1; transform: translateY(0); }

/* Footer */
.mini-footer {
    background: var(--header-green); color: white;
    text-align: center; padding: 20px; margin-top: 50px; font-size: 0.85rem;
}

.green-text { color: var(--accent-green); font-weight: bold; }

/* Tablet & Mobile */
@media (max-width: 768px) {
    .hero-info h1 { font-size: 1.8rem; }
    .intro-card .glass-effect { padding: 20px; margin-top: -30px; }
    .top-bar { flex-direction: column; gap: 10px; text-align: center; }
}
window.addEventListener('load', function() {
    setTimeout(function() {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('fade-out');
        }
    }, 3000); // ٣ چرکە بۆ بەخێرهاتن
});
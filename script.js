window.addEventListener('load', function() {
    // دوای ٣ چرکە لاپەڕەی بەخێرهاتنەکە ون دەبێت
    setTimeout(function() {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('fade-out');
        }
    }, 3000);
});
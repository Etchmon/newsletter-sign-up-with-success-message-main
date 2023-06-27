window.addEventListener('DOMContentLoaded', function () {
    var img = document.getElementById('img');
    if (this.window.matchMedia('(min-width:1440px').matches) {
        img.src = "./assets/images/illustration-sign-up-desktop.svg"
    }
    else {
        img.src = "./assets/images/illustration-sign-up-mobile.svg"
    }
});
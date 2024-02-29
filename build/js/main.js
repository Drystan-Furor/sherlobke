'use strict';
window.sherlobke = window.sherlobke || {};
sherlobke = {
    main: {}
}

sherlobke.main.initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);

    const copyButton = document.getElementById('copyButton');
    sherlobke.main.copyButton(copyButton);
}

sherlobke.main.copyButton = function (copyButton) {
    copyButton.addEventListener('click', function () {
        sherlobke.main.copyToClipboard();
    });
}

sherlobke.main.copyToClipboard = function () {
    let string = "Arnhemseweg 34\n3832GM\nLeusden";
    navigator.clipboard.writeText(string).then(function () {
        console.log('copied to clipboard!');
    }).catch(function (err) {
        console.error('Unable to copy text', err);
    });
}

document.addEventListener('DOMContentLoaded', sherlobke.main.initApp);

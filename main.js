// ==UserScript==
// @name        Movie-web autoplay
// @namespace   Violentmonkey Scripts
// @match       https://movie-web.app/*
// @grant       none
// @version     1.0
// @author      ilovethensa
// @description Autoplay for movie-web
// ==/UserScript==
(function() {
    'use strict';

    function clickElementIfVisible() {
        // Replace the following selector with your specific element selector
        const elementSelector = '.font-bold.rounded.h-10.w-40.scale-95.hover\\:scale-100.transition-all.duration-200.bg-buttons-primary.hover\\:bg-buttons-primaryHover.text-buttons-primaryText.flex.justify-center.items-center';

        const element = document.querySelector(elementSelector);

        if (element && isElementVisible(element)) {
            element.click();
        }
    }

    function isElementVisible(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Initial check and click
    clickElementIfVisible();

    // Set interval to check every 5 seconds
    setInterval(clickElementIfVisible, 5000);
})();

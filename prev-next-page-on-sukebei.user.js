// ==UserScript==
// @name        Prev/Next Page on Sukebei
// @namespace   https://github.com/gslin/prev-next-page-on-sukebei
// @match       https://sukebei.nyaa.si/*
// @grant       none
// @version     0.20210905.0
// @author      Gea-Suan Lin <gslin@gslin.com>
// @description Allow users to use keyboard to navigate on sukebei
// @license     MIT
// ==/UserScript==

(() => {
    'use strict';

    const next = document.querySelector('a[rel="next"]');
    const prev = document.querySelector('a[rel="prev"]');

    document.addEventListener('keyup', function(event) {
        const t = document.activeElement.tagName.toLowerCase();
        if (['input', 'textarea'].indexOf(t) !== -1) {
            return;
        }

        if ('<' === event.key && prev) {
            prev.click();
        }

        if ('>' === event.key && next) {
            next.click();
        }
    });
})();

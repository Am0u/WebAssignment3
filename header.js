// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

document.addEventListener('DOMContentLoaded', () => {
    var CSbody = document.querySelector("body");
    const CSnavbarMenu = document.querySelector("#cs-navigation");
    const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

    if (CShamburgerMenu) {
        CShamburgerMenu.addEventListener('click', function() {
            CShamburgerMenu.classList.toggle("cs-active");
            CSnavbarMenu.classList.toggle("cs-active");
            CSbody.classList.toggle("cs-open");
            ariaExpanded();
        });
    } else {
        console.error("CShamburgerMenu element not found in the DOM.");
    }

    function ariaExpanded() {
        const csUL = document.querySelector('#cs-expanded');
        if (csUL) {
            const csExpanded = csUL.getAttribute('aria-expanded');
            csUL.setAttribute('aria-expanded', csExpanded === 'false' ? 'true' : 'false');
        } else {
            console.error("csUL element not found in the DOM.");
        }
    }

    document.addEventListener('scroll', () => {
        const scroll = document.documentElement.scrollTop;
        if (scroll >= 100) {
            CSbody.classList.add('scroll');
        } else {
            CSbody.classList.remove('scroll');
        }
    });

    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        item.addEventListener('click', () => {
            item.classList.toggle('cs-active');
        });
    }
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll
// animations with the navbar

document.addEventListener('scroll', (e) => {
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
        document.querySelector('body').classList.add('scroll')
    } else {
        document.querySelector('body').classList.remove('scroll')
    }
});


// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
    const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
}

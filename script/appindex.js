// Navigation
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showMenu = false;
    }
}

// Avatar
const moveSpeed = 30;
const avatar = document.getElementById('avatar');

let leftOffset = 0;
let rightOffset = 0;

function moveAvatar() {
    leftOffset = (leftOffset + moveSpeed / 60) % 360;
    rightOffset = (rightOffset - moveSpeed / 60) % 360;

    avatar.style.transform = `perspective(500px) rotateY(${leftOffset}deg) rotateY(180deg) translateZ(0)
                               perspective(500px) rotateY(${rightOffset}deg) rotateY(180deg) translateZ(0)`;

    requestAnimationFrame(moveAvatar);
}

// Die Bewegung des Wortes
function resetAnimation() {
    const spans = document.querySelectorAll('.home_section.section1_name span');
    spans.forEach(span => {
        span.classList.remove('fadeMove');
    });
}

function animateText() {
    resetAnimation();
    const textTag = document.querySelector('.home_section.section1_name');
    const text = textTag.textContent;

    const splittedText = text.split('');
    textTag.innerHTML = '';

    splittedText.forEach(char => {
        if (char === " ") {
            char = "&nbsp;";
        }
        textTag.innerHTML += `<span>${char}</span>`;
    });

    let k = 0;
    const interval = setInterval(() => {
        const spans = textTag.querySelectorAll('span');
        const singleSpan = spans[k];

        if (singleSpan) {
            singleSpan.classList.add('fadeMove');
        }

        k++;

        if (k === spans.length) {
            clearInterval(interval);
        }
    }, 60);
}

// Text Content
const contentGerman = {
    titlee: "Das ist mein Portfolio",
    title: "Mein Portfolio",
    content: "Dies ist mein Portfolio auf Deutsch.",
    button: "Wechsel zu Englisch",
    welcome: "Wilkommen! Mein Name ist",
    name: "Viktor Jancic",
    profession: "Web-Entwickler, Designer & Programmers",
    menuItems: ["Home", "Meine Erfahrung", "Meine Projekte", "Kontakt"]
};

const contentEnglish = {
    titlee: "This is my Portfolio",
    title: "My Portfolio",
    content: "This is my portfolio in English.",
    button: "Switch to German",
    welcome: "Welcome! My name is",
    name: "Viktor Jancic",
    profession: "Web Developer, Designer & Programmer",
    menuItems: ["Home", "My Experience", "My Projects", "Contact"]
};

// Finde Elemente im HTML
const titleeElement = document.getElementById('titlee');
const titleElement = document.getElementById('title');
const contentElement = document.getElementById('content');
const buttonElement = document.getElementById('languageSwitch');
const welcomeElement = document.querySelector('main h2');
const nameElement = document.querySelector('.home_section.section1_name');
const professionElement = document.querySelector('main h2:nth-of-type(2)');
const menuItems = document.querySelectorAll('.menu-nav__item a');

// "Funktion zur Einstellung der Sprache
function setLanguage(lang) {
    const content = lang === 'en' ? contentEnglish : contentGerman;

    titleeElement.textContent = content.titlee;
    titleElement.textContent = content.title;
    contentElement.textContent = content.content;
    buttonElement.textContent = content.button;
    welcomeElement.textContent = content.welcome;
    nameElement.innerHTML = `Viktor <span class="home_name-last">Jancic</span>`;
    professionElement.textContent = content.profession;

    menuItems.forEach((item, index) => {
        item.textContent = content.menuItems[index];
    });

    // Animation nach dem Sprachwechsel neu starten
    animateText();

    // Animation nach dem Sprachwechsel neu starten
    applyGlowEffect();

    // Postavi jezik u `localStorage`
    localStorage.setItem('language', lang);
}

// Funktion zur Anwendung des Glow-Effekts
function applyGlowEffect() {
    
    let textTags = document.querySelectorAll(' .glow-text');

    textTags.forEach(textTag => {
        let text = textTag.textContent;
        let splittedText = text.split('');
        textTag.innerHTML = '';

        for (let i = 0; i < splittedText.length; i++) {
            if (splittedText[i] === " ") {
                splittedText[i] = "&nbsp;";
            }
            textTag.innerHTML += `<span>${splittedText[i]}</span>`;
        }

        let k = 0;
        let direction = 1;
        let spans = textTag.querySelectorAll('span');

        setInterval(() => {
            spans.forEach(span => span.classList.remove('glow'));

            let singleSpan = spans[k];
            singleSpan.classList.add('glow');

            k += direction;

            if (k === spans.length || k < 0) {
                direction *= -1;
                k += direction;
            }
        }, 100);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'de'; 
    setLanguage(savedLanguage);

    animateText();

    moveAvatar();

    applyGlowEffect();

    buttonElement.addEventListener('click', () => {
        const currentLanguage = localStorage.getItem('language') || 'de';
        const newLanguage = currentLanguage === 'de' ? 'en' : 'de';
        setLanguage(newLanguage);
    });

    menuBtn.addEventListener('click', toggleMenu);
});
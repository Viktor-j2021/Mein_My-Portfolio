const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

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

const contentGerman = {
    title: "Meine Projekte",
    title1: "Mein Portfolio",
    content: "Dies ist mein Portfolio auf Deutsch.",
    button: "Wechsel zu Englisch",
    projektTitle: "Meine Projekte",
    projekt_text: "Vorschauprojekt",
    projekt_text1: "Vorschauprojekt",
    projekt_text2: "Vorschauprojekt",
    menuItems: ["Home", "Meine Erfahrung", "Meine Projekte", "Kontakt"]
};

const contentEnglish = {
    title: "My Projects",
    title1: "My Portfolio",
    content: "This is my portfolio in English.",
    button: "Switch to German",
    projektTitle: "My Projects",
    projekt_text: "Preview project",
    projekt_text1: "Preview project",
    projekt_text2: "Preview project",
    menuItems: ["Home", "My Experience", "My Projects", "Contact"]
};

const titleElement = document.querySelector('title');
const title1Element = document.getElementById('title');
const contentElement = document.getElementById('content');
const buttonElement = document.getElementById('languageSwitch');
const projektTitleElement = document.querySelector('.text-secondary');
const projektTextElements = document.querySelectorAll('[data-translate^="projekt_text"]');
const menuItems = document.querySelectorAll('.menu-nav__item a');

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'de'; // 'de' je podrazumevani jezik
    setLanguage(savedLanguage);
});

function setLanguage(lang) {
    const content = lang === 'en' ? contentEnglish : contentGerman;

    titleElement.textContent = content.title;
    title1Element.textContent = content.title1;
    contentElement.textContent = content.content;
    buttonElement.textContent = content.button;
    projektTitleElement.textContent = content.projektTitle;

    projektTextElements.forEach((element, index) => {
        element.textContent = content[`projekt_text${index}`] || content.projekt_text;
    });

    menuItems.forEach((item, index) => {
        item.textContent = content.menuItems[index];
    });

    localStorage.setItem('language', lang);

    applyGlowEffect(); 
}

buttonElement.addEventListener('click', () => {
    const currentLanguage = localStorage.getItem('language') || 'de'; 
    const newLanguage = currentLanguage === 'de' ? 'en' : 'de'; 
    setLanguage(newLanguage);
});

function applyGlowEffect() {
    let textTags = document.querySelectorAll('.text-secondary, .glow-text');

    textTags.forEach(textTag => {
        let text = textTag.textContent;
        let splittedText = text.split('');
        textTag.innerHTML = '';

        splittedText.forEach(char => {
            if (char === " ") {
                char = "&nbsp;";
            }
            textTag.innerHTML += `<span>${char}</span>`;
        });

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
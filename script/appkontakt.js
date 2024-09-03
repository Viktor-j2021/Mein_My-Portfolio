// Definiere Texte auf Deutsch und Englisch
const contentGerman = {
    title: "Kontaktdaten",
    title1: "Mein Portfolio",
    content: "Dies ist mein Portfolio auf Deutsch.",
    button: "Wechsel zu Englisch",
    projektTitle: "Sie können mich kontaktieren unter :",
    menuItems: ["Home", "Meine Erfahrung", "Meine Projekte", "Kontakt"]
};

const contentEnglish = {
    title: "Contact Information",
    title1: "My Portfolio",
    content: "This is my portfolio in English.",
    button: "Switch to German",
    projektTitle: "You can contact me at :",
    menuItems: ["Home", "My Experience", "My Projects", "Contact"]
};

// Finde Elemente im HTML
const titleElement = document.querySelector('title');
const title1Element = document.getElementById('title');
const contentElement = document.getElementById('content');
const buttonElement = document.getElementById('languageSwitch');
const projektTitleElement = document.getElementById('projektTitle'); // Izmenjen selektor
const menuItems = document.querySelectorAll('.menu-nav__item a');

// Funktion zur Anwendung des Glow-Effekts
function applyGlowEffect() {
    let textTags = document.querySelectorAll('.text-secondary, .glow-text');

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

//  Funktion zur Einstellung der Sprache
function setLanguage(lang) {
    const content = lang === 'en' ? contentEnglish : contentGerman;

    titleElement.textContent = content.title;

    title1Element.textContent = content.title1;
    contentElement.textContent = content.content;
    buttonElement.textContent = content.button;
    projektTitleElement.textContent = content.projektTitle;

    menuItems.forEach((item, index) => {
        item.textContent = content.menuItems[index];
    });

    localStorage.setItem('language', lang);

    applyGlowEffect();
}

  // Navigation
  const menuBtn = document.querySelector('.menu-btn');
  const hamburger = document.querySelector('.menu-btn__burger');
  const nav = document.querySelector('.nav');
  const menuNav = document.querySelector('.menu-nav');
  const navItems = document.querySelectorAll('.menu-nav__item');
  console.log(menuBtn, hamburger, nav, menuNav, navItems); 

  let showMenu = false;

  menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    console.log('toggleMenu funkcija je pozvana');
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

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'de'; 
    setLanguage(savedLanguage);

    // Füge einen Event-Listener für den Sprachwechsel hinzu
    buttonElement.addEventListener('click', () => {
        const currentLanguage = localStorage.getItem('language') || 'de'; 
        const newLanguage = currentLanguage === 'de' ? 'en' : 'de';
        setLanguage(newLanguage);
    });

  

    // Wende den Glow-Effekt auf der geladenen Seite an
    applyGlowEffect();
});

let rightButton = document.querySelector('#right-btn');
let leftButton = document.querySelector('#left-btn');
let picture = document.querySelectorAll('.slider-images img');


let imgNummer = 0;


// Funkcija desnog dugmeta

const moveRight = () => {
    displayNo();

    imgNummer++;

    if (imgNummer === picture.length) {
        imgNummer = 0;
    }

    picture[imgNummer].style.display = ' block';

}
// Klik strelice za desno
rightButton.addEventListener('click', moveRight);



// Funkcija levog dugmeta

const moveLeft = () => {

    displayNo();

    imgNummer--;

    if (imgNummer === -1) {
        imgNummer = picture.length - 1;
    }

    picture[imgNummer].style.display = ' block';

}
// Klik strelice za levo
leftButton.addEventListener('click', moveLeft);


//Funkcija za sakrivanje slika
const displayNo = () => {
    picture.forEach((img) => {
        img.style.display = 'none';
    })
}

// Sadržaj na nemačkom jeziku
const contentGerman = {
    title: "Einfache Fotogalerie mit Flutter",
    beschreibung: "Fotogalerie mit Flutter",
    beschreibung_title: "Titel der Beschreibung",
    content: `
       Auf dem ersten Bild der Fotogalerie haben wir eine Galerie mit einem Hintergrundbild, auf dem drei
            verschiedene Bilder angezeigt werden. Wenn man auf eines der Bilder klickt, wird es im Vollbildmodus
            angezeigt.
            <br><br>
            Auf dem zweiten Bild sehen wir ein Bild im Vollbildmodus. Hier gibt es Pfeile, mit denen man die Bilder nach
            links oder rechts scrollen kann, ohne den Vollbildmodus verlassen zu müssen. So kann man direkt aus dem
            Vollbildmodus heraus zu einem anderen Bild wechseln, wie auf dem zweiten und dritten Bild zu sehen ist.
            <br><br>
            Wenn man im Vollbildmodus doppelt schnell auf das Bild klickt, wird es weiter herangezoomt, und beim
            nächsten doppelten Klick wird es wieder verkleinert.
            <br><br>
            Dieses Projekt wurde mit Flutter entwickelt.
  `,
    button: "Wechsel zu Englisch"
};

// Sadržaj na engleskom jeziku
const contentEnglish = {
    title: "Simple Photo Gallery with Flutter",
    beschreibung: "Photo Gallery with Flutter",
    beschreibung_title: "Title of Description",
    content: `
        In the first image of the photo gallery, we have a gallery with a background image displaying three different pictures.
            When you click on one of the pictures, it is shown in fullscreen mode.
            <br><br>
            In the second image, we see a picture in fullscreen mode. There are arrows that allow you to scroll the pictures left or
            right without having to exit fullscreen mode. This way, you can switch to another picture directly from fullscreen mode,
            as shown in the second and third images.
            <br><br>
            When you double-click quickly on the picture in fullscreen mode, it zooms in further, and on the next double-click, it
            zooms out again.
            <br><br>
            This project was developed with Flutter.
  `,
    button: "Switch to German"
};

// Selektovanje elemenata
const titleElement = document.querySelector('title');
const beschreibungElement = document.querySelector('.beschreibung');
const beschreibung_titleElement = document.querySelector('.beschreibung_title');

const contentElement = document.querySelector('.slider-text p');
const buttonElement = document.getElementById('languageSwitch');

// Inicijalno postavljanje jezika na osnovu sačuvanog u localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'de'; // Podrazumevano na nemački
    setLanguage(savedLanguage);
});

// Funkcija za postavljanje jezika
function setLanguage(lang) {
    const content = lang === 'en' ? contentEnglish : contentGerman;

    titleElement.textContent = content.title;
    beschreibungElement.textContent = content.beschreibung;
    beschreibung_titleElement.textContent = content.beschreibung_title;

    contentElement.innerHTML = content.content;
    buttonElement.textContent = content.button;

    // Čuvanje izabranog jezika u localStorage
    localStorage.setItem('language', lang);
}

// Dodavanje event listener-a za promenu jezika klikom na dugme
buttonElement.addEventListener('click', () => {
    const currentLanguage = localStorage.getItem('language') || 'de';
    const newLanguage = currentLanguage === 'de' ? 'en' : 'de';
    setLanguage(newLanguage);
});

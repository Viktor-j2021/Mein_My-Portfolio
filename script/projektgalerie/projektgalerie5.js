
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
    title: "Mein Vue3_Cli-Projekt 3D",
    beschreibung: "Darstellung eines 3D-Modells",
    beschreibung_title: "Titel der Beschreibung",
    content: `
           Auf dem ersten Bild sehen wir zwei 3D-Modelle. Wenn man auf eines von ihnen klickt, öffnet sich das Modell
            im Vollbildmodus, wo wir es rotieren können.
            <br><br>
            Auf dem zweiten Bild sehen wir das erste Modell, bei dem es einen separaten Hintergrund und ein rotierendes
            Modell gibt. Dies wird auf dem dritten Bild dargestellt, das zeigt, wie sich das 3D-Modell dreht.
            <br><br>
            Durch einen Klick auf das Home-3D-Modell kehren wir zurück zu unserer Startseite oder zum ersten Bild. Auf
            der Startseite gelangen wir durch einen Klick auf das zweite Bild zum zweiten 3D-Modell
            <br><br>
            Bei dem zweiten Bild haben wir einen anderen Hintergrund und ein rotierendes Modell sehen, was durch das
            fünfte Bild bestätigt wird. Die Modelle können durch Klicken und Halten der Maustaste bewegt und rotiert
            werden. Die Modelle können auch direkt gezoomt und rotiert werden..
            <br><br>
            Dieses Projekt wurde mit Vue3.js-CLI erstellt.
  `,
    button: "Wechsel zu Englisch"
};

// Sadržaj na engleskom jeziku
const contentEnglish = {
    title: "My Vue3_Cli-Project 3D",
    beschreibung: "Representation of a 3D-Model",
    beschreibung_title: "Title of Description",
    content: `
        In the first image, we see two 3D models. When you click on one of them, the model opens in full screen
            mode, where you can rotate it.
            <br><br>
            In the second image, we see the first model with a separate background and a rotating model. This is shown
            in the third image, which illustrates how the 3D model rotates.
            <br><br>
            By clicking on the Home 3D model, we return to our homepage or the first image. On the homepage, by clicking
            on the second image, we access the second 3D model.
            <br><br>
            In the second image, we have a different background and a rotating model, as confirmed by the fifth image.
            The models can be moved and rotated by clicking and holding the mouse button. The models can also be zoomed
            in and rotated directly.
            <br><br>
            This project was created with Vue3.js-CLI.
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

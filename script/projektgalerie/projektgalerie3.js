
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
    title: "Fortschrittliche Web-Apps React",
    beschreibung: "Stoppuhr",
    beschreibung_title: "Titel der Beschreibung",
    content: `
      Fortschrittliche Web-Apps React :
            <br><br>
            Die Anwendung "Stoppuhr" enthält folgende Funktionen :
            <br><br>
            Mit dem Button "Start" beginnt die Stoppuhr, die Zeit in Sekunden, Minuten und Stunden zu zählen.
            Mit dem Button "Stop" können Sie die Zeit anhalten. Wenn Sie die Zeit wieder aufnehmen möchten, klicken Sie
            erneut auf "Start" und die Zeit wird ab dem Moment fortgesetzt, an dem Sie die Stoppuhr angehalten haben.
            Wenn Sie die Zeit einfach zurücksetzen möchten, klicken Sie auf den Button "Reset" und die Zeit wird auf
            null zurückgesetzt. Beim nächsten Klick auf "Start" beginnt die Zeit wieder von Anfang an.
            <br><br>
            Diese Anwendung wurde mit Node.js, React.js und Sass entwickelt.
  `,
    button: "Wechsel zu Englisch"
};

// Sadržaj na engleskom jeziku
const contentEnglish = {
    title: "Progressive Web Apps React",
    beschreibung: "Stopwatch",
    beschreibung_title: "Title of Description",
    content: `
         Progressive Web Apps React: 
            <br><br>
            The "Stopwatch" application includes the following features :
            <br><br>
            With the "Start" button, the stopwatch begins to count time in seconds, minutes, and hours.
            With the "Stop" button, you can pause the time. If you want to resume the time, click "Start" again, and the time will continue from the moment you paused the stopwatch.
            If you simply want to reset the time, click the "Reset" button, and the time will be set back to zero. On the next click of "Start," the time will begin again from the beginning.
            <br><br>
            This application was developed using Node.js, React.js, and Sass.
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


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
    title: "Platform Video`s Hochladen",
    beschreibung: "Platform Video`s Hochladen",
    beschreibung_title: "Titel der Beschreibung",
    content: `
      Auf dem ersten Bild haben wir die Login-Plattform, wo man mithilfe einer Datenbank die korrekte
            E-Mail-Adresse und das Passwort eingeben muss. Andernfalls wird eine Fehlermeldung angezeigt, die genau
            beschreibt, was falsch ist. Darunter befinden sich zwei Links: einer zum Registrieren, falls man noch kein
            Konto hat, und ein weiterer, um das Passwort zu ändern..
            <br><br>
            Das zweite Bild zeigt die Registrierungsplattform, auf der man eine gültige E-Mail-Adresse, den Namen und
            ein Passwort mit Bestätigung eingeben muss. Wenn ein Fehler gemacht wird, informiert das System den Nutzer
            darüber, was genau falsch eingegeben wurde.
            <br><br>
            Das dritte Bild ist für die Passwortänderung. Hier muss man eine gültige E-Mail-Adresse eingeben und danach
            das neue Passwort bestätigen. Wenn die E-Mail-Adresse nicht korrekt ist oder die Passwörter nicht
            übereinstimmen, wird eine Fehlermeldung angezeigt.
            <br><br>
            Das vierte Bild zeigt die Plattform, auf der man Videos hochladen kann. In der Mitte wird der Benutzer mit
            Namen begrüßt, darunter befindet sich eine Schaltfläche, mit der man direkt die hochgeladenen Videos ansehen
            kann, und oben rechts gibt es eine Schaltfläche zum Ausloggen. Wenn man versucht, dasselbe Video erneut
            hochzuladen, wird eine Fehlermeldung angezeigt, dass das Video bereits existiert. Wenn man kein Video zum
            Hochladen ausgewählt hat, wird eine Fehlermeldung angezeigt, die darauf hinweist, dass ein Video zum
            Hochladen ausgewählt werden muss.
            <br><br>
            Kontakt als vierte Seite: Bild sechs zeigt, wo Sie die Firmenkontaktinformationen finden können, eine Karte,
            auf der Sie sie lokalisieren können, und Felder, in die Sie direkt eine Frage an das Unternehmen oder das,
            was Sie interessiert, stellen können. Durch Klicken auf die Schaltfläche wird die Nachricht direkt an die
            E-Mail des Unternehmens gesendet.
            <br><br>
            Das fünfte Bild zeigt die Übersicht der hochgeladenen Videos, inklusive der Zeit und des Monats, wann sie
            hochgeladen wurden. Es gibt zwei Schaltflächen zum Löschen eines Videos, wobei zunächst eine Bestätigung
            abgefragt wird, ob man das Video wirklich löschen möchte. Oben gibt es eine Schaltfläche, die einen direkt
            zur Plattform zurückführt, wo man ein Video hochladen kann.
            <br><br>
            Dieses Video wurde mit PHP,MySQL und SASS erstellt.
  `,
    button: "Wechsel zu Englisch"
};

// Sadržaj na engleskom jeziku
const contentEnglish = {
    title: "Upload videos to the platform",
    beschreibung: "Upload videos to the platform",
    beschreibung_title: "Title of Description",
    content: `
            In the first image, we have the login platform where you must enter the correct email address and password using a database. Otherwise, an error message will be displayed that specifically describes what is wrong. Below the login area, there are two links: one for registering if you do not have an account yet, and another to change your password.
            <br><br>
            The second image shows the registration platform, where you need to enter a valid email address, name, and password with confirmation. If a mistake is made, the system will inform the user about what was entered incorrectly.
            <br><br>
            The third image is for password changes. Here, you must enter a valid email address and then confirm the new password. If the email address is incorrect or the passwords do not match, an error message will be displayed.
            <br><br>
            The fourth image shows the platform where you can upload videos. In the middle, the user is greeted by name. Below, there is a button to view the uploaded videos directly, and in the upper right corner, there is a button to log out. If you try to upload the same video again, an error message will indicate that the video already exists. If no video is selected for upload, an error message will be displayed, indicating that a video must be selected for upload.
            <br><br>
            The contact as the fourth page: Image six shows where you can find the company contact information, a map to locate them, and fields where you can directly ask the company a question or anything else you are interested in. By clicking the button, the message is sent directly to the company's email.
            <br><br>
            The fifth image shows an overview of the uploaded videos, including the time and month they were uploaded. There are two buttons for deleting a video, first asking for confirmation if you really want to delete the video. At the top, there is a button that takes you directly back to the platform where you can upload a video.
            <br><br>
            This video was created using PHP,MySQL and SASS.
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

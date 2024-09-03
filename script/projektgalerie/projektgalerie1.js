
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
  title: "Animation_von_Partikeln",
  beschreibung: "Animation_von_Partikeln",
  beschreibung_title: "Titel der Beschreibung",
  content: `
      Auf der ersten Seite „Home“ haben wir eine Animation „Animation von Partikeln“, bei der sich die Sternchen
            von selbst bewegen und auch durch Klicken mit der Maus an jeder Position bewegt werden können.
            <br><br>
            Auf der zweiten Seite „Dienst“ bereiten wir eine Beschreibung der Tätigkeiten vor. In der Mitte des Bildes
            haben wir eine Beschreibung, zum Beispiel: Digitales Marketing, Social-Media-Marketing, Google Ads-Kampagnen,
            Webdesign, wo erklärt werden kann, welche Dienstleistungen Ihr Unternehmen anbietet.
            <br><br>
            Das dritte Bild auf derselben Seite hat eine Linie: Wenn man mit der Maus nach unten scrollt, bewegt sich
            die Linie nach rechts, und wenn man nach oben scrollt, bewegt sie sich nach links zurück und teilt so zwei
            separate Elemente. Schwarze Quadrate erscheinen, wenn Sie die Seite aktualisieren und nach unten scrollen.
            Das Quadrat, das hinter der Seite verborgen ist, ist unsichtbar, und ein Quadrat nach dem anderen erscheint
            langsam auf der Webseite und zentriert sich in der Mitte der Seite. Hier kann man auch eine kurze
            Beschreibung, Text, Bild hinzufügen.
            <br><br>
            Auf der dritten Seite Über uns, viertes Bild, habe ich ein Himmelsbild. Wenn man mit der Maus darüber fährt,
            bewegt es sich nach unten und kehrt selbständig nach oben zurück, bis es in der Mitte anhält. Fünftes Bild auf
            derselben Seite: In der Mitte des Bildes erscheint beim Überfahren mit der Maus ein textuelles Logo. Sechs
            Symbole bewegen sich, wenn man mit der Maus darüber fährt, und durch Klicken mit der Maus können wir zu
            einer Seite gelangen, auf der wir mehr über die Tätigkeit lesen können, die als Titel auf dem Symbol
            eingetragen ist.
            <br><br>
            Kontakt als vierte Seite: Bild sechs zeigt, wo Sie die Firmenkontaktinformationen finden können, eine Karte,
            auf der Sie sie lokalisieren können, und Felder, in die Sie direkt eine Frage an das Unternehmen oder das, was Sie interessiert, stellen können. Durch Klicken auf die Schaltfläche wird die Nachricht direkt an die E-Mail des Unternehmens gesendet.
            <br><br>
            Diese Seite wurde unter Verwendung von PHP, MySQL, JavaScript, SCSS und HTML erstellt.
  `,
  button: "Wechsel zu Englisch"
};

// Sadržaj na engleskom jeziku
const contentEnglish = {
  title: "Particle Animation",
  beschreibung: "Particle Animation",
  beschreibung_title: "Title of Description",
  content: `
          On the first page "Home", we have an animation called "Particle Animation", where the stars move on their own and can also be moved by clicking with the mouse at any position.
          <br><br>
          On the second page "Service", we provide a description of activities. In the middle of the image, we have a description, for example: Digital Marketing, Social Media Marketing, Google Ads campaigns, Web Design, where it can be explained what services your company offers.
          <br><br>
          The third image on the same page features a line: When you scroll down with the mouse, the line moves to the right, and when you scroll up, it moves back to the left, thus separating two distinct elements. Black squares appear when you refresh the page and scroll down. The square that is hidden behind the page is invisible, and one square after another appears slowly on the website and centers itself in the middle of the page. Here you can also add a short description, text, or image.
          <br><br>
          On the third page "About Us", the fourth image is a sky image. When you hover over it with the mouse, it moves down and then returns to the top by itself, stopping in the middle. The fifth image on the same page: In the middle of the image, a textual logo appears when you hover over it with the mouse. Six icons move when you hover over them, and by clicking on the icons, you can navigate to a page where you can read more about the activity listed in the icon’s title.
          <br><br>
          Contact as the fourth page: Image six shows where you can find the company's contact information, a map where you can locate them, and fields where you can directly ask a question to the company or inquire about what interests you. By clicking the button, the message is sent directly to the company's email.
          <br><br>
          This page was created using PHP, MySQL, JavaScript, SCSS, and HTML.
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

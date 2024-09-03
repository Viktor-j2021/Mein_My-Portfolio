

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.manu-nav__item');

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








document.addEventListener("DOMContentLoaded", () => {
    let translations = {
        en: {
            title: "My experiences",
            title1: "My Portfolio",
            content: "This is my portfolio in English.",
            menuHome: "Home",
            menuExperience: "My Experience",
            menuProjects: "My Projects",
            menuContact: "Contact",
            button: "Switch to German",
            bioTitle: "Biography",
            bioContent: "I started programming in 2021 because I was fascinated by its creative potential. Soon, I realized that web development is the field where I find myself best. Over the past 2.5 years, I have gained significant experience in programming, completed four courses, and continuously improved my knowledge and skills. Currently, I work with a wide range of technologies, including HTML, CSS, JavaScript, SCSS, Vue.js, Angular, as well as PHP and MySQL. My key skills include frontend and backend development, working with databases, and solving complex problems. I am passionate about continuously learning and improving my skills, and often research new technologies and tools to keep up with the latest trends in the industry. In my work, I strive to be thorough, analytical, and dedicated, always aiming to achieve the best possible result. My approach to work is characterized by attention to detail, systematic thinking, and openness to new ideas and methods. I believe that perseverance and continuous improvement are the keys to success, and I always aim to make a maximum contribution to every project I work on.",
            jobDate1: "December 2021 - April 2022",
            jobCompany1: "Campster - Certificate ID 187249",
            jobRole1: "Web Developer",
            certificate_text1: "Certificate",
            jobContent1: `During this course, I attended various programs covering the following areas:
                <br><br>
                <strong style="color: #ba62f1;">Essential Research Skills:</strong>
                This skill includes the ability to research and analyze relevant information on a specific topic. It involves learning how to use sources effectively, collect data, evaluate information, and document results.
                <br><br>
                <strong style="color: #ba62f1;">Creating Static Websites:</strong>
                Static websites consist of HTML and CSS and are ideal for content that changes infrequently. This involves learning how to structure and style content without complex backend logic.
                <br><br>
                <strong style="color: #ba62f1;">Applying Animations to Page Elements:</strong>
                Animations enhance the user experience by adding movements and transitions between different elements on a webpage. This involves learning how to implement CSS or JavaScript animations to make content more dynamic and engaging.
                <br><br>
                <strong style="color: #ba62f1;">Advanced Page Styling:</strong>
                This includes advanced techniques for designing webpages, such as using Flexbox, Grid layouts, Media Queries for different screen sizes, and integrating CSS preprocessors like SASS or LESS.
                <br><br>
                <strong style="color: #ba62f1;">Responsive Web Design:</strong>
                Responsive web design ensures that webpages look and function well on various devices and screen sizes. It involves learning how to adjust layouts and content to provide an optimal user experience on desktops, tablets, and smartphones.
                <br><br>
                <strong style="color: #ba62f1;">Creating Dynamic Websites:</strong>
                Dynamic websites use technologies like PHP, JavaScript, and AJAX to generate content based on user interactions or external data sources. This involves learning how to load dynamic content, process forms, and update content in real time.
                <br><br>
                <strong style="color: #ba62f1;">Working with a Database:</strong>
                This involves designing, creating, and managing a database using SQL or NoSQL to efficiently store, retrieve, and update data. It involves learning how to write database queries, manage indexes, and ensure data integrity.
                <br><br>
                <strong style="color: #ba62f1;">WordPress:</strong>
                WordPress is a popular Content Management System (CMS) for creating and managing websites. It involves learning how to install, configure, create and customize content, use plugins, and consider security aspects.
                <br><br>
                <strong style="color: #ba62f1;">Creating Themes in WordPress:</strong>
                WordPress themes determine the appearance and functionality of a website. It involves learning how to create a theme from scratch or customize an existing theme to design and tailor the appearance and behavior of the website according to specific requirements.
                <br><br>
                "These skills have given me a deep understanding and practical experience in creating modern websites. In the course, I acquired the ability to research and analyze, which helps me create content that is rich and relevant. I have also learned to design static and dynamic websites that are both stylish and functional, and optimized for all devices."
            `,


            jobDate2: "August 2022 - October 2022",
            jobCompany2: "ITOiP",
            jobRole2: "Frontend and Backend Developer",
            certificate_text2: "Certificate",
            jobContent2: `While taking my course in Full-Stack Development, my focus was on implementing robust systems for managing data and user sessions in web applications. Our work involved detailed:

<br><br>

<strong class="highlighted" style="color: #ba62f1;">Databases:</strong> We designed the database structure using modern MySQL approaches to enable efficient data storage as the foundation of the application. We mastered techniques in data modeling, relationship management, as well as efficient indexing and performance optimization.

<br><br>

<strong class="highlighted" style="color: #ba62f1;">User Management:</strong> We implemented a system for authentication and authorization that allowed secure access to the application. We learned how to efficiently manage user accounts, including features such as registration, login, logout, and management of user rights.

<br><br>

<strong class="highlighted" style="color: #ba62f1;">User Sessions:</strong> We developed mechanisms to manage user sessions, which is crucial for the security and context of users during their interaction with the application. This includes tracking user activities, securely storing session data, and automatically terminating sessions to protect user data.

<br><br>

<strong class="highlighted" style="color: #ba62f1;">Application Management:</strong> We developed intuitive administration panels to manage the application and its content efficiently. This includes monitoring users, content, statistics, and application settings to ensure that administrators have all the necessary tools to successfully run the application.

<br><br>

This holistic approach helped me understand the deeper layers of full-stack development, from database design to the implementation of secure and efficient systems for user management and application administration.`,


            jobDate3: "December 2022 - March 2023",
            jobCompany3: "SGD Leading Distance Learning School - Certificate ID 1084429",
            jobRole3: "Web Coding",
            certificate_text3: "Certificate",
            jobContent3: `Developing websites with HTML, CSS, PHP, and databases involves a variety of important skills and concepts. Here is a detailed description of each of these segments:

<br><br>

<strong style="color: #ba62f1;">Website Development with HTML:</strong>
Our focus was on building website structures with HTML, the fundamental language for creating all web content. We learned how to use semantically correct HTML to structure content on websites, including the use of tags for text, images, links, and forms.

<br><br>

<strong style="color: #ba62f1;">Cascading Style Sheets (CSS):</strong>
We delved into how to design and style websites with CSS, a language that allows the definition of the appearance and presentation of HTML elements. We acquired skills to apply colors, fonts, element positioning, as well as CSS animations and transitions to enhance the user experience.

<br><br>

<strong style="color: #ba62f1;">Basics of Programming with PHP:</strong>
We covered the basics of PHP, a server-side language that enables dynamic content generation on websites. We learned how to use variables, functions, conditional structures, and loops to create interactive web elements.

<br><br>

<strong style="color: #ba62f1;">Object-Oriented PHP:</strong>
We explored object-oriented programming (OOP) concepts in PHP, which allows for organizing code through objects and classes. We implemented inheritance, encapsulation, and polymorphism to improve the structure and reusability of our code.

<br><br>

<strong style="color: #ba62f1;">PHP and Databases:</strong>
We learned how to integrate PHP with databases to manage data efficiently on websites. We familiarized ourselves with using SQL to create, read, update, and delete data. We developed skills to connect PHP scripts with MySQL or other database management systems to facilitate interaction with user data through web applications.

<br><br>

This integration of different technologies has enabled me to understand the complexity of web development, from basic structures and design to dynamic programming and object-oriented approaches, as well as efficient data handling through databases.`,






            jobDate4: "October 2023 - February 2024",
            jobCompany4: "SGD Leading Distance Learning School - Certificate ID 1104995",
            jobRole4: "Web Applications",
            certificate_text4: "Certificate",
            jobContent4: `This course has significantly contributed to enhancing my knowledge in several key areas:

<br><br>

<strong style="color: #ba62f1;">Concepts and Tools of the Web Development Process:</strong> I have gained a solid understanding of fundamental concepts and tools used in the web development process, including HTML, CSS, and basic JavaScript techniques.

<br><br>

<strong style="color: #ba62f1;">Responsive Web Design:</strong> I have developed skills to create websites optimized for various screen sizes and devices, which is crucial for a consistent user experience.

<br><br>

<strong style="color: #ba62f1;">JavaScript:</strong> I have deepened my knowledge of JavaScript and applied it to implement interactivity and dynamic features on websites.

<br><br>

<strong style="color: #ba62f1;">Single-Page Applications (SPAs) with React:</strong> I have learned how to effectively use React to develop SPAs, which has improved the structure and performance of my applications.

<br><br>

<strong style="color: #ba62f1;">Advanced Techniques and Frameworks:</strong> I have explored and applied advanced techniques such as Node.js, jQuery, Angular, Vue.js, and Flutter to expand my skill set and adapt to the demands of modern web development.

<br><br>

<strong style="color: #ba62f1;">Progressive Web Apps (PWAs):</strong> I have understood and implemented PWAs, which has helped enhance the performance and availability of my applications, particularly through offline support and fast loading.

<br><br>

These skills have greatly advanced my professional development by enabling me to create more modern, functional, and efficient web applications that meet the requirements of contemporary technologies and user expectations.`,







        },






        de: {
            title: "Meine Erfahrungen",
            title1: "Mein Portfolio",
            content: "Dies ist mein Portfolio auf Deutsch",
            menuHome: "Home",
            menuExperience: "Meine Erfahrung",
            menuProjects: "Meine Projekte",
            menuContact: "Kontakt",
            bioTitle: "Biografie",
            button: " Wechsel zu Englisch",
            bioContent: `Mit dem Programmieren habe ich 2021 angefangen, da mich dieser Bereich schon immer mit seinem kreativen Potenzial fasziniert hat. Bald erkannte ich, dass Webentwicklung der Bereich ist, in dem ich mich am besten wiederfinde. In den letzten 2,5 Jahren habe ich bedeutende Erfahrungen im Programmieren gesammelt, vier Kurse abgeschlossen und kontinuierlich mein Wissen und meine Fähigkeiten verbessert. Derzeit arbeite ich mit einer breiten Palette von Technologien, einschließlich HTML, CSS, JavaScript, SCSS, Vue.js, Angular sowie PHP und MySQL. Meine wichtigsten Fähigkeiten umfassen die Frontend- und Backend-Entwicklung, die Arbeit mit Datenbanken und die Lösung komplexer Probleme. Ich bin leidenschaftlich daran interessiert, kontinuierlich zu lernen und meine Fähigkeiten zu verbessern, und forsche oft nach neuen Technologien und Werkzeugen, um mit den neuesten Trends in der Branche Schritt zu halten. In meiner Arbeit bemühe ich mich, gründlich, analytisch und engagiert zu sein und stets das bestmögliche Ergebnis zu erzielen. Mein Arbeitsansatz zeichnet sich durch Aufmerksamkeit für Details, Systematik und Offenheit für neue Ideen und Methoden aus. Ich glaube, dass Ausdauer und kontinuierliche Verbesserung der Schlüssel zum Erfolg sind, und ich bemühe mich stets, zu jedem Projekt, an dem ich arbeite, einen maximalen Beitrag zu leisten.`,
            jobDate1: "Dezember 2021 - April 2022",
            jobCompany1: "Campster - Zertifikats-ID 187249",
            jobRole1: "Webentwickler",
            certificate_text1: "Zertifikat",
            jobContent1: `Während dieses Kurses habe ich verschiedene Programme besucht, die folgende Bereiche abdecken:
                <br><br>
                <strong style="color: #ba62f1;">Wesentliche Forschungskompetenzen:</strong>
                Diese Kompetenz umfasst die Fähigkeit, relevante Informationen zu einem bestimmten Thema zu recherchieren und zu analysieren. Dabei lernt man, wie man effektiv Quellen verwendet, Daten sammelt, Informationen bewertet und Ergebnisse dokumentiert.
                <br><br>
                <strong style="color: #ba62f1;">Erstellen von statischen Websites:</strong>
                Statische Websites bestehen aus HTML und CSS und sind ideal für Inhalte, die sich selten ändern. Dabei lernt man, wie man Inhalte strukturiert und gestaltet, ohne komplexe Backend-Logik.
                <br><br>
                <strong style="color: #ba62f1;">Anwenden von Animationen auf Elemente auf einer Seite:</strong>
                Animationen verbessern die Benutzererfahrung, indem sie Bewegungen und Übergänge zwischen verschiedenen Elementen auf einer Webseite hinzufügen. Man lernt, wie man CSS- oder JavaScript-Animationen implementiert, um Inhalte dynamischer und ansprechender zu gestalten.
                <br><br>
                <strong style="color: #ba62f1;">Fortgeschrittenes Seitenstyling:</strong>
                Dies umfasst fortgeschrittene Techniken zur Gestaltung von Webseiten, einschließlich der Verwendung von Flexbox, Grid-Layouts, Media Queries für verschiedene Bildschirmgrößen und die Integration von CSS-Präprozessoren wie SASS oder LESS.
                <br><br>
                <strong style="color: #ba62f1;">Responsives Webdesign:</strong>
                Responsives Webdesign stellt sicher, dass Webseiten auf verschiedenen Geräten und Bildschirmgrößen gut aussehen und funktionieren. Man lernt, wie man Layouts und Inhalte anpasst, um eine optimale Benutzererfahrung auf Desktops, Tablets und Smartphones zu bieten.
                <br><br>
                <strong style="color: #ba62f1;">Erstellen von dynamischen Webseiten:</strong>
                Dynamische Webseiten verwenden Technologien wie PHP, JavaScript und AJAX, um Inhalte basierend auf Benutzerinteraktionen oder externen Datenquellen zu generieren. Man lernt, wie man dynamische Inhalte lädt, Formulare verarbeitet und Inhalte in Echtzeit aktualisiert.
                <br><br>
                <strong style="color: #ba62f1;">Arbeiten mit einer Datenbank:</strong>
                Dies beinhaltet das Design, die Erstellung und die Verwaltung einer Datenbank mithilfe von SQL oder NoSQL, um Daten effizient zu speichern, abzurufen und zu aktualisieren. Man lernt, wie man Datenbankabfragen schreibt, Indizes verwaltet und die Datenintegrität sicherstellt.
                <br><br>
                <strong style="color: #ba62f1;">WordPress:</strong>
                WordPress ist ein beliebtes Content Management System (CMS) zur Erstellung und Verwaltung von Webseiten. Man lernt, wie man WordPress installiert, konfiguriert, Inhalte erstellt und anpasst, Plugins verwendet und Sicherheitsaspekte berücksichtigt.
                <br><br>
                <strong style="color: #ba62f1;">Erstellen von Themes in WordPress:</strong>
                Themes in WordPress bestimmen das Aussehen und die Funktionalität einer Webseite. Man lernt, wie man ein Theme von Grund auf neu erstellt oder ein vorhandenes Theme anpasst, um das Erscheinungsbild und Verhalten der Webseite nach den spezifischen Anforderungen zu gestalten.
                <br><br>
                "Diese Fähigkeiten haben mir ein tiefes Verständnis und praktische Erfahrung in der Erstellung moderner Websites gebracht. Im Kurs habe ich die Fähigkeit zur Recherche und Analyse erworben, was mir hilft, inhaltsreiche und relevante Inhalte zu erstellen. Außerdem habe ich gelernt, statische und dynamische Websites zu gestalten, die sowohl stilvoll als auch funktional sind und für alle Geräte optimiert sind."
            `
            ,

            jobDate2: "August 2022 - October 2022",
            jobCompany2: "ITOiP",
            jobRole2: "Frontend und Backend Developer",
            certificate_text2: "Zertifikat",
            jobContent2: `Während meines Kurses in der Full-Stack-Entwicklung lag mein Fokus auf der Implementierung
                        robuster Systeme zur Verwaltung von Daten und Benutzersitzungen in Webanwendungen. Unsere Arbeit
                        umfasste detaillier
                        <br><br>
                        <strong  class="highlighted" style="color: #ba62f1;">Datenbanken:</strong> Wir haben die Datenbankstruktur mit
                        modernen MySQ Ansätzen
                        aufgebaut, um eine
                        effiziente Datenhaltung als Grundlage der Anwendung zu ermöglichen. Dabei haben wir Techniken
                        zur Datenmodellierung, Beziehungsnutzung sowie effiziente Indexierung und Leistungsoptimierung
                        beherrscht.
                        <br>
                        <br>
                        <strong  class="highlighted" style="color: #ba62f1;">Benutzerverwaltung:</strong> Wir haben ein System für
                        Authentifizierung und
                        Autorisierung implementiert,
                        das sicheren Zugriff auf die Anwendung ermöglichte. Dabei haben wir gelernt, wie wir
                        Benutzerkonten effizient verwalten können, einschließlich Funktionen wie Registrierung,
                        Anmeldung (Login), Abmeldung (Logout) und Verwaltung von Benutzerrechten.
                        <br>
                        <br>
                        <strong  class="highlighted" style="color: #ba62f1;">Benutzersitzungen:</strong> Wir haben Mechanismen entwickelt, um
                        Benutzersitzungen zu
                        verwalten, was
                        entscheidend für die Sicherheit und den Kontext der Benutzer während ihrer Interaktion mit der
                        Anwendung ist. Das umfasst das Verfolgen von Benutzeraktivitäten, sicheres Speichern von
                        Sitzungsdaten und automatisches Beenden von Sitzungen zum Schutz der Benutzerdaten.
                        <br>
                        <br>
                        <strong  class="highlighted" style="color: #ba62f1;">Anwendungsverwaltung:</strong> Wir haben intuitive
                        Administrationspanels entwickelt, um
                        die Anwendung und
                        ihren Inhalt effizient zu verwalten. Das beinhaltet die Überwachung von Benutzern, Inhalten,
                        Statistiken und Anwendungseinstellungen, um sicherzustellen, dass Administratoren alle
                        erforderlichen Werkzeuge haben, um die Anwendung erfolgreich zu führen.
                        <br>
                        <br>
                        Dieser ganzheitliche Ansatz hat mir geholfen, die tieferen Schichten der Full-Stack-Entwicklung
                        zu verstehen, angefangen beim Design der Datenbank bis hin zur Implementierung sicherer und
                        effizienter Systeme zur Benutzerverwaltung und Anwendungsadministration.`,


            jobDate3: "Dezember 2022 - März 2023",
            jobCompany3: "SGD Führende Fernschule - Zertifikats-ID 1084429",
            jobRole3: "Web Coding",
            certificate_text3: "Zertifikat",
            jobContent3: `Entwicklung von Webseiten mit HTML, CSS, PHP und Datenbanken umfasst eine Vielzahl wichtiger
                        Fähigkeiten und Konzepte. Hier ist eine detaillierte Beschreibung jedes dieser Segmente:
                        <br>
                        <br>
                        <strong style="color: #ba62f1;">Webseitenentwicklung mit HTML (Entwicklung von Webseiten mit
                            HTML):</strong>
                        Unser Fokus lag auf dem Aufbau von Webseitenstrukturen mit HTML, der grundlegenden Sprache für
                        die Erstellung sämtlicher Webinhalte. Wir haben gelernt, wie man semantisch korrektes HTML
                        verwendet, um Inhalte auf Webseiten zu strukturieren, einschließlich der Nutzung von Tags für
                        Texte, Bilder, Links und Formulare.
                        <br>
                        <br>
                        <strong style="color: #ba62f1;">Cascading Style Sheets (CSS) (Kaskadische Stilblätter):</strong>
                        Wir haben uns damit beschäftigt, wie man durch CSS Webseiten gestaltet und stylisiert, eine
                        Sprache, die die Definition von Aussehen und Präsentation von HTML-Elementen ermöglicht. Wir
                        haben Fähigkeiten erlernt, um Farben, Schriftarten, die Positionierung von Elementen sowie
                        CSS-Animationen und -Übergänge anzuwenden, um das Nutzererlebnis zu verbessern.
                        <br>
                        <br>
                        <strong style="color: #ba62f1;"> Grundlagen der Programmierung mit PHP (Grundlagen der
                            Programmierung mit PHP):</strong>
                        Wir haben die Grundlagen von PHP kennengelernt, einer serverseitigen Sprache, die die dynamische
                        Generierung von Inhalten auf Webseiten ermöglicht. Wir haben gelernt, wie man Variablen,
                        Funktionen, bedingte Strukturen und Schleifen verwendet, um interaktive Elemente im Web zu
                        erstellen.
                        <br>
                        <br>
                        <strong style="color: #ba62f1;">PHP objektorientiert (Objektorientiertes PHP):</strong>
                        Wir haben uns intensiver mit den Konzepten der objektorientierten Programmierung (OOP) in PHP
                        beschäftigt, was die Organisation des Codes durch Objekte und Klassen ermöglicht. Wir haben
                        Vererbung, Kapselung und Polymorphismus implementiert, um die Struktur und die
                        Wiederverwendbarkeit unseres Codes zu verbessern.
                        <br>
                        <br>
                        <strong style="color: #ba62f1;">PHP und Datenbanken (PHP und Datenbanken):</strong>
                        Wir haben gelernt, wie man PHP mit Datenbanken integriert, um Daten effizient auf Webseiten zu
                        verwalten. Wir haben uns mit der Verwendung von SQL zur Erstellung, Lektüre, Aktualisierung und
                        Löschung von Daten vertraut gemacht. Wir haben Fähigkeiten entwickelt, um PHP-Skripte mit MySQL
                        oder anderen Datenbankmanagementsystemen zu verbinden, um die Interaktion mit Benutzerdaten über
                        Webanwendungen zu ermöglichen.
                        <br>
                        <br>
                        Diese Integration unterschiedlicher Technologien hat es mir ermöglicht, die Komplexität der
                        Webentwicklung zu verstehen, angefangen bei grundlegenden Strukturen und Design über dynamische
                        Programmierung und objektorientierten Ansätzen bis hin zum effizienten Umgang mit Daten über
                        Datenbanken`,





            jobDate4: "Oktorber 2023 - Februar 2024",
            jobCompany4: "SGD Führende Fernschule - Zertifikats-ID 1104995",
            jobRole4: "Web Applications",
            certificate_text4: "Zertifikat",
            jobContent4: `Dieser Kurs hat maßgeblich zur Verbesserung meiner Kenntnisse in mehreren Schlüsselbereichen
                            beigetragen:
                            <br>
                            <br>
                            <strong style="color: #ba62f1;">Konzepte und Werkzeuge des
                                Webentwicklungsprozesses:</strong> Ich habe ein fundiertes Verständnis
                            grundlegender Konzepte und Werkzeuge erworben, die im Webentwicklungsprozess verwendet
                            werden, einschließlich HTML, CSS und grundlegender JavaScript-Techniken.
                            <br>
                            <br>
                            <strong style="color: #ba62f1;">Responsives Webdesign:</strong> Ich habe Fähigkeiten
                            entwickelt, um Websites zu erstellen, die für
                            verschiedene Bildschirmgrößen und Geräte optimiert sind, was entscheidend für ein
                            konsistentes Benutzererlebnis ist.
                            <br>
                            <br>
                            <strong style="color: #ba62f1;">JavaScript:</strong> Ich habe meine Kenntnisse in JavaScript
                            vertieft und es angewendet, um
                            Interaktivität und dynamische Funktionen auf Webseiten zu implementieren.
                            <br>
                            <br>
                            <strong style="color: #ba62f1;">Entwicklung von Single-Page-Anwendungen (SPAs) mit
                                React:</strong> Ich habe gelernt, wie man React
                            effizient einsetzt, um SPAs zu entwickeln, was zu einer verbesserten Struktur und
                            Performance meiner Anwendungen geführt hat.
                            <br>
                            <br>
                            <strong style="color: #ba62f1;">Fortgeschrittene Techniken und Frameworks:</strong> Ich habe
                            fortgeschrittene Techniken wie Node.js,
                            jQuery, Angular, Vue.js und Flutter kennengelernt und angewendet, um mein Fähigkeitsspektrum
                            zu erweitern und mich an die Anforderungen moderner Webentwicklung anzupassen.
                            <br>
                            <br>
                            <strong style="color: #ba62f1;">Progressive Web Apps (PWAs):</strong> Ich habe die Konzepte
                            verstanden und PWAs implementiert, was
                            mir geholfen hat, die Leistung und Verfügbarkeit meiner Anwendungen zu verbessern,
                            insbesondere durch Offline-Unterstützung und schnelles Laden.
                            <br>
                            <br>
                            Diese Fähigkeiten haben meine berufliche Entwicklung maßgeblich vorangetrieben, indem sie
                            mir ermöglicht haben, modernere, funktionalere und effizientere Webanwendungen zu
                            entwickeln, die den Anforderungen zeitgemäßer Technologien und den Erwartungen der Nutzer
                            gerecht werden.`,


        }
    };


    let currentLanguage = localStorage.getItem('language') || 'en'; 
    const languageSwitchButton = document.getElementById('languageSwitch');
    let clickTimer = null;
    const LONG_CLICK_DURATION = 800;

    function updateContent(language) {
        document.querySelectorAll('.translatable').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (key && translations[language] && translations[language][key]) {
                element.innerHTML = translations[language][key];
            }
        });

        document.querySelectorAll('strong.highlighted').forEach(element => {
            const key = element.getAttribute('data-highlight');
            if (key && translations[language] && translations[language][key]) {
                element.innerHTML = translations[language][key];
            }
        });

        if (languageSwitchButton) {
            languageSwitchButton.textContent = translations[language].button;
        }

        localStorage.setItem('language', language);

        applyGlowEffect(); 
    }

    function handleLongClick() {
        currentLanguage = 'de';
        updateContent(currentLanguage);
    }

    languageSwitchButton.addEventListener('mousedown', () => {
        clickTimer = setTimeout(handleLongClick, LONG_CLICK_DURATION);
    });

    languageSwitchButton.addEventListener('mouseup', () => {
        clearTimeout(clickTimer);
        currentLanguage = currentLanguage === 'de' ? 'en' : 'de';
        updateContent(currentLanguage);
    });

    languageSwitchButton.addEventListener('mouseleave', () => {
        clearTimeout(clickTimer);
    });

    updateContent(currentLanguage);

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
    
});
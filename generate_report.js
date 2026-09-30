const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const screenshotDir = path.join(__dirname, 'screenshots');
const getBase64 = (filename) => {
    const filePath = path.join(screenshotDir, filename);
    const bitmap = fs.readFileSync(filePath);
    return `data:image/png;base64,${bitmap.toString('base64')}`;
};

const imgHome = getBase64('1_home_page.png');
const imgCtoF = getBase64('2_celsius_to_fahrenheit.png');
const imgFtoC = getBase64('3_fahrenheit_to_celsius.png');
const imgErrC = getBase64('4_error_celsius.png');
const imgErrF = getBase64('5_error_fahrenheit.png');
const imgTests = getBase64('6_test_results.png');

const htmlContent = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Rapport de laboratoire 1 - SEG 3502</title>
    <style>
        @page {
            size: A4;
            margin: 12mm 14mm 12mm 14mm;
            @bottom-right {
                content: "Page " counter(page) " / 3";
                font-size: 8.5pt;
                color: #64748b;
            }
        }
        * {
            box-sizing: border-box;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        body {
            font-family: Calibri, "Segoe UI", Arial, sans-serif;
            color: #1e293b;
            line-height: 1.4;
            font-size: 10pt;
            margin: 0;
            padding: 0;
            background: #ffffff;
        }
        .header {
            border-bottom: 2px solid #1e3a8a;
            padding-bottom: 6px;
            margin-bottom: 10px;
        }
        .univ {
            font-size: 10pt;
            font-weight: bold;
            color: #1e3a8a;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 2px;
        }
        h1 {
            color: #0f172a;
            font-size: 15pt;
            margin: 2px 0 4px 0;
            font-weight: bold;
        }
        .subtitle {
            font-size: 10pt;
            color: #475569;
            margin-bottom: 2px;
        }
        .info-table {
            width: 100%;
            border-collapse: collapse;
            margin: 8px 0 12px 0;
            background-color: #f8fafc;
            border: 1px solid #cbd5e1;
        }
        .info-table td {
            padding: 5px 8px;
            border: 1px solid #cbd5e1;
            font-size: 9.5pt;
        }
        .info-table .label {
            font-weight: bold;
            width: 22%;
            color: #334155;
            background-color: #f1f5f9;
        }
        .info-table .value {
            color: #0f172a;
        }
        h2 {
            color: #1e3a8a;
            font-size: 12pt;
            border-bottom: 1px solid #cbd5e1;
            padding-bottom: 3px;
            margin-top: 10px;
            margin-bottom: 6px;
            font-weight: bold;
        }
        h3 {
            color: #1e293b;
            font-size: 10pt;
            margin-top: 8px;
            margin-bottom: 3px;
            font-weight: bold;
        }
        p {
            margin: 0 0 6px 0;
            text-align: justify;
        }
        ul, ol {
            margin: 0 0 6px 0;
            padding-left: 18px;
        }
        li {
            margin-bottom: 2px;
        }
        code {
            font-family: Consolas, "Courier New", monospace;
            background-color: #f1f5f9;
            padding: 1px 3px;
            border: 1px solid #e2e8f0;
            border-radius: 3px;
            font-size: 9pt;
        }
        pre {
            background-color: #f8fafc;
            border: 1px solid #cbd5e1;
            border-radius: 4px;
            padding: 6px 8px;
            font-family: Consolas, "Courier New", monospace;
            font-size: 8.5pt;
            line-height: 1.3;
            margin: 4px 0 8px 0;
        }
        .page-break {
            page-break-before: always;
        }
        .grid-figures {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin: 8px 0;
        }
        .figure-box {
            border: 1px solid #cbd5e1;
            border-radius: 4px;
            background: #ffffff;
            overflow: hidden;
            page-break-inside: avoid;
        }
        .figure-box img {
            width: 100%;
            height: 145px;
            object-fit: cover;
            display: block;
            border-bottom: 1px solid #e2e8f0;
        }
        .figure-caption {
            padding: 5px 7px;
            font-size: 8.5pt;
            color: #334155;
            background-color: #f8fafc;
            line-height: 1.25;
        }
        .figure-caption strong {
            color: #0f172a;
        }
        table.test-table {
            width: 100%;
            border-collapse: collapse;
            margin: 8px 0 12px 0;
            font-size: 9pt;
            page-break-inside: avoid;
        }
        table.test-table th, table.test-table td {
            border: 1px solid #cbd5e1;
            padding: 5px 7px;
            text-align: left;
        }
        table.test-table th {
            background-color: #f1f5f9;
            font-weight: bold;
            color: #1e293b;
        }
        table.test-table tr:nth-child(even) td {
            background-color: #f8fafc;
        }
        .status-ok {
            font-weight: bold;
            color: #15803d;
        }
    </style>
</head>
<body>

    <div class="header">
        <div class="univ">Université d'Ottawa &bull; Faculté de génie</div>
        <h1>Rapport de Laboratoire 1 : Introduction à Spring Boot & Spring MVC</h1>
        <div class="subtitle">Cours : SEG 3502 &ndash; Conception et architecture des logiciels</div>
    </div>

    <table class="info-table">
        <tr>
            <td class="label">Étudiants</td>
            <td class="value">
                <strong>Manasse Biaya</strong> (300421324)<br>
                <strong>Anwar Issaoui</strong> (300463845)
            </td>
            <td class="label">Date</td>
            <td class="value">Septembre 2026</td>
        </tr>
        <tr>
            <td class="label">Dépôt GitHub</td>
            <td class="value" colspan="3">
                <a href="https://github.com/mxnsbiaya/springBootIntro" style="color: #2b547e; text-decoration: none;">https://github.com/mxnsbiaya/springBootIntro</a>
            </td>
        </tr>
    </table>

    <h2>1. Description du travail réalisé</h2>
    <p>
        Dans le cadre de ce premier laboratoire de SEG 3502, nous avons pris en main le framework <strong>Spring Boot 3</strong> et son architecture <strong>Spring MVC</strong> en utilisant le langage <strong>Kotlin</strong>. Le but était de comprendre le fonctionnement d'un contrôleur web, la liaison des paramètres de requêtes HTTP, l'utilisation du modèle pour transmettre des données et le rendu via le moteur de gabarits <strong>Thymeleaf</strong>.
    </p>

    <p>
        L'application développée est un convertisseur de températures bidirectionnel (Celsius &harr; Fahrenheit). Le projet est structuré selon les composants suivants :
    </p>
    <ul>
        <li><strong>Contrôleur (<code>WebController.kt</code>) :</strong>
            <ul>
                <li>Initialise les attributs du modèle (<code>celsius</code>, <code>fahrenheit</code> et <code>error</code>) à vide via l'annotation <code>@ModelAttribute</code>.</li>
                <li>Gère la route racine <code>/</code> avec la méthode <code>home()</code> qui renvoie le gabarit <code>home.html</code>.</li>
                <li>Gère la route <code>/convert</code> (requête GET) recevant les paramètres <code>celsius</code>, <code>fahrenheit</code> et <code>operation</code>. Selon l'opération sélectionnée (<code>CtoF</code> ou <code>FtoC</code>), le contrôleur convertit la valeur en type <code>Double</code>, applique la formule de conversion correspondante (<code>F = (C &times; 9/5) + 32</code> ou <code>C = (F &minus; 32) &times; 5/9</code>), puis stocke le résultat arrondi à deux décimales dans le modèle.</li>
                <li>Intercepte les erreurs de format (<code>NumberFormatException</code>) si un utilisateur entre du texte non numérique. Le cas échéant, le contrôleur transmet l'identifiant d'erreur adéquat (<code>CelsiusFormatError</code>, <code>FahrenheitFormatError</code> ou <code>OperationFormatError</code>) et conserve les valeurs saisies dans le formulaire.</li>
            </ul>
        </li>
        <li><strong>Vue Thymeleaf (<code>home.html</code> et <code>style.css</code>) :</strong>
            Génère la page web avec un formulaire contenant deux champs de saisie et deux boutons de soumission. En cas d'erreur, une structure conditionnelle <code>th:switch</code> affiche le message d'avertissement en rouge au-dessus du formulaire.
        </li>
        <li><strong>Tests automatisés (<code>WebControllerTest.kt</code>) :</strong>
            Nous avons complété la suite de tests avec <code>MockMvc</code> afin de vérifier automatiquement la route d'accueil, les conversions normales (0 &deg;C, 100 &deg;C, 32 &deg;F, 212 &deg;F), ainsi que l'ensemble des cas d'erreur de saisie. Les 9 tests automatisés s'exécutent avec succès.
        </li>
    </ul>

    <h2>2. Étapes pour installer et exécuter le projet</h2>
    <p>Le projet utilise l'outil de construction <strong>Gradle</strong> avec le wrapper intégré et requiert <strong>Java 21</strong> (LTS) ainsi que <strong>Git</strong>.</p>
    <ol>
        <li><strong>Cloner le projet :</strong> <code>git clone https://github.com/mxnsbiaya/springBootIntro.git</code> puis <code>cd springBootIntro</code></li>
        <li><strong>Configuration du JDK 21 :</strong> Pointer la variable d'environnement <code>JAVA_HOME</code> vers le dossier d'installation du JDK 21.</li>
        <li><strong>Exécution des tests automatisés :</strong> Lancer <code>.\gradlew.bat test</code> (Windows) ou <code>./gradlew test</code> (Linux / macOS).</li>
        <li><strong>Démarrage de l'application :</strong> Lancer <code>.\gradlew.bat bootRun</code> (Windows) ou <code>./gradlew bootRun</code> (Linux / macOS).</li>
        <li><strong>Accès web :</strong> Ouvrir un navigateur à l'adresse <code>http://localhost:8080/</code>.</li>
    </ol>

    <div class="page-break"></div>

    <h2>3. Captures d'écran de l'application</h2>
    <p>Les captures ci-dessous démontrent le bon fonctionnement des différents scénarios d'utilisation :</p>

    <div class="grid-figures">
        <div class="figure-box">
            <img src="${imgHome}" alt="Accueil" />
            <div class="figure-caption">
                <strong>Figure 1 :</strong> Page d'accueil initiale sur <code>http://localhost:8080/</code>.
            </div>
        </div>
        <div class="figure-box">
            <img src="${imgCtoF}" alt="Conversion Celsius vers Fahrenheit" />
            <div class="figure-caption">
                <strong>Figure 2 :</strong> Conversion de 100 &deg;C en Fahrenheit &rarr; résultat : <code>212.00 &deg;F</code>.
            </div>
        </div>
        <div class="figure-box">
            <img src="${imgFtoC}" alt="Conversion Fahrenheit vers Celsius" />
            <div class="figure-caption">
                <strong>Figure 3 :</strong> Conversion de 68 &deg;F en Celsius &rarr; résultat : <code>20.00 &deg;C</code>.
            </div>
        </div>
        <div class="figure-box">
            <img src="${imgErrC}" alt="Erreur Celsius" />
            <div class="figure-caption">
                <strong>Figure 4 :</strong> Gestion d'erreur lors d'une valeur non numérique pour Celsius (<code>"abc"</code>).
            </div>
        </div>
        <div class="figure-box">
            <img src="${imgErrF}" alt="Erreur Fahrenheit" />
            <div class="figure-caption">
                <strong>Figure 5 :</strong> Gestion d'erreur lors d'une valeur non numérique pour Fahrenheit (<code>"xyz"</code>).
            </div>
        </div>
        <div class="figure-box">
            <img src="${imgTests}" alt="Résultats des tests" />
            <div class="figure-caption">
                <strong>Figure 6 :</strong> Rapport d'exécution Gradle &rarr; 9 tests passés avec succès (100%).
            </div>
        </div>
    </div>

    <div class="page-break"></div>

    <h2>4. Résumé de la suite de tests automatisés</h2>
    <p>Tous les tests unitaires et d'intégration ont été validés via JUnit 5 et Spring MockMvc :</p>

    <table class="test-table">
        <thead>
            <tr>
                <th>Classe</th>
                <th>Nom du test</th>
                <th>Condition vérifiée</th>
                <th>Résultat</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>ConverterApplicationTests</code></td>
                <td><code>contextLoads()</code></td>
                <td>Initialisation du contexte Spring Boot</td>
                <td class="status-ok">Réussi</td>
            </tr>
            <tr>
                <td><code>WebControllerTest</code></td>
                <td><code>request_to_home()</code></td>
                <td>Affichage de la page d'accueil (statut 200, vue "home")</td>
                <td class="status-ok">Réussi</td>
            </tr>
            <tr>
                <td><code>WebControllerTest</code></td>
                <td><code>celsius_to_fahrenheit_conversion()</code></td>
                <td>0 &deg;C converti en 32.00 &deg;F</td>
                <td class="status-ok">Réussi</td>
            </tr>
            <tr>
                <td><code>WebControllerTest</code></td>
                <td><code>celsius_to_fahrenheit_boiling_point()</code></td>
                <td>100 &deg;C converti en 212.00 &deg;F</td>
                <td class="status-ok">Réussi</td>
            </tr>
            <tr>
                <td><code>WebControllerTest</code></td>
                <td><code>fahrenheit_to_celsius_conversion()</code></td>
                <td>32 &deg;F converti en 0.00 &deg;C</td>
                <td class="status-ok">Réussi</td>
            </tr>
            <tr>
                <td><code>WebControllerTest</code></td>
                <td><code>fahrenheit_to_celsius_boiling_point()</code></td>
                <td>212 &deg;F converti en 100.00 &deg;C</td>
                <td class="status-ok">Réussi</td>
            </tr>
            <tr>
                <td><code>WebControllerTest</code></td>
                <td><code>celsius_format_error()</code></td>
                <td>Valeur non numérique pour Celsius &rarr; CelsiusFormatError</td>
                <td class="status-ok">Réussi</td>
            </tr>
            <tr>
                <td><code>WebControllerTest</code></td>
                <td><code>fahrenheit_format_error()</code></td>
                <td>Valeur non numérique pour Fahrenheit &rarr; FahrenheitFormatError</td>
                <td class="status-ok">Réussi</td>
            </tr>
            <tr>
                <td><code>WebControllerTest</code></td>
                <td><code>invalid_operation_error()</code></td>
                <td>Opération non reconnue &rarr; OperationFormatError</td>
                <td class="status-ok">Réussi</td>
            </tr>
        </tbody>
    </table>

</body>
</html>
`;

const htmlPath = path.join(__dirname, 'rapport_laboratoire.html');
fs.writeFileSync(htmlPath, htmlContent, 'utf8');
console.log('HTML report generated at:', htmlPath);

const pdfPath = path.join(__dirname, 'rapport_laboratoire_spring_boot.pdf');
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const cmd = '"' + chromePath + '" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="' + pdfPath + '" "' + htmlPath + '"';

console.log('Generating PDF via Chrome headless...');
execSync(cmd);
console.log('PDF successfully generated at:', pdfPath);

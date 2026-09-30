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
    <title>Rapport de Laboratoire - Introduction à Spring Boot & Spring MVC</title>
    <style>
        @page {
            size: A4;
            margin: 18mm 16mm 18mm 16mm;
            @bottom-right {
                content: counter(page);
            }
        }
        * {
            box-sizing: border-box;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            color: #24292e;
            line-height: 1.55;
            font-size: 13.5px;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
        }
        .header {
            border-bottom: 2px solid #0969da;
            padding-bottom: 14px;
            margin-bottom: 22px;
        }
        .institution {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #57606a;
            font-weight: 600;
            margin-bottom: 4px;
        }
        h1 {
            color: #0969da;
            font-size: 24px;
            margin: 4px 0 10px 0;
            font-weight: 700;
        }
        .meta-box {
            background-color: #f6f8fa;
            border: 1px solid #d0d7de;
            border-radius: 6px;
            padding: 12px 16px;
            margin-bottom: 20px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            font-size: 13px;
        }
        .meta-box .item {
            display: flex;
            align-items: center;
        }
        .meta-box .label {
            font-weight: 600;
            color: #24292e;
            width: 140px;
        }
        .meta-box .value {
            color: #0969da;
            font-weight: 500;
        }
        .placeholder {
            background-color: #fff8c5;
            padding: 2px 6px;
            border-radius: 4px;
            border: 1px dashed #d4a72c;
            color: #9a6700;
            font-weight: 600;
        }
        h2 {
            color: #1f2328;
            font-size: 17px;
            border-bottom: 1px solid #d8dee4;
            padding-bottom: 6px;
            margin-top: 24px;
            margin-bottom: 12px;
            font-weight: 600;
        }
        h3 {
            color: #24292e;
            font-size: 14.5px;
            margin-top: 14px;
            margin-bottom: 8px;
            font-weight: 600;
        }
        p {
            margin: 0 0 10px 0;
            text-align: justify;
        }
        ul, ol {
            margin: 0 0 12px 0;
            padding-left: 22px;
        }
        li {
            margin-bottom: 5px;
        }
        code {
            font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
            background-color: #f6f8fa;
            border: 1px solid #d0d7de;
            border-radius: 4px;
            padding: 2px 5px;
            font-size: 12px;
            color: #cf222e;
        }
        pre {
            background-color: #f6f8fa;
            border: 1px solid #d0d7de;
            border-radius: 6px;
            padding: 10px 14px;
            font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
            font-size: 12px;
            line-height: 1.45;
            overflow-x: auto;
            margin: 8px 0 14px 0;
        }
        .grid-figures {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
            margin: 14px 0;
            page-break-inside: avoid;
        }
        .figure-card {
            background: #ffffff;
            border: 1px solid #d0d7de;
            border-radius: 6px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            page-break-inside: avoid;
        }
        .figure-card img {
            width: 100%;
            height: auto;
            display: block;
            border-bottom: 1px solid #e1e4e8;
        }
        .figure-caption {
            padding: 8px 12px;
            font-size: 11.5px;
            color: #57606a;
            background-color: #f6f8fa;
            font-weight: 500;
        }
        .figure-caption strong {
            color: #1f2328;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 12px 0;
            font-size: 12.5px;
            page-break-inside: avoid;
        }
        th, td {
            border: 1px solid #d0d7de;
            padding: 7px 10px;
            text-align: left;
        }
        th {
            background-color: #f6f8fa;
            font-weight: 600;
            color: #24292e;
        }
        tr:nth-child(even) td {
            background-color: #fcfcfc;
        }
        .badge-success {
            background-color: #dafbe1;
            color: #1a7f37;
            padding: 2px 7px;
            border-radius: 12px;
            font-size: 11px;
            font-weight: 600;
            display: inline-block;
            border: 1px solid #aceebb;
        }
        .page-break {
            page-break-before: always;
        }
        .alert-box {
            background-color: #ddf4ff;
            border-left: 4px solid #0969da;
            padding: 10px 14px;
            border-radius: 0 6px 6px 0;
            margin: 12px 0;
            font-size: 12.5px;
        }
        .alert-box strong {
            color: #0969da;
        }
    </style>
</head>
<body>

    <div class="header">
        <div class="institution">Université d'Ottawa &bull; Faculté de Génie &bull; SEG 3102 / 3502</div>
        <h1>Rapport de Laboratoire : Introduction à Spring Boot & Spring MVC</h1>
        <div>Application Web de Conversion de Température en Kotlin</div>
    </div>

    <div class="meta-box">
        <div class="item"><span class="label">Membres de l'équipe :</span> <span class="value" style="font-weight: 700; color: #1f2328;">Manasse Biaya (300421324)<br>Anwar Issaoui (300463845)</span></div>
        <div class="item"><span class="label">Cours :</span> <span>SEG 3102 / 3502</span></div>
        <div class="item"><span class="label">Dépôt GitHub :</span> <a href="https://github.com/mxnsbiaya/springBootIntro" style="color: #0969da; text-decoration: none; font-weight: 600;">https://github.com/mxnsbiaya/springBootIntro</a></div>
        <div class="item"><span class="label">Date :</span> <span>Septembre 2026</span></div>
        <div class="item" style="grid-column: span 2;"><span class="label">Statut :</span> <span class="badge-success">&#10004; 100% Fonctionnel & Testé (9/9 tests réussis)</span></div>
    </div>

    <h2>1. Brève description du travail réalisé</h2>
    <p>
        Ce laboratoire consiste en une initiation pratique à l'architecture logicielle offerte par le framework <strong>Spring Boot 3</strong> et son module <strong>Spring MVC</strong> en utilisant le langage moderne <strong>Kotlin</strong>.
        L'objectif central est la mise en place d'une application web MVC complète permettant la conversion bidirectionnelle de températures entre les degrés Celsius et Fahrenheit, avec validation des données et affichage dynamique des vues.
    </p>

    <h3>Fonctionnalités et Architecture implémentées :</h3>
    <ul>
        <li><strong>Architecture MVC (Modèle - Vue - Contrôleur) :</strong> Séparation nette entre la logique de contrôle (<code>WebController</code>), les données échangées (<code>Model</code> Spring) et la couche de présentation (Thymeleaf).</li>
        <li><strong>Contrôleur de requêtes HTTP (<code>WebController.kt</code>) :</strong>
            <ul>
                <li>Initialisation globale des attributs via <code>@ModelAttribute</code> (attributs <code>celsius</code>, <code>fahrenheit</code> et <code>error</code>).</li>
                <li>Routage de la racine <code>/</code> renvoyant la vue d'accueil <code>home</code>.</li>
                <li>Gestionnaire d'action <code>/convert</code> (méthode GET) qui intercepte les paramètres de formulaire (<code>celsius</code>, <code>fahrenheit</code>, <code>operation</code>), applique la formule de conversion appropriée et injecte les résultats formatés (<code>String.format("%.2f", ...)</code>) dans le modèle.</li>
            </ul>
        </li>
        <li><strong>Gestion robuste des exceptions et cas d'erreur :</strong>
            Interception des <code>NumberFormatException</code> pour détecter les saisies invalides (chaînes non numériques, champs vides incorrects) et association des identifiants d'erreur correspondants (<code>CelsiusFormatError</code>, <code>FahrenheitFormatError</code>, <code>OperationFormatError</code>).
        </li>
        <li><strong>Vues dynamiques avec Thymeleaf (<code>home.html</code>) :</strong>
            Moteur de template intégrant un formulaire HTML, la liaison bidirectionnelle de valeurs (<code>th:value</code>) et un affichage conditionnel des messages d'erreur (<code>th:switch</code> et <code>th:case</code>).
        </li>
        <li><strong>Suite de tests automatisés (<code>WebControllerTest.kt</code>) :</strong>
            Conception et validation d'une batterie complète de tests avec <code>MockMvc</code> vérifiant l'affichage de la page d'accueil, les calculs de conversion pour différentes valeurs (notamment 0&deg;C = 32&deg;F et 100&deg;C = 212&deg;F), ainsi que la détection correcte de toutes les erreurs de validation.
        </li>
    </ul>

    <div class="alert-box">
        <strong>Environnement d'exécution :</strong> Le projet a été configuré et validé avec succès avec <strong>Java 21 LTS</strong> (OpenJDK Temurin 21.0.6+7), <strong>Gradle 8.5</strong>, <strong>Spring Boot 3.4.5</strong> et <strong>Kotlin 1.9.25</strong>.
    </div>

    <h2>2. Étapes nécessaires pour installer et exécuter le projet</h2>
    <p>Pour reproduire et exécuter le projet dans n'importe quel environnement de développement, suivre les étapes ci-dessous :</p>

    <ol>
        <li><strong>Prérequis :</strong>
            <ul>
                <li><strong>Java Development Kit (JDK) 21</strong> installé sur le système.</li>
                <li><strong>Git</strong> pour le contrôle de version.</li>
            </ul>
        </li>
        <li><strong>Cloner le dépôt de code :</strong>
            <pre>git clone https://github.com/stephanesome/springBootIntro.git
cd springBootIntro</pre>
        </li>
        <li><strong>Définir JAVA_HOME (vers le JDK 21) :</strong>
            <pre># Sous Windows (PowerShell) :
$env:JAVA_HOME = "C:\\Program Files\\Eclipse Adoptium\\jdk-21"  # ou votre chemin JDK 21
$env:Path = "$env:JAVA_HOME\\bin;" + $env:Path

# Sous Linux / macOS (Bash) :
export JAVA_HOME=/path/to/jdk-21
export PATH=$JAVA_HOME/bin:$PATH</pre>
        </li>
        <li><strong>Lancer les tests automatisés :</strong>
            <pre># Windows :
.\\gradlew.bat test

# Linux / macOS :
./gradlew test</pre>
        </li>
        <li><strong>Démarrer le serveur d'application :</strong>
            <pre># Windows :
.\\gradlew.bat bootRun

# Linux / macOS :
./gradlew bootRun</pre>
        </li>
        <li><strong>Accéder à l'application web :</strong>
            Ouvrir un navigateur web moderne à l'adresse locale : <code>http://localhost:8080/</code>.
        </li>
    </ol>

    <div class="page-break"></div>

    <h2>3. Captures d'écran de l'application et démonstration</h2>
    <p>Les captures d'écran ci-dessous attestent du bon fonctionnement de chaque composant de l'application :</p>

    <div class="grid-figures">
        <div class="figure-card">
            <img src="${imgHome}" alt="Page d'accueil" />
            <div class="figure-caption">
                <strong>Figure 1 :</strong> Page d'accueil initiale (<code>http://localhost:8080/</code>). Formulaire prêt pour la saisie des températures avec boutons de conversion.
            </div>
        </div>
        <div class="figure-card">
            <img src="${imgCtoF}" alt="Conversion Celsius vers Fahrenheit" />
            <div class="figure-caption">
                <strong>Figure 2 :</strong> Conversion réussie Celsius &rarr; Fahrenheit. Saisie : <code>100 &deg;C</code>, Résultat calculé : <code>212.00 &deg;F</code>.
            </div>
        </div>
        <div class="figure-card">
            <img src="${imgFtoC}" alt="Conversion Fahrenheit vers Celsius" />
            <div class="figure-caption">
                <strong>Figure 3 :</strong> Conversion réussie Fahrenheit &rarr; Celsius. Saisie : <code>68 &deg;F</code>, Résultat calculé : <code>20.00 &deg;C</code>.
            </div>
        </div>
        <div class="figure-card">
            <img src="${imgErrC}" alt="Erreur format Celsius" />
            <div class="figure-caption">
                <strong>Figure 4 :</strong> Gestion d'erreur - Saisie invalide pour Celsius (<code>"abc"</code>). Message rouge d'avertissement affiché par Thymeleaf.
            </div>
        </div>
        <div class="figure-card">
            <img src="${imgErrF}" alt="Erreur format Fahrenheit" />
            <div class="figure-caption">
                <strong>Figure 5 :</strong> Gestion d'erreur - Saisie invalide pour Fahrenheit (<code>"xyz"</code>). Détection de <code>NumberFormatException</code> et affichage de l'erreur.
            </div>
        </div>
        <div class="figure-card">
            <img src="${imgTests}" alt="Rapport de tests" />
            <div class="figure-caption">
                <strong>Figure 6 :</strong> Rapport de tests Gradle HTML (<code>build/reports/tests/test/index.html</code>) : 100% de réussite sur les 9 tests exécutés en 0.898s.
            </div>
        </div>
    </div>

    <h2>4. Résultats des tests automatisés</h2>
    <p>
        La suite de tests unitaires et d'intégration Spring MVC (<code>@WebMvcTest</code>) a été exécutée avec succès via le moteur JUnit 5.
    </p>

    <table>
        <thead>
            <tr>
                <th>Classe de Test</th>
                <th>Méthode de Test</th>
                <th>Objectif vérifié</th>
                <th>Résultat</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>ConverterApplicationTests</code></td>
                <td><code>contextLoads()</code></td>
                <td>Chargement correct du contexte Spring Boot</td>
                <td><span class="badge-success">RÉUSSI</span></td>
            </tr>
            <tr>
                <td><code>WebControllerTest</code></td>
                <td><code>request_to_home()</code></td>
                <td>GET / retourne statut 200 et vue "home"</td>
                <td><span class="badge-success">RÉUSSI</span></td>
            </tr>
            <tr>
                <td><code>WebControllerTest</code></td>
                <td><code>celsius_to_fahrenheit_conversion()</code></td>
                <td>Conversion 0 &deg;C &rarr; 32.00 &deg;F</td>
                <td><span class="badge-success">RÉUSSI</span></td>
            </tr>
            <tr>
                <td><code>WebControllerTest</code></td>
                <td><code>celsius_to_fahrenheit_boiling_point()</code></td>
                <td>Conversion 100 &deg;C &rarr; 212.00 &deg;F</td>
                <td><span class="badge-success">RÉUSSI</span></td>
            </tr>
            <tr>
                <td><code>WebControllerTest</code></td>
                <td><code>fahrenheit_to_celsius_conversion()</code></td>
                <td>Conversion 32 &deg;F &rarr; 0.00 &deg;C</td>
                <td><span class="badge-success">RÉUSSI</span></td>
            </tr>
            <tr>
                <td><code>WebControllerTest</code></td>
                <td><code>fahrenheit_to_celsius_boiling_point()</code></td>
                <td>Conversion 212 &deg;F &rarr; 100.00 &deg;C</td>
                <td><span class="badge-success">RÉUSSI</span></td>
            </tr>
            <tr>
                <td><code>WebControllerTest</code></td>
                <td><code>celsius_format_error()</code></td>
                <td>Saisie 'abc' pour Celsius produit CelsiusFormatError</td>
                <td><span class="badge-success">RÉUSSI</span></td>
            </tr>
            <tr>
                <td><code>WebControllerTest</code></td>
                <td><code>fahrenheit_format_error()</code></td>
                <td>Saisie 'xyz' pour Fahrenheit produit FahrenheitFormatError</td>
                <td><span class="badge-success">RÉUSSI</span></td>
            </tr>
            <tr>
                <td><code>WebControllerTest</code></td>
                <td><code>invalid_operation_error()</code></td>
                <td>Opération inconnue produit OperationFormatError</td>
                <td><span class="badge-success">RÉUSSI</span></td>
            </tr>
        </tbody>
    </table>

    <h2>5. Instructions pour la remise sur Brightspace</h2>
    <ol>
        <li>Créer un dépôt GitHub public (ou privé avec accès accordé au professeur) nommé par exemple <code>springBootIntro</code>.</li>
        <li>Pousser le code vers votre dépôt :
            <pre>git remote set-url origin https://github.com/[VotreNomUtilisateur]/springBootIntro.git
git add .
git commit -m "Laboratoire finalisé avec tests complets et documentation"
git push -u origin master</pre>
        </li>
        <li>Télécharger ce rapport PDF généré (ou le convertir après avoir rempli vos nom et numéro étudiant).</li>
        <li>Déposer sur le devoir Brightspace :
            <ul>
                <li>Le <strong>lien vers votre dépôt GitHub</strong></li>
                <li>Le <strong>fichier PDF</strong> du présent rapport</li>
            </ul>
        </li>
    </ol>

</body>
</html>
`;

const htmlPath = path.join(__dirname, 'rapport_laboratoire.html');
fs.writeFileSync(htmlPath, htmlContent, 'utf8');
console.log('HTML report generated at:', htmlPath);

// Generate PDF using headless Chrome
const pdfPath = path.join(__dirname, 'rapport_laboratoire_spring_boot.pdf');
const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const cmd = '"' + chromePath + '" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="' + pdfPath + '" "' + htmlPath + '"';

console.log('Generating PDF via Chrome headless...');
execSync(cmd);
console.log('PDF successfully generated at:', pdfPath);

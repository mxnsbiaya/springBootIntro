**Université d'Ottawa**  
**Cours :** SEG 3102 / SEG 3502  
**Étudiants :**
- Manasse Biaya (300421324)
- Anwar Issaoui (300463845)  
**Projet :** Convertisseur de Température (Celsius / Fahrenheit)

---

## 📌 Description du Projet

Ce projet est une application web développée avec le framework **Spring Boot 3** et **Spring MVC** en utilisant le langage **Kotlin** et le moteur de templates **Thymeleaf**.  
Elle permet la conversion bidirectionnelle de températures entre les degrés Celsius et Fahrenheit avec validation robuste des données d'entrée.

### Fonctionnalités
- Conversion Celsius vers Fahrenheit : $F = \frac{9}{5} \times C + 32$
- Conversion Fahrenheit vers Celsius : $C = \frac{5}{9} \times (F - 32)$
- Gestion des erreurs de format numérique (`CelsiusFormatError`, `FahrenheitFormatError`)
- Gestion des opérations invalides (`OperationFormatError`)
- Affichage conditionnel des alertes avec Thymeleaf

---

## 🚀 Installation et Exécution

### Prérequis
- **Java 21 LTS** (ex: Eclipse Adoptium Temurin 21)
- **Git**

### 1. Cloner le projet
```bash
git clone https://github.com/mxnsbiaya/springBootIntro.git
cd springBootIntro
```

### 2. Configurer JAVA_HOME
```powershell
# Windows (PowerShell)
$env:JAVA_HOME = "C:\Program Files\Eclipse Adoptium\jdk-21"
$env:Path = "$env:JAVA_HOME\bin;" + $env:Path

# Linux / macOS (Bash)
export JAVA_HOME=/path/to/jdk-21
export PATH=$JAVA_HOME/bin:$PATH
```

### 3. Exécuter la suite de tests (JUnit 5 / MockMvc)
```bash
# Windows
.\gradlew.bat test

# Linux / macOS
./gradlew test
```

### 4. Démarrer l'application
```bash
# Windows
.\gradlew.bat bootRun

# Linux / macOS
./gradlew bootRun
```

L'application sera accessible dans votre navigateur à l'adresse suivante :  
👉 **http://localhost:8080/**

---

## 📄 Rapport de Laboratoire

Le rapport complet au format PDF contenant les captures d'écran, l'analyse d'architecture et les résultats des tests est disponible dans la racine du dépôt :  
📁 **`rapport_laboratoire_spring_boot.pdf`**

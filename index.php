<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Big Five - Test de Personnalité</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="bg-grid"></div>
    <div class="glow glow-1"></div>
    <div class="glow glow-2"></div>

    <!-- BOUTON LANGUE -->
    <button id="lang-toggle" class="lang-toggle" title="Switch language">
        <span class="lang-flag" id="lang-flag">FR</span>
    </button>

    <!-- ÉCRAN D'ACCUEIL -->
    <div id="screen-intro" class="screen active">
        <div class="card card-intro">
            <div class="card-badge">OCEAN</div>
            <h1>Big Five</h1>
            <p class="subtitle">Test de Personnalité</p>
            <p class="desc">Découvrez votre profil de personnalité à travers 5 dimensions fondamentales : Ouverture, Conscienciosité, Extraversion, Agréabilité et Stabilité émotionnelle.</p>
            <div class="trait-pills">
                <span class="pill pill-o">Ouverture</span>
                <span class="pill pill-c">Conscienciosité</span>
                <span class="pill pill-e">Extraversion</span>
                <span class="pill pill-a">Agréabilité</span>
                <span class="pill pill-n">Stabilité émotionnelle</span>
            </div>
            <p class="info">60 questions &middot; ~10 minutes</p>
            <button id="btn-start" class="btn-primary">Commencer le test</button>
        </div>
    </div>

    <!-- ÉCRAN QUESTIONS -->
    <div id="screen-quiz" class="screen">
        <div class="card card-quiz">
            <div class="quiz-header">
                <div class="progress-info">
                    <span id="q-counter">1 / 60</span>
                    <span id="q-trait" class="trait-label">Extraversion</span>
                </div>
                <div class="progress-bar">
                    <div id="progress-fill" class="progress-fill"></div>
                </div>
            </div>
            <div id="q-text" class="question-text">Question ici</div>
            <div class="likert-scale">
                <button class="likert-btn" data-value="1">
                    <span class="likert-dot"></span>
                    <span class="likert-label">Pas du tout d'accord</span>
                </button>
                <button class="likert-btn" data-value="2">
                    <span class="likert-dot"></span>
                    <span class="likert-label">Pas d'accord</span>
                </button>
                <button class="likert-btn" data-value="3">
                    <span class="likert-dot"></span>
                    <span class="likert-label">Neutre</span>
                </button>
                <button class="likert-btn" data-value="4">
                    <span class="likert-dot"></span>
                    <span class="likert-label">D'accord</span>
                </button>
                <button class="likert-btn" data-value="5">
                    <span class="likert-dot"></span>
                    <span class="likert-label">Tout à fait d'accord</span>
                </button>
            </div>
            <div class="quiz-nav">
                <button id="btn-prev" class="btn-secondary" disabled>Précédent</button>
                <button id="btn-next" class="btn-primary" disabled>Suivant</button>
            </div>
        </div>
    </div>

    <!-- ÉCRAN RÉSULTATS -->
    <div id="screen-results" class="screen">
        <div class="card card-results">
            <div class="card-badge">Résultats</div>
            <h2>Votre profil de personnalité</h2>
            <div id="results-container" class="results-grid"></div>
            <button id="btn-restart" class="btn-secondary" style="margin-top:2rem;">Refaire le test</button>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>

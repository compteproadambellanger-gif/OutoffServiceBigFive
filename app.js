// ═══════════════════════════════════════
// BIG FIVE — Personality Test Logic
// ═══════════════════════════════════════

// ── i18n ──
const i18n = {
    fr: {
        pageTitle: "Big Five - Test de Personnalité",
        subtitle: "Test de Personnalité",
        desc: "Découvrez votre profil de personnalité à travers 5 dimensions fondamentales : Ouverture, Conscienciosité, Extraversion, Agréabilité et Stabilité émotionnelle.",
        pills: ["Ouverture", "Conscienciosité", "Extraversion", "Agréabilité", "Stabilité émotionnelle"],
        info: "60 questions \u00b7 ~10 minutes",
        start: "Commencer le test",
        prev: "Précédent",
        next: "Suivant",
        seeResults: "Voir les résultats",
        resultsBadge: "Résultats",
        resultsTitle: "Votre profil de personnalité",
        restart: "Refaire le test",
        likert: ["Pas du tout d'accord", "Pas d'accord", "Neutre", "D'accord", "Tout à fait d'accord"],
        levels: { vhigh: "Très élevé", high: "Élevé", mid: "Moyen", low: "Bas", vlow: "Très bas" },
        traitNames: { E: "Extraversion", A: "Agréabilité", C: "Conscienciosité", N: "Neuroticisme", O: "Ouverture" },
        traitFull: { O: "Ouverture à l'expérience", C: "Conscienciosité", E: "Extraversion", A: "Agréabilité", N: "Neuroticisme" },
        traitDesc: {
            O: {
                high: "Vous êtes imaginatif/imaginative, curieux/curieuse et ouvert(e) aux nouvelles expériences. Vous appréciez l'art, les idées nouvelles et la diversité.",
                mid: "Vous avez un équilibre entre curiosité intellectuelle et sens pratique. Vous êtes ouvert(e) aux nouvelles idées tout en gardant les pieds sur terre.",
                low: "Vous êtes pragmatique et préférez les approches éprouvées. Vous valorisez la tradition et les solutions concrètes."
            },
            C: {
                high: "Vous êtes organisé(e), discipliné(e) et fiable. Vous planifiez soigneusement et poursuivez vos objectifs avec détermination.",
                mid: "Vous savez être organisé(e) quand nécessaire mais gardez une certaine flexibilité. Vous trouvez un bon équilibre entre structure et spontanéité.",
                low: "Vous êtes spontané(e) et flexible. Vous préférez l'improvisation à la planification rigide et vous adaptez facilement aux changements."
            },
            E: {
                high: "Vous êtes sociable, énergique et expressif/expressive. Vous aimez être entouré(e) de gens et prenez facilement l'initiative.",
                mid: "Vous appréciez la compagnie des autres tout en valorisant votre temps seul(e). Vous savez vous adapter aux différentes situations sociales.",
                low: "Vous êtes réservé(e) et réfléchi(e). Vous préférez les interactions en petit comité et rechargez vos batteries dans la solitude."
            },
            A: {
                high: "Vous êtes empathique, coopératif/coopérative et bienveillant(e). Vous valorisez l'harmonie et cherchez à aider les autres.",
                mid: "Vous savez être coopératif/coopérative tout en défendant vos positions. Vous équilibrez empathie et affirmation de soi.",
                low: "Vous êtes direct(e) et compétitif/compétitive. Vous n'hésitez pas à exprimer votre désaccord et privilégiez l'efficacité."
            },
            N: {
                high: "Vous êtes sensible aux émotions et pouvez ressentir du stress ou de l'anxiété plus intensément. Cette sensibilité peut aussi être une force créative.",
                mid: "Vous gérez généralement bien vos émotions avec des moments occasionnels de stress. Vous avez une bonne résilience émotionnelle.",
                low: "Vous êtes calme et émotionnellement stable. Vous gérez le stress avec aisance et restez serein(e) dans les situations difficiles."
            }
        }
    },
    en: {
        pageTitle: "Big Five - Personality Test",
        subtitle: "Personality Test",
        desc: "Discover your personality profile through 5 fundamental dimensions: Openness, Conscientiousness, Extraversion, Agreeableness and Emotional Stability.",
        pills: ["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Emotional Stability"],
        info: "60 questions \u00b7 ~10 minutes",
        start: "Start the test",
        prev: "Previous",
        next: "Next",
        seeResults: "See results",
        resultsBadge: "Results",
        resultsTitle: "Your personality profile",
        restart: "Retake the test",
        likert: ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"],
        levels: { vhigh: "Very high", high: "High", mid: "Average", low: "Low", vlow: "Very low" },
        traitNames: { E: "Extraversion", A: "Agreeableness", C: "Conscientiousness", N: "Neuroticism", O: "Openness" },
        traitFull: { O: "Openness to Experience", C: "Conscientiousness", E: "Extraversion", A: "Agreeableness", N: "Neuroticism" },
        traitDesc: {
            O: {
                high: "You are imaginative, curious, and open to new experiences. You appreciate art, new ideas, and diversity.",
                mid: "You balance intellectual curiosity with practicality. You're open to new ideas while staying grounded.",
                low: "You are pragmatic and prefer proven approaches. You value tradition and concrete solutions."
            },
            C: {
                high: "You are organized, disciplined, and reliable. You plan carefully and pursue your goals with determination.",
                mid: "You can be organized when needed but maintain flexibility. You find a good balance between structure and spontaneity.",
                low: "You are spontaneous and flexible. You prefer improvisation over rigid planning and adapt easily to changes."
            },
            E: {
                high: "You are sociable, energetic, and expressive. You enjoy being around people and easily take the initiative.",
                mid: "You enjoy the company of others while valuing your alone time. You adapt well to different social situations.",
                low: "You are reserved and thoughtful. You prefer small group interactions and recharge in solitude."
            },
            A: {
                high: "You are empathetic, cooperative, and caring. You value harmony and seek to help others.",
                mid: "You can be cooperative while standing your ground. You balance empathy with self-assertion.",
                low: "You are direct and competitive. You don't hesitate to express disagreement and prioritize efficiency."
            },
            N: {
                high: "You are emotionally sensitive and may experience stress or anxiety more intensely. This sensitivity can also be a creative strength.",
                mid: "You generally manage your emotions well with occasional moments of stress. You have good emotional resilience.",
                low: "You are calm and emotionally stable. You handle stress with ease and remain serene in difficult situations."
            }
        }
    }
};

const questions = [
    // Extraversion (E) — 1-12
    { fr: "Je suis sociable et j'aime être entouré(e) de gens.", en: "I am outgoing and sociable.", trait: "E", dir: 1 },
    { fr: "J'ai une personnalité affirmée.", en: "I have an assertive personality.", trait: "E", dir: 1 },
    { fr: "Je ressens rarement de l'excitation ou de l'enthousiasme.", en: "I rarely feel excited or eager.", trait: "E", dir: -1 },
    { fr: "J'ai tendance à être calme et réservé(e).", en: "I tend to be quiet.", trait: "E", dir: -1 },
    { fr: "Je suis dominant(e) et j'agis comme un leader.", en: "I am dominant and act as a leader.", trait: "E", dir: 1 },
    { fr: "Je suis moins actif/active que la plupart des gens.", en: "I am less active than other people.", trait: "E", dir: -1 },
    { fr: "Je suis parfois timide et introverti(e).", en: "I am sometimes shy and introverted.", trait: "E", dir: -1 },
    { fr: "J'ai du mal à influencer les autres.", en: "I find it hard to influence people.", trait: "E", dir: -1 },
    { fr: "Je suis plein(e) d'énergie.", en: "I am full of energy.", trait: "E", dir: 1 },
    { fr: "Je suis bavard(e).", en: "I am talkative.", trait: "E", dir: 1 },
    { fr: "Je préfère laisser les autres prendre les décisions.", en: "I prefer to have others take charge.", trait: "E", dir: -1 },
    { fr: "Je montre beaucoup d'enthousiasme.", en: "I show a lot of enthusiasm.", trait: "E", dir: 1 },

    // Agreeableness (A) — 13-24
    { fr: "Je suis compatissant(e) et j'ai bon cœur.", en: "I am compassionate and soft-hearted.", trait: "A", dir: 1 },
    { fr: "Je suis respectueux/respectueuse envers les autres.", en: "I am respectful and treat others with respect.", trait: "A", dir: 1 },
    { fr: "J'ai tendance à critiquer les autres.", en: "I tend to find fault with others.", trait: "A", dir: -1 },
    { fr: "Je ressens peu de sympathie pour les autres.", en: "I feel little sympathy for others.", trait: "A", dir: -1 },
    { fr: "Je commence souvent des disputes.", en: "I start arguments with others.", trait: "A", dir: -1 },
    { fr: "Je pardonne facilement.", en: "I have a forgiving nature.", trait: "A", dir: 1 },
    { fr: "Je suis serviable et altruiste.", en: "I am helpful and unselfish with others.", trait: "A", dir: 1 },
    { fr: "Je suis parfois impoli(e) avec les autres.", en: "I am sometimes rude to others.", trait: "A", dir: -1 },
    { fr: "Je me méfie des intentions des autres.", en: "I am suspicious of others' intentions.", trait: "A", dir: -1 },
    { fr: "Je peux être froid(e) et indifférent(e).", en: "I can be cold and uncaring.", trait: "A", dir: -1 },
    { fr: "Je suis poli(e) et courtois(e).", en: "I am polite and courteous to others.", trait: "A", dir: 1 },
    { fr: "Je pense du bien des gens en général.", en: "I assume the best about people.", trait: "A", dir: 1 },

    // Conscientiousness (C) — 25-36
    { fr: "J'ai tendance à être désorganisé(e).", en: "I tend to be disorganized.", trait: "C", dir: -1 },
    { fr: "J'ai tendance à être paresseux/paresseuse.", en: "I tend to be lazy.", trait: "C", dir: -1 },
    { fr: "Je suis fiable et constant(e).", en: "I am dependable and steady.", trait: "C", dir: 1 },
    { fr: "Je suis méthodique et j'aime l'ordre.", en: "I am systematic and like to keep things in order.", trait: "C", dir: 1 },
    { fr: "J'ai du mal à me mettre au travail.", en: "I have difficulty getting started on tasks.", trait: "C", dir: -1 },
    { fr: "Je peux être négligent(e).", en: "I can be somewhat careless.", trait: "C", dir: -1 },
    { fr: "Je garde les choses bien rangées.", en: "I keep things neat and tidy.", trait: "C", dir: 1 },
    { fr: "Je suis efficace et je fais avancer les choses.", en: "I am efficient and get things done.", trait: "C", dir: 1 },
    { fr: "On peut toujours compter sur moi.", en: "I am reliable and can always be counted on.", trait: "C", dir: 1 },
    { fr: "Je laisse du désordre et ne range pas.", en: "I leave a mess and don't clean up.", trait: "C", dir: -1 },
    { fr: "Je suis persévérant(e) et je finis toujours ce que je commence.", en: "I am persistent and work until the task is finished.", trait: "C", dir: 1 },
    { fr: "Il m'arrive de me comporter de manière irresponsable.", en: "I sometimes behave irresponsibly.", trait: "C", dir: -1 },

    // Neuroticism (N) — 37-48
    { fr: "Je suis détendu(e) et je gère bien le stress.", en: "I am relaxed and handle stress well.", trait: "N", dir: -1 },
    { fr: "Je reste optimiste après un échec.", en: "I stay optimistic after experiencing a setback.", trait: "N", dir: -1 },
    { fr: "J'ai des sautes d'humeur fréquentes.", en: "I am moody and have up and down mood swings.", trait: "N", dir: 1 },
    { fr: "Je peux être tendu(e).", en: "I can be tense.", trait: "N", dir: 1 },
    { fr: "Je me sens en sécurité et à l'aise avec moi-même.", en: "I feel secure and comfortable with myself.", trait: "N", dir: -1 },
    { fr: "Je suis émotionnellement stable et difficile à perturber.", en: "I am emotionally stable and not easily upset.", trait: "N", dir: -1 },
    { fr: "Je m'inquiète beaucoup.", en: "I worry a lot.", trait: "N", dir: 1 },
    { fr: "Je me sens souvent triste.", en: "I often feel sad.", trait: "N", dir: 1 },
    { fr: "Je garde le contrôle de mes émotions.", en: "I keep my emotions under control.", trait: "N", dir: -1 },
    { fr: "Je ressens rarement de l'anxiété ou de la peur.", en: "I rarely feel anxious or afraid.", trait: "N", dir: -1 },
    { fr: "J'ai tendance à me sentir déprimé(e).", en: "I tend to feel depressed.", trait: "N", dir: 1 },
    { fr: "Je suis susceptible et je m'énerve facilement.", en: "I am temperamental and get emotional easily.", trait: "N", dir: 1 },

    // Openness (O) — 49-60
    { fr: "J'ai peu d'intérêts artistiques.", en: "I have few artistic interests.", trait: "O", dir: -1 },
    { fr: "Je suis curieux/curieuse de beaucoup de choses.", en: "I am curious about many different things.", trait: "O", dir: 1 },
    { fr: "Je suis inventif/inventive et je trouve des solutions créatives.", en: "I am inventive and find clever ways to do things.", trait: "O", dir: 1 },
    { fr: "Je suis fasciné(e) par l'art, la musique ou la littérature.", en: "I am fascinated by art, music, or literature.", trait: "O", dir: 1 },
    { fr: "J'évite les discussions intellectuelles ou philosophiques.", en: "I avoid intellectual or philosophical discussions.", trait: "O", dir: -1 },
    { fr: "J'ai peu de créativité.", en: "I have little creativity.", trait: "O", dir: -1 },
    { fr: "J'apprécie l'art et la beauté.", en: "I value art and beauty.", trait: "O", dir: 1 },
    { fr: "Je suis un(e) penseur/penseuse profond(e) et complexe.", en: "I am complex and a deep thinker.", trait: "O", dir: 1 },
    { fr: "J'ai du mal à imaginer les choses.", en: "I have difficulty imagining things.", trait: "O", dir: -1 },
    { fr: "Je trouve la poésie et le théâtre ennuyeux.", en: "I think poetry and plays are boring.", trait: "O", dir: -1 },
    { fr: "Je m'intéresse peu aux idées abstraites.", en: "I have little interest in abstract ideas.", trait: "O", dir: -1 },
    { fr: "Je suis original(e) et j'ai souvent de nouvelles idées.", en: "I am original and come up with new ideas.", trait: "O", dir: 1 },
];

// ── State ──
let currentQ = 0;
let lang = "fr";
const answers = new Array(questions.length).fill(null);

// ── DOM Elements ──
const screenIntro = document.getElementById("screen-intro");
const screenQuiz = document.getElementById("screen-quiz");
const screenResults = document.getElementById("screen-results");
const btnStart = document.getElementById("btn-start");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnRestart = document.getElementById("btn-restart");
const qText = document.getElementById("q-text");
const qCounter = document.getElementById("q-counter");
const qTrait = document.getElementById("q-trait");
const progressFill = document.getElementById("progress-fill");
const likertBtns = document.querySelectorAll(".likert-btn");
const resultsContainer = document.getElementById("results-container");
const langToggle = document.getElementById("lang-toggle");
const langFlag = document.getElementById("lang-flag");

// ── i18n helpers ──
function t() { return i18n[lang]; }

function applyLang() {
    const tr = t();

    document.title = tr.pageTitle;
    document.documentElement.lang = lang;
    langFlag.textContent = lang === "fr" ? "FR" : "EN";

    // Intro screen
    document.querySelector(".card-intro .subtitle").textContent = tr.subtitle;
    document.querySelector(".card-intro .desc").textContent = tr.desc;
    document.querySelector(".card-intro .info").textContent = tr.info;
    btnStart.textContent = tr.start;

    const pills = document.querySelectorAll(".trait-pills .pill");
    tr.pills.forEach((name, i) => { if (pills[i]) pills[i].textContent = name; });

    // Quiz screen
    likertBtns.forEach((btn, i) => {
        btn.querySelector(".likert-label").textContent = tr.likert[i];
    });
    btnPrev.textContent = tr.prev;

    // Results screen
    document.querySelector(".card-results .card-badge").textContent = tr.resultsBadge;
    document.querySelector(".card-results h2").textContent = tr.resultsTitle;
    btnRestart.textContent = tr.restart;

    // If on quiz screen, refresh question
    if (screenQuiz.classList.contains("active")) {
        renderQuestion();
    }

    // If on results screen, refresh results
    if (screenResults.classList.contains("active")) {
        showResults();
    }
}

// ── Navigation ──
function showScreen(screen) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
}

function renderQuestion() {
    const tr = t();
    const q = questions[currentQ];
    qText.textContent = q[lang];
    qCounter.textContent = `${currentQ + 1} / ${questions.length}`;
    qTrait.textContent = tr.traitNames[q.trait];
    progressFill.style.width = `${((currentQ + 1) / questions.length) * 100}%`;

    const traitColors = { E: "#e74c3c", A: "#3498db", C: "#2ecc71", N: "#9b59b6", O: "#f39c12" };
    qTrait.style.color = traitColors[q.trait];
    qTrait.style.background = traitColors[q.trait] + "18";

    likertBtns.forEach(btn => {
        btn.classList.remove("selected");
        if (answers[currentQ] !== null && parseInt(btn.dataset.value) === answers[currentQ]) {
            btn.classList.add("selected");
        }
    });

    btnPrev.disabled = currentQ === 0;
    btnNext.disabled = answers[currentQ] === null;
    btnNext.textContent = currentQ === questions.length - 1 ? tr.seeResults : tr.next;
}

function calculateResults() {
    const traitScores = { E: [], A: [], C: [], N: [], O: [] };

    questions.forEach((q, i) => {
        const raw = answers[i];
        const score = q.dir === 1 ? raw : (6 - raw);
        traitScores[q.trait].push(score);
    });

    const results = {};
    for (const [trait, scores] of Object.entries(traitScores)) {
        const sum = scores.reduce((a, b) => a + b, 0);
        const max = scores.length * 5;
        results[trait] = Math.round((sum / max) * 100);
    }
    return results;
}

function getLevel(score) {
    if (score >= 65) return "high";
    if (score >= 35) return "mid";
    return "low";
}

function getLevelLabel(score) {
    const tr = t();
    if (score >= 75) return tr.levels.vhigh;
    if (score >= 60) return tr.levels.high;
    if (score >= 40) return tr.levels.mid;
    if (score >= 25) return tr.levels.low;
    return tr.levels.vlow;
}

function showResults() {
    const tr = t();
    const results = calculateResults();
    const order = ["O", "C", "E", "A", "N"];

    resultsContainer.innerHTML = "";

    order.forEach((trait, index) => {
        const score = results[trait];
        const level = getLevel(score);
        const desc = tr.traitDesc[trait][level];

        const item = document.createElement("div");
        item.className = "result-item";
        item.dataset.trait = trait;
        item.innerHTML = `
            <div class="result-header">
                <span class="result-trait">${tr.traitFull[trait]}</span>
                <span class="result-score">${getLevelLabel(score)}</span>
            </div>
            <div class="result-bar-bg">
                <div class="result-bar" style="width: 0%"></div>
            </div>
            <div class="result-desc">${desc}</div>
        `;
        resultsContainer.appendChild(item);

        setTimeout(() => {
            item.querySelector(".result-bar").style.width = `${score}%`;
        }, 100 + index * 150);
    });

    showScreen(screenResults);
}

// ── Event Listeners ──
langToggle.addEventListener("click", () => {
    lang = lang === "fr" ? "en" : "fr";
    applyLang();
});

btnStart.addEventListener("click", () => {
    showScreen(screenQuiz);
    renderQuestion();
});

likertBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        answers[currentQ] = parseInt(btn.dataset.value);
        likertBtns.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        btnNext.disabled = false;
    });
});

btnNext.addEventListener("click", () => {
    if (currentQ < questions.length - 1) {
        currentQ++;
        renderQuestion();
    } else {
        showResults();
    }
});

btnPrev.addEventListener("click", () => {
    if (currentQ > 0) {
        currentQ--;
        renderQuestion();
    }
});

btnRestart.addEventListener("click", () => {
    currentQ = 0;
    answers.fill(null);
    showScreen(screenIntro);
});

// Init
applyLang();

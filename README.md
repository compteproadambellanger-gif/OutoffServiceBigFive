# Big Five - Personality Test

A minimalist and futuristic web-based Big Five (OCEAN) personality test, available in French and English.

## Features

- **60 questions** covering the 5 major personality dimensions
- **Bilingual** — switch between French and English at any time
- **Futuristic dark UI** with glassmorphism cards, glow effects, and smooth animations
- **Instant results** with animated progress bars and personalized descriptions
- **Responsive** — works on desktop, tablet, and mobile
- **No backend required** — pure HTML/CSS/JS, runs entirely in the browser

## The Big Five Traits (OCEAN)

| Trait | Description |
|-------|-------------|
| **O**penness | Creativity, curiosity, openness to new experiences |
| **C**onscientiousness | Organization, discipline, reliability |
| **E**xtraversion | Sociability, energy, assertiveness |
| **A**greeableness | Empathy, cooperation, trust |
| **N**euroticism | Emotional sensitivity, stress reactivity |

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/OutoffServiceBigFive.git
   ```
2. Place the folder in your web server's root directory (e.g. `htdocs/` for XAMPP)
3. Open `http://localhost/OutoffServiceBigFive/` in your browser

Or simply open `index.php` directly in a browser — no PHP processing is needed.

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, grid, glassmorphism, animations
- **Vanilla JavaScript** — no dependencies, no frameworks
- **Google Fonts** — Inter

## Project Structure

```
OutoffServiceBigFive/
├── index.php       # Main HTML page (3 screens: intro, quiz, results)
├── style.css       # Futuristic dark theme with responsive design
├── app.js          # Quiz logic, scoring, i18n (FR/EN)
└── README.md
```

## License

This project is open source and available under the [MIT License](LICENSE).

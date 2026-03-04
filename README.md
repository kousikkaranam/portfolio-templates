<p align="center">
  <h1 align="center">Portfolio Templates</h1>
  <p align="center">
    A curated, open-source collection of <strong>1,080+</strong> personal portfolio websites for inspiration and discovery.
  </p>
  <p align="center">
    <a href="https://github.com/kousikkaranam/portfolio-templates/stargazers"><img src="https://img.shields.io/github/stars/kousikkaranam/portfolio-templates?style=flat-square" alt="Stars"></a>
    <a href="https://github.com/kousikkaranam/portfolio-templates/network/members"><img src="https://img.shields.io/github/forks/kousikkaranam/portfolio-templates?style=flat-square" alt="Forks"></a>
    <a href="https://github.com/kousikkaranam/portfolio-templates/issues"><img src="https://img.shields.io/github/issues/kousikkaranam/portfolio-templates?style=flat-square" alt="Issues"></a>
    <a href="LICENSE"><img src="https://img.shields.io/github/license/kousikkaranam/portfolio-templates?style=flat-square" alt="License"></a>
  </p>
</p>

---

## About

**Portfolio Templates** is a searchable gallery of 1,080+ real developer and professional portfolio websites. Browse, search, and filter through portfolios to find design inspiration for your own personal site.

Built with pure HTML, CSS, and JavaScript -- no frameworks, no dependencies, no build step.

### Features

- **1,080+ Portfolios** -- Curated collection with live website previews
- **Search** -- Find portfolios by name, role, or keywords
- **Alphabetical Filter** -- Quick A-Z navigation
- **Role Filter** -- Filter by profession (Full Stack Developer, UX Designer, AI Engineer, etc.)
- **Responsive Design** -- Works on desktop, tablet, and mobile
- **Lazy Loading** -- Images load on scroll for fast performance
- **Zero Dependencies** -- Pure vanilla HTML/CSS/JS

## Demo

<p align="center">
  <img src="https://image.thum.io/get/width/1200/https://kousikkaranam.github.io/portfolio-templates/" alt="Portfolio Templates Screenshot" width="700">
</p>

## Getting Started

### Prerequisites

- A modern web browser
- (Optional) A local HTTP server for development

### Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/kousikkaranam/portfolio-templates.git
   cd portfolio-templates
   ```

2. **Start a local server** (pick any method)

   ```bash
   # Python
   python -m http.server 8000

   # Node.js
   npx serve

   # VS Code
   # Install "Live Server" extension and click "Go Live"
   ```

3. **Open in browser**

   ```
   http://localhost:8000
   ```

> **Note:** Opening `index.html` directly (via `file://`) won't work because the app fetches `portfolios.json` via HTTP.

## Project Structure

```
portfolio-templates/
├── index.html              # Main HTML page
├── script.js               # Search, filter, and rendering logic
├── style.css               # All styles (responsive grid, cards, filters)
├── data/
│   └── portfolios.json     # Portfolio database (1,080+ entries)
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   └── pull_request_template.md
├── LICENSE                  # MIT License
├── CONTRIBUTING.md          # Contribution guidelines
├── CODE_OF_CONDUCT.md       # Code of conduct
└── README.md                # You are here
```

## How It Works

| Component | Description |
|-----------|-------------|
| **Data** | `portfolios.json` stores each entry with `name`, `url`, and optional `tagline` |
| **Previews** | Live screenshots are generated via [thum.io](https://www.thum.io/) with a placeholder fallback |
| **Search** | Client-side filtering by name and tagline, combined with alphabetical and role filters |
| **Rendering** | Dynamic DOM creation with lazy-loaded images for performance |

### Data Format

Each portfolio entry in `data/portfolios.json`:

```json
{
  "name": "Jane Doe",
  "url": "https://janedoe.dev",
  "tagline": "Full Stack Developer"
}
```

## Contributing

Contributions are welcome! Whether you want to:

- **Add your portfolio** or someone else's
- **Fix a bug** or improve the UI
- **Suggest a feature**

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a pull request.

### Quick: Add a Portfolio

1. Fork the repo
2. Edit `data/portfolios.json` and add an entry:
   ```json
   {
     "name": "Your Name",
     "url": "https://yoursite.com",
     "tagline": "Your Role"
   }
   ```
3. Submit a pull request

## Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic markup |
| CSS3 | Flexbox/Grid responsive layout |
| Vanilla JS | Client-side rendering, search, and filters |
| [thum.io](https://www.thum.io/) | Live website screenshot previews |

## License

Distributed under the **MIT License**. See [LICENSE](LICENSE) for details.

## Acknowledgements

- [thum.io](https://www.thum.io/) for website screenshot generation
- All the developers and professionals whose portfolios are featured
- The open-source community for inspiration and contributions

## Author

**Kousik Karanam**

- Website: [kousikkaranam.is-a.dev](https://kousikkaranam.is-a.dev)
- GitHub: [@kousikkaranam](https://github.com/kousikkaranam)

---

<p align="center">
  If you found this useful, please consider giving it a <strong>star</strong>!
</p>

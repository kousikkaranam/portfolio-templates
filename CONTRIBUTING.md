# Contributing to Portfolio Templates

Thank you for your interest in contributing! This guide will help you get started.

## How to Contribute

### Add a Portfolio

1. Fork the repository
2. Open `data/portfolios.json`
3. Add a new entry in the following format:
   ```json
   {
     "name": "Full Name",
     "url": "https://example.com",
     "tagline": "Professional Role"
   }
   ```
4. Make sure:
   - The URL is a valid, live personal portfolio website
   - The name is the real name of the portfolio owner
   - The tagline accurately describes the person's role (optional but encouraged)
   - The entry doesn't already exist in the file
5. Submit a pull request

### Report a Bug

- Open an [issue](https://github.com/kousikkaranam/portfolio-templates/issues/new?template=bug_report.md)
- Describe the bug clearly with steps to reproduce
- Include screenshots if applicable

### Suggest a Feature

- Open an [issue](https://github.com/kousikkaranam/portfolio-templates/issues/new?template=feature_request.md)
- Describe the feature and why it would be useful

### Fix a Bug or Add a Feature

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Test locally by running a local server and verifying everything works
5. Commit your changes: `git commit -m "Add: brief description of change"`
6. Push to your fork: `git push origin feature/your-feature-name`
7. Open a pull request

## Guidelines

- **Keep it simple.** This project uses vanilla HTML, CSS, and JS. No frameworks or build tools.
- **Test your changes.** Open the site locally and verify search, filters, and cards work correctly.
- **One portfolio per entry.** Don't add duplicate URLs.
- **Respect privacy.** Only add publicly available portfolio websites.
- **Follow existing code style.** Match the indentation and formatting of existing code.

## Commit Message Format

Use clear, descriptive commit messages:

```
Add: portfolio entry for Jane Doe
Fix: search filter not matching taglines
Update: improve card hover animation
```

## Code of Conduct

By contributing, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Questions?

Feel free to open an issue if you have any questions. We're happy to help!

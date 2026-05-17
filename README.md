# Lan Luu – Portfolio

Personal portfolio website for Lan Luu, CS senior at Portland State University.

## Live Site

[https://lanluu-hub.github.io](https://lanluu-hub.github.io)

## Running Locally

No build step required. Just open `index.html` in a browser, or use a local dev server:

```bash
# Using Python
python -m http.server 8000

# Using Node (npx)
npx serve .
```

Then open `http://localhost:8000`.

## Project Structure

```
portfolio/
├── index.html      # Single-page site
├── styles.css      # All custom styles
├── script.js       # Interactivity (nav scroll, form validation, active links)
├── images/         # Local photos (profile, WorldSkills, etc.)
└── README.md
```

## Technologies Used

- HTML5 (semantic markup)
- CSS3 (custom properties, flexbox, grid)
- JavaScript (ES6+, IntersectionObserver, form validation)
- [Bootstrap 5.3.3](https://getbootstrap.com/) – layout, navbar, carousel, accordion, modals
- [Google Fonts](https://fonts.google.com/) – Space Mono, DM Sans

## Deployment

Deployed via GitHub Pages.

Go to **Settings → Pages → Source**, select branch `main`, click **Save**.

## Outside Sources

- Bootstrap 5 documentation: https://getbootstrap.com/docs/5.3/
- MDN Web Docs (IntersectionObserver): https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- Google Fonts: https://fonts.google.com/

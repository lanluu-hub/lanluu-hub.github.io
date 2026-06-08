# Lan Luu – Portfolio

Personal portfolio website for Lan Luu, CS senior at Portland State University.

## Live Site

[https://lanluu-hub.github.io](https://lanluu-hub.github.io)

## GitHub Repo

[https://github.com/lanluu-hub/lanluu-hub.github.io](https://github.com/lanluu-hub/lanluu-hub.github.io)

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
├── style.css       # All custom styles
├── script.js       # Form validation and interactivity
├── images/         # Local photos and project images
└── README.md
```

## Technologies Used

- HTML5 (semantic markup)
- CSS3 (custom properties, flexbox)
- JavaScript ES6+ (async/await, fetch, DOM manipulation, form validation)
- [Bootstrap 5.3.3](https://getbootstrap.com/) – layout, navbar, carousel, accordion, modals
- [Google Fonts](https://fonts.google.com/) – Space Mono, DM Sans
- [Formspree](https://formspree.io/) – contact form email delivery

## Sections

- **Hero** – Full-viewport Bootstrap carousel with personal photos
- **About** – Two-column layout with photo and bio, skill badges
- **Experience** – Bootstrap accordion with work history
- **Projects** – Bootstrap cards with modals for ChocAn, Connect Four AI, and Strings DSL Interpreter
- **Contact** – Form with client-side JS validation and Formspree integration
- **Footer** – Copyright and PSU email

## Outside Sources

- Bootstrap 5.3 docs: https://getbootstrap.com/docs/5.3/
- Bootstrap Carousel: https://getbootstrap.com/docs/5.3/components/carousel/
- Bootstrap Accordion: https://getbootstrap.com/docs/5.3/components/accordion/
- Bootstrap Form Validation: https://getbootstrap.com/docs/5.3/forms/validation/
- Google Fonts: https://fonts.google.com/
- PSU Brand Colors: https://www.pdx.edu/university-communications/tools-and-templates/brand-colors
- MDN Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- MDN FormData: https://developer.mozilla.org/en-US/docs/Web/API/FormData
- Formspree AJAX docs: https://help.formspree.io/hc/en-us/articles/360013470814
- W3Schools JS Validation: https://www.w3schools.com/js/js_validation.asp
- MDN Form Validation: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation
- WAVE Web Accessibility Tool: https://wave.webaim.org/
- GitHub SVG icon: https://github.com/logos
- ChatGPT – project image generation and README.md text refine

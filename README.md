# Glowsoft website

A responsive multi-page corporate website for the Glowsoft digital technology brand.

## Included
- Home, About, Services, Contact, Privacy, Terms, Cookies and enquiry success pages
- Responsive navigation and layout
- Contact form (Formspree)
- Cookie preference banner (essential-only vs accept)
- SEO metadata, sitemap, robots.txt, favicon and basic security headers
- No invented company registration, staff, client names, customer reviews, founding date, revenue or performance claims

## Deploy (GitHub Pages)
1. Create a GitHub repo and upload the contents of this folder to the repo root.
2. Repo Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. Custom domain: the `CNAME` file points to `glowsoft.store`. Add DNS records at your registrar (A records for 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153; `www` CNAME to `<username>.github.io`), then tick "Enforce HTTPS".
   - No custom domain? Delete `CNAME` and update URLs in `sitemap.xml` and `robots.txt`.

## Contact form
GitHub Pages is static, so the form uses Formspree (free tier).
1. Create a form at formspree.io and copy its ID.
2. In `contact.html`, replace `YOUR_FORM_ID` in the form action.
3. In the Formspree form settings, set the redirect/thank-you URL to `https://glowsoft.store/success.html`.

## Booking
The site currently offers a consultation request through the contact form. It does not falsely confirm appointment availability. Connect a real Cal.com/Calendly booking URL only after setting up the calendar and availability.

## Customization
- Main styles: `css/styles.css`
- Navigation, cookie preference and year: `js/main.js`
- Pages: root-level HTML files
- Domain references: sitemap and robots.txt

## Local preview
Open `index.html` in a browser. For a local server, run:
`python -m http.server 8000`
Then visit `http://localhost:8000`.

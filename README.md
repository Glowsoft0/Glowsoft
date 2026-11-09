# Glowsoft website

A responsive multi-page corporate website for the Glowsoft digital technology brand.

## Included
- Home, About, Services, Contact, Privacy, Terms, Cookies and enquiry success pages
- Responsive navigation and layout
- Contact form configured for Netlify Forms
- Cookie preference banner (essential-only vs accept)
- SEO metadata, sitemap, robots.txt, favicon and basic security headers
- No invented company registration, staff, client names, customer reviews, founding date, revenue or performance claims

## Deploy

### Netlify (recommended for the included contact form)
1. Create or sign in to a Netlify account.
2. Deploy this folder or the ZIP contents as a static site.
3. In the Netlify site dashboard, confirm Forms detection is enabled and redeploy if prompted.
4. Submit a real test enquiry after deployment and confirm it appears in the Netlify Forms dashboard.
5. Connect `glowsoft.store` in Domain management and follow Netlify's DNS instructions at your registrar.
6. Enable HTTPS and verify the domain and `www` redirect.

The form uses Netlify Forms markup. It will not collect submissions when opened locally or hosted on a provider that does not support Netlify Forms.

## Before public launch
This is publishable general brand copy, but the operator must verify and add its real business details:
- Exact legal entity name and registration details, if applicable
- Actual business address and monitored email/phone
- Actual service availability, delivery capacity and markets served
- Actual team biographies and headshots, if you choose to publish them
- Genuine, permissioned customer testimonials and case studies, if available
- Final privacy/terms review against the real operator, data flows and governing law
- Real social profile URLs
- Any actual booking calendar URL or scheduling integration

Do not claim Singapore incorporation, an ACRA registration number, Singapore office, employee count, customer count, country coverage, certifications or customer results unless verified and supportable.

## Contact form
The form asks for name, work email, company, service interest and project details. Netlify processes it after deployment. Configure form notification recipients in the Netlify dashboard. No mailbox address has been invented or embedded.

## Booking
The site currently offers a consultation request through the contact form. It does not falsely confirm appointment availability. Connect a real Cal.com/Calendly booking URL only after setting up the calendar and availability.

## Customization
- Main styles: `assets/styles.css`
- Navigation, cookie preference and year: `assets/main.js`
- Pages: root-level HTML files
- Domain references: sitemap and robots.txt

## Local preview
Open `index.html` in a browser. For a local server, run:
`python -m http.server 8000`
Then visit `http://localhost:8000`.

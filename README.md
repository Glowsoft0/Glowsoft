# Glowsoft website — glowsoft.xyz

A responsive multi-page website for the Glowsoft digital technology brand.

## Important business-identity note
This repository does not establish a legal company registration, registered address, employee count, customer list, or company history. Do not add such claims unless the owner can substantiate them. The legal operator's full identity and address still need to be supplied if required for the business's jurisdiction and target markets.

## Pages
- Home, About, Services, Contact
- Privacy Policy, Website Terms, Cookie Notice
- Enquiry confirmation and 404 pages

## GitHub Pages deployment
1. Upload the contents of this repository to the root of the GitHub Pages repository.
2. In repository Settings → Pages, select deployment from the `main` branch and `/ (root)`.
3. The `CNAME` file is set to `glowsoft.xyz`. At the domain registrar, configure the GitHub Pages DNS records exactly as shown in GitHub's current documentation and verify the domain.
4. Configure the `www` hostname only if you intend to use it; point it to the correct GitHub Pages hostname and configure the preferred redirect/canonical host.
5. Wait for GitHub Pages to issue the certificate, then enable Enforce HTTPS.
6. Verify both `https://glowsoft.xyz` and the alternate hostname in a browser.

Do not remove or overwrite existing MX, SPF, DKIM, or DMARC records while changing website DNS.

## Contact form — required activation step
The contact form posts to `https://formsubmit.co/support@glowsoft.xyz` and requests a redirect to `https://glowsoft.xyz/success.html`.

**The owner must complete FormSubmit's one-time email activation.**
1. Publish the site with the form action in place.
2. Submit one genuine test enquiry using an email address you control.
3. Check the inbox for `support@glowsoft.xyz` for FormSubmit's activation/confirmation message.
4. Follow the activation link sent by FormSubmit.
5. Submit a second test enquiry and confirm the message arrives at `support@glowsoft.xyz` and the browser redirects to the success page.
6. Check spam/junk and verify the reply-to address is the visitor's submitted email.
7. If the activation email does not arrive, inspect FormSubmit's current setup guidance and do not claim the form is live until delivery is proven.

FormSubmit is a third-party service. Its current privacy terms should be reviewed. The privacy notice identifies this provider because it receives contact form submissions. If you replace the provider, update the privacy notice accordingly.

## Email
Public contact address: `support@glowsoft.xyz`.

The website change does not create this mailbox. Ensure the address exists, can receive mail, and is monitored. Configure SPF, DKIM and DMARC with the actual email provider's DNS values. Do not copy example DNS records from unrelated providers.

## Final verification
- Test every page and navigation link on the published domain.
- Test contact-form delivery and confirmation.
- Verify HTTPS, DNS, email authentication, sitemap and robots.txt.
- Review the privacy notice against the actual operator, hosting provider, email provider and form-processing arrangement.
- Add the legal operator's identity and registered address where legally required.
- Do not publish unsupported business claims or fabricated testimonials.

## Local preview
Run `python -m http.server 8000` in this directory and open `http://localhost:8000`.

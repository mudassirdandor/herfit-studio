# HERFIT STUDIO
## QA and Launch Checklist

Use this checklist to validate the reusable website template and each customized client deployment.

### A. Functional Checks

- [ ] Desktop navigation works.
- [ ] Mobile navigation opens, closes, and navigates correctly.
- [ ] All internal links target the correct sections.
- [ ] Weekly schedule selection updates the displayed content.
- [ ] Pricing toggle updates amounts and labels consistently.
- [ ] BMI calculator validates input and displays a clear disclaimer.
- [ ] FAQ accordion works with mouse, touch, and keyboard.
- [ ] Trial form validates required fields.
- [ ] WhatsApp link uses the configured business number.
- [ ] WhatsApp message is correctly encoded.
- [ ] Booking instructions make clear that sending a message does not guarantee confirmation.
- [ ] Chatbot answers configured FAQs and handles unknown questions appropriately.
- [ ] Footer and floating contact links work.
- [ ] No broken external links or missing assets remain.

### B. Responsive Checks

- [ ] Test at approximately 360px and 390px mobile widths.
- [ ] Test at 768px tablet width.
- [ ] Test at 1024px and 1440px desktop widths.
- [ ] No horizontal overflow.
- [ ] No overlapping content or floating buttons.
- [ ] Text remains readable and buttons are touch-friendly.
- [ ] Images scale correctly without distortion.
- [ ] Navigation and forms remain usable on smaller screens.

### C. Accessibility Checks

- [ ] Semantic headings and landmarks are used.
- [ ] Form fields have associated labels.
- [ ] Buttons and links have meaningful accessible names.
- [ ] Keyboard focus is visible.
- [ ] Tab order is logical.
- [ ] Accordion and tab states are exposed accessibly.
- [ ] Color contrast is sufficient.
- [ ] Images have suitable alt text.
- [ ] Reduced-motion preferences are respected.

### D. Performance and SEO Checks

- [ ] Production build completes successfully.
- [ ] Images are optimized and appropriately sized.
- [ ] Fonts and external assets have been reviewed.
- [ ] Page title and meta description are present.
- [ ] Open Graph metadata and favicon are configured.
- [ ] Canonical URL points to the correct production domain.
- [ ] Sitemap and robots configuration match the deployment.
- [ ] Staging is not accidentally indexed.
- [ ] Structured data uses accurate client information.
- [ ] No critical console or network errors remain.

### E. Security and Privacy Checks

- [ ] No credentials or API keys are exposed in frontend code.
- [ ] No unnecessary personal data is collected.
- [ ] BMI inputs are not persisted.
- [ ] Form behavior matches the actual implementation.
- [ ] Privacy statements match actual data handling.
- [ ] External links use appropriate security attributes.
- [ ] Any third-party analytics or integrations are documented and approved.

### F. Client Customization Checks

- [ ] Client name and logo updated.
- [ ] Brand colors and visual assets approved.
- [ ] Contact number and address verified.
- [ ] Hours and schedule confirmed.
- [ ] Programs and prices confirmed.
- [ ] Trainer details and credentials verified.
- [ ] Testimonials approved.
- [ ] Social media URLs verified.
- [ ] SEO metadata updated.
- [ ] Domain and hosting configured.
- [ ] Client has approved the final website.

### G. Deployment Checks

- [ ] Correct production build deployed.
- [ ] Domain resolves correctly.
- [ ] HTTPS works.
- [ ] Live website opens on mobile and desktop.
- [ ] Contact and WhatsApp links tested on the live site.
- [ ] Critical forms and interactions tested.
- [ ] Metadata and social preview checked.
- [ ] Client has received source code and handover instructions.

### Release Record

Project: __________________________

Client: __________________________

Production domain: __________________________

Build command and result: __________________________

QA date: __________________________

Outstanding issues: __________________________

Client approval: __________________________

Release status: __________________________
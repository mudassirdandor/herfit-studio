# Antigravity Build Prompt — HerFit Studio Ladies Gym Website

Before implementation, read `AGENTS.md`, `GUARDRAILS.md`, `docs/FOCUSED_INSTRUCTIONS.md`, all four DOCX documents in `docs/`, and `CONTENT_VERIFICATION_REQUIRED.md`. Treat these files as mandatory project instructions. Do not begin coding until you have inspected the repository and source prototype.

You are the implementation agent. Turn `public/sample-gym-website-reference.html` into a production-quality, maintainable website for a real ladies gym serving Quetta. Read all four DOCX documents in `docs/` first and follow them as the source of requirements.

## Mandatory Rules

1. The HTML is a visual/behavioral reference only. Do not deploy it as-is.
2. Do not invent or silently publish business facts. Phone number, exact address, opening hours, fees, trainer identities/credentials, testimonials, privacy claims, photos, and offers are unverified sample content. Put them in a central configuration file and flag every unconfirmed value. Where a fact is not verified, use an obvious placeholder or omit that content from the release build.
3. Keep the original reference file unchanged.
4. Build with Vite + React + TypeScript. Use reusable components, semantic HTML, responsive CSS, and minimal dependencies.
5. Reproduce the warm, premium, women-focused visual direction: off-white background, deep teal, rose accents, sage surfaces, serif display headings, and clean sans-serif body typography. Improve the original for accessibility, performance, and mobile.
6. Build all sections and interactions described in the Master Production Brief. Shared values—hours, prices, schedule, contact number, and FAQ answers—must come from one typed data/config source.
7. The trial form is a WhatsApp handoff, not a backend booking system. Validate inputs, encode the message, and clearly explain that the user must press Send and that the gym must confirm the booking. Do not claim a reservation is confirmed.
8. The chat assistant must be labeled as automated and answer only configured, verified FAQs. Unknown questions must route to the official contact channel.
9. The BMI calculator is optional, does not store inputs, includes a non-medical disclaimer, and makes no diagnostic or guaranteed-outcome claims.
10. Do not use fake testimonials, fabricated ratings, unverified certifications, or guaranteed weight-loss claims. Remove reviews if genuine approved content is unavailable.
11. Replace the huge embedded base64 images with optimized local assets. Do not use unlicensed or non-consensual images. Use suitable placeholder assets only during development and make them easy to replace.
12. Implement SEO metadata, favicon, Open Graph tags, `robots.txt`, and sitemap placeholders. Configure the final canonical URL and local business structured data only after the real domain and business details are confirmed.
13. Do not claim deployment or testing succeeded unless you actually ran the commands and verified the result.

## Execution Sequence

- Inspect the repository and all source files.
- Write a concise plan, then scaffold the app.
- Implement components and typed content configuration.
- Add README setup/build/deploy instructions.
- Run installation, lint/type checks if configured, and production build.
- Fix all errors and warnings that materially affect production.
- Test mobile/desktop layout, keyboard accessibility, WhatsApp links, schedule, pricing toggle, FAQ, form validation, and calculator.
- Produce `QA_REPORT.md` with checks performed, actual outcomes, known limitations, and all owner confirmations still needed.
- Leave a deployable `dist/` build only after a successful build. Do not deploy without the owner-approved hosting/domain credentials and explicit deployment authorization.

## Final Response Format

Report:

- What you implemented
- Main files/components created
- Commands actually run and results
- Functional/accessibility/SEO tests actually completed
- Unverified business facts still blocking publication
- Exact next steps to deploy to the chosen host
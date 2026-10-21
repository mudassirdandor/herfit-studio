# Focused Instructions — Antigravity Build and Release

This document converts the project brief into task-specific execution instructions. Follow `AGENTS.md` and `GUARDRAILS.md` first.

## A. Repository Reconnaissance

1. Inspect the current directory, package files, source tree, Git status if available, and existing scripts before changing anything.
2. Read the four project DOCX briefs and the content verification register.
3. Inspect the original sample HTML for all sections, interactions, links, and assets.
4. Report any mismatch between the sample, documents, and existing repository. Do not silently resolve business-data conflicts by choosing a value.

## B. Build Sequence

1. Scaffold Vite + React + TypeScript if a suitable app does not already exist.
2. Establish design tokens based on the sample: warm off-white, deep teal, rose, sage, serif display headings, and readable sans-serif body text.
3. Create typed central configuration for:
   - Brand and SEO
   - Address and contact / WhatsApp
   - Opening hours and women-only session hours
   - Programs and weekly schedule
   - Membership prices, admission fees, and offer terms
   - Verified testimonials
   - FAQ answers and support hours
   - Image assets and social links
4. Keep unverified data clearly marked and prevent accidental release with a documented release checklist.
5. Implement reusable, semantic components for:
   - Header, navigation, and hero
   - Benefits and programs
   - Weekly schedule
   - Opening hours
   - Optional BMI widget
   - Pricing and pricing-period toggle
   - Verified testimonials; omit if none are approved
   - FAQ accordion
   - Trial request / WhatsApp handoff
   - Clearly labeled FAQ chatbot
   - Footer and contact CTA
6. Preserve the original HTML file unchanged under `public/sample-gym-website-reference.html` or another reference-only path.
7. Replace base64 image blobs with optimized local assets that have confirmed rights and suitable alt text.
8. Add responsive behavior, keyboard operation, visible focus, form validation, and reduced-motion support.
9. Add metadata, Open Graph tags, favicon, `robots.txt`, and `sitemap.xml`. Configure canonical URL and structured data only when the real domain and verified business details are known.
10. Update README with prerequisites, commands, environment configuration, testing, and deployment steps.

## C. Implementation Constraints

- Use minimal dependencies and do not add a backend unless explicitly requested.
- Do not persist form submissions or BMI inputs.
- A WhatsApp CTA must use the configured verified number and URL-encode its message.
- A WhatsApp handoff is not a confirmed booking. Clearly communicate this to users.
- The chatbot must answer only from verified configuration data and route unknown questions to the official contact channel.
- Keep prices, hours, schedule, and contact details consistent across all sections and generated messages.
- Do not publish sample reviews, fake metrics, unverified trainer credentials, or unconfirmed offers.

## D. Required Validation

Run commands supported by the actual project, such as:

- Dependency installation
- Lint, if configured
- TypeScript check, if configured
- Unit/component tests, if configured
- Production build
- Local preview and smoke tests

Record exact commands and outcomes in `QA_REPORT.md`. Never invent test results. Fix failures where feasible; otherwise report them as blockers.

Manually test at common viewport widths around 360px, 390px, 768px, 1024px, and 1440px. Check navigation, schedule, price toggle, FAQ, calculator, form validation, WhatsApp URL, image loading, and console errors.

## E. Release/Deployment Protocol

- Do not deploy until the user explicitly authorizes deployment and provides or has connected the intended hosting/domain.
- Do not commit credentials or expose secrets in frontend code.
- Do not point canonical metadata or sitemap to a guessed domain.
- Do not enable indexing for staging.
- Keep `CONTENT_VERIFICATION_REQUIRED.md` up to date.
- Create `RELEASE_BLOCKERS.md` if any required business details or checks remain unresolved.
- Deployment can be reported as complete only after the live URL is opened and smoke-tested.

## F. Final Handoff

Provide a concise but specific report:

1. Implementation summary
2. File/component map
3. Actual commands run and results
4. QA results and untested items
5. Business facts still awaiting confirmation
6. Deployment prerequisites and next action
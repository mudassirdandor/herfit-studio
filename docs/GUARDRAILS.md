# GUARDRAILS.md — Non-Negotiable Project Constraints

These guardrails apply to all agents, code changes, content generation, testing, and deployment.

## 1. Business Truth and Placeholders

- The supplied HTML is a prototype, not proof that HerFit Studio exists or that its details are accurate.
- Treat every sample claim as unverified until the business owner confirms it: brand name, address, phone/WhatsApp, opening hours, ladies-only policies, staff names and credentials, programs, prices, offers, reviews, ratings, member counts, and statistics.
- Do not invent facts to make the page look complete.
- Use explicit placeholders in development and keep a visible verification register. Do not publish unresolved placeholders or unverified claims.
- If a business fact is unavailable, either omit the content or mark it as blocked pending owner confirmation.

## 2. Reviews, Imagery, and Identity

- Never fabricate testimonials, Google reviews, ratings, awards, credentials, or customer counts.
- Publish a testimonial only when it is genuine, approved for use, and attributed accurately.
- Use only assets the owner has rights and consent to publish. Avoid images that reveal gym members or private spaces without permission.
- Replace the prototype's huge inline base64 images with appropriately sized, optimized assets.
- Do not impersonate another gym or imply that sample content belongs to a real business without authorization.

## 3. Privacy and Security

- Do not add analytics, pixels, third-party chat services, form storage, CRM integrations, or external tracking without an explicit project requirement and accurate privacy disclosure.
- Never commit API keys, passwords, access tokens, customer contact data, or other secrets.
- The default trial form is a client-side WhatsApp handoff, not a server-backed booking system. Tell visitors they must press Send and that the gym must confirm the booking.
- Do not claim a booking was received or confirmed unless the actual system provides evidence.
- Avoid collecting unnecessary personal data. Do not persist BMI inputs or infer health status.
- If a backend or data storage is later requested, document data flows, retention, access controls, validation, and consent before implementation.

## 4. Health and Fitness Claims

- Do not promise guaranteed weight loss, body transformations, medical outcomes, or treatment.
- BMI is a rough screening measure, not a diagnosis or individualized medical advice. If retained, display a concise disclaimer and handle invalid input safely.
- Do not provide personalized medical recommendations through the chatbot. Direct health-related questions to an appropriately qualified professional.

## 5. External Actions and Deployment

- Do not deploy, purchase domains, change DNS, create paid resources, or modify production services without explicit authorization for that action and the required access.
- Do not claim publication, domain connection, indexing, booking delivery, or third-party integration unless actually verified.
- Keep production and staging environments distinct. Do not index staging.
- Never expose credentials in browser-visible environment variables or client bundles.

## 6. Quality and Accessibility

- Do not remove working features without documenting the reason.
- Do not leave broken navigation, dead CTAs, placeholder links, uncaught errors, or knowingly broken responsive states.
- Use accessible names, semantic controls, visible focus, logical keyboard order, appropriate contrast, and reduced-motion support.
- Do not use color alone to communicate essential information.
- Do not ignore build, type-check, lint, or test failures. Fix them or clearly report why they remain.

## 7. Release Gate

A successful build alone does not equal production readiness. Do not label the website ready to publish until:

1. Required business facts are confirmed or the associated content is removed.
2. Asset rights and consent are confirmed.
3. Functional and responsive checks have been run.
4. Accessibility and SEO checks have been reviewed.
5. Build output is verified.
6. Final domain, hosting, and privacy details are configured.
7. The owner has approved the release.

If any gate is blocked, provide a precise list of blockers and keep the site in development/staging.
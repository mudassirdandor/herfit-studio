# HERFIT STUDIO
## Implementation Plan
**Google Antigravity Execution Roadmap**

### Milestone 1 — Inspect the Source

1. Inspect the project directory and all existing files.
2. Read the supplied HTML completely.
3. Identify all page sections, images, scripts, links, forms, and interactive elements.
4. Record existing functionality that should be preserved or improved.
5. Keep the original HTML unchanged as a reference.
6. Create a concise implementation plan before editing.

### Milestone 2 — Build the Application Foundation

1. Create a Vite + React + TypeScript application.
2. Configure development, production build, and preview commands.
3. Establish the global color palette, typography, spacing, and responsive design tokens.
4. Create a maintainable folder structure.
5. Add only dependencies that provide a clear benefit.

Suggested structure:

- `src/components/`
- `src/sections/`
- `src/config/gym.ts`
- `src/assets/`
- `src/styles/`
- `src/App.tsx`
- `public/`
- `docs/`

Adjust this structure to the project's actual needs rather than creating empty folders unnecessarily.

### Milestone 3 — Create the Business Configuration

Create a typed central configuration for the gym's identity, contact information, schedule, programs, prices, trainers, reviews, FAQs, images, social links, and SEO metadata.

Keep the existing fictional HerFit Studio information in the configuration so the website is immediately presentable.

Do not add visible demo labels or warnings to the design.

Make client customization possible by editing the configuration and replacing the relevant assets, rather than modifying many separate components.

### Milestone 4 — Implement the Website

Implement the page in a logical order:

1. Header, contact strip, and responsive navigation
2. Hero section and primary CTA
3. Benefits and program cards
4. Weekly class schedule
5. Opening hours
6. Optional BMI calculator
7. Membership packages and pricing toggle
8. Trainer profiles
9. Testimonials
10. FAQ accordion
11. Trial inquiry form and WhatsApp handoff
12. FAQ chatbot
13. Footer and floating contact button

Match the reference's visual identity while improving consistency, spacing, readability, and responsiveness.

### Milestone 5 — Replace Prototype Technical Shortcomings

- Remove oversized inline base64 image payloads from the production implementation.
- Use optimized, appropriately licensed image files.
- Remove dead scripts and duplicate styles.
- Consolidate repeated business data.
- Add form validation and clear error states.
- Ensure external links use appropriate behavior.
- Avoid unnecessary data storage.
- Improve accessibility and keyboard operation.

### Milestone 6 — SEO and Performance

- Add a suitable title and meta description.
- Add Open Graph metadata and a favicon.
- Configure canonical URL and sitemap for the actual deployment domain.
- Ensure staging environments are not indexed.
- Add structured data only when supported by accurate business information.
- Optimize images and fonts.
- Test responsive behavior and page loading.

### Milestone 7 — Quality Assurance

Run the available project checks, including:

- Dependency installation
- Linting, if configured
- TypeScript checking, if configured
- Automated tests, if configured
- Production build
- Local preview

Manually test:

- Desktop and mobile navigation
- Schedule day selection
- Pricing-period toggle
- FAQ accordion
- BMI calculator validation
- Trial form validation
- WhatsApp message generation
- Chatbot FAQ answers and unknown-question fallback
- Image loading and links
- Keyboard navigation and visible focus
- Responsive layout at common viewport sizes

Record actual results in `QA_REPORT.md`. Do not claim tests passed if they were not run.

### Milestone 8 — Client Customization and Handover

Create a clear guide for replacing:

- Gym name, logo, and colors
- Contact number and address
- Hours and class schedules
- Programs and membership packages
- Trainers and qualifications
- Photos and testimonials
- Social links
- SEO metadata and domain

Include instructions for rebuilding and deploying the customized site.

### Milestone 9 — Deployment

Prepare deployment instructions for a static hosting platform.

Do not deploy to a real client's domain, change DNS, or modify a live hosting account without explicit authorization.

After a client-specific deployment, verify the live URL, HTTPS, contact links, mobile layout, metadata, and essential interactions.

### Completion Report

At the end, provide:

- Implemented features
- Files created or changed
- Commands actually run
- Build and test results
- Known limitations
- Instructions for customizing the next client's website
- Remaining deployment steps
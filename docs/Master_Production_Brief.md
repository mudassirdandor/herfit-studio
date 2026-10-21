# HERFIT STUDIO
## Master Production Brief
**Production-Ready, Reusable Ladies Gym Website Template**

### 1. Project Objective

Transform the supplied single-file HTML website into a complete, production-quality, responsive website using Google Antigravity.

The website represents a fictional ladies gym brand called **HerFit Studio**, located in Quetta, Pakistan. It is intended to serve as a premium website template that can be presented to prospective gym owners. When a client purchases the service, the website will be customized with that client's actual business information, branding, content, and assets.

The public-facing website must look and behave like a real business website. Do not add demo banners, sample-site warnings, placeholder notices, or development messages to the visible design.

The project must be built so that business-specific information can be replaced quickly without rewriting the application.

### 2. Target Audience and Purpose

- Ladies gyms and women's fitness studios in Quetta and other Pakistani cities.
- Gym owners who want a professional online presence.
- Businesses that need to display programs, membership packages, trainers, schedules, opening hours, and contact information.
- Prospective customers who want to understand the gym's services and enquire about membership or a trial session.

### 3. Existing Website Features

Inspect and preserve the useful functionality and visual direction of the supplied reference HTML:

- Contact strip and responsive navigation
- Hero section with primary call to action
- Gym benefits and features
- Fitness programs and classes
- Weekly class schedule
- Opening hours
- BMI calculator
- Membership pricing and pricing-period toggle
- Trainer profiles
- Testimonials and reviews
- Frequently asked questions
- Trial inquiry form
- WhatsApp contact button
- FAQ chatbot
- Footer and contact information

Improve the implementation wherever necessary for accessibility, mobile responsiveness, performance, maintainability, and production reliability.

### 4. Required Technology

Use Vite, React, and TypeScript unless the existing repository has a strong technical reason to retain a different stack.

Requirements:

- Reusable React components
- Typed, centralized business configuration
- Responsive CSS and mobile-first layouts
- Semantic HTML and accessible controls
- Optimized image assets
- Search engine metadata
- Minimal dependencies
- Clear development, build, testing, and deployment instructions

### 5. Centralized Client Configuration

Create a file such as `src/config/gym.ts` containing all replaceable business information:

- Business name and tagline
- Logo and brand colors
- Phone and WhatsApp number
- Address, map link, and service area
- Opening hours
- Programs and class descriptions
- Weekly schedule
- Membership prices and package inclusions
- Trainer profiles and qualifications
- Testimonials
- Trial booking terms
- Frequently asked questions
- Social media URLs
- SEO title and description
- Image paths
- Website domain and canonical URL

All website sections must read from this configuration wherever practical. Avoid hardcoding the same contact number, price, schedule, or business name in multiple components.

Provide a simple customization guide explaining how to update the configuration for a new gym client.

### 6. Design Direction

Retain the premium, feminine fitness aesthetic of the source:

- Warm off-white background
- Deep teal primary color
- Rose accent
- Sage supporting surfaces
- Serif display headings
- Clean, readable sans-serif body typography
- Strong visual hierarchy
- High-quality photography
- Clear calls to action
- Professional spacing and responsive cards

The design should feel trustworthy, modern, premium, and suitable for a real ladies gym.

### 7. Functional Requirements

**Navigation:** All links must work correctly on desktop and mobile.

**Weekly schedule:** Day selection must update the displayed classes accurately and remain keyboard accessible.

**Pricing toggle:** Switching between monthly and quarterly plans must update the relevant prices, labels, and terms consistently.

**BMI calculator:** Validate inputs and show the calculated result with a concise explanation that BMI is a rough screening measure, not medical advice. Do not store entered values.

**FAQ accordion:** Support keyboard interaction and expose expanded/collapsed state accessibly.

**Trial inquiry:** Validate required fields and create a correctly encoded WhatsApp message. Clearly explain that the visitor must send the message and that the gym must confirm the booking.

**Chatbot:** Use a lightweight FAQ assistant based on configured information. Label it as an automated assistant when appropriate. Unknown questions should be directed to the configured contact channel.

**Contact links:** Use the centralized contact configuration.

**Pricing and schedule consistency:** The same data source must drive the visible sections and related FAQ answers.

### 8. Production Engineering

- Replace large embedded base64 images with appropriately sized local assets.
- Use optimized WebP or AVIF images where practical.
- Provide suitable alternative text.
- Lazy-load below-the-fold images where appropriate.
- Avoid layout shifts and horizontal overflow.
- Include visible keyboard focus and reduced-motion support.
- Validate forms and handle missing configuration safely.
- Keep credentials and API keys out of frontend source.
- Avoid unnecessary tracking or collection of personal data.
- Add appropriate SEO metadata, Open Graph tags, favicon, `robots.txt`, and sitemap configuration.
- Add structured business data only when the relevant information is accurate for the actual deployed business.
- Ensure the production build completes successfully.

### 9. Reusable Client Handover

Include:

1. A working React + TypeScript source project.
2. Centralized gym configuration.
3. Reusable UI components.
4. Optimized assets and asset replacement guidance.
5. README with setup, build, and deployment instructions.
6. Client customization checklist.
7. QA and launch checklist.
8. A list of required client information.
9. Deployment instructions for a suitable static hosting platform.
10. Source-code handover instructions.

### 10. Definition of Done

The template is ready for presentation when:

- The production build succeeds.
- All intended interactions work.
- Mobile, tablet, and desktop layouts have been checked.
- No broken links, missing assets, or critical console errors remain.
- Accessibility and SEO basics have been reviewed.
- The source project is maintainable and straightforward to customize.
- The README and client handover instructions are complete.

A client-specific launch is complete only after the real client's details, assets, testimonials, domain, and operational information have been supplied and verified, followed by a successful build and live-site check.

Do not claim testing or deployment was completed unless it actually was.
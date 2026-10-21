# AGENTS.md — HerFit Studio Production Website

## Mission

Build and maintain a production-quality, responsive website for a real women-only gym serving Quetta, using the supplied sample HTML as a visual and functional reference. The sample is not authoritative business data and must never be published unchanged.

## Read These Files First

1. `docs/01_Master_Production_Brief.docx`
2. `docs/02_Implementation_Plan.docx`
3. `docs/03_Content_and_Config_Register.docx`
4. `docs/04_QA_and_Launch_Checklist.docx`
5. `GUARDRAILS.md`
6. `docs/FOCUSED_INSTRUCTIONS.md`
7. `CONTENT_VERIFICATION_REQUIRED.md`
8. `public/sample-gym-website-reference.html` — reference only

If a required file cannot be read, report that limitation and proceed only with requirements that are clear.

## Priority Order

When instructions conflict, follow this order:

1. User's latest explicit instruction
2. `GUARDRAILS.md` — safety, factual integrity, privacy, and release gates
3. `docs/01_Master_Production_Brief.docx`
4. `docs/02_Implementation_Plan.docx`
5. `docs/03_Content_and_Config_Register.docx`
6. `docs/04_QA_and_Launch_Checklist.docx`
7. `docs/FOCUSED_INSTRUCTIONS.md`
8. Existing code and sample HTML

If a conflict cannot be resolved safely, stop the affected work and explain the conflict rather than silently guessing.

## Working Method

- Inspect the repository and current state before editing.
- Create a concise implementation plan for multi-file work.
- Work in small, coherent steps; preserve the reference HTML unchanged.
- Prefer the smallest maintainable solution; avoid speculative features and unnecessary dependencies.
- Keep business content in a typed central configuration/data layer.
- After changes, run relevant checks and fix failures before declaring completion.
- Never report a test, build, deployment, or verification as completed unless it was actually performed.

## Technical Expectations

- Target stack: Vite + React + TypeScript, unless the repository already contains a working, clearly justified alternative.
- Use semantic HTML, accessible controls, responsive layout, and clear component boundaries.
- Reuse a single source of truth for contact details, hours, schedule, prices, programs, FAQs, and SEO configuration.
- Keep secrets and private credentials out of client code and committed files.
- Minimize dependencies; explain any new dependency that materially affects bundle size, privacy, or maintenance.
- Maintain useful README setup, build, testing, and deployment instructions.

## Completion Report

At the end of a task, report:

- What changed and why
- Important files added/modified
- Commands actually run and results
- Tests actually performed and any gaps
- Unverified business facts or launch blockers
- Next concrete action required from the user

Do not claim the website is production-ready merely because it compiles. Production readiness requires passing the relevant QA and content verification gates.
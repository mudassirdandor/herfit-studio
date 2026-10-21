# HerFit Studio — Ladies Gym Website Template

A production-ready, high-converting, accessible website template designed specifically for boutique ladies' gyms, women's fitness studios, and health clubs.

Built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS 4**.

---

## 🌸 Key Features

- **100% Women-Only Brand Direction**: Editorial aesthetic tailored for women's fitness with warm off-white, deep teal, rose, and sage surfaces.
- **Single Source of Truth (`src/config/gym.ts`)**: Entire website content, contact numbers, timings, pricing, schedule, FAQs, and SEO metadata are configurable from a single typed file.
- **Zero Inline Base64 Bloat**: Optimized local assets for fast page load and high Lighthouse scores.
- **Direct WhatsApp Conversion Engine**: Client-side trial request form with automated message encoding and direct WhatsApp handoff.
- **Interactive Weekly Class Schedule**: Accessible keyboard-navigable day tabs and class listings.
- **Client-Side BMI Calculator**: Private, non-persisted screening tool with tailored program recommendations and clear non-medical disclaimer.
- **Membership Pricing Toggle**: Monthly vs. Quarterly plans with automatic savings calculation and transparent fee disclosures.
- **Automated FAQ Chat Assistant**: Lightweight on-page assistant with quick chips and keyword-matching answers grounded in configuration.
- **Accessible & Responsive**: Keyboard focus indicators, screen reader labels, semantic landmarks, and full mobile-first layout.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **Package Manager**: `npm` or `pnpm`

### Installation & Development

```bash
# Install dependencies
npm install

# Start local development server with HMR
npm run dev

# Open in browser at http://localhost:5173
```

### Production Build & Quality Checks

```bash
# Run TypeScript verification and production build
npm run build

# Run ESLint across the codebase
npm run lint

# Preview the production build locally
npm run preview
```

---

## 🎨 Design System & Theme

The website uses **Tailwind CSS 4** with theme tokens defined in `src/index.css`:

| Token | Hex Value | Usage |
|---|---|---|
| `--color-brand-bg` | `#fdf8f2` | Primary warm ivory background |
| `--color-brand-surface` | `#ffffff` | Elevated card surfaces |
| `--color-brand-surface2` | `#f3ece2` | Subtle section backgrounds |
| `--color-brand-ink` | `#1e2a25` | High-contrast body text |
| `--color-brand-muted` | `#5c6b64` | Subtitles and metadata |
| `--color-brand-teal` | `#14544e` | Brand primary (headers, badges, buttons) |
| `--color-brand-rose` | `#bc4756` | Feminine accent and primary CTAs |
| `--color-brand-sage` | `#e3efe8` | Supportive light surfaces |
| `--color-brand-wa` | `#1faa55` | WhatsApp call-to-action buttons |

Typography:
- **Display Headings**: `DM Serif Display`
- **Body & UI**: `Manrope`

---

## 🛠️ Client Customization Guide

To rebrand this template for a new gym client:

1. **Update Business Configuration**:
   Open `src/config/gym.ts` and customize:
   - `identity`: Gym name, city, full address, Google Maps URL, and tagline.
   - `contact`: WhatsApp number, phone display, email, and default WhatsApp messages.
   - `hours`: Daily operating slots and ladies-only timing rules.
   - `pricing`: Monthly/quarterly rates, features, and discount terms.
   - `schedule`: Days of the week, class titles, coaches, and times.
   - `trainers`: Coach names, specializations, roles, and experience.
   - `faq`: Questions and answers reflecting the client's actual policies.

2. **Replace Imagery**:
   Add the client's approved photographs in `src/assets/`:
   - `hero-gym.jpg`: Main hero workout photo.
   - `program-zumba.jpg`, `program-yoga.jpg`, `program-strength.jpg`: Class photos.

3. **Rebuild**:
   ```bash
   npm run build
   ```

---

## 📂 Project Architecture

```
ladies_gym/
├── public/
│   ├── favicon.svg          # Custom HerFit Studio brand monogram
│   ├── robots.txt           # Search engine crawling rules
│   ├── sitemap.xml          # Canonical sitemap placeholder
│   └── Sample Gym Website.html # Preserved reference prototype
├── src/
│   ├── assets/              # Optimized local image assets
│   ├── components/
│   │   ├── Topbar.tsx       # Announcement and contact banner
│   │   ├── Header.tsx       # Sticky navbar with mobile drawer
│   │   ├── Hero.tsx         # Hero section with dual CTAs & highlights
│   │   ├── TrustStrip.tsx   # 4-pillar trust commitments
│   │   ├── Benefits.tsx     # Asymmetric features grid ("Why HerFit")
│   │   ├── Programs.tsx     # 6-class showcase & trial invitation
│   │   ├── Schedule.tsx     # Interactive weekly class schedule
│   │   ├── TimingsAndBmi.tsx # Studio hours & BMI calculator
│   │   ├── Pricing.tsx      # Pricing cards with monthly/quarterly toggle
│   │   ├── Trainers.tsx     # Female coaching team profiles
│   │   ├── Reviews.tsx      # Member feedback & rating summary
│   │   ├── Faq.tsx          # Accessible accordion FAQ
│   │   ├── TrialBooking.tsx # Free trial form & WhatsApp handoff
│   │   ├── Footer.tsx       # Studio footer & quick links
│   │   ├── ChatAssistant.tsx # Automated FAQ chat modal
│   │   └── FloatingWhatsApp.tsx # 1-click floating WhatsApp button
│   ├── config/
│   │   └── gym.ts           # Central business data & WhatsApp URL builder
│   ├── types/
│   │   └── gym.ts           # Strict TypeScript interfaces
│   ├── App.tsx              # Main layout orchestrator
│   ├── index.css            # Tailwind CSS 4 theme & accessibility styles
│   └── main.tsx             # React entrypoint
├── index.html               # Semantic HTML, Google Fonts, Open Graph
├── package.json
└── vite.config.ts
```

---

## 🔒 Verification & Launch Gate

Before public production launch for a real client, confirm all items in `CONTENT_VERIFICATION_REQUIRED.md`:
- [ ] Confirmed client business name and logo
- [ ] Confirmed street address and Google Maps pin
- [ ] Confirmed WhatsApp and phone number
- [ ] Verified class schedule and opening hours
- [ ] Confirmed membership pricing and admission fees
- [ ] Model release / consent for all published member photography
- [ ] Client approval of verified Google testimonials

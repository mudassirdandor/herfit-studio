import { Topbar } from './components/Topbar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Benefits } from './components/Benefits';
import { Programs } from './components/Programs';
import { Schedule } from './components/Schedule';
import { TimingsAndBmi } from './components/TimingsAndBmi';
import { Pricing } from './components/Pricing';
import { Trainers } from './components/Trainers';
import { Reviews } from './components/Reviews';
import { Faq } from './components/Faq';
import { TrialBooking } from './components/TrialBooking';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink)] antialiased selection:bg-[var(--rose-soft)] selection:text-[var(--rose)]">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-[var(--rose)] focus:text-white focus:top-2 focus:left-2 rounded-lg"
      >
        Skip to main content
      </a>

      {/* 1. Announcement / Contact Strip */}
      <Topbar />

      {/* 2. Main Sticky Navigation */}
      <Header />

      {/* Main Page Flow */}
      <main id="main-content" className="flex-1">
        {/* 3. Hero Section with Dual CTAs */}
        <Hero />

        {/* 4. Trust Strip with 4 Pillars */}
        <TrustStrip />

        {/* 5. Gym Benefits Grid ("Why HerFit") */}
        <Benefits />

        {/* 6. Programs & Classes Showcase */}
        <Programs />

        {/* 7. Weekly Class Schedule with Day Tabs */}
        <Schedule />

        {/* 8. Studio Timings & Client-Side BMI Calculator */}
        <TimingsAndBmi />

        {/* 9. Membership Pricing & Period Toggle */}
        <Pricing />

        {/* 10. Female Coaching Team */}
        <Trainers />

        {/* 11. Member Reviews & Ratings */}
        <Reviews />

        {/* 12. FAQ Accordion */}
        <Faq />

        {/* 13. Trial Booking Form & WhatsApp Handoff */}
        <TrialBooking />
      </main>

      {/* 14. Comprehensive Studio Footer */}
      <Footer />

      {/* 15. Automated FAQ Chat Assistant Modal */}
      <ChatAssistant />

      {/* 16. Floating 1-Click WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { gymConfig, buildWhatsAppLink } from '../config/gym';
import { Menu, X, MessageCircle, ArrowRight } from 'lucide-react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const whatsappInquiryUrl = buildWhatsAppLink(
    gymConfig.contact.whatsappNumber,
    gymConfig.contact.whatsappInquiryMessage
  );

  return (
    <header className="sticky top-0 z-40 bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--line)] transition-colors">
      <nav
        aria-label="Main Navigation"
        className="max-w-[1160px] mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4"
      >
        {/* Brand Logo */}
        <a
          href="#top"
          className="flex items-center gap-2.5 text-inherit no-underline group focus-visible:outline-2 focus-visible:outline-[var(--rose)] rounded-lg p-1"
          aria-label={`${gymConfig.identity.name} Home`}
        >
          <span
            className="w-10 h-10 rounded-xl bg-[var(--rose)] text-white flex items-center justify-center font-serif text-xl font-bold shadow-sm group-hover:bg-[var(--rose-hover)] transition-colors"
            aria-hidden="true"
          >
            H
          </span>
          <span className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[var(--ink)] leading-none">
              {gymConfig.identity.name}
            </span>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-[var(--muted)] mt-0.5">
              {gymConfig.identity.tagline}
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-[15px] font-semibold text-[var(--ink)]">
          {gymConfig.navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-[var(--ink)] hover:text-[var(--rose)] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[var(--rose)] rounded"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Action */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#book"
            className="inline-flex items-center gap-2 bg-[var(--rose)] hover:bg-[var(--rose-hover)] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all transform active:scale-95 focus-visible:outline-2 focus-visible:outline-[var(--rose)]"
          >
            <span>Book Free Trial</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-[var(--ink)] hover:bg-[var(--surface2)] focus-visible:outline-2 focus-visible:outline-[var(--rose)] transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-t border-[var(--line)] bg-[var(--surface)] px-5 py-6 shadow-xl animate-in slide-in-from-top-2 duration-150"
        >
          <div className="flex flex-col gap-3">
            {gymConfig.navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-[var(--ink)] hover:text-[var(--rose)] py-2.5 border-b border-[var(--line)]/50 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2.5">
              <a
                href="#book"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[var(--rose)] hover:bg-[var(--rose-hover)] text-white font-bold py-3 px-4 rounded-full shadow text-center transition-transform active:scale-98"
              >
                <span>Book Free Trial</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[var(--wa)] hover:bg-[var(--wa-hover)] text-white font-bold py-3 px-4 rounded-full shadow text-center transition-transform active:scale-98"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

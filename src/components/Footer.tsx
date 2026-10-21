import { gymConfig, buildWhatsAppLink } from '../config/gym';
import { ArrowUp, MessageCircle, MapPin, Clock } from 'lucide-react';

export const Footer = () => {
  const { identity, contact, hours, navigation } = gymConfig;
  const currentYear = new Date().getFullYear();

  const generalWhatsAppUrl = buildWhatsAppLink(
    contact.whatsappNumber,
    contact.whatsappInquiryMessage
  );

  return (
    <footer
      aria-label="Site Footer"
      className="bg-[var(--surface)] border-t border-[var(--line)] pt-12 pb-24 sm:pb-16 text-[var(--muted)] text-sm transition-colors"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-10">
          
          {/* Column 1: Brand & Positioning */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="w-8 h-8 rounded-lg bg-[var(--teal)] text-white flex items-center justify-center font-serif text-lg font-bold">
                H
              </span>
              <span className="font-serif text-xl font-bold text-[var(--ink)]">
                {identity.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed max-w-sm mb-4">
              100% women-only fitness boutique studio serving Quetta with female fitness trainers, complete privacy, group aerobics, yoga, and customized weight loss programs.
            </p>
            <span className="inline-block text-xs font-semibold text-[var(--teal)] bg-[var(--sage)] px-3 py-1 rounded-full">
              {identity.womenOnlySummary}
            </span>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[var(--ink)] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="hover:text-[var(--rose)] transition-colors py-0.5 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#book"
                  className="font-bold text-[var(--rose)] hover:underline inline-block py-0.5"
                >
                  Book Free Trial
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio Contact Info */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[var(--ink)] mb-4">
              Studio Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--rose)] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-snug">{identity.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[var(--teal)] shrink-0" aria-hidden="true" />
                <span>{hours.weekdays}</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <MessageCircle className="w-4 h-4 text-[#1faa55] shrink-0" aria-hidden="true" />
                <a
                  href={generalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[var(--ink)] hover:text-[var(--rose)] underline-offset-4 hover:underline"
                >
                  WhatsApp: {contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <p className="m-0 text-center sm:text-left">
            &copy; {currentYear} {identity.name}. Designed &amp; engineered for boutique ladies fitness.
          </p>

          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--teal)] hover:text-[var(--rose)] transition-colors p-1"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

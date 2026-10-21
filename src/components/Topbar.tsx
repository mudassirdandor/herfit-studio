import { gymConfig, buildWhatsAppLink } from '../config/gym';
import { MapPin, MessageCircle } from 'lucide-react';

export const Topbar = () => {
  const trialWhatsAppUrl = buildWhatsAppLink(
    gymConfig.contact.whatsappNumber,
    gymConfig.contact.whatsappDefaultTrialMessage
  );

  return (
    <aside
      aria-label="Gym Announcement and Quick Contact"
      className="bg-[var(--surface2)] text-[var(--ink)] text-xs sm:text-sm py-2 border-b border-[var(--line)]"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
        <div className="flex items-center gap-1.5 justify-center sm:justify-start font-medium text-[var(--muted)]">
          <MapPin className="w-3.5 h-3.5 shrink-0 text-[var(--rose)]" aria-hidden="true" />
          <span>
            <strong className="text-[var(--ink)] font-semibold">{gymConfig.identity.addressShort}</strong> &nbsp;·&nbsp; Ladies only — {gymConfig.hours.summary}
          </span>
        </div>

        <div>
          <a
            href={trialWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-[var(--ink)] hover:text-[var(--rose)] transition-colors underline-offset-4 hover:underline"
            aria-label={`Chat with HerFit Studio on WhatsApp at ${gymConfig.contact.phoneDisplay}`}
          >
            <MessageCircle className="w-3.5 h-3.5 shrink-0 text-[var(--wa)]" aria-hidden="true" />
            <span>WhatsApp: {gymConfig.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

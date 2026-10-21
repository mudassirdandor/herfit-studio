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
      className="bg-[#14544e] text-white text-xs sm:text-sm py-2 border-b border-[#0d3a36]"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
        <div className="flex items-center gap-1.5 justify-center sm:justify-start font-medium opacity-95">
          <MapPin className="w-3.5 h-3.5 shrink-0 text-[#fbeaec]" aria-hidden="true" />
          <span>
            {gymConfig.identity.addressShort} &nbsp;·&nbsp; Ladies only — {gymConfig.hours.summary}
          </span>
        </div>

        <div>
          <a
            href={trialWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#fbeaec] transition-colors underline-offset-4 hover:underline"
            aria-label={`Chat with HerFit Studio on WhatsApp at ${gymConfig.contact.phoneDisplay}`}
          >
            <MessageCircle className="w-3.5 h-3.5 shrink-0 text-[#1faa55]" aria-hidden="true" />
            <span>WhatsApp: {gymConfig.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

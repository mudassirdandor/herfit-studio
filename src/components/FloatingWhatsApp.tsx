import { gymConfig, buildWhatsAppLink } from '../config/gym';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const trialWhatsAppUrl = buildWhatsAppLink(
    gymConfig.contact.whatsappNumber,
    gymConfig.contact.whatsappDefaultTrialMessage
  );

  return (
    <aside aria-label="Direct WhatsApp Contact">
      <a
        href={trialWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Inquiry with HerFit Studio"
        className="fixed right-4 sm:right-6 bottom-4 sm:bottom-5 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#1faa55] hover:bg-[#1b934a] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#1faa55]"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
      </a>
    </aside>
  );
};

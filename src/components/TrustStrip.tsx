import { gymConfig } from '../config/gym';
import { ShieldCheck, Users, Clock, MessageCircle } from 'lucide-react';

export const TrustStrip = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'privacy':
        return <ShieldCheck className="w-5 h-5 text-[var(--olive)]" aria-hidden="true" />;
      case 'trainers':
        return <Users className="w-5 h-5 text-[var(--olive)]" aria-hidden="true" />;
      case 'hours':
        return <Clock className="w-5 h-5 text-[var(--olive)]" aria-hidden="true" />;
      case 'whatsapp':
        return <MessageCircle className="w-5 h-5 text-[var(--olive)]" aria-hidden="true" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[var(--olive)]" aria-hidden="true" />;
    }
  };

  return (
    <aside
      aria-label="Key Studio Commitments"
      className="bg-[var(--surface-stone)]/50 text-[var(--ink)] py-6 sm:py-7 border-y border-[var(--line)] transition-colors"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0">
          {gymConfig.trustPoints.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-start gap-3.5 ${
                index !== gymConfig.trustPoints.length - 1
                  ? 'lg:border-r lg:border-[var(--line)] lg:pr-6'
                  : ''
              } ${index !== 0 ? 'lg:pl-6' : ''}`}
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--surface)] flex items-center justify-center shrink-0 mt-0.5 border border-[var(--line)] shadow-xs">
                {getIcon(item.icon)}
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-[15px] text-[var(--ink)] leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[var(--muted)] leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

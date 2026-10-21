import { useState } from 'react';
import { gymConfig } from '../config/gym';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const Faq = () => {
  const { kicker, title, faqs } = gymConfig.faq;
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-14 sm:py-20 bg-[var(--bg)] transition-colors border-t border-[var(--line)]"
    >
      <div className="max-w-[840px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--rose-soft)] text-[var(--rose)] text-xs font-bold tracking-wider uppercase mb-3 border border-[var(--rose)]/15">
            <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{kicker}</span>
          </div>
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-serif text-[var(--ink)] leading-tight tracking-tight"
          >
            {title}
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5" role="region" aria-label="Frequently Asked Questions Accordion">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-ans-${faq.id}`}
                  onClick={() => toggleItem(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[var(--ink)] hover:text-[var(--rose)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--teal)]"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[var(--surface2)] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[var(--sage)] text-[var(--teal)]' : 'text-[var(--muted)]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-ans-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[var(--muted)] leading-relaxed font-normal animate-in fade-in-50 duration-150 border-t border-[var(--line)]/40"
                  >
                    <p className="m-0">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

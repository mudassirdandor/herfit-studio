import { gymConfig, buildWhatsAppLink } from '../config/gym';
import { ArrowRight, Sparkles, Activity, Check } from 'lucide-react';

export const Programs = () => {
  const { kicker, title, description, trialCtaText, trialCtaSubtext, items } =
    gymConfig.programs;

  const trialWhatsAppUrl = buildWhatsAppLink(
    gymConfig.contact.whatsappNumber,
    gymConfig.contact.whatsappDefaultTrialMessage
  );

  return (
    <section
      id="programs"
      aria-labelledby="programs-heading"
      className="py-14 sm:py-20 bg-[var(--surface2)]/40 border-t border-[var(--line)] transition-colors"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--rose-soft)] text-[var(--rose)] text-xs font-bold tracking-wider uppercase mb-3 border border-[var(--rose)]/15">
            <span>{kicker}</span>
          </div>
          <h2
            id="programs-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-serif text-[var(--ink)] leading-tight tracking-tight"
          >
            {title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--muted)] leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {items.map((program) => {
            const isFeatured = program.featured;

            return (
              <article
                key={program.id}
                className={`flex flex-col bg-[var(--surface)] rounded-3xl overflow-hidden border transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                  isFeatured
                    ? 'border-2 border-[var(--rose)]/35 shadow-sm ring-1 ring-[var(--rose)]/15'
                    : 'border-[var(--line)] shadow-xs'
                }`}
              >
                {/* Optional Program Image */}
                {program.imagePath ? (
                  <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface2)]">
                    <img
                      src={program.imagePath}
                      alt={program.imageAlt || program.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="text-[11px] font-bold tracking-wider uppercase bg-[var(--surface)]/90 backdrop-blur-md text-[var(--ink)] px-2.5 py-1 rounded-full shadow-xs border border-[var(--line)]">
                        {program.scheduleBadge}
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Editorial Header for Typographic Cards */
                  <div
                    className={`p-6 pb-0 flex items-center justify-between ${
                      isFeatured ? 'bg-[var(--rose-soft)]/40 pb-4' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[var(--sage)] text-[var(--teal)] flex items-center justify-center">
                        <Activity className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--rose)]">
                        {program.category}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase bg-[var(--surface2)] text-[var(--muted)] px-2.5 py-1 rounded-full border border-[var(--line)]">
                      {program.scheduleBadge}
                    </span>
                  </div>
                )}

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tags for photo cards */}
                    {program.imagePath && (
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-xs font-bold text-[var(--rose)] bg-[var(--rose-soft)] px-2.5 py-0.5 rounded-full">
                          {program.category}
                        </span>
                        {program.intensity && (
                          <span className="text-xs font-medium text-[var(--muted)] bg-[var(--surface2)] px-2.5 py-0.5 rounded-full">
                            {program.intensity}
                          </span>
                        )}
                      </div>
                    )}

                    <h3 className="font-serif text-xl sm:text-2xl text-[var(--ink)] mb-2.5 leading-snug">
                      {program.title}
                    </h3>
                    <p className="text-sm text-[var(--muted)] leading-relaxed font-normal">
                      {program.description}
                    </p>

                    {/* Highlights for featured/custom cards */}
                    {program.highlights && program.highlights.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-[var(--line)]/60 space-y-2">
                        {program.highlights.map((h, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-xs text-[var(--ink)] font-medium"
                          >
                            <Check className="w-3.5 h-3.5 text-[var(--teal)] shrink-0" aria-hidden="true" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Action Link */}
                  <div className="mt-6 pt-4 border-t border-[var(--line)]/50 flex items-center justify-between">
                    <span className="text-xs text-[var(--muted)] font-medium">
                      All-female coach support
                    </span>
                    <a
                      href="#book"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--teal)] hover:text-[var(--rose)] transition-colors"
                      aria-label={`Inquire about ${program.title} trial class`}
                    >
                      <span>Try Free</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Conversion Invitation Strip */}
        <div className="mt-12 sm:mt-16 bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[var(--rose-soft)] text-[var(--rose)] flex items-center justify-center shrink-0 hidden sm:flex">
              <Sparkles className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl text-[var(--ink)] font-bold">
                {trialCtaText}
              </h4>
              <p className="text-xs sm:text-sm text-[var(--muted)] mt-1">
                {trialCtaSubtext}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3 w-full sm:w-auto">
            <a
              href={trialWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--wa)] hover:bg-[#1b934a] text-white text-sm font-bold py-3 px-6 rounded-full shadow-sm hover:shadow transition-all active:scale-95"
            >
              <span>Book Trial on WhatsApp</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

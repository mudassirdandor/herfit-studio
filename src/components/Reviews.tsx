import { gymConfig } from '../config/gym';
import { Sparkles, HeartHandshake, Info } from 'lucide-react';

export const Reviews = () => {
  const { kicker, title, subtitle, disclaimer, reviews } = gymConfig.reviews;

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="py-14 sm:py-20 bg-[var(--surface-stone)]/30 transition-colors border-t border-[var(--line)]"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--rose-soft)] text-[var(--rose)] text-xs font-bold tracking-wider uppercase mb-3 border border-[var(--rose)]/15">
            <Sparkles className="w-3.5 h-3.5 text-[var(--rose)]" aria-hidden="true" />
            <span>{kicker}</span>
          </div>
          <h2
            id="reviews-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-serif text-[var(--ink)] leading-tight tracking-tight"
          >
            {title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--muted)] leading-relaxed font-normal">
            {subtitle}
          </p>
        </div>

        {/* Portfolio Demo Notice Banner */}
        <div className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-4 sm:p-5 mb-8 sm:mb-10 shadow-xs flex items-start gap-3 text-xs sm:text-sm text-[var(--muted)]">
          <Info className="w-5 h-5 text-[var(--olive)] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="m-0 leading-relaxed">
            <strong className="text-[var(--ink)] font-semibold">Portfolio Transparency: </strong>
            {disclaimer}
          </p>
        </div>

        {/* Illustrative Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-6 sm:p-7 shadow-xs hover:border-[var(--olive)]/40 hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                {/* Scenario Category Tag */}
                {rev.scenarioTitle && (
                  <div className="mb-4">
                    <span className="inline-block text-[11px] font-bold tracking-wider uppercase bg-[var(--surface-stone)]/70 text-[var(--olive)] px-3 py-1 rounded-full border border-[var(--line)]">
                      {rev.scenarioTitle}
                    </span>
                  </div>
                )}

                {/* Author Info */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div
                    style={{ backgroundColor: rev.avatarColor }}
                    className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white text-base shadow-xs shrink-0"
                    aria-hidden="true"
                  >
                    {rev.avatarLetter}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[var(--ink)] leading-tight">
                      {rev.name}
                    </h3>
                    <span className="text-xs text-[var(--muted)] font-medium">
                      {rev.roleTag}
                    </span>
                  </div>
                </div>

                {/* Scenario Routine Comment */}
                <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed font-normal">
                  "{rev.comment}"
                </p>
              </div>

              {/* Discreet Demo Footer Marker */}
              <div className="pt-4 mt-5 border-t border-[var(--line)]/60 flex items-center gap-1.5 text-[11px] text-[var(--muted)]">
                <HeartHandshake className="w-3.5 h-3.5 text-[var(--olive)]" aria-hidden="true" />
                <span>Illustrative Persona · Portfolio Demo</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

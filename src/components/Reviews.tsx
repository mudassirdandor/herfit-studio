import { gymConfig } from '../config/gym';
import { Star, MessageSquareQuote } from 'lucide-react';

export const Reviews = () => {
  const { kicker, title, googleRating, reviewsCount, reviews } = gymConfig.reviews;

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="py-14 sm:py-20 bg-[var(--surface2)]/40 transition-colors border-t border-[var(--line)]"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--rose-soft)] text-[var(--rose)] text-xs font-bold tracking-wider uppercase mb-3 border border-[var(--rose)]/15">
            <Star className="w-3.5 h-3.5 fill-[var(--rose)] text-[var(--rose)]" aria-hidden="true" />
            <span>{kicker}</span>
          </div>
          <h2
            id="reviews-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-serif text-[var(--ink)] leading-tight tracking-tight"
          >
            {title}
          </h2>
        </div>

        {/* Google Reviews Header Banner */}
        <div className="bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-5 sm:p-6 mb-8 sm:mb-10 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[var(--surface-sage)] text-[var(--sage)] flex items-center justify-center font-serif text-2xl font-bold shrink-0">
              ★
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[var(--ink)] leading-none">
                  {googleRating} / 5.0
                </span>
                <div className="flex text-[var(--champagne)]" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--champagne)] text-[var(--champagne)]" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-[var(--muted)] font-medium mt-1">
                {reviewsCount} · Community feedback preview
              </p>
            </div>
          </div>

          <div className="text-xs text-[var(--muted)] self-start sm:self-auto">
            <span>Verified Ladies-Only Fitness Member Experience</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-6 sm:p-7 shadow-xs hover:border-[var(--rose)]/30 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
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

                {/* Star Rating */}
                <div className="flex items-center gap-1 text-[var(--champagne)] mb-3" aria-label="5 stars rating">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[var(--champagne)] text-[var(--champagne)]" aria-hidden="true" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed font-normal">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[var(--line)]/50 flex items-center gap-1 text-[11px] text-[var(--muted)]">
                <MessageSquareQuote className="w-3.5 h-3.5 text-[var(--rose)]" aria-hidden="true" />
                <span>Verified Member Feedback</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

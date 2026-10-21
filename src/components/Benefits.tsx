import { gymConfig } from '../config/gym';
import { ShieldCheck, Target, HeartHandshake, Wallet, Check } from 'lucide-react';

export const Benefits = () => {
  const { kicker, title, description, items } = gymConfig.benefits;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <ShieldCheck className="w-6 h-6 text-[var(--rose)]" aria-hidden="true" />;
      case 'target':
        return <Target className="w-6 h-6 text-[var(--rose)]" aria-hidden="true" />;
      case 'heart':
        return <HeartHandshake className="w-6 h-6 text-[var(--rose)]" aria-hidden="true" />;
      case 'wallet':
        return <Wallet className="w-6 h-6 text-[var(--rose)]" aria-hidden="true" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[var(--rose)]" aria-hidden="true" />;
    }
  };

  const featuredItem = items.find((item) => item.featured) || items[0];
  const supportingItems = items.filter((item) => item.id !== featuredItem.id);

  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="py-14 sm:py-20 bg-[var(--bg)] transition-colors"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--rose-soft)] text-[var(--rose)] text-xs font-bold tracking-wider uppercase mb-3 border border-[var(--rose)]/15">
            <span>{kicker}</span>
          </div>
          <h2
            id="why-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-serif text-[var(--ink)] leading-tight tracking-tight"
          >
            {title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--muted)] leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Editorial Asymmetric Benefits Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Featured Primary Benefit Card (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-b from-[var(--surface)] to-[var(--surface2)]/60 border border-[var(--line)] rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[var(--surface)] flex items-center justify-center border border-[var(--line)] shadow-xs">
                  {getIcon(featuredItem.icon)}
                </div>
                {featuredItem.tag && (
                  <span className="inline-block text-xs font-bold tracking-wider uppercase bg-[var(--rose)] text-white px-3 py-1 rounded-full shadow-xs">
                    {featuredItem.tag}
                  </span>
                )}
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-[var(--ink)] mb-3 leading-snug">
                {featuredItem.title}
              </h3>
              <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-6 font-normal">
                {featuredItem.description}
              </p>
            </div>

            {featuredItem.highlights && featuredItem.highlights.length > 0 && (
              <div className="pt-6 border-t border-[var(--line)] space-y-2.5 relative z-10">
                {featuredItem.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--ink)]">
                    <div className="w-4 h-4 rounded-full bg-[var(--surface-sage)] text-[var(--sage)] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" />
                    </div>
                    <span className="font-medium leading-tight">{highlight}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Supporting Benefits (Right Column) */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 justify-between">
            {supportingItems.map((item) => (
              <div
                key={item.id}
                className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-5 sm:p-6 shadow-xs hover:border-[var(--rose)]/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--surface2)] flex items-center justify-center shrink-0 border border-[var(--line)] mt-0.5">
                    {getIcon(item.icon)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg sm:text-xl text-[var(--ink)] mb-1.5 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--muted)] leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {item.highlights && item.highlights.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.highlights.map((h, hIdx) => (
                          <span
                            key={hIdx}
                            className="inline-flex items-center gap-1.5 text-xs bg-[var(--surface2)] text-[var(--muted)] font-medium px-2.5 py-1 rounded-md"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--rose)]" />
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

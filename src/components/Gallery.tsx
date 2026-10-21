import { gymConfig } from '../config/gym';
import { Camera, Sparkles, ShieldCheck } from 'lucide-react';

export const Gallery = () => {
  const { gallery } = gymConfig;

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-14 sm:py-20 bg-[var(--surface-stone)]/30 border-t border-[var(--line)] transition-colors"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--rose-soft)] text-[var(--rose)] text-xs font-bold tracking-wider uppercase mb-3 border border-[var(--rose)]/15">
            <Camera className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{gallery.kicker}</span>
          </div>
          <h2
            id="gallery-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-serif text-[var(--ink)] leading-tight tracking-tight"
          >
            {gallery.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--muted)] leading-relaxed font-normal">
            {gallery.subtitle}
          </p>
        </div>

        {/* Editorial Asymmetric Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {gallery.items.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-3xl overflow-hidden border border-[var(--line)] bg-[var(--surface)] shadow-xs hover:shadow-card transition-all duration-300 flex flex-col ${
                item.spanClass || 'md:col-span-6'
              }`}
            >
              {/* Image Container with Restrained Luxury Aspect Ratio */}
              <div className="relative w-full aspect-[16/10] md:aspect-auto md:h-full min-h-[260px] overflow-hidden bg-[var(--surface-stone)]">
                <img
                  src={item.imagePath}
                  alt={item.imageAlt}
                  loading="lazy"
                  width={800}
                  height={500}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-103"
                />

                {/* Subtle scrim overlay for caption readability */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/85 via-[var(--ink)]/30 to-transparent opacity-90 transition-opacity"
                  aria-hidden="true"
                />

                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wider uppercase bg-[var(--surface)]/95 backdrop-blur-md text-[var(--ink)] px-3 py-1 rounded-full shadow-xs border border-[var(--line)]">
                    <Sparkles className="w-3 h-3 text-[var(--rose)]" aria-hidden="true" />
                    <span>{item.category}</span>
                  </span>
                </div>

                {/* Bottom Overlay Caption */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 text-white flex flex-col justify-end">
                  <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug mb-1 text-white drop-shadow-xs">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal line-clamp-2 drop-shadow-xs">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Trust & Privacy Footnote */}
        <div className="mt-8 pt-5 border-t border-[var(--line)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[var(--olive)] shrink-0" aria-hidden="true" />
            <span>100% discrete women-only facility. Frosted exterior glass &amp; zero male access.</span>
          </div>
          <span className="text-[11px] text-[var(--muted)]/80">
            Client customization note: Gallery images are fully configurable via gymConfig.
          </span>
        </div>
      </div>
    </section>
  );
};

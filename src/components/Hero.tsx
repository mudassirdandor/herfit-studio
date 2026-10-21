import { gymConfig, buildWhatsAppLink } from '../config/gym';
import heroGymImg from '../assets/hero-gym.jpg';
import { MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  const trialWhatsAppUrl = buildWhatsAppLink(
    gymConfig.contact.whatsappNumber,
    gymConfig.contact.whatsappDefaultTrialMessage
  );

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="pt-8 pb-14 md:py-16 lg:py-20 transition-colors"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-1.5 self-start px-3.5 py-1.5 rounded-full bg-[var(--rose-soft)] text-[var(--rose)] text-xs sm:text-sm font-bold tracking-wider uppercase mb-4 border border-[var(--rose)]/20 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{gymConfig.hero.kicker}</span>
            </div>

            {/* Display Heading */}
            <h1
              id="hero-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif text-[var(--ink)] leading-[1.14] tracking-tight"
            >
              {gymConfig.hero.titlePrefix}
              <em className="italic text-[var(--rose)] font-serif font-normal">
                {gymConfig.hero.titleEmphasis}
              </em>
              {gymConfig.hero.titleSuffix}
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-[var(--muted)] max-w-[54ch] mt-4 mb-6 sm:mb-8 leading-relaxed font-normal">
              {gymConfig.hero.lead}
            </p>

            {/* Direct Conversion Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={gymConfig.hero.primaryCtaHref}
                className="inline-flex items-center justify-center gap-2 bg-[var(--rose)] hover:bg-[var(--rose-hover)] text-white text-base font-bold py-3.5 px-6 sm:px-7 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95 focus-visible:outline-2 focus-visible:outline-[var(--rose)]"
              >
                <span>{gymConfig.hero.primaryCtaText}</span>
              </a>

              <a
                href={trialWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[var(--wa)] hover:bg-[var(--wa-hover)] text-white text-base font-bold py-3.5 px-6 sm:px-7 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95 focus-visible:outline-2 focus-visible:outline-[var(--wa)]"
                aria-label="Chat with HerFit Studio on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>{gymConfig.hero.secondaryCtaText}</span>
              </a>
            </div>

            {/* Trust and Key Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-10 pt-6 border-t border-[var(--line)]">
              {gymConfig.hero.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--surface)] border border-[var(--line)] rounded-2xl p-3.5 sm:p-4 shadow-xs hover:border-[var(--olive)]/40 transition-colors"
                >
                  <b className="block font-serif text-2xl sm:text-3xl text-[var(--olive)] font-normal leading-none mb-1.5">
                    {stat.value}
                  </b>
                  <span className="text-xs sm:text-[13px] text-[var(--muted)] leading-snug block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Visual Card with Video-Ready Architecture */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden shadow-elevated border border-[var(--line)] bg-[var(--surface-stone)]">
              {gymConfig.hero.videoUrl ? (
                /* Video-Led Playback with Accessible Fallback */
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={gymConfig.hero.videoPosterUrl || heroGymImg}
                  className="w-full aspect-[4/3] object-cover object-center motion-reduce:hidden"
                  aria-label={gymConfig.hero.imageAlt}
                >
                  <source src={gymConfig.hero.videoUrl} type="video/mp4" />
                  <img
                    src={heroGymImg}
                    alt={gymConfig.hero.imageAlt}
                    className="w-full aspect-[4/3] object-cover object-center"
                  />
                </video>
              ) : null}

              {/* High-Fidelity Photograph (Default & Reduced-Motion Fallback) */}
              <img
                src={heroGymImg}
                alt={gymConfig.hero.imageAlt}
                width={600}
                height={450}
                className={`w-full aspect-[4/3] object-cover object-center transform transition-transform duration-700 hover:scale-102 ${
                  gymConfig.hero.videoUrl ? 'hidden motion-reduce:block' : 'block'
                }`}
                loading="eager"
                fetchPriority="high"
              />

              {/* Floating Free Trial Badge */}
              <div
                className="absolute left-3.5 bottom-3.5 sm:left-5 sm:bottom-5 bg-[var(--surface)]/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-card border border-[var(--line)] flex items-start gap-3 max-w-[280px]"
                role="note"
                aria-label="Special promotion offer"
              >
                <div className="w-8 h-8 rounded-full bg-[var(--rose-soft)] text-[var(--rose)] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <strong className="block text-sm sm:text-base font-bold text-[var(--ink)] leading-snug">
                    {gymConfig.hero.badge.title}
                  </strong>
                  <span className="text-xs text-[var(--muted)] leading-tight block mt-0.5">
                    {gymConfig.hero.badge.subtitle}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

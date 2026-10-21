import { gymConfig, buildWhatsAppLink } from '../config/gym';
import { Users, Award, MessageCircle } from 'lucide-react';

export const Trainers = () => {
  const { kicker, title, description, trainers } = gymConfig.trainers;

  return (
    <section
      id="trainers"
      aria-labelledby="trainers-heading"
      className="py-14 sm:py-20 bg-[var(--bg)] transition-colors border-t border-[var(--line)]"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--rose-soft)] text-[var(--rose)] text-xs font-bold tracking-wider uppercase mb-3 border border-[var(--rose)]/15">
            <Users className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{kicker}</span>
          </div>
          <h2
            id="trainers-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-serif text-[var(--ink)] leading-tight tracking-tight"
          >
            {title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--muted)] leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {trainers.map((trainer) => {
            const trainerInquiryUrl = buildWhatsAppLink(
              gymConfig.contact.whatsappNumber,
              `Assalam-o-Alaikum! Mujhe ${trainer.name} (${trainer.role}) ke session aur slot timings ke baray mein maloomat chahiye.`
            );

            return (
              <div
                key={trainer.id}
                className="bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-6 sm:p-7 shadow-xs hover:border-[var(--teal)]/40 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Monogram Avatar & Badges */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      style={{ backgroundColor: trainer.avatarBg }}
                      className="w-14 h-14 rounded-2xl flex items-center justify-center font-serif text-2xl font-bold text-white shadow-xs shrink-0"
                    >
                      {trainer.avatarLetter}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl text-[var(--ink)] font-bold leading-tight">
                        {trainer.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[var(--rose)] mt-0.5">
                        {trainer.role}
                      </p>
                    </div>
                  </div>

                  {/* Specialization Details */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-[var(--ink)]">
                      <Award className="w-4 h-4 text-[var(--teal)] shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="font-medium leading-relaxed">
                        {trainer.specialization}
                      </span>
                    </div>

                    <p className="text-xs text-[var(--muted)] leading-relaxed pl-6">
                      {trainer.experience}
                    </p>
                  </div>
                </div>

                {/* Direct WhatsApp Coaching Contact */}
                <div className="pt-6 mt-6 border-t border-[var(--line)]/60">
                  <a
                    href={trainerInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--teal)] hover:text-[var(--rose)] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Inquire About Slots</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

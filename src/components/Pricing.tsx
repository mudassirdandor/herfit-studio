import { useState } from 'react';
import { gymConfig, buildWhatsAppLink } from '../config/gym';
import { Check, Minus, Sparkles, ArrowRight } from 'lucide-react';

export const Pricing = () => {
  const { pricing, contact } = gymConfig;
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'quarterly'>('monthly');

  const isMonthly = billingPeriod === 'monthly';

  return (
    <section
      id="fees"
      aria-labelledby="fees-heading"
      className="py-14 sm:py-20 bg-[var(--surface2)]/40 transition-colors border-t border-[var(--line)]"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--rose-soft)] text-[var(--rose)] text-xs font-bold tracking-wider uppercase mb-3 border border-[var(--rose)]/15">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{pricing.kicker}</span>
          </div>
          <h2
            id="fees-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-serif text-[var(--ink)] leading-tight tracking-tight"
          >
            {pricing.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--muted)] leading-relaxed font-normal">
            {pricing.admissionFeeNotice}
          </p>
        </div>

        {/* Billing Period Toggle Buttons */}
        <div className="flex justify-start mb-8 sm:mb-12">
          <div
            role="group"
            aria-label="Billing frequency selection"
            className="inline-flex items-center p-1.5 rounded-full bg-[var(--surface)] border border-[var(--line)] shadow-xs"
          >
            <button
              type="button"
              onClick={() => setBillingPeriod('monthly')}
              aria-pressed={isMonthly}
              className={`text-xs sm:text-sm font-bold py-2 px-5 sm:px-6 rounded-full transition-all cursor-pointer ${
                isMonthly
                  ? 'bg-[var(--rose)] text-white shadow-xs'
                  : 'text-[var(--muted)] hover:text-[var(--ink)]'
              }`}
            >
              Monthly Plan
            </button>
            <button
              type="button"
              onClick={() => setBillingPeriod('quarterly')}
              aria-pressed={!isMonthly}
              className={`text-xs sm:text-sm font-bold py-2 px-5 sm:px-6 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                !isMonthly
                  ? 'bg-[var(--rose)] text-white shadow-xs'
                  : 'text-[var(--muted)] hover:text-[var(--ink)]'
              }`}
            >
              <span>3 Months</span>
              <span className="text-[10px] bg-[var(--rose)] text-white font-extrabold px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pricing.plans.map((plan) => {
            const isPop = plan.popular;
            const price = isMonthly ? plan.monthlyPrice : plan.quarterlyPrice;
            const formattedPrice = `Rs ${price.toLocaleString('en-PK')}`;
            const periodLabel = isMonthly ? '/ month' : '/ 3 months';

            const planInquiryUrl = buildWhatsAppLink(
              contact.whatsappNumber,
              `Assalam-o-Alaikum! Mujhe "${plan.name}" (${formattedPrice} ${periodLabel}) plan ki registration aur free trial class ki maloomat chahiye.`
            );

            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between bg-[var(--surface)] rounded-3xl p-6 sm:p-8 transition-all relative ${
                  isPop
                    ? 'border-2 border-[var(--rose)] shadow-md ring-1 ring-[var(--rose)]/20'
                    : 'border border-[var(--line)] shadow-xs hover:border-[var(--rose)]/30 hover:shadow-sm'
                }`}
              >
                {/* Popular Badge */}
                {isPop && plan.popularBadge && (
                  <div className="absolute -top-3.5 left-6 sm:left-8">
                    <span className="inline-block text-[11px] font-extrabold tracking-wider uppercase bg-[var(--rose)] text-white px-3.5 py-1 rounded-full shadow-xs">
                      {plan.popularBadge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl text-[var(--ink)] font-bold mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--muted)] font-normal">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="py-4 border-y border-[var(--line)]/60 mb-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-[var(--ink)]">
                        {formattedPrice}
                      </span>
                      <span className="text-xs sm:text-sm text-[var(--muted)] font-medium">
                        {periodLabel}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 mb-8" aria-label={`Features included in ${plan.name}`}>
                    {plan.features.map((f, fIdx) => (
                      <li
                        key={fIdx}
                        className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                          f.included ? 'text-[var(--ink)]' : 'text-[var(--muted)] line-through opacity-70'
                        }`}
                      >
                        {f.included ? (
                          <div className="w-4 h-4 rounded-full bg-[var(--surface-sage)] text-[var(--sage)] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-[var(--surface2)] text-[var(--muted)] flex items-center justify-center shrink-0 mt-0.5">
                            <Minus className="w-3 h-3 stroke-[2.5]" aria-hidden="true" />
                          </div>
                        )}
                        <span className="leading-snug">{f.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan CTA Action */}
                <div className="pt-2">
                  <a
                    href={planInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 text-sm font-bold py-3.5 px-6 rounded-full transition-all active:scale-98 shadow-xs cursor-pointer ${
                      isPop
                        ? 'bg-[var(--rose)] hover:bg-[var(--rose-hover)] text-white shadow-sm hover:shadow'
                        : 'bg-[var(--surface2)] hover:bg-[var(--line)] text-[var(--ink)] border border-[var(--line)]'
                    }`}
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Student & Buddy Discount Note */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-[var(--surface)] border border-[var(--line)] text-center text-xs sm:text-sm text-[var(--muted)]">
          <p className="m-0 leading-relaxed font-medium">
            🎓 <strong className="text-[var(--ink)]">Special Savings: </strong>
            {pricing.discountNote}
          </p>
        </div>
      </div>
    </section>
  );
};

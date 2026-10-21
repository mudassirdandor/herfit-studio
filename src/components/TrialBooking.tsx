import { useState, useId, type FormEvent } from 'react';
import { gymConfig, buildWhatsAppLink } from '../config/gym';
import { Send, CheckCircle2, Phone, Clock, ShieldCheck, Sparkles } from 'lucide-react';

export const TrialBooking = () => {
  const { booking, contact } = gymConfig;
  const nameId = useId();
  const phoneId = useId();
  const goalId = useId();
  const timeId = useId();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState(booking.goals[0] || 'Weight Loss & Fat Burn');
  const [timeSlot, setTimeSlot] = useState(booking.timeSlots[0] || 'Subah Session (7:00 AM – 11:00 AM)');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      return;
    }

    const message = `Assalam-o-Alaikum! Main HerFit Studio ki FREE trial class book karna chahti hoon.\n\nNaam: ${name.trim()}\nMobile: ${phone.trim()}\nGoal: ${goal}\nPreferred Timing: ${timeSlot}\n\nShukriya! Barahe karam mera slot confirm kar dein.`;

    const targetUrl = buildWhatsAppLink(contact.whatsappNumber, message);
    setSubmitted(true);

    // Open WhatsApp in a new tab
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="book"
      aria-labelledby="booking-heading"
      className="py-14 sm:py-20 bg-[var(--bg)] transition-colors border-t border-[var(--line)]"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        <div className="bg-[var(--surface2)] text-[var(--ink)] rounded-[32px] p-7 sm:p-10 lg:p-14 shadow-card border border-[var(--line)] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column: Information & Trust */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--rose-soft)] text-[var(--rose)] text-xs font-bold tracking-wider uppercase mb-4 border border-[var(--rose)]/20 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Free Trial Session</span>
                </div>

                <h2
                  id="booking-heading"
                  className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal leading-tight tracking-tight mb-4 text-[var(--ink)]"
                >
                  {booking.title}
                </h2>

                <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-6 font-normal">
                  {booking.description}
                </p>

                {/* Quick Trust Checks */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--ink)] font-medium">
                    <ShieldCheck className="w-4 h-4 text-[var(--sage)] shrink-0" aria-hidden="true" />
                    <span>100% Women-Only Environment · No obligation or advance payment</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--ink)] font-medium">
                    <Phone className="w-4 h-4 text-[var(--sage)] shrink-0" aria-hidden="true" />
                    <span>{booking.responseTimeNotice}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[var(--ink)] font-medium">
                    <Clock className="w-4 h-4 text-[var(--sage)] shrink-0" aria-hidden="true" />
                    <span>Instant WhatsApp handoff with immediate coach response</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--line)] text-xs text-[var(--muted)] leading-relaxed shadow-xs">
                <span>⚠️ {booking.whatsappNotice}</span>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-6 bg-[var(--surface)] text-[var(--ink)] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[var(--line)] shadow-elevated">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor={nameId}
                    className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-1.5"
                  >
                    Aap Ka Naam (Full Name) *
                  </label>
                  <input
                    id={nameId}
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Fatima Khan"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-[var(--ink)] font-medium text-sm focus-visible:outline-2 focus-visible:outline-[var(--rose)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor={phoneId}
                    className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-1.5"
                  >
                    Mobile / WhatsApp Number *
                  </label>
                  <input
                    id={phoneId}
                    type="tel"
                    required
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0311 2777061"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-[var(--ink)] font-medium text-sm focus-visible:outline-2 focus-visible:outline-[var(--rose)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor={goalId}
                    className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-1.5"
                  >
                    Aap Ka Fitness Goal *
                  </label>
                  <select
                    id={goalId}
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-[var(--ink)] font-medium text-sm focus-visible:outline-2 focus-visible:outline-[var(--rose)] cursor-pointer"
                  >
                    {booking.goals.map((g, idx) => (
                      <option key={idx} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor={timeId}
                    className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-1.5"
                  >
                    Pasandeeda Timing Slot *
                  </label>
                  <select
                    id={timeId}
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-[var(--ink)] font-medium text-sm focus-visible:outline-2 focus-visible:outline-[var(--rose)] cursor-pointer"
                  >
                    {booking.timeSlots.map((ts, idx) => (
                      <option key={idx} value={ts}>
                        {ts}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[var(--wa)] hover:bg-[var(--wa-hover)] text-white text-base font-bold py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>Confirm Free Trial on WhatsApp</span>
                </button>

                {submitted && (
                  <div
                    role="alert"
                    className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-medium flex items-start gap-2.5 animate-in fade-in-50"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-bold m-0 mb-0.5">Shukriya {name}!</p>
                      <p className="m-0 leading-relaxed text-xs">
                        WhatsApp khul raha hai — wahan sirf Send dabayein, aap ki trial request hum tak pohnch jayegi aur hamari team slot confirm kar degi.
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

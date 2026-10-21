import { useState } from 'react';
import { gymConfig, buildWhatsAppLink } from '../config/gym';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

export const Schedule = () => {
  const { kicker, title, description, days, note } = gymConfig.schedule;
  const dayNames = Object.keys(days);
  const [selectedDay, setSelectedDay] = useState<string>(dayNames[0]);

  const currentClasses = days[selectedDay] || [];

  const getTagStyle = (tagColor?: string) => {
    switch (tagColor) {
      case 'rose':
        return 'bg-[var(--rose-soft)] text-[var(--rose)] border-[var(--rose)]/20';
      case 'teal':
        return 'bg-[var(--surface-stone)] text-[var(--olive)] border-[var(--line)]';
      case 'sage':
        return 'bg-[var(--surface-stone)] text-[var(--ink)] border-[var(--line)]';
      default:
        return 'bg-[var(--surface-stone)]/60 text-[var(--ink)] border-[var(--line)]';
    }
  };

  return (
    <section
      id="schedule"
      aria-labelledby="schedule-heading"
      className="py-14 sm:py-20 bg-[var(--surface-stone)]/30 transition-colors border-t border-[var(--line)]"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--rose-soft)] text-[var(--rose)] text-xs font-bold tracking-wider uppercase mb-3 border border-[var(--rose)]/15">
            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{kicker}</span>
          </div>
          <h2
            id="schedule-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-serif text-[var(--ink)] leading-tight tracking-tight"
          >
            {title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--muted)] leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Accessible Day Tabs */}
        <div
          role="tablist"
          aria-label="Class Schedule by Day"
          className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none"
        >
          {dayNames.map((day) => {
            const isSelected = selectedDay === day;
            return (
              <button
                key={day}
                id={`tab-${day}`}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`panel-${day}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setSelectedDay(day)}
                className={`shrink-0 font-bold text-sm px-5 py-2.5 rounded-full border transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--olive)] ${
                  isSelected
                    ? 'bg-[var(--olive)] text-white border-[var(--olive)] shadow-sm'
                    : 'bg-[var(--surface)] text-[var(--ink)] border-[var(--line)] hover:border-[var(--olive)]/40 hover:bg-[var(--surface-stone)]/50'
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Schedule Table Container */}
        <div
          id={`panel-${selectedDay}`}
          role="tabpanel"
          aria-labelledby={`tab-${selectedDay}`}
          className="bg-[var(--surface)] border border-[var(--line)] rounded-3xl overflow-hidden shadow-sm"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse" aria-label={`${selectedDay} Class Schedule`}>
              <thead>
                <tr className="bg-[var(--surface-stone)]/60 text-[var(--ink)] text-xs sm:text-sm uppercase tracking-wider font-bold border-b border-[var(--line)]">
                  <th scope="col" className="py-4 px-4 sm:px-6">
                    Time Slot
                  </th>
                  <th scope="col" className="py-4 px-4 sm:px-6">
                    Class &amp; Workout
                  </th>
                  <th scope="col" className="py-4 px-4 sm:px-6 hidden sm:table-cell">
                    Coach
                  </th>
                  <th scope="col" className="py-4 px-4 sm:px-6">
                    Intensity / Level
                  </th>
                  <th scope="col" className="py-4 px-4 sm:px-6 text-right">
                    Inquire
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--line)] text-sm sm:text-base">
                {currentClasses.map((item, idx) => {
                  const inquiryUrl = buildWhatsAppLink(
                    gymConfig.contact.whatsappNumber,
                    `Assalam-o-Alaikum! Mujhe ${selectedDay} ki "${item.title}" (${item.time}) class ki maloomat leni hain.`
                  );

                  return (
                    <tr
                      key={idx}
                      className="hover:bg-[var(--surface-stone)]/30 transition-colors group"
                    >
                      <td className="py-4 px-4 sm:px-6 font-semibold text-[var(--ink)] whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-[var(--taupe)] shrink-0" aria-hidden="true" />
                          <span>{item.time}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 sm:px-6 font-bold text-[var(--ink)]">
                        <div>{item.title}</div>
                        <div className="text-xs text-[var(--muted)] font-normal sm:hidden mt-0.5">
                          {item.instructor}
                        </div>
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-[var(--muted)] hidden sm:table-cell whitespace-nowrap font-medium">
                        <div className="flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[var(--olive)] shrink-0" aria-hidden="true" />
                          <span>{item.instructor}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 sm:px-6 whitespace-nowrap">
                        <span
                          className={`inline-block text-xs font-bold px-3 py-1 rounded-full border ${getTagStyle(
                            item.tagColor
                          )}`}
                        >
                          {item.level}
                        </span>
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                        <a
                          href={inquiryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-[var(--olive)] hover:text-[var(--rose)] transition-colors p-1"
                          aria-label={`Ask about ${item.title} on WhatsApp`}
                        >
                          <span className="hidden sm:inline">Reserve</span>
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Schedule Footer Note */}
          <div className="p-4 sm:p-5 bg-[var(--surface-stone)]/30 border-t border-[var(--line)] text-xs sm:text-sm text-[var(--muted)] flex items-start gap-2">
            <span className="font-bold text-[var(--olive)] shrink-0">ℹ️</span>
            <p className="leading-relaxed m-0">{note}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

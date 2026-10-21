import { useState, useId, type FormEvent } from 'react';
import { gymConfig, buildWhatsAppLink } from '../config/gym';
import { Clock, MapPin, ExternalLink, Calculator, RotateCcw, AlertCircle, Sparkles } from 'lucide-react';

interface BmiResult {
  score: number;
  category: string;
  categoryClass: string;
  recommendation: string;
}

export const TimingsAndBmi = () => {
  const { timings, bmi: bmiContent, contact } = gymConfig;
  const weightInputId = useId();
  const heightInputId = useId();

  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [result, setResult] = useState<BmiResult | null>(null);
  const [error, setError] = useState<string>('');

  const handleCalculate = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (isNaN(w) || w < 25 || w > 250) {
      setError('Barahe karam durust wazan likhein (25 kg se 250 kg ke darmian).');
      setResult(null);
      return;
    }

    if (isNaN(h) || h < 90 || h > 240) {
      setError('Barahe karam durust qad (height) centimeters mein likhein (90 cm se 240 cm).');
      setResult(null);
      return;
    }

    const heightInMeters = h / 100;
    const bmiVal = w / (heightInMeters * heightInMeters);

    let cat: string;
    let catClass: string;
    let rec: string;

    if (bmiVal < 18.5) {
      cat = 'Underweight';
      catClass = 'bg-blue-100 text-blue-800 border-blue-200';
      rec = 'Strength Training aur personalized diet plan aap ke liye behtreen hai — healthy muscle building aur stamina barhane ke liye.';
    } else if (bmiVal < 25) {
      cat = 'Healthy Weight 🎉';
      catClass = 'bg-emerald-100 text-emerald-800 border-emerald-200';
      rec = 'Mubarak ho! Apni fitness aur energy barqarar rakhne ke liye All Classes plan (Yoga, Zumba & Functional Toning) ideal hai.';
    } else if (bmiVal < 30) {
      cat = 'Overweight';
      catClass = 'bg-amber-100 text-amber-800 border-amber-200';
      rec = 'Hamara 12-Hafte ka Weight Loss Transformation Program aap ke liye bana hai — progressive cardio, toning aur ghar ke khano ki diet guidance.';
    } else {
      cat = 'High BMI Range';
      catClass = 'bg-rose-100 text-rose-800 border-rose-200';
      rec = 'Fikr na karein — hamari bohat si members yahin se shuru karti hain. Low-impact cardio, personal coach accountability aur safe routine se shuru karein.';
    }

    setResult({
      score: parseFloat(bmiVal.toFixed(1)),
      category: cat,
      categoryClass: catClass,
      recommendation: rec,
    });
  };

  const handleReset = () => {
    setWeight('');
    setHeight('');
    setResult(null);
    setError('');
  };

  const trialUrl = result
    ? buildWhatsAppLink(
        contact.whatsappNumber,
        `Assalam-o-Alaikum! Maine website par apna BMI check kiya (${result.score} - ${result.category}). Mujhe is ke mutabiq free trial class ki recommendation chahiye.`
      )
    : buildWhatsAppLink(contact.whatsappNumber);

  return (
    <section
      id="timings"
      aria-labelledby="timings-heading"
      className="py-14 sm:py-20 bg-[var(--bg)] transition-colors border-t border-[var(--line)]"
    >
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--rose-soft)] text-[var(--rose)] text-xs font-bold tracking-wider uppercase mb-3 border border-[var(--rose)]/15">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{timings.kicker}</span>
          </div>
          <h2
            id="timings-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-serif text-[var(--ink)] leading-tight tracking-tight"
          >
            {timings.title}
          </h2>
        </div>

        {/* 2-Column Split: Timings & Location (Left) + BMI Tool (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Studio Timings & Location */}
          <div className="lg:col-span-6 bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[var(--sage)] text-[var(--teal)] flex items-center justify-center">
                  <Clock className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[var(--ink)] font-bold leading-tight">
                    Studio Timings
                  </h3>
                  <span className="text-xs text-[var(--muted)] font-medium">
                    100% women-only operational schedule
                  </span>
                </div>
              </div>

              {/* Timing Slots Rows */}
              <div className="space-y-3 mb-6">
                {timings.slots.map((slot, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3.5 rounded-xl bg-[var(--surface2)]/50 border border-[var(--line)]/60"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[var(--teal)] shrink-0" />
                      <span className="text-sm font-semibold text-[var(--ink)]">
                        {slot.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 self-start sm:self-auto pl-4 sm:pl-0">
                      <span className="text-sm font-bold text-[var(--teal)]">
                        {slot.time}
                      </span>
                      {slot.tag && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)]">
                          {slot.tag}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--sage)]/50 border border-[var(--teal)]/20 text-xs text-[var(--ink)] leading-relaxed mb-8">
                <span className="font-bold text-[var(--teal)]">Studio Policy: </span>
                {timings.policyNote}
              </div>
            </div>

            {/* Location Subsection */}
            <div className="pt-6 border-t border-[var(--line)]">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-[var(--rose)]" aria-hidden="true" />
                <h4 className="font-serif text-lg text-[var(--ink)] font-bold">
                  {timings.locationTitle}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-4 font-normal">
                {timings.locationDescription}
              </p>
              <a
                href={timings.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold bg-[var(--surface2)] hover:bg-[var(--line)] text-[var(--ink)] py-2.5 px-4 rounded-full border border-[var(--line)] transition-colors"
              >
                <span>{timings.mapButtonText}</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Client-Side BMI Calculator Utility */}
          <div className="lg:col-span-6 bg-[var(--surface)] border border-[var(--line)] rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--rose-soft)] text-[var(--rose)] flex items-center justify-center">
                <Calculator className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[var(--ink)] font-bold leading-tight">
                  {bmiContent.title}
                </h3>
                <span className="text-xs text-[var(--muted)] font-medium">
                  Instant, safe &amp; private client-side check
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed mb-6 font-normal">
              {bmiContent.description}
            </p>

            {/* Calculator Form */}
            <form onSubmit={handleCalculate} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor={weightInputId}
                    className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-1.5"
                  >
                    Weight (kg)
                  </label>
                  <input
                    id={weightInputId}
                    type="number"
                    step="0.1"
                    min="25"
                    max="250"
                    required
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="e.g. 68"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-[var(--ink)] font-medium focus-visible:outline-2 focus-visible:outline-[var(--teal)] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor={heightInputId}
                    className="block text-xs font-bold text-[var(--ink)] uppercase tracking-wider mb-1.5"
                  >
                    Height (cm)
                  </label>
                  <input
                    id={heightInputId}
                    type="number"
                    step="1"
                    min="90"
                    max="240"
                    required
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="e.g. 162"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-[var(--ink)] font-medium focus-visible:outline-2 focus-visible:outline-[var(--teal)] transition-colors text-sm"
                  />
                </div>
              </div>

              {error && (
                <div
                  role="alert"
                  className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{error}</span>
                </div>
              )}

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[var(--teal)] hover:bg-[#0e3d38] text-white font-bold py-3 px-5 rounded-full shadow-xs hover:shadow transition-all active:scale-98 text-sm cursor-pointer"
                >
                  <span>Calculate My BMI</span>
                </button>

                {(weight || height || result) && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="p-3 rounded-full border border-[var(--line)] bg-[var(--surface2)] hover:bg-[var(--line)] text-[var(--muted)] transition-colors cursor-pointer"
                    aria-label="Reset BMI form"
                  >
                    <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            </form>

            {/* Calculated Output Box */}
            {result && (
              <div
                className="mt-6 p-5 rounded-2xl bg-[var(--surface2)] border border-[var(--line)] animate-in fade-in-50 duration-200"
                aria-live="polite"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-bold tracking-wider text-[var(--muted)]">
                      Calculated BMI:
                    </span>
                    <span className="font-serif text-3xl font-bold text-[var(--teal)] leading-none">
                      {result.score}
                    </span>
                  </div>
                  <span
                    className={`inline-block text-xs font-bold px-3 py-1 rounded-full border ${result.categoryClass}`}
                  >
                    {result.category}
                  </span>
                </div>

                <div className="mt-3 pt-3 border-t border-[var(--line)]/60">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--rose)] mb-1">
                    <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Recommended Studio Path:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--ink)] leading-relaxed font-medium">
                    {result.recommendation}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--line)]/50 flex justify-end">
                  <a
                    href={trialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--teal)] hover:text-[var(--rose)] transition-colors"
                  >
                    <span>Discuss Plan on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            )}

            {/* Medical Disclaimer */}
            <div className="mt-6 pt-4 border-t border-[var(--line)]/60 flex items-start gap-2 text-[11px] text-[var(--muted)] leading-relaxed">
              <span className="font-bold text-[var(--muted)] shrink-0">⚖️</span>
              <p className="m-0">{bmiContent.disclaimer}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

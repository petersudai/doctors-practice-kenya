import { useState, type FormEvent } from "react";
import { branches, services, brand } from "../data/site";

type Status = "idle" | "submitted";

const fieldClass =
  "mt-2 w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-2/40 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay-light/40";
const labelClass = "font-mono-tag text-[11px] uppercase tracking-[0.08em] text-ink-2/60";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="border border-line bg-paper-2 p-8 text-center md:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-moss text-paper">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
          Thank you{name ? `, ${name.split(" ")[0]}` : ""}.
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-ink-2/70">
          This is a portfolio demo, so the request wasn't actually sent. On the live site our
          front desk would confirm your slot within a few hours. In the meantime, reach us
          directly:
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`https://wa.me/${brand.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-moss px-5 py-2.5 text-sm font-semibold text-paper"
          >
            WhatsApp us
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="rounded-full border border-moss px-5 py-2.5 text-sm font-semibold text-moss"
          >
            Book another slot
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="name" className={labelClass}>
          Full name
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Grace Wambui"
          className={fieldClass}
        />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="phone" className={labelClass}>
          Phone number
        </label>
        <input id="phone" required type="tel" placeholder="07XX XXX XXX" className={fieldClass} />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="branch" className={labelClass}>
          Preferred branch
        </label>
        <select id="branch" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a branch
          </option>
          {branches.map((b) => (
            <option key={b.slug} value={b.slug}>
              {b.city}, {b.area}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="service" className={labelClass}>
          Reason for visit
        </label>
        <select id="service" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="date" className={labelClass}>
          Preferred date
        </label>
        <input id="date" required type="date" className={fieldClass} />
      </div>

      <div className="sm:col-span-1">
        <label htmlFor="time" className={labelClass}>
          Preferred time
        </label>
        <select id="time" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a time
          </option>
          <option>Morning (8am – 11am)</option>
          <option>Midday (11am – 2pm)</option>
          <option>Afternoon (2pm – 5pm)</option>
          <option>Evening (5pm – 8pm)</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="notes" className={labelClass}>
          Anything we should know? (optional)
        </label>
        <textarea
          id="notes"
          rows={3}
          placeholder="Symptoms, insurance provider, or a specific doctor you'd like to see"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-full bg-clay px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-pulse sm:w-auto"
        >
          Request appointment
        </button>
        <p className="mt-3 text-xs text-ink-2/60">
          We'll confirm by SMS or WhatsApp, usually within a few hours during business days.
        </p>
      </div>
    </form>
  );
}

import { brand } from "../data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(
        "Hi Uzima, I'd like to book an appointment."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book an appointment via WhatsApp"
      className="group fixed bottom-6 right-6 z-30 flex items-center gap-2 rounded-full bg-clay py-3 pl-3 pr-3 text-paper shadow-lg shadow-ink/20 transition-all duration-300 hover:bg-pulse hover:pr-5 md:bottom-8 md:right-8"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6 shrink-0 fill-current">
        <path d="M16.04 3C9.37 3 3.96 8.4 3.96 15.06c0 2.23.6 4.32 1.66 6.12L3 29l8.02-2.56a12.02 12.02 0 0 0 5.02 1.1h.01c6.67 0 12.08-5.4 12.08-12.06C28.13 8.4 22.72 3 16.04 3zm7.03 17.24c-.3.83-1.72 1.6-2.38 1.7-.61.1-1.38.14-2.23-.14-.51-.17-1.17-.38-2.02-.75-3.55-1.53-5.87-5.1-6.05-5.34-.18-.24-1.44-1.92-1.44-3.66 0-1.74.92-2.6 1.24-2.96.32-.35.7-.44.94-.44.23 0 .47 0 .67.01.22.01.5-.08.78.6.3.7 1.01 2.44 1.1 2.62.09.18.15.4.03.64-.12.24-.18.4-.36.6-.18.2-.38.46-.54.62-.18.18-.37.37-.16.73.21.35.94 1.55 2.02 2.5 1.39 1.24 2.56 1.63 2.92 1.81.35.18.56.15.77-.09.21-.24.9-1.05 1.14-1.4.24-.36.48-.3.8-.18.32.12 2.05.97 2.4 1.14.36.18.6.27.68.42.1.15.1.85-.2 1.68z" />
      </svg>
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-xs md:inline-block">
        Book via WhatsApp
      </span>
    </a>
  );
}

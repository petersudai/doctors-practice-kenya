// Central content + imagery manifest for the Uzima Family Clinic demo site.
// All photography sourced from Unsplash (editorial license, free to use).

export const brand = {
  name: "Uzima Family Clinic",
  shortName: "Uzima",
  tagline: "Healthcare that knows your name.",
  whatsappNumber: "254722123456",
  whatsappDisplay: "+254 722 123 456",
  phoneDisplay: "+254 722 123 456",
  phoneHref: "tel:+254722123456",
  email: "hello@uzimaclinic.co.ke",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Contact", href: "/contact" },
];

export const images = {
  heroHome:
    "https://images.unsplash.com/photo-1769072610024-5b8a50f05c73?auto=format&fit=crop&w=1600&q=80",
  heroAbout:
    "https://images.unsplash.com/photo-1666887360680-9dc27a1d2753?auto=format&fit=crop&w=1600&q=80",
  heroServices:
    "https://images.unsplash.com/photo-1777444969135-caf869407707?auto=format&fit=crop&w=1600&q=80",
  heroDoctors:
    "https://images.unsplash.com/photo-1678695972687-033fa0bdbac9?auto=format&fit=crop&w=1600&q=80",
  heroContact:
    "https://images.unsplash.com/photo-1762625570087-6d98fca29531?auto=format&fit=crop&w=1600&q=80",
  waitingRoom:
    "https://images.unsplash.com/photo-1762625570087-6d98fca29531?auto=format&fit=crop&w=1400&q=80",
  corridor:
    "https://images.unsplash.com/photo-1777269749032-d8d458ae594d?auto=format&fit=crop&w=1400&q=80",
  redChairs:
    "https://images.unsplash.com/photo-1771574204208-b47e2d863bc5?auto=format&fit=crop&w=1400&q=80",
  consultation:
    "https://images.unsplash.com/photo-1739285388427-d6f85d12a8fc?auto=format&fit=crop&w=1200&q=80",
  paediatric:
    "https://images.unsplash.com/photo-1735792339621-2846f164b78f?auto=format&fit=crop&w=1200&q=80",
  vaccination:
    "https://images.unsplash.com/photo-1576671081741-c538eafccfff?auto=format&fit=crop&w=1200&q=80",
  dental:
    "https://images.unsplash.com/photo-1777444969135-caf869407707?auto=format&fit=crop&w=1200&q=80",
  diagnostics:
    "https://images.unsplash.com/photo-1666887360680-9dc27a1d2753?auto=format&fit=crop&w=1200&q=80",
  tabletConsult:
    "https://images.unsplash.com/photo-1666886573553-6548db92db79?auto=format&fit=crop&w=1200&q=80",
  nairobiSkyline:
    "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?auto=format&fit=crop&w=1200&q=80",
  cityView:
    "https://images.unsplash.com/photo-1695252509752-4397f05bc59d?auto=format&fit=crop&w=1200&q=80",
  cityView2:
    "https://images.unsplash.com/photo-1694434948850-ed51bd461733?auto=format&fit=crop&w=1200&q=80",
};

export type Doctor = {
  slug: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  focus: string[];
  photo: string;
  lead?: boolean;
};

export const doctors: Doctor[] = [
  {
    slug: "wanjiru-kamau",
    name: "Dr. Wanjiru Kamau",
    role: "Founder & Lead Physician",
    credentials: "MBChB (UoN), MMed Family Medicine",
    bio: "Dr. Kamau founded Uzima in 2011 after ten years in public hospitals across Nairobi and Kisumu, convinced that families deserved a clinic that treated them as more than a file number. She still sees patients three days a week.",
    focus: ["Family medicine", "Chronic disease care", "Preventive health"],
    photo:
      "https://images.unsplash.com/photo-1678695972687-033fa0bdbac9?auto=format&fit=crop&w=800&q=80",
    lead: true,
  },
  {
    slug: "otieno-abongo",
    name: "Dr. Otieno Abongo",
    role: "General Practitioner",
    credentials: "MBChB (Moi University)",
    bio: "Dr. Abongo leads our internal medicine practice, with a particular interest in diabetes and hypertension management for adults balancing demanding careers and family life.",
    focus: ["Internal medicine", "Diabetes & hypertension", "Men's health"],
    photo:
      "https://images.unsplash.com/photo-1758691463607-c1220b77aaaa?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "amina-yusuf",
    name: "Dr. Amina Yusuf",
    role: "Paediatrician",
    credentials: "MBChB, MMed Paediatrics (UoN)",
    bio: "From newborn checks to teenage growth concerns, Dr. Yusuf has spent twelve years making sure Kenyan children stay ahead of the growth curve, not just treated when something goes wrong.",
    focus: ["Newborn care", "Immunisation", "Child development"],
    photo:
      "https://images.unsplash.com/photo-1758691462651-611d730c5272?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "brian-mutiso",
    name: "Dr. Brian Mutiso",
    role: "Dentist",
    credentials: "BDS (UoN)",
    bio: "Dr. Mutiso runs our dental suite with an emphasis on painless preventive care, believing the fewer emergency fillings, the better.",
    focus: ["Preventive dentistry", "Fillings & extractions", "Teeth whitening"],
    photo:
      "https://images.unsplash.com/photo-1672655412906-8e10ba6ee373?auto=format&fit=crop&w=800&q=80",
  },
];

export type Service = {
  slug: string;
  name: string;
  summary: string;
  detail: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: "family-consultations",
    name: "General & Family Consultations",
    summary: "Same-week appointments for everyday illness, checkups, and referrals.",
    detail:
      "Walk in for a cold or book ahead for a full physical. Our GPs handle the everyday medicine that keeps a family running, and refer out fast when something needs a specialist.",
    image: images.consultation,
  },
  {
    slug: "paediatric-care",
    name: "Paediatric & Child Wellness",
    summary: "Growth monitoring, sick-child visits, and school medical forms.",
    detail:
      "From two-week-old check-ins to sports physicals for teenagers, our paediatric team tracks your child's growth chart closely, and without the two-hour hospital queue.",
    image: images.paediatric,
  },
  {
    slug: "immunisation",
    name: "Immunisation & Vaccination",
    summary: "KEPI schedule, travel vaccines, and annual flu shots.",
    detail:
      "We keep full KEPI stock for infants, plus yellow fever and typhoid vaccines for travel, and seasonal flu jabs for the whole family, all logged against the national immunisation schedule.",
    image: images.vaccination,
  },
  {
    slug: "dental-care",
    name: "Dental Care",
    summary: "Cleanings, fillings, extractions, and whitening.",
    detail:
      "Our dental suite handles routine cleanings through to extractions, with digital X-rays on site so you're rarely sent elsewhere mid-treatment.",
    image: images.dental,
  },
  {
    slug: "chronic-disease",
    name: "Chronic Disease Management",
    summary: "Ongoing care for diabetes, hypertension, and asthma.",
    detail:
      "Long-term conditions need a clinic that remembers your history. We run structured review visits with lab work built in, so your treatment plan adjusts before a small problem becomes an emergency.",
    image: images.diagnostics,
  },
  {
    slug: "diagnostics",
    name: "Laboratory & Diagnostics",
    summary: "On-site blood work, ECG, and ultrasound with same-day results.",
    detail:
      "Most common lab tests are processed on site with results back the same day, so a consultation and a diagnosis usually happen in a single visit.",
    image: images.tabletConsult,
  },
];

export type Branch = {
  slug: string;
  city: string;
  area: string;
  address: string;
  hours: string;
  phone: string;
  image: string;
  mapQuery: string;
};

export const branches: Branch[] = [
  {
    slug: "nairobi-kilimani",
    city: "Nairobi",
    area: "Kilimani",
    address: "Argwings Kodhek Road, Kilimani, Nairobi",
    hours: "Mon–Sat, 7:00am – 8:00pm · Sun, 9:00am – 2:00pm",
    phone: "+254 722 123 456",
    image: images.nairobiSkyline,
    mapQuery: "Kilimani, Nairobi, Kenya",
  },
  {
    slug: "mombasa-nyali",
    city: "Mombasa",
    area: "Nyali",
    address: "Links Road, Nyali, Mombasa",
    hours: "Mon–Sat, 8:00am – 7:00pm · Sun, closed",
    phone: "+254 733 456 789",
    image: images.cityView,
    mapQuery: "Nyali, Mombasa, Kenya",
  },
  {
    slug: "kisumu-milimani",
    city: "Kisumu",
    area: "Milimani",
    address: "Oginga Odinga Street, Milimani, Kisumu",
    hours: "Mon–Sat, 8:00am – 6:00pm · Sun, closed",
    phone: "+254 711 987 654",
    image: images.cityView2,
    mapQuery: "Milimani, Kisumu, Kenya",
  },
];

export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  photo: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Njeri W.",
    location: "Kilimani",
    quote:
      "I switched my whole family here after one visit. Dr. Kamau remembered my son's asthma history without checking the file first, and that never happened at our old clinic.",
    photo:
      "https://images.unsplash.com/photo-1622865709218-9cda3d11f595?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Kevin O.",
    location: "Nyali",
    quote:
      "Booked through WhatsApp on a Sunday night, was seen by 9am Monday. For chronic hypertension care, that kind of speed actually matters.",
    photo:
      "https://images.unsplash.com/photo-1729691031378-d63d7e81bb38?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Fatuma H.",
    location: "Milimani, Kisumu",
    quote:
      "My daughter needed her school medical form filled same-day before term started. Uzima had us in and out in forty minutes, vaccination record and all.",
    photo:
      "https://images.unsplash.com/photo-1616291446004-b89a8453561c?auto=format&fit=crop&w=200&q=80",
  },
];

export const stats = [
  { value: "14", label: "Years serving Kenyan families" },
  { value: "22,000+", label: "Patients treated to date" },
  { value: "3", label: "Branches across Kenya" },
  { value: "96%", label: "Patients who return or refer" },
];

export const insurers = [
  "SHA (Social Health Authority)",
  "NHIF Legacy Claims",
  "AAR Insurance",
  "Jubilee Health",
  "CIC Insurance",
  "Britam",
  "Madison",
  "M-Pesa (self-pay)",
];

export type Language = "ar" | "en";

export interface Service {
  id: string;
  titleEn: string;
  titleAr: string;
  bulletsAr: string[];
  bulletsEn: string[];
  closingAr: string;
  closingEn: string;
  image: string; // path under /public/services, may not exist yet (placeholder rendered)
}

export interface CaseStudyResult {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  categoryEn: string;
  title: string;
  problem: string;
  solution: string;
  results: CaseStudyResult[];
}

export interface Platform {
  name: string;
  slug: string;
  logo: string; // path under /public/platforms
}

export interface Industry {
  ar: string;
  en: string;
}

export interface SiteContent {
  header: {
    ctaWhatsApp: string;
  };
  hero: {
    experienceLabel: string;
    experienceValue: string;
    intro: string;
    greeting: string;
  };
  about: {
    heading: string;
    intro: string;
    points: string[];
    ctaPrimary: string;
    industriesHeading: string;
  };
  services: {
    heading: string;
    ctaLabel: string;
  };
  caseStudies: {
    heading: string;
  };
  platforms: {
    heading: string;
  };
  cta: {
    heading: string;
    subheading: string;
    button: string;
  };
  footer: {
    rights: string;
  };
}

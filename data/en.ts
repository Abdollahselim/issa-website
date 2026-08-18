import { SiteContent, Industry } from "./types";

export const content: SiteContent = {
  header: {
    ctaWhatsApp: "Contact Me",
  },
  hero: {
    experienceLabel: "Experience",
    experienceValue: "6 Years",
    intro:
      "I'm Issa Salim. I help businesses grow customers and sales through performance advertising, conversion rate optimization (CRO), and data analysis — with a focus on maximizing return on investment.",
    greeting: "Hey there!",
  },
  about: {
    heading: "Who Am I?",
    intro:
      "I'm Issa Salim. I help businesses grow customers and sales through performance advertising, conversion rate optimization (CRO), and data analysis with a focus on maximizing return on investment.",
    points: ["No long-term contracts", "Results in the first 30 days", "6 years of experience"],
    ctaPrimary: "Contact Me",
    industriesHeading: "Industries I've Worked With",
  },
  services: {
    heading: "My Services",
    ctaLabel: "Contact Me",
  },
  caseStudies: {
    heading: "Projects That Delivered Results",
  },
  platforms: {
    heading: "Platforms I Work With",
  },
  cta: {
    heading: "Ready to Start?",
    subheading: "Let's talk about your project — quick reply on WhatsApp.",
    button: "Message Me on WhatsApp",
  },
  footer: {
    rights: "All rights reserved",
  },
};

export const industries: Industry[] = [
  { ar: "المراكز الطبية والعيادات", en: "Medical Centers & Clinics" },
  { ar: "الحجامة والعلاج الطبيعي", en: "Cupping & Physiotherapy" },
  { ar: "النظارات والعدسات", en: "Optics & Lenses" },
  { ar: "شركات المحاماة", en: "Law Firms" },
  { ar: "الخدمات المهنية للشركات", en: "Professional B2B Services" },
  { ar: "التجميل والعناية", en: "Beauty & Skincare" },
  { ar: "التجارة الإلكترونية", en: "E-commerce" },
];

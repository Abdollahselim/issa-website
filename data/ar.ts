import { SiteContent, Industry } from "./types";

export const content: SiteContent = {
  header: {
    ctaWhatsApp: "تواصل معي",
  },
  hero: {
    experienceLabel: "خبرة",
    experienceValue: "6 سنـــــــــــــــــــــــــــــوات",
    intro:
    "أنـا عيسى سليم، اســــاعد الشركات على زيـادة العملاء والمبيعات من خلال إدارة الحملات الإعلانية، تحسين معدل التحويل للعملاء (CRO)، وتحــليل البيـانات، مع التركيز على تحقيق أعلى عــائد على الاستثمار.",
    greeting: "يا هــــــــلا..!",
  },
  about: {
    heading: "مين أنا؟",
    intro:
      "انـــا عيسى سليم، اســــاعد الشركات على زيـــادة العمــلاء والمبيعات من خــلال إدارة الحمــــــلات الإعلانية، تحسين معدل التحويل للعمـلاء (CRO)، وتحليل البيـــــــــانات، مع التركيز على تحقيق أعلى عائد على الاستثمار.",
    points: ["بدون عقود طويلة الأمد", "نتائج أول 30 يوم", "خبرة 6 سنوات"],
    ctaPrimary: "تواصل معي",
    industriesHeading: "صناعات عملت به",
  },
  services: {
    heading: "خدماتي؟",
    ctaLabel: "تواصل معي",
  },
  caseStudies: {
    heading: "مشاريع حققت نتائج",
  },
  platforms: {
    heading: "المنصات اللي بشتغل عليها",
  },
  cta: {
    heading: "جاهز تبدأ؟",
    subheading: "خلينا نتكلم عن مشروعك، أول رد خلال دقايق على واتساب.",
    button: "تواصل معي على واتساب",
  },
  footer: {
    rights: "جميع الحقوق محفوظة",
  },
};

export const industries: Industry[] = [
  { ar: "المراكز الطبية والعيادات", en: "Medical Centers & Clinics" },
  { ar: "الحجامة والعلاج الطبيعي", en: "Cupping & Physiotherapy" },
  { ar: "التجميل والعناية", en: "Beauty & Skincare" },
  { ar: "النظارات والعدسات", en: "Optics & Lenses" },
  { ar: "الخدمات المهنية للشركات", en: "Professional B2B Services" },
  { ar: "شركات المحاماة", en: "Law Firms" },
  { ar: "التجارة الإلكترونية", en: "E-commerce" },
];

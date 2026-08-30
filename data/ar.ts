import { SiteContent, Industry } from "./types";

export const content: SiteContent = {
  header: {
    ctaWhatsApp: "تواصل معي",
  },
  hero: {
    experienceLabel: "خبرة",
    experienceValue: "6 سنـــــــــــــــــــــــــــــوات",
    intro:
    "أنا عيسى سليم، أساعد الشركات على زيادة العملاء والمبيعات من خلال إدارة الحملات الإعلانية، تحسين معدل التحويل للعملاء (CRO)، وتحليل البيانات، مع التركيز على تحقيق أعلى عــائد على الاستثمار.",
    greeting: "يا هــــــــلا..!",
  },
  about: {
    heading: "مين أنا؟",
    intro:
      "أنا عيسى سليم، أساعد الشركات على زيادة العملاء والمبيعات من خلال إدارة الحملات الإعلانية، تحسين معدل التحويل للعملاء (CRO)، وتحليل البيانات، مع التركيز على تحقيق أعلى عائد على الاستثمار.",
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
  { ar: "النظارات والعدسات", en: "Optics & Lenses" },
  { ar: "شركات المحاماة", en: "Law Firms" },
  { ar: "الخدمات المهنية للشركات", en: "Professional B2B Services" },
  { ar: "التجميل والعناية", en: "Beauty & Skincare" },
  { ar: "التجارة الإلكترونية", en: "E-commerce" },
];

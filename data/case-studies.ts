import { CaseStudy } from "./types";

// Only the دراسة الحالة #1 metrics/content are real (from the source prototype).
// The remaining categories are structural placeholders — swap in real data later,
// no component changes required.
export const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    category: "مركز حجامة",
    categoryEn: "Cupping Therapy Center",
    titleAr: "دراسة الحالة #1",
    titleEn: "Case Study #1",
    problemAr:
      "ارتفاع تكلفة الاستحواذ على العملاء، مما أثر على كفاءة الإنفاق الإعلاني. انخفاض تقييم المركز على Google إلى 3.2، مما قلّل من ثقة العملاء المحتملين وأثر على معدل تحويلهم إلى حجوزات.",
    problemEn:
      "Rising customer acquisition cost was hurting ad spend efficiency, while the center's Google rating had dropped to 3.2 - undermining trust with prospective clients and reducing their conversion into bookings.",
    solutionAr:
      "رفع تقييم المركز على Google من 3.2 إلى 4.9 مما عزز الثقة والسمعة الرقمية للمركز. خفض تكلفة الحصول على العملاء وتحسين كفاءة الحملات التسويقية، مما أدى إلى زيادة معدل التحويل.",
    solutionEn:
      "Raised the center's Google rating from 3.2 to 4.9, strengthening trust and digital reputation. Lowered customer acquisition cost and improved campaign efficiency, driving a higher conversion rate.",
    results: [
      { label: "ROAS", value: "5.9X" },
      { label: "CAC", value: "25% أقل" },
      { label: "Google Rating", value: "4.9" },
    ],
  },
  {
    id: "case-2",
    category: "عيادة أسنان",
    categoryEn: "Dental Clinic",
    titleAr: "دراسة الحالة #2",
    titleEn: "Case Study #2",
    problemAr: "تفاصيل هذه الدراسة قيد الإضافة.",
    problemEn: "Details for this case study are coming soon.",
    solutionAr: "تفاصيل هذه الدراسة قيد الإضافة.",
    solutionEn: "Details for this case study are coming soon.",
    results: [
      { label: "ROAS", value: "—" },
      { label: "CAC", value: "—" },
      { label: "Google Rating", value: "4.9" },
    ],
  },
  {
    id: "case-3",
    category: "صالون سيدات",
    categoryEn: "Women's Salon",
    titleAr: "دراسة الحالة #3",
    titleEn: "Case Study #3",
    problemAr: "تفاصيل هذه الدراسة قيد الإضافة.",
    problemEn: "Details for this case study are coming soon.",
    solutionAr: "تفاصيل هذه الدراسة قيد الإضافة.",
    solutionEn: "Details for this case study are coming soon.",
    results: [
      { label: "ROAS", value: "—" },
      { label: "CAC", value: "—" },
      { label: "Google Rating", value: "4.3" },
    ],
  },
  {
    id: "case-4",
    category: "B2B",
    categoryEn: "B2B",
    titleAr: "دراسة الحالة #4",
    titleEn: "Case Study #4",
    problemAr: "تفاصيل هذه الدراسة قيد الإضافة.",
    problemEn: "Details for this case study are coming soon.",
    solutionAr: "تفاصيل هذه الدراسة قيد الإضافة.",
    solutionEn: "Details for this case study are coming soon.",
    results: [
      { label: "ROAS", value: "—" },
      { label: "CAC", value: "—" },
      { label: "Google Rating", value: "—" },
    ],
  },
  {
    id: "case-5",
    category: "تجارة إلكترونية",
    categoryEn: "E-commerce",
    titleAr: "دراسة الحالة #5",
    titleEn: "Case Study #5",
    problemAr: "تفاصيل هذه الدراسة قيد الإضافة.",
    problemEn: "Details for this case study are coming soon.",
    solutionAr: "تفاصيل هذه الدراسة قيد الإضافة.",
    solutionEn: "Details for this case study are coming soon.",
    results: [
      { label: "ROAS", value: "—" },
      { label: "CAC", value: "—" },
      { label: "Google Rating", value: "—" },
    ],
  },
  {
    id: "case-6",
    category: "مركز ليزر وتجميل",
    categoryEn: "Laser & Cosmetics Center",
    titleAr: "دراسة الحالة #6",
    titleEn: "Case Study #6",
    problemAr: "تفاصيل هذه الدراسة قيد الإضافة.",
    problemEn: "Details for this case study are coming soon.",
    solutionAr: "تفاصيل هذه الدراسة قيد الإضافة.",
    solutionEn: "Details for this case study are coming soon.",
    results: [
      { label: "ROAS", value: "—" },
      { label: "CAC", value: "—" },
      { label: "Google Rating", value: "—" },
    ],
  },
];

export function getCaseStudyCategories(Language: "ar" | "en") {
  return Array.from(
    new Set(caseStudies.map((c) => (Language === "en" ? c.categoryEn : c.category)))
  );
}
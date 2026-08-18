import { CaseStudy } from "./types";

// Only the دراسة الحالة #1 metrics/content are real (from the source prototype).
// The remaining categories are structural placeholders — swap in real data later,
// no component changes required.
export const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    category: "مركز حجامة",
    categoryEn: "Cupping Therapy Center",
    title: "دراسة الحالة #1",
    problem:
      "ارتفاع تكلفة الاستحواذ على العملاء، مما أثر على كفاءة الإنفاق الإعلاني. انخفاض تقييم المركز على Google إلى 3.2، مما قلّل من ثقة العملاء المحتملين وأثر على معدل تحويلهم إلى حجوزات.",
    solution:
      "رفع تقييم المركز على Google من 3.2 إلى 4.9 مما عزز الثقة والسمعة الرقمية للمركز. خفض تكلفة الحصول على العملاء وتحسين كفاءة الحملات التسويقية، مما أدى إلى زيادة معدل التحويل.",
    results: [
      { label: "ROAS", value: "5.9X" },
      { label: "CAC", value: "25% أقل" },
      { label: "Google Rating", value: "4.7" },
    ],
  },
  {
    id: "case-2",
    category: "عيادة أسنان",
    categoryEn: "Dental Clinic",
    title: "دراسة الحالة #2",
    problem: "تفاصيل هذه الدراسة قيد الإضافة.",
    solution: "تفاصيل هذه الدراسة قيد الإضافة.",
    results: [
      { label: "ROAS", value: "—" },
      { label: "CAC", value: "—" },
      { label: "Google Rating", value: "—" },
    ],
  },
  {
    id: "case-3",
    category: "صالون سيدات",
    categoryEn: "Women's Salon",
    title: "دراسة الحالة #3",
    problem: "تفاصيل هذه الدراسة قيد الإضافة.",
    solution: "تفاصيل هذه الدراسة قيد الإضافة.",
    results: [
      { label: "ROAS", value: "—" },
      { label: "CAC", value: "—" },
      { label: "Google Rating", value: "—" },
    ],
  },
  {
    id: "case-4",
    category: "B2B",
    categoryEn: "B2B",
    title: "دراسة الحالة #4",
    problem: "تفاصيل هذه الدراسة قيد الإضافة.",
    solution: "تفاصيل هذه الدراسة قيد الإضافة.",
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
    title: "دراسة الحالة #5",
    problem: "تفاصيل هذه الدراسة قيد الإضافة.",
    solution: "تفاصيل هذه الدراسة قيد الإضافة.",
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
    title: "دراسة الحالة #6",
    problem: "تفاصيل هذه الدراسة قيد الإضافة.",
    solution: "تفاصيل هذه الدراسة قيد الإضافة.",
    results: [
      { label: "ROAS", value: "—" },
      { label: "CAC", value: "—" },
      { label: "Google Rating", value: "—" },
    ],
  },
];

export const caseStudyCategories = Array.from(
  new Set(caseStudies.map((c) => c.category))
);

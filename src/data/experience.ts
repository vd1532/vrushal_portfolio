export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  description: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    title: "Junior Perfumer",
    company: "Eagle Wings Enterprises LLP",
    location: "Mumbai, Maharashtra, India",
    period: "Nov 2021 – Jun 2024",
    duration: "2 years 8 months",
    description: [
      "Developed market-specific fragrance formulations for cross-regional portfolios (India, Middle East, Sweden, Sri Lanka, Bangladesh), directly contributing to >30% year-over-year revenue growth.",
      "Built and curated a reference library of 2,000+ aroma chemicals and integrated structured datasets to enable systematic olfactory matching and formulation screening.",
      "Conducted sensory evaluation panels to optimize fragrance profiles across product categories, informing formulation iterations based on structured feedback.",
      "Authored formulation batch records and evaluation reports to accelerate development cycles and maintain a centralized knowledge base.",
    ],
  },
  {
    title: "In-Plant Trainee",
    company: "FDC Limited",
    location: "Aurangabad, Maharashtra, India",
    period: "Apr 2018 – Jun 2018",
    duration: "3 months",
    description: [
      "Supported cGMP manufacturing operations for pharmaceutical products designated for US, UK, and Indian markets; reviewed SOPs to understand region-specific regulatory requirements.",
      "Gained hands-on exposure to end-to-end line operations and multi-region compliance workflows, including shadowing QA teams during batch disposition and deviation review.",
      "Assisted in aseptic manufacturing of ophthalmic solutions using Blow-Fill-Seal (BFS) technology under controlled cleanroom conditions.",
      "Supported QC/QA analytical testing using GC, HPLC, and Karl Fischer Coulometry, contributing to a 5% reduction in quality variances and improved batch record accuracy.",
    ],
  },
];

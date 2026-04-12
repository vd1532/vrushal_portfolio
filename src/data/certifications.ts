export type CertificationType = "certification" | "coursework" | "poster" | "license";

export interface Certification {
  name: string;
  year?: number;
  type: CertificationType;
}

export const certifications: Certification[] = [
  { name: "Advanced Topics in PK/PD Modeling & Analysis with ADAPT 5", year: 2025, type: "coursework" },
  { name: "SimBiology", year: 2025, type: "coursework" },
  { name: "Modelling & Simulations using Monolix Suite™", year: 2025, type: "coursework" },
  { name: "PKPD Modeling Workshop Using Phoenix", year: 2024, type: "certification" },
  { name: "Safety & Risk Management", year: 2020, type: "certification" },
  {
    name: 'Poster Presentation: "Green Method of Synthesis of Schiff\'s Base Using Natural Acid Catalysts"',
    year: 2019,
    type: "poster",
  },
  { name: 'Poster Presentation: "Novel Drug Delivery Systems"', year: 2017, type: "poster" },
  { name: "Registered Pharmacist — Maharashtra Pharmacy Council", type: "license" },
];

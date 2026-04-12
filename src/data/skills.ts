export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Cell-Based & Biochemical",
    skills: [
      "Mammalian Cell Culture",
      "Aseptic Technique",
      "Cell Passaging & Seeding",
      "ELISA",
      "Cell Viability Assays",
      "Micro BCA Protein Quantification",
      "Imaging Cytometer",
    ],
  },
  {
    name: "Biophysical & Analytical",
    skills: [
      "LNP Formulation",
      "DLS",
      "PSvue™",
      "DPH Anisotropy",
      "GC-MS",
      "Head Space Analysis",
      "SEC-HPLC",
      "FTIR",
      "UV-Vis Spectrophotometer",
      "Spectrofluorometer",
      "TEM",
      "Circular Dichroism",
    ],
  },
  {
    name: "Modeling & Simulation",
    skills: [
      "Phoenix™ WinNonlin",
      "ADAPT 5",
      "SimBiology",
      "GastroPlus®",
      "Monolix™",
      "Simcyp®",
      "MATLAB",
    ],
  },
  {
    name: "Data & Productivity",
    skills: ["R Programming", "GraphPad Prism®", "DoE / RSM", "ChemDraw", "Microsoft Suite"],
  },
];

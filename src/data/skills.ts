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
      "PCR",
      "qPCR",
      "Western Blot",
      "Flow Cytometry",
    ],
  },
  {
    name: "Biophysical & Analytical",
    skills: [
      "LNP Formulation",
      "DLS",
      "GC-MS",
      "Head Space Analysis",
      "SEC",
      "UPLC",
      "FTIR",
      "UV-Vis Spectrophotometer",
      "Spectrofluorometer",
      "TEM",
      "Circular Dichroism",
      "DSC",
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
    skills: ["R Programming", "GraphPad Prism®", "DoE / RSM", "ChemDraw", "Microsoft Suite", "Statistical Analysis"],
  },
];

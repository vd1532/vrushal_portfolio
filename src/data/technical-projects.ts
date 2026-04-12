export interface TechnicalProject {
  title: string;
  tool: string;
  year: number;
  description: string;
}

export const technicalProjects: TechnicalProject[] = [
  {
    title: "Target Mediated Drug Disposition (TMDD) & Michaelis-Menten (MM) Approximations",
    tool: "ADAPT 5",
    year: 2025,
    description:
      "Modelled and simulated TMDD rapid binding and Michaelis-Menten models for different doses, varied KD and compared the outputs for drug concentration, drug-receptor concentration, free receptor concentration and receptor occupancy.",
  },
  {
    title: "Antibacterial PK of Doripenem",
    tool: "SimBiology",
    year: 2025,
    description:
      "Fit a basic PK model and built a bacterial growth/kill model with Kmax and KC50 for a dosing of 12 hours, ran a 0-500 mg parameter scan and generated an analysis report.",
  },
  {
    title: "Remifentanil PK",
    tool: "Phoenix WinNonlin",
    year: 2024,
    description:
      "Performed NCA and built learnt to build a one compartment and two compartment infusion model, compared the fit and captured final parameter estimates.",
  },
];

export const toolColors: Record<string, string> = {
  "ADAPT 5": "blue",
  "SimBiology": "emerald",
  "Phoenix WinNonlin": "violet",
};

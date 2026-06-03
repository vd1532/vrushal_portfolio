export interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  period: string;
  gpa: string;
  courses?: string[];
}

export const education: EducationEntry[] = [
  {
    degree: "MS",
    field: "Pharmaceutical Sciences",
    institution: "State University of New York (SUNY) at Buffalo, NY",
    period: "Aug 2024 – May 2026",
    gpa: "GPA 3.42 / 4.0",
    courses: ["Pharmacokinetics", "Biologics", "Pharmacogenomics", "Pharmacometrics Software", "Biometry"],
  },
  {
    degree: "M.Tech",
    field: "Speciality Chemicals Technology, Perfumery & Flavours",
    institution: "Institute of Chemical Technology (formerly UDCT), Mumbai",
    period: "2019 – 2021",
    gpa: "CGPA 9.55 / 10",
  },
  {
    degree: "B.Pharm",
    field: "Bachelor of Pharmacy",
    institution: "Dr. L. H. Hiranandani College of Pharmacy, Mumbai University",
    period: "Jul 2015 – May 2019",
    gpa: "CGPA 7.32 / 10",
  },
];

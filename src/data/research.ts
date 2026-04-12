export interface ResearchProject {
  slug: string;
  title: string;
  period: string;
  institution: string;
  type: string;
  highlights: string[];
  overview?: string;
  methods?: string[];
  outcomes?: string[];
  tools?: string[];
}

export const projects: ResearchProject[] = [
  {
    slug: "tolerogenic-lysops-nanoparticles",
    title:
      "Development & Biophysical Characterization of Tolerogenic Lysophosphatidylserine Nanoparticles containing Ovalbumin",
    period: "Jan 2025 – May 2026",
    institution: "SUNY Buffalo",
    type: "MS Thesis",
    highlights: [
      "Developed an extrusion-free formulation method for 18:1 LysoPS-DMPC nanoparticles loaded with Ovalbumin designed to simplify scale-up while maintaining tolerogenic antigen delivery performance.",
      "Characterized nanoparticle size distribution and batch-to-batch consistency using DLS, confirming formulation reproducibility.",
      "Quantified PS surface exposure and membrane fluidity to verify that biophysical attributes critical to tolerogenic function were preserved in the extrusion-free process.",
      "Compared OVA association efficiency with the standard extruded method and verified protein structure after association using CD and intrinsic fluorescence to ensure native protein conformation.",
    ],
    overview:
      "This thesis project focuses on developing a novel lipid nanoparticle platform for tolerogenic antigen delivery. By incorporating lysophosphatidylserine (LysoPS) into DMPC-based nanoparticles, we aim to mimic apoptotic cell signals that promote immune tolerance rather than activation. The extrusion-free approach is designed to remove a key scale-up bottleneck while preserving the biophysical attributes essential for tolerogenic function.",
    methods: [
      "Thin-film hydration (extrusion-free)",
      "Dynamic Light Scattering (DLS)",
      "Annexin V binding assay for PS surface exposure",
      "Circular Dichroism (CD) spectroscopy",
      "Intrinsic fluorescence spectroscopy",
      "Laurdan fluorescence for membrane fluidity",
      "DPH Anisotropy",
      "Micro BCA protein quantification",
    ],
    outcomes: [
      "Successfully formulated LysoPS-DMPC nanoparticles without extrusion",
      "Confirmed PS surface exposure correlating with LysoPS incorporation",
      "Demonstrated preserved protein secondary structure post-loading",
      "Confirmed batch-to-batch reproducibility via DLS",
    ],
    tools: ["DLS (Malvern Zetasizer)", "CD Spectropolarimeter", "Spectrofluorometer", "Plate Reader", "PSvue Sensor"],
  },
  {
    slug: "enzymatic-synthesis-perfumery-esters",
    title: "Optimization of Enzymatic Synthesis of Perfumery Esters Using RSM",
    period: "Aug 2020 – Nov 2021",
    institution: "ICT Mumbai (formerly UDCT)",
    type: "M.Tech Thesis",
    highlights: [
      "Designed and executed multi-parameter enzymatic assays using lipases from Aspergillus oryzae and Candida antarctica, systematically screening reaction conditions across temperature, substrate ratio, and enzyme loading variables.",
      "Applied Response Surface Methodology (RSM) to model parameter interactions, reducing reaction time by 25% and enzyme load by 15% while achieving yields >92%.",
      "Ran solvent-free enzymatic reactions to reduce hazardous wastes and maintain industrial viability.",
      "Verified product purity via GC analysis and compiled a reproducible, scalable protocol.",
    ],
    overview:
      "This research explored green chemistry approaches to synthesize perfumery-grade esters using enzyme catalysis instead of conventional acid catalysts. Response Surface Methodology (RSM) was used to optimize multiple reaction parameters simultaneously, enabling a cleaner, faster, higher-yield process.",
    methods: [
      "Response Surface Methodology (Box-Behnken design)",
      "Lipase-catalyzed esterification (A. oryzae and C. antarctica)",
      "Gas Chromatography for purity analysis",
      "Solvent-free reaction optimization",
      "Multi-parameter enzymatic assays",
    ],
    outcomes: [
      "Achieved >92% ester yield under optimized conditions",
      "25% reduction in reaction time vs. baseline",
      "15% reduction in enzyme loading requirement",
      "Scalable solvent-free protocol established",
    ],
    tools: ["GC", "RSM Software (Design Expert)", "Rotary Evaporator"],
  },
  {
    slug: "green-synthesis-schiffs-base",
    title: "Studies on Green Method of Synthesis of Schiff's Base Using Natural Acid Catalyst",
    period: "Sep 2018 – Feb 2019",
    institution: "Dr. L. H. Hiranandani College of Pharmacy",
    type: "B.Pharm Undergraduate Research",
    highlights: [
      "Implemented green synthesis of hydrazone derivative using natural fruit juice catalysts.",
      "Achieved ~30% faster reaction rates versus conventional reaction conditions.",
      "Optimized reaction yield by ~15% using citric acid from lemon juice, identifying it as the most effective catalyst with a reaction time ~25% faster compared to other acids.",
      "Validated hydrazone purity (95%) using IR spectroscopy, showcasing the viability of natural acid catalysts.",
    ],
    overview:
      "This undergraduate project investigated the use of naturally-derived acid catalysts from fruit juices as green alternatives for Schiff base synthesis, aligning with sustainable chemistry principles and demonstrating that natural catalysts can achieve comparable performance to conventional reagents.",
    methods: [
      "Schiff base condensation reaction",
      "Natural acid catalyst extraction from fruit juices",
      "IR spectroscopy for structural confirmation",
      "Yield optimization across multiple acid sources",
    ],
    outcomes: [
      "~30% faster reaction rates compared to conventional catalysts",
      "~15% yield improvement with citric acid from lemon juice",
      "95% product purity confirmed by IR",
      "Demonstrated viability of green catalysts for organic synthesis",
    ],
    tools: ["IR Spectrophotometer", "Reflux Apparatus", "Analytical Balance"],
  },
];

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Research } from "@/components/sections/Research";
import { TechnicalProjects } from "@/components/sections/TechnicalProjects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Research />
      <TechnicalProjects />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
    </>
  );
}

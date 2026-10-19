import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Journey } from "@/components/sections/Journey";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { siteConfig } from "@/data/site";
import { personalData } from "@/data/personal";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalData.name,
    alternateName: personalData.shortName,
    url: siteConfig.url,
    email: `mailto:${personalData.email}`,
    jobTitle: personalData.careerGoal,
    description: personalData.heroIntro,
    alumniOf: {
      "@type": "EducationalOrganization",
      name: personalData.university,
    },
    sameAs: [
      "https://github.com/pamithenuka",
      "https://www.linkedin.com/in/pamith-kaluarachchi-3595b83a5",
    ],
    knowsAbout: [
      "Software Engineering",
      "Full-Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "JavaScript",
      "Java",
      "Python",
      "MongoDB",
      "Tailwind CSS",
      "RESTful APIs",
      "Spring Boot",
      "ASP.NET Core",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Education />
      <Contact />
    </>
  );
}

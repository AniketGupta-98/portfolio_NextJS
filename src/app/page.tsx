import HeaderSection from "./components/hompage/header-section/index";
import AboutSection from "./components/hompage/about/";
import Experience from "./components/hompage/experience";
import Skills from "./components/hompage/skills";
import Education from "./components/hompage/education";

export default async function Home() {

  return (
    <div suppressHydrationWarning >
      <HeaderSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Education />
    </div>
  )
};
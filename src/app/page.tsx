import HeaderSection from "./components/hompage/header-section/index";
import AboutSection from "./components/hompage/about/";
import Experience from "./components/hompage/experience"

export default async function Home() {

  return (
    <div suppressHydrationWarning >
      <HeaderSection />
      <AboutSection />
      <Experience />
    </div>
  )
};
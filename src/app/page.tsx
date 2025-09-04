import HeaderSection from "./components/hompage/header-section/index";
import AboutSection from "./components/hompage/about/";

export default async function Home() {

  return (
    <div suppressHydrationWarning >
      <HeaderSection />
      <AboutSection />
    </div>
  )
};
import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import LogoSection from "./components/LogoSection";
import MultiCard from "./components/MultiCard";
import Mobilesection from "./components/Mobilesection";
import StudioSedction from "./components/StudioSedction";
import AgencySection from "./components/AgencySection";
import Footer from './components/footer'
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoSection />
      <MultiCard/>
      <Mobilesection/>
      <StudioSedction/>
      <AgencySection/>
      <Footer/>
    </>
  );
}

export default App;

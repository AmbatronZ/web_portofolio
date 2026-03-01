import "./App.css";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import ScrollIndicator from "./components/ScrollIndicator";
import useGsapAnimations from "./hooks/useGsapAnimations";

const App = () => {
  useGsapAnimations();

  return (
    <div className="container">
      <div className="overlay"></div>
      <HeroSection />
      <InfoSection />
      <ScrollIndicator />
    </div>
  );
};

export default App;
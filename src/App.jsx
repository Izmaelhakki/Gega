import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MoviesSection from "./components/MoviesSection";
import InterSection from "./components/InterSection";

function App() {
  return (
    <div className="font-open">
      <Header />
      <HeroSection/>
      <MoviesSection/>
      <InterSection/>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MoviesSection from "./components/MoviesSection";

function App() {
  return (
    <div className="font-open">
      <Header />
      <HeroSection/>
      <MoviesSection/>
    </div>
  );
}

export default App;

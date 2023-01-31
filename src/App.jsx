import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MoviesSection from "./components/MoviesSection";
import InterSection from "./components/InterSection";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="font-open">
      <Header />
      <HeroSection/>
      <MoviesSection/>
      <InterSection/>
      <Posts/>
    </div>
  );
}

export default App;

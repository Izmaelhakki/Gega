import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MoviesSection from "./components/MoviesSection";
import InterSection from "./components/InterSection";
import Posts from "./components/Posts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-open dark">
      <Header />
      <HeroSection/>
      <MoviesSection/>
      <InterSection/>
      <Posts/>
      <Footer/>
    </div>
  );
}

export default App;

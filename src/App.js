import "./App.css";
import CardContainer from "./components/CardContainer";
import HeroGallery from "./components/HeroGallery";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-[Roboto] bg-hotstarBlue">
      <Navbar />
      <HeroGallery />
      <CardContainer />
      <CardContainer />
      <CardContainer />
      <CardContainer />
      <div className="h-32"></div>
    </div>
  );
}

export default App;

import Header from "./components/Header.jsx";
import InfoPortfolio from "./components/InfoPortfolio.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Foooter.jsx";

function App() {
  return (
    <div className="bg-zinc-800 min-h-screen w-full overflow-x-hidden">
      <Header />
      <InfoPortfolio />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

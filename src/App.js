import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Skills/>
      <Experience/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;

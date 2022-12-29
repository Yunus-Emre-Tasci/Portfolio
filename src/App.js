import { BrowserRouter, Routes } from "react-router-dom";
import About from "./components/About";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Certificate />
      <Work />
      <Contact />
    </div>
  );
}

export default App;

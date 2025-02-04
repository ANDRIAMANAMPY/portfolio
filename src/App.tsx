import About from "./components/About";
import Experiences from "./components/Experiences";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from "react";

export default function App() {
  React.useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
        offset: 100,
        
    })
    AOS.refresh();
  }, [])
  
  return (
    <div>

      <div className="p-5 md:px-[15%]">
        <Navbar />
        <Home />
      </div>

      <About />

      <div className="p-5 md:px-[15%]">
        <Experiences />
        <Projects />
      </div>
      <Footer />
    </div>
  )
}
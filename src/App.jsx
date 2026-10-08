import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Architecture,
  Experience,
  Tech,
  Works,
  Principles,
  Contact,
  Footer,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#070a13] text-slate-100 min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
        <Navbar />
        <Hero />
        <About />
        <Architecture />
        <Experience />
        <Tech />
        <Works />
        <Principles />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

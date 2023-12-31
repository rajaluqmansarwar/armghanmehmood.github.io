import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Tech from "./components/Tech/Tech";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Tech />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;

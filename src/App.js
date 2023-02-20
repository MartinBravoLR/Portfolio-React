import React from "react";

import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Footer from "./components/footer/Footer"

import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Experience from "./components/experience/Experience"
import Portafolio from "./components/portafolio/Portafolio"
import Services from "./components/services/Services"


function App() {
  return (
  <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portafolio />
      <Contact/>
      <Footer/>
</>
  );
}

export default App;

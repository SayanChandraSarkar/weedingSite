import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Collections from "../Collections/Collections";
import Services from "../Services/services";



const Page = () => {
  return (
    <HashRouter>
      <Navbar />
     
      {/* <Header/> */}
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Collections" element={<Collections/>}/>
        <Route exact path="/Services" element={<Services/>}/>
       
        
        
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Page;

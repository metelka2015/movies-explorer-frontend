import React from "react";
import { Header } from "../Header/Header.js";
import { Promo } from "../Promo/Promo.js";
import { AboutProject } from "../AboutProject/AboutProject.js";
import { Techs } from "../Techs/Techs.js";
import { AboutMe } from "../AboutMe/AboutMe.js";
import { Footer } from "../Footer/Footer.js";

export function Main() {
  return (
    <>
        <Header />
        <main className="main">
            <Promo />  
            <AboutProject />   
            <Techs /> 
            <AboutMe />
        </main>
        <Footer />
    </>
  );
}

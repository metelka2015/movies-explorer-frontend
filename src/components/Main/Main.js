import React from "react";
/*import { Header } from "../Header/Header.js";*/
import { Promo } from "../Promo/Promo.js";
import { AboutProject } from "../AboutProject/AboutProject.js";
import { Techs } from "../Techs/Techs.js";
import { AboutMe } from "../AboutMe/AboutMe.js";
/*import { Footer } from "../Footer/Footer.js";*/
import "./Main.css";

export function Main() {
  return (
    <>        
        <div className="main">
            <div className="main__promo">
              <Promo />
            </div> 
            <AboutProject />
            <div className="main__techs">
               <Techs /> 
            </div>   
            <AboutMe />
        </div>        
    </>
  );
}

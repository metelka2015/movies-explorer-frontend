import React from "react";
import './Promo.css';
import promo from "../../images/promo-image.svg";

export function Promo () {
    return (
        <section className="promo">
            <div className="promo__cover">
                <div className="promo__container">
                <div className="promo__titles">
                    <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                </div>
                <div className="promo__image-container">
                    <img className="promo__image" alt="рисунок планеты" src={promo} />
                </div>                
                </div>          
            
                <a href="#know" className="promo__link">Узнать больше</a>
            </div>            
        </section>
    );
}
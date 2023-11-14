import React from "react";
import './AboutMe.css';
import { TitleSection } from "../TitleSection/TitleSection.js";
import photo from "../../images/photo.png";
import { Portfolio } from "../Portfolio/Portfolio.js";

export function AboutMe () {
    return (
        <section className="about-me">
            <TitleSection title="Студент"> 
                <div className="about-me__container">
                    <div className="about-me__content">
                        <h2 className="about-me__title">Виталий</h2>
                        <h3 className="about-me__subtitle">Фронтенд-разработчик, 30 лет</h3>
                        <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С&nbsp;2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        <a className="about-me__link" href="https://github.com/metelka2015" target="blank">Github</a> 
                    </div>
                    <img className="about-me__image" src={photo} alt="фотография" />
                </div>  
                <Portfolio />
            </TitleSection>
        </section>
    );
}
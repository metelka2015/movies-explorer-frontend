import React from "react";
import './AboutProject.css';
import { TitleSection } from "../TitleSection/TitleSection.js";

export function AboutProject () {
    return (
        <section className="project">
            <TitleSection title={<a name="know">О проекте</a>}>            
                <ul className="project__container">
                    <li className="project__titles">
                        <h3 className="project__title">Дипломный проект включал 5 этапов</h3>
                        <p className="projet__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </li>
                    <li className="project__titles">
                        <h3 className="project__title">На выполнение диплома ушло 5 недель</h3>
                        <p className="projet__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </li>
                </ul>
                <ul className="project__diagram">
                    <li className="project__diagram-item">
                        <p className="project__time project__time_green">1 неделя</p>
                        <p className="project__type">Back-end</p>
                    </li>
                    <li className="project__diagram-item">
                        <p className="project__time ">4 недели</p>
                        <p className="project__type">Front-end</p>
                    </li>
                </ul>
            </TitleSection>
       </section>
    )
}
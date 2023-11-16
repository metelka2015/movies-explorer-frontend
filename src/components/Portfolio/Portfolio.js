import React from "react";
import './Portfolio.css';

export function Portfolio () {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__links">
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://github.com/metelka2015/how-to-learn#проект-одностраничного-сайта-научиться-учиться" target="blank">Статичный сайт <span className="portfolio__image">↗</span></a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://metelka2015.github.io/russian-travel/#" target="blank">Адаптивный сайт <span className="portfolio__image">↗</span></a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://github.com/metelka2015/react-mesto-api-full-gha" target="blank">Одностраничное приложение <span className="portfolio__image">↗</span></a>
                </li>
            </ul>
        </section>

    );
}
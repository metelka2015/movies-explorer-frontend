import React from "react";
import { MoviesCard } from "../MoviesCard/MoviesCard.js";
import './MoviesCardList.css';

export function MoviesCardList () {
    return(
        <>
            <section className="movies-cardlist">
                <ul className="movies-cardlist__container">
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                </ul>
            </section>
        </>
    )
}
import React from "react";
/*import { Header } from "../Header/Header.js";*/
import { SearchForm } from "../SearchForm/SearchForm.js";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList.js";
/*import { Footer } from "../Footer/Footer.js";*/
import './SavedMovies.css';

export function SavedMovies () {
    return(
        <>
            <section className="saved-movies" aria-label="сохранённые фильмы">
                    <SearchForm />
                    <MoviesCardList />                   
            </section>
        </>
    )
}
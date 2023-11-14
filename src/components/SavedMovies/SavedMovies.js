import React from "react";
import { Header } from "../Header/Header.js";
import { SearchForm } from "../SearchForm/SearchForm.js";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList.js";
import { Footer } from "../Footer/Footer.js";
import './SavedMovies.css';

export function SavedMovies () {
    return(
        <>
            <Header />
                <section className="saved-movies" aria-label="сохранённые фильмы">
                    <div className="saved-movies__cover">
                        <SearchForm />
                        <MoviesCardList />
                    </div>                    
                </section>
            <Footer />
        </>
    )
}
import React from "react";
import { Header } from "../Header/Header.js";
import { SearchForm } from "../SearchForm/SearchForm.js";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList.js";
import { Footer } from "../Footer/Footer.js";
import './Movies.css';

export function Movies () {
    return(
        <>
            <Header />
                <section className="movies" aria-label="фильмы">
                    <div className="movies__cover">
                        <SearchForm />
                        <MoviesCardList />
                        <button className="movies__button">Ещё</button>
                    </div>                    
                </section> 
            <Footer />                       
        </>
    )
}
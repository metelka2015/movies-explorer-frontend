import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';
import account from "../../images/icon-account.svg";

export function Navigation ({ onClick, menuOpen }) {
    function handleLinkActive({isActive}) {
        return `navigation__link ${isActive ? "navigation__link_active" : ""}`;
    }

    return(
        <section className={`navigation  ${menuOpen ? "navigation__open" : ""}`}>  
                <button className="navigation__close-button" onClick={onClick}></button>
                <ul className="navigation__container">
                    <li className="navigation__menu"><NavLink to="/" className={handleLinkActive}>Главная</NavLink></li>
                    <li className="navigation__menu"><NavLink to="/movies" className={handleLinkActive}>Фильмы</NavLink></li>
                    <li className="navigation__menu"><NavLink to="/saved-movies" className={handleLinkActive}>Сохранённые фильмы</NavLink></li>
                </ul>
                <NavLink to="/profile" className="navigation__profile-link navigation__account-button">Аккаунт <img className="navigation__account" src={account} alt="иконка аккаунта" /></NavLink>
        </section>
    )
}

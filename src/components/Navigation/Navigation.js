import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';
import account from "../../images/icon-account.svg";

export function Navigation ({ onClick, menuOpen }) {
    function handleLinkActive({isActive}) {
        return `navigation__link ${isActive ? "navigation__link_active" : ""}`;
    }

    return(
        <section className={`navigation  ${menuOpen ? "navigation_opened" : ""}`}>  
            <div className="navigation__dark">
                <div className="navigation__menu-box">
                    <button type="button" aria-label="закрыть" className="navigation__close-button" onClick={onClick}></button>
                    <nav className="navigation__nav">
                        <ul className="navigation__container">
                            <li className="navigation__menu"><NavLink to="/" className={handleLinkActive}>Главная</NavLink></li>
                            <li className="navigation__menu"><NavLink to="/movies" className={handleLinkActive}>Фильмы</NavLink></li>
                            <li className="navigation__menu"><NavLink to="/saved-movies" className={handleLinkActive}>Сохранённые фильмы</NavLink></li>
                        </ul>
                        
                    </nav>  
                    <NavLink to="/profile" className="navigation__profile-link navigation__account-button">Аккаунт <img className="navigation__account" src={account} alt="иконка аккаунта" /></NavLink>  
                </div>                
            </div>  
        </section>
    )
}

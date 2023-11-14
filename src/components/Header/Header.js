import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation.js";
import logo from "../../images/logo.svg";
import './Header.css';
import account from "../../images/icon-account.svg";

export function Header() {
    const location = useLocation();
    const [ menuOpen, setMenuOpen ] = React.useState(false);
    function closeMenu() {
        setMenuOpen(!menuOpen);
    }
    function handleMenuLinkActive({isActive}) {
        return `header__link ${isActive ? "header__link_active" : ""}`;
    }
    let loggedIn = true;
  return (
    <header className={`header header_theme_${location.pathname === "/" ? "blue" : "dark"}`}>
        <div className="header__cover">
            <div className="header__container">
                <NavLink to="/" className="header__logo"><img src={logo} alt="логотип проекта Movies" /></NavLink>
                {loggedIn ? 
                <>
                    <div className="header__menu-container">
                        <NavLink to="/movies" className={handleMenuLinkActive}>Фильмы</NavLink>
                        <NavLink to="/saved-movies" className={handleMenuLinkActive}>Сохранённые фильмы</NavLink>
                    </div>
                    <NavLink to="/profile" className="header__profile-link">Аккаунт <img className={`header__profile-icon ${location.pathname === "/" ? "" : "header__profile-icon_dark"}`} src={account} alt="иконка аккаунта" /></NavLink>
                    <button className="header__button-burger" onClick={closeMenu}></button>
                    <Navigation onClick={closeMenu} menuOpen={menuOpen}/>
                </>
                :
                <div className="header__promo-container">
                    <NavLink to="/signup" className="header__reg-button">Регистрация</NavLink>
                    <NavLink to="/signin" className="header__reg-button header__go-button">Войти</NavLink>
                </div>}   
            </div>
        </div>
        
    </header>
  );
}
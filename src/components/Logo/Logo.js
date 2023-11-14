import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import './Logo.css';

export function Logo () {
    return (
        <Link className="logo" to="/">
            <img className="logo__picture" src={logo} alt="логотип проекта Movies" />
        </Link>
    )
}
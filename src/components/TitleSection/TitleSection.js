import React from "react";
import './TitleSection.css';

export function TitleSection ({title, children }) {
    return (
        <div className="section">
            <h2 className="section__title">{title}</h2>
            {children}
        </div>
    );
}
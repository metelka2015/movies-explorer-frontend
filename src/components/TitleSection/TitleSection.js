import React from "react";
import './TitleSection.css';

export function TitleSection ({title, children }) {
    return (
        <div className="section">
            <h3 className="section__title">{title}</h3>
            {children}
        </div>
    );
}
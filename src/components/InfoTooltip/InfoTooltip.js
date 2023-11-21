import React from "react";
import success from "../../images/success.svg";
import fail from "../../images/fail.svg";
import './InfoTooltip.css';

export function InfoTooltip({ onClose, isSuccess,infoMessage, className }) {
  return (
    <div className={className}>
      <div className="popup__status-container">
        <img
          className="popup__image-status"
          src={isSuccess ? success : fail}
          alt={isSuccess ? "успешно" : "ошибка"}
        />
        <h2 className="popup__title_info">
          {infoMessage}
        </h2>
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

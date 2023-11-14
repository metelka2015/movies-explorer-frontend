import { useNavigate, NavLink } from "react-router-dom";
import './PageNotFound.css';



export function PageNotFound () {
    const navigate = useNavigate();

    return (
        <div className="page-not-found">
            <div className="page-not-found__cover">
                <h2 className="page-not-found__title">404</h2>
                <p className="page-not-found__subtitle">Страница не найдена</p>
                <NavLink className="page-not-found__link" onClick={() => navigate(-1)}>Назад</NavLink>
            </div>            
        </div>
    )
}
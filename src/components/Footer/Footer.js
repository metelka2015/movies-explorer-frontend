import './Footer.css';

export function Footer() {
    return (
      <footer className=" footer">
        <div className="footer__cover">
          <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
          <div className='footer__container'>
              <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
              <ul className='footer__links'>
                <li><a target="blank" className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a></li> 
                <li><a target="blank" className="footer__link" href="https://github.com/metelka2015">Github</a></li>           
              </ul>
          </div>
        </div>           
      </footer>
    );
  }
  
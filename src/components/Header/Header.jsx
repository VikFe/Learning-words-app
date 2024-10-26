import { Link } from "react-router-dom";
import "../Header/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/">
          <img
            src="./images/cat-book.png"
            alt="Logo"
            className="header__logo"
          />
        </Link>
        <div className="header__name">VocabVerse</div>
      </div>

      <nav className="header__nav">
        <ul className="header__nav-list">
          <li>
            <Link className="header__link" to="/">
              Главная
            </Link>
          </li>
          <li>
            <Link className="header__link" to="/cards">
              Карточки слов
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

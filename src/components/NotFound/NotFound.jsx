import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import PizzaCat from "../../assets/image/Pizza-Cat.png";

const NotFound = () => {
  return (
    <div className="container__not-found">
      <div className="container__title">
        <h1>Ой-Ой! Страница потерялась!</h1>
        <h2>404</h2>
      </div>

      <div className="container__info">
        <p>
          Возможно, она отправилась на поиски <br />
          последнего кусочка пиццы. Вернитесь <br />
          на главную страницу - там всегда есть <br />
          что-то интересное
        </p>
        <img src={PizzaCat} alt="cat" className="not-found__img" />
      </div>
      <Link to="/" className="home-link">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;

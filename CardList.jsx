import React, { useState } from "react";
import Card from "../Card/Card";
import "../CardList/CardList.css";
import CardListButton from "../CardListButton/CardListButton";
import CardListContainer from "../CardList/CardListContainer";
import leftArrow from "../../left-arrow.png";
import rightArrow from "../../right-arrow.png";

function CardList({ words }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");
  const [showTranslation, setShowTranslation] = useState(false);

  const showNextCard = () => {
    setAnimationDirection("next");
    setCurrentIndex((prevIndex) =>
      prevIndex === words.length - 1 ? 0 : prevIndex + 1
    );
    setShowTranslation(false); //Сброс показа перевода при переключении карточек
  };

  const showPrevCard = () => {
    setAnimationDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? words.length - 1 : prevIndex - 1
    );
    setShowTranslation(false);
  };

  const toggleTranslation = () => {
    setShowTranslation((prev) => !prev); //Переключение состояния показа перевода
  };

  if (!words.length) {
    return <div>Слова отсутствуют</div>;
  }

  const currentWord = words[currentIndex];
  const animationClassName = animationDirection
    ? `animation-${animationDirection}`
    : "";

  return (
    <CardListContainer className={`card-container ${animationClassName}`}>
      <CardListButton
        onClick={showPrevCard}
        className="scale-on-hover"
        animationClass={animationClassName}
      >
        <img
          src={leftArrow}
          alt="Left arrow"
          style={{ width: "45px", height: "45px" }}
        />
      </CardListButton>
      <Card
        english={currentWord.english}
        transcription={currentWord.transcription}
        russian={currentWord.russian}
        showTranslation={showTranslation}
        toggleTranslation={toggleTranslation}
      />
      <CardListButton
        onClick={showNextCard}
        className="scale-on-hover"
        animationClass={animationClassName}
      >
        <img
          src={rightArrow}
          alt="Right arrow"
          style={{ width: "45px", height: "45px" }}
        />
      </CardListButton>
    </CardListContainer>
  );
}

export default CardList;

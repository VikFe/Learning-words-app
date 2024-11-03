import React, { useState, useEffect, useRef } from "react";
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
  const [wordsStudied, setWordsStudied] = useState(0);

  // Ссыдка на кнопку перевода
  const toggleButtonRef = useRef(null);

  //Фокус на кнопку при изменении карточки
  useEffect(() => {
    if (toggleButtonRef.current) {
      toggleButtonRef.current.focus();
    }
  }, [currentIndex]);

  //Обработчик нажатия клавиш

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      showNextCard();
    } else if (event.key === "ArrowLeft") {
      showPrevCard();
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleTranslation();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    if (!showTranslation) {
      // Если перевод показывается, увеличиваем счетчик
      setWordsStudied((prev) => prev + 1);
    }
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
        onClick={() => {
          toggleTranslation();
          showNextCard();
          if (toggleButtonRef.current) {
            toggleButtonRef.current.focus();
          }
        }}
        // onClick={showNextCard}
        ref={toggleButtonRef}
        className="scale-on-hover"
        animationClass={animationClassName}
      >
        <img
          src={rightArrow}
          alt="Right arrow"
          style={{ width: "45px", height: "45px" }}
        />
      </CardListButton>
      <div className="words-study">Изучено слов: {wordsStudied}</div>
    </CardListContainer>
  );
}

export default CardList;

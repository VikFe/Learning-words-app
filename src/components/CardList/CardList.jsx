import React, { useState } from "react";
import Card from "../Card/Card";
import "../CardList/CardList.css";
import CardListButton from "../CardListButton/CardListButton";
import CardListContainer from "../CardList/CardListContainer";
import leftArrow from "../../arrow_left.png";
import rightArrow from "../../arrow_right.png";

function CardList({ words }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState("");

  const showNextCard = () => {
    setAnimationDirection("next");
    setCurrentIndex((prevIndex) =>
      prevIndex === words.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPrevCard = () => {
    setAnimationDirection("prev");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? words.length - 1 : prevIndex - 1
    );
  };

  if (words.length === 0) {
    return <div>Слова отсутствуют</div>;
  }

  const animationClassName = animationDirection
    ? `animation-${animationDirection}`
    : "";

  return (
    <CardListContainer className={`card-container ${animationClassName}`}>
      <CardListButton onClick={showPrevCard} className="scale-on-hover">
        <img
          src={leftArrow}
          alt="Left arrow"
          style={{ width: "30px", height: "30px" }}
        />
      </CardListButton>
      <Card
        english={words[currentIndex].english}
        transcription={words[currentIndex].transcription}
        russian={words[currentIndex].russian}
      />
      <CardListButton onClick={showNextCard} className="scale-on-hover">
        <img
          src={rightArrow}
          alt="right arrow"
          style={{ width: "30px", height: "30px" }}
        />
      </CardListButton>
    </CardListContainer>
  );
}

CardList.defaultProps = {
  words: [],
};

export default CardList;

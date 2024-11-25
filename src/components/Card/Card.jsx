import React from "react";
import "./Card.css";

function Card({
  english,
  transcription,
  russian,
  showTranslation,
  toggleTranslation,
}) {
  return (
    <div className="card">
      <h3>{english}</h3>
      <p>{transcription}</p>
      {showTranslation ? (
        <p>{russian}</p>
      ) : (
        <button className="button-translation" onClick={toggleTranslation}>
          Перевод
        </button>
      )}
    </div>
  );
}

export default Card;

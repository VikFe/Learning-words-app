import React, { useState } from "react";
import "../Card/Card.css";

function Card({ english, transcription, russian }) {
  const [showTranslation, setShowTranslation] = useState(false);

  const toggleTranslation = () => {
    setShowTranslation(true);
  };

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

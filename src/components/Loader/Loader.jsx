import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="modal-overlay">
      <div className="loader"></div>
      <p className="loading-text">Загрузка...</p>
    </div>
  );
};

export default Loader;

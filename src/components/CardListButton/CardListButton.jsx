import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  background: transparent;
  margin-right: 15px;

  transform: scale(1.1);
  transition: transform 0.3s ease;
`;

const CardListButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default CardListButton;

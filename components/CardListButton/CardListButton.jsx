import React, { forwardRef } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  background: transparent;
  margin-right: 15px;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.5s ease;
  }
`;

const CardListButton = forwardRef(
  ({ onClick, className, animationClass, children }, ref) => {
    return (
      <Button
        ref={ref}
        onClick={onClick}
        className={`card-list-button ${className} ${animationClass}`}
      >
        {children}
      </Button>
    );
  }
);

export default CardListButton;

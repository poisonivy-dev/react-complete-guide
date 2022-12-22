import styled from "styled-components";
import React from "react";
const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? "green" : "red")};
  color: white;
  border: 1px solid #b4b4b4;
  cursor: pointer;
  padding: 8px;

  &:hover {
    background-color: ${(props) => (props.alt ? "lightgreen" : "salmon")};
    color: black;
  }
`;
const Cockpit = (props) => {
  return (
    <div>
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <StyledButton alt={props.showPersons} onClick={props.clicked}>
        Switch visibility
      </StyledButton>
    </div>
  );
};

export default Cockpit;

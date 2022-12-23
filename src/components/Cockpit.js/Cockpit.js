import styled from "styled-components";
import React from "react";
import Aux from "../Hoc/Auxilary";
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
  /*
  either pass empty array as second parameter to run it once,
  or pass the props that you want to check for using this effect
    // useEffect(() => {
  //   setTimeout(() => alert("Saved"), 1000);
  // }, []);
  // useEffect(() => {
  //   setTimeout(() => alert("Saved"), 1000);
  // }, [props.showPersons]);
  */

  return (
    <Aux>
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <StyledButton alt={props.showPersons} onClick={props.clicked}>
        Switch visibility
      </StyledButton>
    </Aux>
  );
};

export default Cockpit;

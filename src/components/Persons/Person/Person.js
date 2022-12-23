import React from "react";
import styled from "./Person.module.css";
// import WithClass from "../../Hoc/WithClass";
import Aux from "../../Hoc/Auxilary";
import withClass from "../../Hoc/withClassFunction";
const person = (props) => {
  return (
    <Aux>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </Aux>
  );
};

export default withClass(person, styled.Person);

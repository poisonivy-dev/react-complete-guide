import React from "react";
import styled from "./Person.module.css";
// import WithClass from "../../Hoc/WithClass";
import Aux from "../../Hoc/Auxilary";
import withClass from "../../Hoc/withClassFunction";
import AuthContext from "../../../context/auth-context";
const person = (props) => {
  return (
    <Aux>
      <AuthContext.Consumer>
        {(context) => {
          return context.isAuthentication ? (
            <p> Authenticated </p>
          ) : (
            <p> Not Authenticated</p>
          );
        }}
      </AuthContext.Consumer>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </Aux>
  );
};

export default withClass(person, styled.Person);

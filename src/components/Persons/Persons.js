import React from "react";
import Person from "./Person/Person";
const persons = (props) =>
  props.persons.map((person) => {
    return (
      <Person
        name={person.name}
        age={person.age}
        click={props.clicked.bind(props.this, person.id)}
        key={person.id}
        changed={props.changed.bind(props.this, person.id)}
      />
    );
  });

export default persons;

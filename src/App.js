import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { id: "asdg21", name: "Max", age: 28 },
      { id: "fdadw12", name: "Manu", age: 29 },
      { id: "jtjt42", name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    outputs: [
      { text1: "para 1", text2: "para 2" },
      { text1: "para 3", text2: "para 4" },
      { text1: "para 4", text2: "para 6" },
    ],
    username: "Jonas",
    text: "",
    length: 0,
  };
  changeUsernameHandler(ev) {
    this.setState({
      username: ev.target.value,
    });
  }
  switchNameHandler = (name) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { id: "asdg21", name: name, age: 28 },
        { id: "fdadw12", name: "Manu", age: 29 },
        { id: "jtjt42", name: "Stephanie", age: 27 },
      ],
    });
  };
  //toggling the visibility of persons list
  toggleVisibility = () => {
    document.querySelector(".personsList").classList.toggle("hidden");
  };

  //passing function to another component
  changeInputHandler(id, event) {
    const persons = [...this.state.persons];
    const pIndex = persons.findIndex((p) => p.id === id);
    persons[pIndex].name = event.target.value;
    this.setState({
      persons: persons,
    });
  }

  removePerson(id) {
    // find the clicked element
    const persons = [...this.state.persons];
    const pIndex = persons.findIndex((p) => p.id === id);
    persons.splice(pIndex, 1);
    this.setState({
      persons: persons,
    });
  }
  outputText = (ev) => {
    const p = document.querySelector("#outputText");
    p.innerText = ev.target.value;

    this.setState({
      length: p.innerText.length,
      text: p.innerText,
    });
  };
  removeChar = (index) => {
    let text = this.state.text;
    text = text.slice(0, index) + text.slice(index + 1);
    this.setState({
      text: text,
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      border: "1px solid #b4b4b4",
      cursor: "pointer",
      padding: "8px",
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.toggleVisibility}>
          Switch visibility
        </button>
        <div className="personsList">
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.removePerson.bind(this, person.id)}
                key={person.id}
                changed={this.changeInputHandler.bind(this, person.id)}
              />
            );
          })}
        </div>
        <h1> Assignments</h1>
        <input type="text" onChange={this.outputText} />
        <p id="outputText"></p>
        <ValidationComponent length={this.state.length} />
        {this.state.text.split("").map((char, index) => {
          return (
            <CharComponent
              char={char}
              key={index}
              clicked={this.removeChar.bind(this, index)}
            />
          );
        })}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

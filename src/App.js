import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    otherState: "some other value",
    outputs: [
      { text1: "para 1", text2: "para 2" },
      { text1: "para 3", text2: "para 4" },
      { text1: "para 4", text2: "para 6" },
    ],
    username: "Jonas",
  };
  changeUsernameHandler(ev) {
    this.setState({
      username: ev.target.value,
    });
  }
  switchNameHandler = (name) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: name, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 },
      ],
    });
  };
  //toggling the visibility of persons list
  toggleVisibility = () => {
    document.querySelector(".personsList").classList.toggle("hidden");
  };
  //passing function to another component
  changeInputHandler(event) {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 27 },
      ],
    });
  }

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
          {this.state.persons.map((person) => (
            <Person name={person.name} age={person.age} />
          ))}
        </div>

        <h1> Assignments</h1>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

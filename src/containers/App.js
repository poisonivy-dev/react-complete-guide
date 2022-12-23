import React, { Component } from "react";
import "./App.css";
import WithClass from "../components/Hoc/WithClass";
import AuthContext from "../context/auth-context";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit.js/Cockpit";
import Assignment from "../components/Assignment/Assignment";

class App extends Component {
  constructor(props) {
    super(props);
    this.personsListEl = React.createRef();
  }
  // State Property
  state = {
    persons: [
      { id: "asdg21", name: "Max", age: 28 },
      { id: "fdadw12", name: "Manu", age: 29 },
      { id: "jtjt42", name: "Stephanie", age: 26 },
    ],
    showPersons: true,
    username: "Jonas",
    text: "",
    length: 0,
    isAuthentication: false,
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
    this.personsListEl.current.classList.toggle("hidden");
    const status = this.state.showPersons;
    this.setState({
      showPersons: !status,
    });
  };

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
    document.querySelector("#outputText").innerText = text;
    document.querySelector("#outputInp").value = text;
  };
  loginHandler = () => {
    this.setState({
      isAuthentication: true,
    });
  };
  render() {
    return (
      <WithClass classes="App">
        <AuthContext.Provider
          value={{
            isAuthentication: this.state.isAuthentication,
            login: this.loginHandler,
          }}
        >
          <Cockpit
            clicked={this.toggleVisibility}
            showPersons={this.state.showPersons}
          />

          <div ref={this.personsListEl} className="personsList">
            <Persons
              persons={this.state.persons}
              clicked={this.removePerson}
              changed={this.changeInputHandler}
              this={this}
            />
          </div>
        </AuthContext.Provider>

        <Assignment
          outputText={this.outputText}
          length={this.state.length}
          text={this.state.text}
          this={this}
          removeChar={this.removeChar}
        />
      </WithClass>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

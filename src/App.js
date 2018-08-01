import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
    state = {
        person:[
            { name:"Chitti", age:23 },
            { name:"Venkat", age:24 },
            { name:"Prakash", age:24}
        ]
    }

    swithNameHandler = (newName) => {
        this.setState({
            person: [
                { name: newName, age: 23 },
                { name: "Venkat", age: 24 },
                { name: "Prakash", age: 24 }
            ]
        }
        );
    }

    nameChangedHandler = (event) => {
        this.setState({
            person: [
                { name: "Chitti", age: 23 },
                { name: event.target.value, age: 24 },
                { name: "Prakash", age: 24 }
            ]

          }
        );
    }

  render() {
    return (
      <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button onClick={this.swithNameHandler.bind(this,"newName")}>Switch Button</button>
            <Person name={this.state.person[0].name} age={this.state.person[0].age} />
            <Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.swithNameHandler.bind(this, "in Paragraph")} changed={this.nameChangedHandler}>My Hobbies: Acting </Person>
            <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
      </div>
    );
  }
}

export default App;

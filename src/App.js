import React, { Component } from 'react';
import Person from './Person/Person';
import Output from './Components/UserOutput';
import Input from './Components/UserInput';
import './App.css';

class App extends Component {
    state = {
        person:[
            { name:"Chitti", age:23 },
            { name:"Venkat", age:24 },
            { name:"Prakash", age:24}
        ],
        uname: 'Sanju',
        showPerson: false
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

    inputChangeHandler = (event) => {
        this.setState({
            uname: event.target.value
        });
    }

    togglePersonHandler = () => {
        const d = this.state.showPerson;
        this.setState({
            showPerson: !d 
        });
    }

    render() {
        const styles = {
            backgroundcolor:'white',
            font:'inherit',
            border:'1px solid blue',
            padding: '8px'
        }
        let persons = null;

        if (this.state.showPerson) {
            persons = (
                <div>
                    <Person name={this.state.person[0].name} age={this.state.person[0].age} />
                    <Person name={this.state.person[1].name} age={this.state.person[1].age} click={this.swithNameHandler.bind(this, "in Paragraph")} changed={this.nameChangedHandler}>My Hobbies: Acting </Person>
                    <Person name={this.state.person[2].name} age={this.state.person[2].age} />
                    <div>
                        <Output uname={this.state.uname} />
                        <div>
                            <Input inChange={this.inputChangeHandler} />
                        </div>
                        <Output uname={this.state.uname} />
                    </div>
                </div>
            );
        }

    return (
      <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working!</p>
            <button style={styles} onClick={this.togglePersonHandler}>Switch Button</button>
            {
                persons
            }

        </div>
    );
  }
}

export default App;

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

    deletePersonHandler = (personIndex) => {
        const persons = this.state.person;
        persons.splice(personIndex, 1);
        this.setState({ person: persons });

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
                    {this.state.person.map((per,index) => {
                        return <Person
                            click={()=>this.deletePersonHandler(index)}
                            name={per.name}
                            age={per.age} />
                    })}
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

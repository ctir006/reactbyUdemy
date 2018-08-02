import React, { Component } from 'react';
import Person from './Person/Person';
//import Output from './Components/UserOutput';
//import Input from './Components/UserInput';
import './App.css';

class App extends Component {
    state = {
        person:[
            { id: 'asfd1', name:"Chitti", age:23 },
            { id:'asdf2', name:"Venkat", age:24 },
            { id:'asdf3', name:"Prakash", age:24}
        ],
        uname: 'Sanju',
        showPerson: false
    }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.person;
        const persons = [...this.state.person];
        persons.splice(personIndex, 1);
        this.setState({ person: persons });

    }

    nameChangedHandler = (event, id) => {
        console.log("In nameChangedHandler");
        const personIndex = this.state.person.findIndex(p => {
            return p.id === id;
        });

        const per = {
            ...this.state.person[personIndex]
        };

        per.name = event.target.value;

        const person = [...this.state.person];

        person[personIndex] = per;

        this.setState({
            person: person
          }
        );
        console.log(this.state.person);
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
                            key={per.id}
                            age={per.age}
                            changed={(event) => this.nameChangedHandler(event, per.id)} />
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

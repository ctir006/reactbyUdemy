import React, { Component } from 'react';
import Person from './Person/Person';
import Validation from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent';
//import Output from './Components/UserOutput';
//import Input from './Components/UserInput';
import classes from './App.css';

class App extends Component {
    state = {
        person:[
            { id: 'asfd1', name:"Chitti", age:23 },
            { id:'asdf2', name:"Venkat", age:24 },
            { id:'asdf3', name:"Prakash", age:24}
        ],
        uname: 'Sanju',
        showPerson: false,
        length: 0,
        userInput: ''
    }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.person;
        const persons = [...this.state.person];
        persons.splice(personIndex, 1);
        this.setState({ person: persons });

    }

    deleteCharHangler = (charIndex) => {
        const text = this.state.userInput.split('');
        text.splice(charIndex, 1);
        const updatedText = text.join('');
        this.setState({ userInput: updatedText });
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

    textLength = (event) => {
        this.setState({
            length: event.target.value.length,
            userInput: event.target.value,
        })
    }

    render() {
        let persons = null;
        let btnClass = '';
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
            btnClass = classes.Red;  
        }

        const assignedClasses = [];
        if (this.state.person.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.person.length <= 1) {
            assignedClasses.push(classes.bold);
        }

        const charList = this.state.userInput.split('').map((ch, index) => {
            return <CharComponent char={ch} key={index} clicked={()=>this.deleteCharHangler(index)} />
        });

    return (
        <div className={classes.App}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <h3><Validation len={this.state.length} /></h3>
            <input type='text' onChange={this.textLength} value={this.state.userInput} /><br /><br />
            {charList}
            <button className={btnClass} onClick={this.togglePersonHandler}>Switch Button</button>
            {
                persons
            }
        </div>
    );
  }
}

export default App;

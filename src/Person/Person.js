import React from 'react';
import classes from '../App.css';

const person = (props) => {
    return (
        <div className='Paragraph' className={classes.Paragraph}>
            <p onClick={props.click}>I'm a person! My name {props.name} and my age {props.age}</p>
            <input type="text" onChange={props.changed} />
        </div>
    )
}

export default person;
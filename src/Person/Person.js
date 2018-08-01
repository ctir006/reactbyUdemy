import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm a person! My name {props.name} and my age {props.age}</p>
            <p onClick={props.click}>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
    )
}

export default person;
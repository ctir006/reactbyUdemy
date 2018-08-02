import React from 'react';

const person = (props) => {
    return (
        <div className='Paragraph'>
            <p onClick={props.click}>I'm a person! My name {props.name} and my age {props.age}</p>
            <input type="text" onChange={props.changed} />
        </div>
    )
}

export default person;
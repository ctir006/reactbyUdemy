import React from 'react';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className='Paragraph' style={style}>
            <p onClick={props.click}>I'm a person! My name {props.name} and my age {props.age}</p>
            <input type="text" onChange={props.changed} />
        </div>
    )
}

export default Radium(person);
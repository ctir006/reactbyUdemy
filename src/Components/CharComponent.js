import React from 'react';

const CharComponent = (props) => {
    return <div onClick={props.clicked}> {props.char} </div>


}

export default CharComponent;
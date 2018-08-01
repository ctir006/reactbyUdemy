import React from 'react';

const input = (props) => {
    const style = {
        border: '2px solid red'
    };
    return <input type='text' name='input' onChange={props.inChange} style={style} />
}

export default input;
import React from 'react';

const CharComponent = (props) => {
    const styles = {
        display: 'inline - black',
        padding: '16px',
        textalign: 'center',
        margin: '16px',
        border: '1px solid black'
    }
    return <div style={styles} onClick={props.clicked}> {props.char} </div>


}

export default CharComponent;
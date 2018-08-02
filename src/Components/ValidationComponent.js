import React from 'react';

const validation = (props) => {
    let len = props.len;
    let msg = '';
    if (len < 5)
        msg= 'length too short';
    else if (len> 10)
        msg= 'length too long';

    return <div>{msg}</div>
}

export default validation;
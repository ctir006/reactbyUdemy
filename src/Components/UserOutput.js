import React from 'react';
import './component.css';

const output = (props) => {

    return (
        <div>
            <h1>Username from Input component : {props.uname}</h1>
            <p className='Paragraph'>The first season introduces the six main characters: Rachel, Monica, Phoebe, Joey,
                Chandler, and Ross. Rachel arrives at Central Perk after running away from her
                wedding to her fiancé Barry and moves into an apartment with her friend Monica
                from high school. 
            </p>
            <p className='Paragraph'> Ross, who has had a crush on Rachel since the two of them were
                in high school, constantly attempts to tell her how he feels about her.
                However, many obstacles stand in his way, such as the fact that he is expecting a
                baby with his lesbian ex-wife, Carol.
            </p>
        </div>
    )
}

export default output;
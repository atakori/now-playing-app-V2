import React from 'react';

const GenreButton = (props) => {
    return (
        <button className={createClassName(props)} onClick={props.handleClick}>{props.genreName}</button>
    )
}

function createClassName(props){
    return props.selected ? ( "btn highlight-button-border " + props.buttonClass): ( "btn " + props.buttonClass)
}

export default GenreButton;

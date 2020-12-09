import React from 'react';
import GenreButton from './GenreButton';

function GenreButtonSelector() {
    return (
        <div className= "genre-selector-container">
            <h2 className = "genre-container-title">Select a genre!</h2>
            <div className = "genre-buttons-container">
                <GenreButton buttonClass= "btn-light-red" genreName="Action"/>
                <GenreButton buttonClass= "btn-indigo" genreName="Adventure"/>
                <GenreButton buttonClass= "btn-teal" genreName="Animation"/>
                <GenreButton buttonClass= "btn-amber" genreName="Comedy"/>
                {/* REST OF BUTTONS TO BE IMPLEMENTED AFTER FUNCTIONALITY FETCH REQUEST IMPLEMENTATION */}
            </div>
        </div>
    )
}

export default GenreButtonSelector
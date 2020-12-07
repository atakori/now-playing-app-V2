import React from 'react';
import GenreButton from './GenreButton';

function GenreButtonSelector() {
    return (
        <div className= "genre-buttons-container">
            <h2>Select a genre!</h2>
            {/* Buttons here */}
            <GenreButton genreName="Action"/>
            <GenreButton genreName="Adventure"/>
            <GenreButton genreName="Animation"/>
            <GenreButton genreName="Comedy"/>
        </div>
    )
}

export default GenreButtonSelector
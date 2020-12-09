import React from 'react';
import GenreButton from './GenreButton';

const GenreButtonSelector = (props) => {
    return (
        <div className= "genre-selector-container">
            <h2 className = "genre-container-title">Select a genre!</h2>
            <div className = "genre-buttons-container">
                <GenreButton handleClick= {props.handleSelectedGenre} buttonClass= "btn-light-red" genreName="Action" selected={props.selectedGenre === "Action"}/>
                <GenreButton handleClick= {props.handleSelectedGenre} buttonClass= "btn-indigo" genreName="Adventure" selected={props.selectedGenre === "Adventure"}/>
                <GenreButton handleClick= {props.handleSelectedGenre} buttonClass= "btn-teal" genreName="Animation" selected={props.selectedGenre === "Animation"}/>
                <GenreButton handleClick= {props.handleSelectedGenre} buttonClass= "btn-amber" genreName="Comedy" selected={props.selectedGenre === "Comedy"}/>
                {/* REST OF BUTTONS TO BE IMPLEMENTED AFTER FUNCTIONALITY FETCH REQUEST IMPLEMENTATION */}
            </div>
        </div>
    )
}

export default GenreButtonSelector
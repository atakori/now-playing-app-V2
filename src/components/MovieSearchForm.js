import React from 'react';
import GenreButtonSelector from './GenreButtonSelector'
import MovieSearchFormSubmitButtons from './MovieSearchFormSubmitButtons';

class MovieSearchForm extends React.Component {

    render() {
        return(
            <div>
                <h4>MovieSearchForm Container</h4>
                <GenreButtonSelector/>
                <MovieSearchFormSubmitButtons />
            </div>

        )
    }
}

export default MovieSearchForm;
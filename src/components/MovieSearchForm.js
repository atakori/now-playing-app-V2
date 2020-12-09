import React from 'react';
import GenreButtonSelector from './GenreButtonSelector'
import MovieSearchFormSubmitButtons from './MovieSearchFormSubmitButtons';

class MovieSearchForm extends React.Component {

    render() {
        return(
            <div>
                <GenreButtonSelector />
                <MovieSearchFormSubmitButtons />
            </div>

        )
    }
}

export default MovieSearchForm;
import React from 'react';
import MovieSearchForm from './MovieSearchForm';
import ProjectorScreen from './projectorScreen';
import '../stylesheets/nowPlayingMain.scss';
import GenreButtonSelector from './GenreButtonSelector';

class NowPlayingMain extends React.Component {
    render() {
        return (
            <div>
                <ProjectorScreen />
                <h4> Everything to go here!!!</h4>
                <MovieSearchForm />
                <GenreButtonSelector/>
            </div>

        )
    }
}

export default NowPlayingMain;
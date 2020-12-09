import React from 'react';
import MovieSearchForm from './MovieSearchForm';
import ProjectorScreen from './projectorScreen';
import '../stylesheets/nowPlayingMain.scss';

class NowPlayingMain extends React.Component {
    render() {
        return (
            <div className="now-playing-main-screen-container">
                <ProjectorScreen />
                <MovieSearchForm />
                
            </div>

        )
    }
}

export default NowPlayingMain;
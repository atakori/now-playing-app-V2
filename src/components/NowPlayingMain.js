import React from 'react';
import GenreButtonSelector from './GenreButtonSelector';
import MovieSearchFormSubmitButtons from './MovieSearchFormSubmitButtons';
import ProjectorScreen from './projectorScreen';
import '../stylesheets/nowPlayingMain.scss';

class NowPlayingMain extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //Setting up for later use...
            selectedGenre: null
        }

        this.handleSelectedGenre = this.handleSelectedGenre.bind(this);
    }

    handleSelectedGenre(e) {
        //add class to clickedGenreButton
        e.preventDefault();

        this.setState({selectedGenre: e.target.innerText}, () => {
            console.log("Set State to: " + this.state.selectedGenre);
        })
    }

    handleMovieGeneration() {
        //fetch call goes in here
        //Previous code
        // let AlreadySuggested = [];
        // let userWatchList = [];

        // const movieDB_search_URL = "https://api.themoviedb.org/3/discover/movie";
        // let movieDB_movie_search_URL =`https://api.themoviedb.org/3/movie/`;
        // const movieDB_genre_URL =  "https://api.themoviedb.org/3/genre/movie/list";
        // const movieDB_poster_URL = "https://image.tmdb.org/t/p/w500";
        // let movieDB_reviews_URL = "https://api.themoviedb.org/3/movie/movieID/reviews";
        // const youtube_search_URL = "https://www.googleapis.com/youtube/v3/search";
        // const newYorkTimes_reviews_URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
        
        // let selectedGenre;
        // let queryGenreID;
        // let currentMovieTitle;
        // let currentMovieData; 
        // let projectorText;
        // let currentGenreBackground;
        // let movieID;
        // let movieIndex= 0;
        // let modal = document.getElementById('myModal');
        // let overlay = document.getElementById('overlay');
        // let movieDBGenres = [28,12,16,35,80,99,18,10751,14,36,27, 10402,9648,
        //                     10749,878,10770,53,10752,37];
        return;

    }

    render() {
        return (
            <div className="now-playing-main-screen-container">
                <ProjectorScreen selectedGenre = {this.state.selectedGenre}/>
                {/* <MovieSearchForm/> */}
                <div>
                    <GenreButtonSelector  selectedGenre = {this.state.selectedGenre} handleSelectedGenre={this.handleSelectedGenre} />
                    <MovieSearchFormSubmitButtons />
                </div>
            </div>

        )
    }
}

export default NowPlayingMain;
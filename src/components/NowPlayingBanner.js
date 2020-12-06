import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'



function NowPlayingBanner () {
    return (<h1>
                <FontAwesomeIcon icon = {faFilm} />Now Playing
            </h1>)
}


export default NowPlayingBanner;
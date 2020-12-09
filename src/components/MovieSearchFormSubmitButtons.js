import React from 'react';

class MovieSearchFormSubmitButtons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //nothing here yet
        }
    }

    render() {
        return (
            <div className="submit-buttons-container">
                <button  className="btn btn-submit-blue">Submit</button>
                <button className="btn btn-red">Random Movie</button>
            </div>
        )
    }
}

export default MovieSearchFormSubmitButtons;
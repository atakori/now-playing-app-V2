import React from 'react';

class GenreButton extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        //none for now... jsut setting this up
    }
}

    render() {
        return (
            <div>
                <button>{this.props.genreName}</button>
            </div>
        )
    }
}

export default GenreButton;

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
            <button className={"btn " + this.props.buttonClass} >{this.props.genreName}</button>
        )
    }
}

export default GenreButton;

import countdownVideo from '../media/countdown.mp4'
import actionImg from '../media/projector_stills/avengers.jpg'
import adventureImg from '../media/projector_stills/hp1.jpg'
//All other images to be collected / implemented here

const ProjectorScreen = (props) => {
    return (
        <div className="projector-container">
            <h2>What do you want to watch?</h2>
            <div className="projector-image-main">
                <video className = {!props.selectedGenre ? "projector-image" : "hide-image"} width="100%" height="100%" autoPlay loop muted> 
                    <source src={countdownVideo} type="video/mp4"/>
                </video>
                <img className={selectedImage(props, "Action")} src={actionImg} alt="Action Img"/>
                <img className={selectedImage(props, "Adventure")} src={adventureImg} alt="Adventure Img"/>
            </div>
        </div>
    )
}

function selectedImage(props, genre) {
    if(props.selectedGenre === genre)
        return "projector-image show-image";
    
        return "projector-image hide-image";
}

export default ProjectorScreen;
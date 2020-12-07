import countdownVideo from '../media/countdown.mp4'

function ProjectorScreen() {
    return (
        <div className="projector-container">
            <h2>What do you want to watch?</h2>
            <video width="100%" height="100%" autoPlay loop muted> 
                <source src={countdownVideo} type="video/mp4"/>
            </video>
        </div>
    )
}

export default ProjectorScreen;
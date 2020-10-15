import React from 'react';

const VideoGameCard = ({videoGame}) => {
    return (
        <div className="card">
            
            <p className="card-title">{videoGame.attributes.game_name}</p>
        </div>
    );
}

export default VideoGameCard
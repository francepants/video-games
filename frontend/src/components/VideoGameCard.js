import React from 'react';

const VideoGameCard = ({videoGame}) => {
    return (
        <div className="container card center">
            
            <p>{videoGame.attributes.game_name}</p>
        </div>
    );
}

export default VideoGameCard
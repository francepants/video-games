import React from 'react';
import { Link } from 'react-router-dom'

const VideoGameCard = ({ videoGame }) => {
    return (
        videoGame ? 
            <div className="card">
                <h3>{videoGame.attributes.game_name}</h3>
                <p>{videoGame.attributes.year_released}</p>
                <p>{videoGame.attributes.game_genre}</p>
                <p>{videoGame.attributes.game_rating}</p>
                <p>{videoGame.attributes.game_platform}</p>
                <p>{videoGame.attributes.description}</p>
                
                <Link to={`/videoGames/${videoGame.id}/edit`}>Edit Game</Link>
            </div> :
            <p>lalala</p>
    )
} 

export default VideoGameCard
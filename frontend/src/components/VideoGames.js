import React from 'react';
import VideoGameCard from './VideoGameCard';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



const VideoGames = (props) => {
    // links to VG itself
//     const videoGameCards = props.videoGames.length > 0 ?
//     props.videoGames.map(vg => (<p key={vg.id}><Link to={`/videoGames/${vg.id}`}>{vg.attributes.game_name}</Link></p>)) : null

//   return videoGameCards

    const videoGameCards = props.videoGames.map(v => <VideoGameCard videoGame={v} key={v.id}/>)
    return (
        videoGameCards.length > 0 ? videoGameCards : null
            // {videoGameCards}       
    );
}

// state of the store
const mapStateToProps = (state) => {
    return {
        videoGames: state.videoGames
    }
}

export default connect(mapStateToProps)(VideoGames);

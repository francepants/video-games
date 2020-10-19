import React from 'react';
// import VideoGameCard from './VideoGameCard';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



const VideoGames = (props) => {
    // debugger
    // props.videoGames.length shows all video games in the array
    
    // links to VG itself 
    const videoGameCards = props.videoGames.length > 0 ?     
    props.videoGames.map(vg => (<h4 className="videoGame-card card" key={vg.id}><Link to={`/videoGames/${vg.id}`}>{vg.attributes.game_name}</Link></h4>)) : null

    return videoGameCards
}

// state of the store
const mapStateToProps = (state) => {
    return {
        videoGames: state.videoGames
    }
}

export default connect(mapStateToProps)(VideoGames);

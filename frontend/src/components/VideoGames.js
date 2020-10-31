import React from 'react';
// import VideoGameCard from './VideoGameCard';
import Counter from './Counter'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const VideoGames = (props) => {
    const videoGameCards = props.videoGames.length > 0 ?     
        props.videoGames.map(vg => 
            (<div className="videoGame-card" key={vg.id}>
                <h4><Link to={`/videoGames/${vg.id}`}>{vg.attributes.game_name}</Link></h4>
                <Counter />
            </div> 
        )) : null

    return videoGameCards
}

// state of the store
const mapStateToProps = (state) => {
    return {
        videoGames: state.videoGames
    }
}

export default connect(mapStateToProps)(VideoGames);

import React from 'react';
import VideoGameCard from './VideoGameCard';
import { connect } from 'react-redux'


const VideoGames = (props) => {
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

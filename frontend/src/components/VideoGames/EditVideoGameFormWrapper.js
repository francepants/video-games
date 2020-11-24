import React from 'react'
import NewVideoGameForm from './NewVideoGameForm'
import VideoGames from './VideoGames'
// import VideoGameCard from './VideoGameCard'
import { updateVideoGame, deleteVideoGame } from '../../actions/videoGames'
import { presetEditFormData, resetNewVideoGameForm } from '../../actions/newVideoGameForm'
import { connect } from 'react-redux'
// import { getVideoGames } from '../actions/videoGames'


class EditVideoGameFormWrapper extends React.Component {
    // componentDidMount() { //is called after the component is rendered //use for fetching data
    //     this.props.videoGame && this.props.presetEditFormData(this.props.videoGame)
    // }

    // componentDidUpdate(prevProps) { //is called after the component is updated in the DOM 
    //     this.props.videoGame && !prevProps.videoGame && this.props.presetEditFormData(this.props.videoGame)
    // }

    // componentWillUnmount() { //is called when the component is about to be removed from the DOM 
    //     this.props.resetNewVideoGameForm()
    // }

    // handleSubmit = (formData) => {
    //     const {updateVideoGame, videoGame, history} = this.props 
      
    //     updateVideoGame({
    //         ...formData,
    //         videoGameId: videoGame.id
    //     }, history)
    //     // getVideoGames()
    // }

    render() {

        const {history, deleteVideoGame, videoGame} = this.props
        const videoGameId = videoGame ? videoGame.id : null
        return <>
                {/* <NewVideoGameForm editMode handleSubmit={this.handleSubmit}/> */}
                <h4 className="delete-text">Click below to delete this game.</h4>
                
                {/* <button className="btn" onClick={() => {}}>Go Back</button> */}
                <button className="btn btn-danger" onClick={() => deleteVideoGame(videoGameId, history)}>Delete</button>
            </>
    }

}


export default connect(null, { updateVideoGame, presetEditFormData, resetNewVideoGameForm, deleteVideoGame })(EditVideoGameFormWrapper)
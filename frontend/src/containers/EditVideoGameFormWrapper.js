import React from 'react'
import NewVideoGameForm from '../components/NewVideoGameForm'
import { updateVideoGame } from '../actions/videoGames'
import { presetEditFormData } from '../actions/newVideoGameForm'
// import { getVideoGames } from '../actions/videoGames'
import { connect } from 'react-redux'



class EditVideoGameFormWrapper extends React.Component {
    componentDidMount() {
        this.props.videoGame && this.props.presetEditFormData(this.props.videoGame)
    }

    handleSubmit = (formData, userId) => {
        const {updateVideoGame, videoGame, history} = this.props
      
        updateVideoGame({
            ...formData,
            videoGameId: videoGame.id,
            userId
        }, history)
        // getVideoGames()
    }

    render() {
        const {history, handleSubmit} = this.props
        return <NewVideoGameForm editMode handleSubmit={this.handleSubmit}/>
    }

}


export default connect(null, { updateVideoGame, presetEditFormData })(EditVideoGameFormWrapper)
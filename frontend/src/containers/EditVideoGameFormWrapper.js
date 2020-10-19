import React from 'react'
import NewVideoGameForm from '../components/NewVideoGameForm'
import { updateVideoGame } from '../actions/videoGames'
import { presetEditFormData, resetNewVideoGameForm } from '../actions/newVideoGameForm'
// import { getVideoGames } from '../actions/videoGames'
import { connect } from 'react-redux'


class EditVideoGameFormWrapper extends React.Component {
    componentDidMount() {
        this.props.videoGame && this.props.presetEditFormData(this.props.videoGame)
    }

    componentDidUpdate(prevProps) {
        this.props.videoGame && !prevProps.videoGame && this.props.presetEditFormData(this.props.videoGame)
    }

    componentWillUnmount() {
        this.props.resetNewVideoGameForm()
    }

    handleSubmit = (formData) => {
        const {updateVideoGame, videoGame, history} = this.props 
      
        updateVideoGame({
            ...formData,
            videoGameId: videoGame.id
        }, history)
        // getVideoGames()
    }

    render() {
        const {history, handleSubmit} = this.props
        return <>
                <NewVideoGameForm editMode handleSubmit={this.handleSubmit}/>
                <button onClick={this.deleteVideoGame}>Delete</button>
            </>
    }

}


export default connect(null, { updateVideoGame, presetEditFormData, resetNewVideoGameForm })(EditVideoGameFormWrapper)
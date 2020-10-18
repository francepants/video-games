import React from 'react'
import NewVideoGameForm from '../components/NewVideoGameForm'
import { createVideoGame } from '../actions/videoGames'
// import { getVideoGames } from '../actions/videoGames'
import { connect } from 'react-redux'



const NewVideoGameFormWrapper = ({history, createVideoGame}) => {
    const handleSubmit = (event, formData, userId, history) => {
        event.preventDefault()
        console.log('hello from handle submit, event: ', event)
        createVideoGame({
            ...formData,
            userId
        }, history)
        // getVideoGames()
    }
    return <NewVideoGameForm history={history} handleSubmit={handleSubmit}/>
}


export default connect(null, { createVideoGame })(NewVideoGameFormWrapper)
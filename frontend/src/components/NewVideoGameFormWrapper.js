import React from 'react'
import NewVideoGameForm from './NewVideoGameForm'
import { createVideoGame } from '../actions/videoGames'
// import { getVideoGames } from '../actions/videoGames'
import { connect } from 'react-redux'



const NewVideoGameFormWrapper = ({history, createVideoGame}) => {
    const handleSubmit = (formData, userId) => {

        createVideoGame({
            ...formData,
            userId
        })
        // getVideoGames()
    }
    return <NewVideoGameForm history={history} handleSubmit={handleSubmit}/>
}


export default connect(null, { createVideoGame })(NewVideoGameFormWrapper)
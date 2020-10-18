import React from 'react';
import { updateNewVideoGameForm } from '../actions/newVideoGameForm'
import { createVideoGame } from '../actions/videoGames'
import { connect } from 'react-redux'
import { getVideoGames } from '../actions/videoGames'

const NewVideoGameForm = ({ formData, updateNewVideoGameForm, createVideoGame, userId, history }) => {
    const {gameName, gameGenre, gameRating, gamePlatform, description, yearReleased} = formData
    const handleChange = (event) => {
        const {name, value} = event.target
        updateNewVideoGameForm(name, value) //action creator
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createVideoGame({
            ...formData,
            userId
        }, history)
        getVideoGames()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="gameName" placeholder="Name" onChange={handleChange} value={gameName}/>
                <input type="text" name="gameGenre" placeholder="Genre" onChange={handleChange} value={gameGenre}/>
                <input type="text" name="gameRating" placeholder="Rating" onChange={handleChange} value={gameRating}/>
                <input type="text" name="gamePlatform" placeholder="Platform" onChange={handleChange} value={gamePlatform}/>
                <input type="text" name="description" placeholder="Description" onChange={handleChange} value={description}/>
                <input type="number" name="yearReleased" placeholder="Year Release(d)" onChange={handleChange} value={yearReleased}/>

                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    // destructure
    // const { gameName, gameGenre, gameRating, gamePlatform, description, yearReleased} = state.newVideoGameForm
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        formData: state.newVideoGameForm,
        userId
    }
}

//instead of mapDispatchToProps, can do { updateNewVideoGameForm } as an object

export default connect(mapStateToProps, { updateNewVideoGameForm, createVideoGame })(NewVideoGameForm);

        // formData: {
        //     gameName: "",
        //     gameGenre: "",
        //     gameRating: "",
        //     gamePlatform: "",
        //     description: "",
        //     yearReleased: ""
        // }
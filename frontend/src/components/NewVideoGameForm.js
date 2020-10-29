import React from 'react';
import { updateNewVideoGameForm } from '../actions/newVideoGameForm'
import { connect } from 'react-redux'
// import { updateVideoGame } from '../actions/videoGames';

const NewVideoGameForm = ({ formData, updateNewVideoGameForm, userId, handleSubmit, editMode }) => {

    const {gameName, gameGenre, gameRating, gamePlatform, description, yearReleased, gameImage} = formData

    const handleChange = (event) => {
        const {name, value} = event.target
        updateNewVideoGameForm(name, value) //action creator
    }

    return (
        <div>
            <form className="card form" onSubmit={event => {
                event.preventDefault()
                handleSubmit(formData)
                }}>
                <div className="transbox">
                    <h1>{editMode ? "Update Game" : "Add Game"}</h1>
                    <input type="text" name="gameName" placeholder="Name" onChange={handleChange} value={gameName}/>
                    <input type="number" name="yearReleased" placeholder="Year Release(d)" onChange={handleChange} value={yearReleased}/>
                    <input type="text" name="gameGenre" placeholder="Genre" onChange={handleChange} value={gameGenre}/>
                    <input type="text" name="gameRating" placeholder="Rating" onChange={handleChange} value={gameRating}/>
                    <input type="text" name="gamePlatform" placeholder="Platform" onChange={handleChange} value={gamePlatform}/>
                    <input type="text" name="description" placeholder="Description" onChange={handleChange} value={description}/>

                    <input className="btn" type="submit" value={editMode ? "Update Game" : "Add Game"}/>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        formData: state.newVideoGameForm,
        userId
    }
}

export default connect(mapStateToProps, { updateNewVideoGameForm })(NewVideoGameForm);
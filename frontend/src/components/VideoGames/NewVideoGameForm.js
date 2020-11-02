import React, { Component } from 'react';
import { updateNewVideoGameForm } from '../../actions/newVideoGameForm'
import { connect } from 'react-redux'
import { createVideoGame } from '../../actions/videoGames'
import { updateVideoGame } from '../../actions/videoGames';


//refactor
class NewVideoGameForm extends Component {
    constructor(){
        super()
        this.state = {
            gameName: "",
            gameGenre: "",
            gameRating: "",
            gamePlatform: "",
            description: "",
            yearReleased: ""
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createVideoGame(this.state, this.props.history)
        // this.props.history.push('/videoGames/:id')

    }

    render(){
        return (
            <>
            <form className="card form" onSubmit={this.handleSubmit}>
                <div className="transbox">
                    {/* <h1>{editMode ? "Update Game" : "Add Game"}</h1> */}
                    <input type="text" name="gameName" placeholder="Name" onChange={this.handleChange} value={this.state.gameName}/>
                    <input type="number" name="yearReleased" placeholder="Year Release(d)" onChange={this.handleChange} value={this.state.yearReleased}/>
                    <input type="text" name="gameGenre" placeholder="Genre" onChange={this.handleChange} value={this.state.gameGenre}/>
                    <input type="text" name="gameRating" placeholder="Rating" onChange={this.handleChange} value={this.state.gameRating}/>
                    <input type="text" name="gamePlatform" placeholder="Platform" onChange={this.handleChange} value={this.state.gamePlatform}/>
                    <input type="text" name="description" placeholder="Description" onChange={this.handleChange} value={this.state.description}/>

                    <input className="btn" type="submit" value="Submit"/>
                </div>
            </form>
            </>
        )
    }

}

export default connect(null, { createVideoGame, updateNewVideoGameForm })(NewVideoGameForm);




// const NewVideoGameForm = ({ formData, updateNewVideoGameForm, userId, handleSubmit, editMode }) => {

//     const {gameName, gameGenre, gameRating, gamePlatform, description, yearReleased} = formData

//     const handleChange = (event) => {
//         const {name, value} = event.target
//         updateNewVideoGameForm(name, value) //action creator
//     }

//     return (
//         <div>
//             <form className="card form" onSubmit={event => {
//                 event.preventDefault()
//                 handleSubmit(formData)
//                 }}>
//                 <div className="transbox">
//                     <h1>{editMode ? "Update Game" : "Add Game"}</h1>
//                     <input type="text" name="gameName" placeholder="Name" onChange={handleChange} value={gameName}/>
//                     <input type="number" name="yearReleased" placeholder="Year Release(d)" onChange={handleChange} value={yearReleased}/>
//                     <input type="text" name="gameGenre" placeholder="Genre" onChange={handleChange} value={gameGenre}/>
//                     <input type="text" name="gameRating" placeholder="Rating" onChange={handleChange} value={gameRating}/>
//                     <input type="text" name="gamePlatform" placeholder="Platform" onChange={handleChange} value={gamePlatform}/>
//                     <input type="text" name="description" placeholder="Description" onChange={handleChange} value={description}/>

//                     <input className="btn" type="submit" value={editMode ? "Update Game" : "Add Game"}/>
//                 </div>
//             </form>
//         </div>
//     );
// }

// const mapStateToProps = (state) => {
//     const userId = state.currentUser ? state.currentUser.id : ""
//     return {
//         formData: state.newVideoGameForm,
//         userId
//     }
// }

// export default connect(mapStateToProps, { updateNewVideoGameForm })(NewVideoGameForm);
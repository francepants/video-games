const initialState = {
    loading: true,
    videoGames: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case "SET_VIDEO_GAMES":
            return action.videoGames
        case "ADD_VIDEO_GAME":
            // debugger
            // so it does show the new game 
            return state.concat(action.videoGame.data)
        case "UPDATE_VIDEO_GAME":
            // console.log("update video game action is: ", action)
            return state.map(videoGame => videoGame.id === action.videoGame.id ? action.videoGame : videoGame)
        case "CLEAR_VIDEO_GAMES":
            return initialState
        default:
            return state
    }
}
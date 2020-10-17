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
        case "CLEAR_VIDEO_GAMES":
            return initialState
        default:
            return state
    }
}
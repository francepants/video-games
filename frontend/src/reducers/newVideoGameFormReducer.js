const initialState = {
    gameName: "",
    gameGenre: "",
    gameRating: "",
    gamePlatform: "",
    description: "",
    yearReleased: ""
}

export default (state=initialState, action) => {
    switch(action.type) {
        case "UPDATE_NEW_VIDEO_GAME_FORM":
            return {
                ...state,
                [action.formData.name]: action.formData.value
            }
        case "RESET_NEW_VIDEO_GAME_FORM":
            return initialState
        
        default: 
            return state
    }
}
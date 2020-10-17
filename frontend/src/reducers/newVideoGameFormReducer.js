const initialState = {
    gameName: "",
    gameGenre: "",
    gameRating: "",
    gamePlatform: "",
    description: "",
    yearReleased: ""
}

export default (state=initialState, action) => {
    console.log("the incoming action:", action)
    switch(action.type) {
        case "UPDATE_NEW_VIDEO_GAME_FORM":
        const returnVal = {
            ...state,
            [action.formData.name]: action.formData.value
        }    
        console.log("reducer returnVal:", returnVal)
        return returnVal
            
        case "RESET_NEW_VIDEO_GAME_FORM":
            return initialState
        
        default: 
            return state
    }
}
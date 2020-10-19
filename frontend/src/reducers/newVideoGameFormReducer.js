const initialState = {
    gameName: "",
    gameGenre: "",
    gameRating: "",
    gamePlatform: "",
    description: "",
    yearReleased: ""
}

export default (state=initialState, action) => {
    // console.log("the incoming action:", action)
    switch(action.type) {
        case "UPDATE_NEW_VIDEO_GAME_FORM":
        const returnVal = {
            ...state,
            [action.formData.name]: action.formData.value
        }    
        // console.log("new VG form reducer returnVal:", returnVal)
        return returnVal
            
        case "RESET_NEW_VIDEO_GAME_FORM":
            return initialState
        case "PRESET_EDIT_FORM_DATA":
            return action.vgFormData
        default:
            return state
    }
}
 //works with handle change in component > NewVideoGameForm

 // refactor to local state
export const updateNewVideoGameForm = (name, value) => {
    const formData = { name, value }
    // console.log("action formData:", formData)
    return {
        type: "UPDATE_NEW_VIDEO_GAME_FORM",
        formData
    }
}
export const resetNewVideoGameForm = () => {
    return {
        type: "RESET_NEW_VIDEO_GAME_FORM"
    }
}

export const presetEditFormData = videoGame => {
    const vgFormData = {
        gameName: videoGame.attributes.game_name,
        gameGenre: videoGame.attributes.game_genre,
        gameRating: videoGame.attributes.game_rating,
        gamePlatform: videoGame.attributes.game_platform,
        description: videoGame.attributes.description,
        yearReleased: videoGame.attributes.year_released
    }
    return {
        type: "PRESET_EDIT_FORM_DATA",
        vgFormData
    }
}
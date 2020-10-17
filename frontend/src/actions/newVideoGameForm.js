 //works with handle change in component > NewVideoGameForm

export const updateNewVideoGameForm = (name, value) => {
    const formData = { name, value }
    console.log("action formData:", formData)
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
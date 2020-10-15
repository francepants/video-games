//works with handle change in component > NewVideoGameForm

export const updateNewVideoGameForm = (name, value) => {
    console.log(name, value)
    return {
        type: "UPDATE_NEW_VIDEO_GAME_FORM",
        formData: { name, value }
    }
}
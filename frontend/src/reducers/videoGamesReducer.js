// const initialState = {
//     loading: true,
//     videoGames: []
// }

export default (state = [], action) => {
    switch(action.type){
        case "SET_VIDEO_GAMES":
            return action.videoGames
        default:
            return state
    }
}
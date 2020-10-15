// sync

export const setVideoGames = videoGames => {
    return {
        type: "SET_VIDEO_GAMES",
        videoGames
    }
} 
export const clearVideoGames = () => {
    return {
        type: "CLEAR_VIDEO_GAMES",
    }
} 

//async
export const getVideoGames = () => {
    return dispatch => {
        return fetch("http://localhost:3001/video_games", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                console.log(resp.data)
                dispatch(setVideoGames(resp.data))
            }
        }
            
        )
        .catch(console.log)

    }
}
// sync
import { resetNewVideoGameForm } from './newVideoGameForm'

export const setVideoGames = videoGames => {
    return {
        type: "SET_VIDEO_GAMES",
        videoGames
    }
} 

export const clearVideoGames = () => {
    return {
        type: "CLEAR_VIDEO_GAMES"
    }
} 

export const addVideoGame = (videoGame) => {
    return {
        type: "ADD_VIDEO_GAME",
        videoGame
    } 
}

export const updateVideoGameSuccess = (videoGame) => {
    return {
        type: "UPDATE_VIDEO_GAME",
        videoGame
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
                dispatch(setVideoGames(resp.data))
            }
        }
            
        )
        .catch(console.log)
    }
}

export const createVideoGame = (videoGameData, history) => {
    return dispatch => {
        const updatedRailsData = {
            video_game: {
                game_name: videoGameData.gameName,
                game_genre: videoGameData.gameGenre,
                game_rating: videoGameData.gameRating,
                game_platform: videoGameData.gamePlatform,
                description: videoGameData.description,
                year_released: videoGameData.yearReleased,
                user_id: videoGameData.userId
            }
        }
        return fetch("http://localhost:3001/video_games/", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedRailsData) 
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                console.log("this is resp.data for create VG", resp.data) 
                // looks like new VG is added as null ?? 
                dispatch(addVideoGame(resp.data))
                dispatch(getVideoGames())
                dispatch(resetNewVideoGameForm())
                // history.push(`/video_games/${resp.data.id}`) //this one does NOT cause error when new game is submitted
                history.push(`/videoGames/${resp.data.id}`) //NOW IT'S NOT RECOGNIZING HISTORY.PUSH 
                //this one DOES cause error when new game is submitted > error has to be in videoGames component and/or app.js 

                // history.push('/videoGames') //this one DOES cause error when new game is submitted
            }
        })
        .catch(console.log)
    }
}

export const updateVideoGame = (videoGameData, history) => {
    return dispatch => {
        const updatedRailsData = {
            video_game: {
                game_name: videoGameData.gameName,
                game_genre: videoGameData.gameGenre,
                game_rating: videoGameData.gameRating,
                game_platform: videoGameData.gamePlatform,
                description: videoGameData.description,
                year_released: videoGameData.yearReleased,
            }
        }
        return fetch(`http://localhost:3001/video_games/${videoGameData.videoGameId}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedRailsData) 
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(updateVideoGameSuccess(resp.data))
                // dispatch(resetNewVideoGameForm())
                history.push(`/videoGames/${resp.data.id}`) 
            }
        })
        .catch(console.log)
    }
}
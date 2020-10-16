// sync

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

export const createVideoGame = (videoGameData) => {
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
        .then(console.log)
        .catch(console.log)
    }
}
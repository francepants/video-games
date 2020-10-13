

//synchronous action creators
// function that takes in a user as an object and returns and action type
// type matches whats in the reducer - "SET_CURRENT_USER"
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user 
    }
}


//asynchronous action creators
export const login = (credentials) => {
    console.log("credentials are", credentials)
    return dispatch => {
        return fetch("http://localhost:3001/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user))
            }
        }
            
        )
        .catch(console.log)
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3001/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user))
            }
        }
            
        )
        .catch(console.log)
    }
}
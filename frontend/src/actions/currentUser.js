//action creator
import { resetLoginForm } from './loginForm'
import { resetSignupForm } from './signupForm'
import { getVideoGames, clearVideoGames } from './videoGames'

//synchronous action creators
// function that takes in a user as an object and returns and action type
// type matches whats in the reducer - "SET_CURRENT_USER"
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

//asynchronous action creators

// log in
export const login = (credentials, history) => {
    console.log("credentials are", credentials)
    console.log("history is", history)
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
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setCurrentUser(resp.data))
                dispatch(getVideoGames())
                dispatch(resetLoginForm())
                history.push('/')
            }
        }
        )
        .catch(console.log)
    }
}

// sign up
export const signup = (credentials, history) => {
    console.log("credentials:", credentials)
    return dispatch => {
        const userInfo = {
            user: credentials
        }
        return fetch("http://localhost:3001/signup", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setCurrentUser(resp.data))
                dispatch(getVideoGames())
                dispatch(resetSignupForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

// log out
export const logout = (event) => {

    return dispatch => {
        dispatch(clearCurrentUser())
        dispatch(clearVideoGames())

        return fetch("http://localhost:3001/logout", {
            credentials: "include",
            method: "DELETE"
        })
    }
}

// get current user
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
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setCurrentUser(resp.data))
                dispatch(getVideoGames())
            }
        }
            
        )
        .catch(console.log)
    }
}
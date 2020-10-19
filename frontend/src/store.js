import { createStore, applyMiddleware, combineReducers } from 'redux'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginFormReducer'
import videoGames from './reducers/videoGamesReducer'
import signupForm from './reducers/signupFormReducer'
import newVideoGameForm from './reducers/newVideoGameFormReducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


const reducer = combineReducers({
    currentUser,
    loginForm,
    videoGames,
    signupForm,
    newVideoGameForm
  })
  
  const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

  export default store
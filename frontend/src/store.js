import { createStore, applyMiddleware, combineReducers } from 'redux'
import usersReducer from './reducers/usersReducer'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginFormReducer'
import videoGames from './reducers/videoGamesReducer'
import thunk from 'redux-thunk'
// import rootReducer from './reducers/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'


const reducer = combineReducers({
    user: usersReducer, 
    currentUser,
    loginForm,
    videoGames
  })
  
  const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

  export default store
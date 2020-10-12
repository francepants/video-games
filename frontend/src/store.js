import { createStore, applyMiddleware, combineReducers } from 'redux'
import usersReducer from './reducers/usersReducer'
import currentUser from './reducers/currentUser'
import thunk from 'redux-thunk'
// import rootReducer from './reducers/rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'


const reducer = combineReducers({
    user: usersReducer, 
    currentUser
  })
  
  const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

  export default store
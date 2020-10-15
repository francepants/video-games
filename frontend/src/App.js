import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/LoginForm'
// import Logout from './components/Logout'
import Signup from './components/Signup'
import VideoGames from './components/VideoGames'
import NewVideoGameForm from './components/NewVideoGameForm'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import { Route, Switch, withRouter } from 'react-router-dom'
// import MainContainer from './containers/MainContainer'


class App extends Component {
  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
        <div className="App">
          { loggedIn ? <NavBar /> : <Home />}
          <Switch>
              {/* <Route exact path='/' render={(props) => loggedIn ? <VideoGames/> : <Home/>}/> */}
              <Route exact path='/signup' component={Signup}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/videoGames' component={VideoGames}/>
              <Route exact path='/videoGames/new' component={NewVideoGameForm}/>
            </Switch>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App))

import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/Auth/LoginForm'
import Signup from './components/Auth/Signup'
import LoggedInWelcome from './components/LoggedInWelcome'
import VideoGames from './components/VideoGames/VideoGames'
import NewVideoGameFormWrapper from './components/VideoGames/NewVideoGameFormWrapper'
import EditVideoGameFormWrapper from './components/VideoGames/EditVideoGameFormWrapper'
import VideoGameCard from './components/VideoGames/VideoGameCard'
import './index.css'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/Auth/currentUser'
import { Route, Switch, withRouter } from 'react-router-dom'


class App extends Component {
  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, videoGames } = this.props
    return (
        <div className="App">
          { loggedIn ? <NavBar /> : <Home />}
          <Switch>
              <Route exact path='/loggedInWelcome' component={LoggedInWelcome}/>
              <Route exact path='/signup' component={Signup}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/videoGames' component={VideoGames}/>
              <Route exact path='/videoGames/new' component={NewVideoGameFormWrapper}/>
              
              {/* throws an error with videoGames.find */}
              <Route exact path='/videoGames/:id' render={props => {
                const videoGame = Array.from(videoGames).find(videoGame => 
                (videoGame.id === props.match.params.id))
                return <VideoGameCard videoGame={videoGame} {...props}/>
              }
            }/>

              <Route exact path='/videoGames/:id/edit' render={props => {
                const videoGame = Array.from(videoGames).find(videoGame => {
                return videoGame.id === props.match.params.id
              })
              
              return <EditVideoGameFormWrapper videoGame={videoGame} {...props}/>
              }
            }/>
            </Switch>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    loggedIn: !!state.currentUser,
    videoGames: state.videoGames
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App))

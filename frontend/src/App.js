import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Login from './components/LoginForm'
import Signup from './components/Signup'
import LoggedInWelcome from './components/LoggedInWelcome'
import VideoGames from './components/VideoGames'
import NewVideoGameFormWrapper from './containers/NewVideoGameFormWrapper'
import EditVideoGameFormWrapper from './containers/EditVideoGameFormWrapper'
import VideoGameCard from './components/VideoGameCard'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
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
              {/* <Route exact path='/' render={(props) => loggedIn ? <VideoGames/> : <Home/>}/>  */}
              {/* if commented in it shows welcome twice */}

              <Route exact path='/loggedInWelcome' component={LoggedInWelcome}/>
              <Route exact path='/signup' component={Signup}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/videoGames' component={VideoGames}/>
              <Route exact path='/videoGames/new' component={NewVideoGameFormWrapper}/>
              
              {/* throws an error with videoGames.find */}
              <Route exact path='/videoGames/:id' render={props => {
                // debugger
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
              {/* use render to pass a prop */}
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

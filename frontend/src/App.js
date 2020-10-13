import React, { Component } from 'react'
import NavBar from './components/NavBar'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import MainContainer from './containers/MainContainer'

class App extends Component {
  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <MainContainer />
      </div>
    )
  }
}



export default connect(null, { getCurrentUser })(App)

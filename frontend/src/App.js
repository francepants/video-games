import React, { Component } from 'react'
import LoginForm from './components/LoginForm'
import Logout from './components/Logout'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'

class App extends Component {
  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    return (
      this.props.currentUser ? <Logout /> : <LoginForm />
    )
  }
}

//(state) of redux
//can do this because we know the incoming argument is an object, state, coming from redux
const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App)

import React from 'react'
import { connect } from 'react-redux'
import Login from './LoginForm'
import Logout from './Logout'


const NavBar = ({currentUser}) => {
    return (
        <div>
            <ul>
                {currentUser ? `Welcome ${currentUser.attributes.username}!` : ""}
                {currentUser ? <Logout/> : <Login/>}
            </ul>
        </div>
    )
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(NavBar)
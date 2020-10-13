import React from 'react'
import { connect } from 'react-redux'
import Login from './LoginForm'
import Logout from './Logout'


const NavBar = (props) => {
    return (
        <div>
            <ul>
                {props.currentUser ? `Welcome ${props.currentUser.username}!` : ""}
                {props.currentUser ? <Logout/> : <Login/>}
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
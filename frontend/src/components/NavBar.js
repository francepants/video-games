import React from 'react'
// import Login from './LoginForm'
import Logout from './Logout'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'

//functional component

const NavBar = ({currentUser, loggedIn}) => {
    return (
        <nav className="nav-wrapper purple darken-4">
            <div className="container">
                <Link className="brand-logo left" to="/">Video Games</Link>
                <ul className="right">
                    <li> <NavLink exact to="/videoGames">My Video Games</NavLink></li>
                    <li> <NavLink exact to="/videoGames/new">New Video Game</NavLink></li>
                    <li> { loggedIn ? <Logout/> : null }</li>
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(NavBar)

// {currentUser ? `Welcome ${currentUser.attributes.username}!` : ""}
                // {/* {currentUser ? <Logout/> : <Login/>} */}

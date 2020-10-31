import React from 'react'
// import Login from './LoginForm'
import Logout from './Logout'
import { connect } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'

//functional component

const NavBar = ({currentUser, loggedIn}) => {
    return (
        <nav className="nav-wrapper grey darken-4">
            <div className="collapse navbar-collapse">
                <Link className="logo left" to='/loggedInWelcome'><span role="img" aria-label="">👾</span> Video Games</Link>
                <ul className="collapse navbar-collapse right">
                    <li className="nav-item"> <NavLink exact to="/videoGames">My Video Games</NavLink></li>
                    <li className="nav-item"> <NavLink exact to="/videoGames/new">New Video Game</NavLink></li>
                    <li className="nav-item"> {currentUser ? `Welcome ${currentUser.attributes.username}!` : ""}</li>
                    <li className="nav-item"> { loggedIn ? <Logout/> : null }</li>
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

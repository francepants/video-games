import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser' //import action creator

//functional component
const Logout = ({ logout }) => {

    return (
        <form onSubmit={logout}>
            <input type="submit" value="Log Out" />
        </form>
    )
}

export default connect(null, { logout })(Logout)
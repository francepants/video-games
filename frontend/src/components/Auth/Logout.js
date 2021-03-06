import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/Auth/currentUser' //import action creator
import { withRouter } from 'react-router-dom' //import action creator

//functional component
const Logout = ({ logout, history }) => {

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            logout()
            history.push('/')
        }}>
            <input className="btn logout-btn" type="submit" value="Log Out" />
        </form>
    )
}

export default withRouter(connect(null, { logout })(Logout))
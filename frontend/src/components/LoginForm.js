import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm' //import action creator
import { login } from '../actions/currentUser' //import action creator

//functional component
const Login = ({ loginForm, updateLoginForm, login, history }) => {

    const handleChange = (event) => {
        const {name, value} = event.target
        const updatedFormInfo = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(loginForm, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" value={loginForm.username} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={loginForm.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={loginForm.password} onChange={handleChange} />

            <input className="btn" type="submit" value="Log In"/>
        </form>
    )
}

//gives an argument coming to this component that looks like { username: "lala", password: "password"}
const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
        // username: state.loginForm.username,
        // email: state.loginForm.email,
        // password: state.loginForm.password
    } 
}


export default connect(mapStateToProps, { updateLoginForm, login })(Login)
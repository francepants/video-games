import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm' //import action creator
import { signup } from '../actions/currentUser' //import action creator

//functional component
const Signup = ({ signupForm, updateSignupForm, signup, history }) => {

    const handleChange = (event) => {
        const {name, value} = event.target
        const updatedFormInfo = {
            ...signupForm,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        signup(signupForm, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" value={signupForm.username} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={signupForm.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={signupForm.password} onChange={handleChange} />

            <input type="submit" value="Sign Up"/>
        </form>
    )
}

//gives an argument coming to this component that looks like { username: "lala", password: "password"}
const mapStateToProps = state => {
    return {
        signupForm: state.signupForm
    } 
}


export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)
import React from 'react';
// import Login from './LoginForm'
// import Signup from './Signup'
// import Logout from './Logout'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
            <div className="home-card card">
                <div className="transbox">
                    <h1>Welcome</h1>
                    <h3>to your video games!</h3>
                    <h5>Please <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link></h5>
                </div>
            </div>
    );
}

export default Home;
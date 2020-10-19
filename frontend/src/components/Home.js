import React from 'react';
// import Login from './LoginForm'
// import Signup from './Signup'
// import Logout from './Logout'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
            <div className="home-card card">
                <h1>Welcome!</h1>
                <h4>Please <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link></h4>
            </div>
    );
}

export default Home;
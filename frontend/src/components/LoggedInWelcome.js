import React from 'react';

import { Link } from 'react-router-dom'


const LoggedInWelcome = () => {
    return (
            <div>
                <h1>Welcome</h1>
                <h4>to your video games</h4>
                <p>Choose to view <Link to="/videoGames">Your Video Games</Link> or <Link to="/videoGames/new">add a new video game to your arsenal</Link></p>
            </div>
    );
}

export default LoggedInWelcome
import React from "react"
import { Link } from "react-router-dom"
 
const Home = () => {
    return (

        <div>
            <h1>Home Page</h1>
            <br />
            <ul>
                <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/"> Home Page </Link>
                </li>
                <li>
                    {/* Endpoint to route to About component */}
                    <Link to="/quiz"> Quiz </Link>
                </li>
                <li>
                    {/* Endpoint to route to Contact Us component */}
                    <Link to="/swipe"> Swipe </Link>
                </li>
            </ul>
        </div>
    );
};
 
export default Home;
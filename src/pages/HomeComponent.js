// HomeComponent.js

import React from 'react';
import '../assets/css/home.css';
import { Link } from 'react-router-dom';

const HomeComponent = () => {
    return (
        <section className="home">
            <div className="homecontent">
                <h1 class="text-center">BUILD THE FUTURE</h1>
                <br />
                <Link className="btn btn-lg btn-light" to="/course">Discover Courses</Link>
                <Link className="btn btn-lg btn-primary" to="/contactus">Contact Us</Link>
            </div>
        </section>
    );
};

export default HomeComponent;

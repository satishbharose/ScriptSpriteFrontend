import React from 'react';
import CompanyLogoNew from '../assets/images/CompanyLogoNew.png';
import { Link } from 'react-router-dom';
const AdminHomeComponent = () => {
  
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="nav-link" to="/home">
                    <img src={CompanyLogoNew} width="130px" height="50px" alt="Company Logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/adminHome">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addCourse">Add Course</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Course">List Of Courses</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
   
}

export default AdminHomeComponent;
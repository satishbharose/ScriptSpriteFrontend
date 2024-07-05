import React from 'react';
import MenuComponent from './components/MenuComponent';
import './assets/css/app.css';
import FooterComponent from "./components/FooterComponent";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomeComponent from './pages/HomeComponent'; // import other components as needed
import Course from './pages/CourseComponent';
import Courses from './pages/CoursesComponent';
import ContactUsComponent from './pages/ContactUsComponent';
import About from './pages/AboutComponent';
import AdminLogin from './pages/AdminLoginComonent';
import AddCourse from './pages/AddCourseComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

import AdminHome from './pages/AdminHomeComponent'
import AdminCourseList from './pages/AdminCourseList';
import ClientEdit from "./pages/ClientEdit";

const App = () => {
    return (
        <Router>
            <div className='app-container'>
                <MenuComponent />
                <Routes>
                    <Route path="/home" element={<HomeComponent />} />
                    <Route path="/course" element={<Course />} />
                    <Route path="/contactus" element={<ContactUsComponent />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Courses />} />
                    {/* Default route */}
                    <Route path="/" element={<HomeComponent />} />                    
                    <Route path="/adminLogin" element={<AdminLogin />} />
                    <Route path="/adminHome" element={<AdminHome />} />
                    <Route path="/addCourse" element={<AddCourse />} />
                    <Route path='/adminCourses' element={<AdminCourseList />}/>
                    <Route path='/clients/:id' element={<ClientEdit />}/>
                </Routes>
                <FooterComponent className='footer-container'/>
            </div>
        </Router>
    );
};



export default App;

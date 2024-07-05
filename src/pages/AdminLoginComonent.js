import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs for React

import '../assets/css/contactUs.css';

const AdminLoginComponent = () => {
    const [form, setForm] = useState({
        fname: '',
        email: '',
        mobileNumber: '',
        msg: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Initialize emailjs
        emailjs.init('VXIlhV7gC056h53V7');

        // Send email using emailjs
        try {
            let response = await emailjs.send("service_ozh25er", "template_h1wrj47", {
                fname: form.fname,
                to_name: "ScriptSprite",
                email: form.email,
                mobileNumber: form.mobileNumber,
                msg: form.msg,
            });

            alert('Message has been sent.');
            setForm({
                fname: '',
                email: '',
                mobileNumber: '',
                msg: ''
            });
        } catch (error) {
            console.error('Error sending email:', error);
            alert('There was an error sending your message. Please try again later.');
        }
    };

    return (
        <section className="contactus">
            <div className="login col-lg-4 m-auto shadow-lg">
                <form onSubmit={handleSubmit}>                    
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address<span className='red'>*</span>:</label>
                        <input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email"
                            className="form-control"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobileNumber" className="form-label">Password:</label>
                        <input
                            name="password"
                            id="password"
                            type="text"
                            placeholder="Mobile Number"
                            className="form-control"
                            value={form.mobileNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="login" className="btn btn-primary col-lg-12">Login</button>
                </form>
            </div>
        </section>
    );
};

export default AdminLoginComponent;

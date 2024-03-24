import React, { useState } from 'react';

const MyForm = () => {
    const [formData, setFormData] = useState({
        first: '',
        last: '',
        email: '',
        user: '',
        password: '',
        confirm: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic for form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>LOGIN | SIGN UP</h1>
            <label>
                First Name:
                <input type="text" name="first" value={formData.first} onChange={handleChange} />
            </label>
            <label>
                Last Name:
                <input type="text" name="last" value={formData.last} onChange={handleChange} />
            </label>
            <label>
                Email Address:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
                Username:
                <input type="text" name="user" value={formData.user} onChange={handleChange} />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <label>
                Confirm Password:
                <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} />
            </label>
            <button type="submit">Create Account</button>
        </form>
    );
};

export default MyForm;
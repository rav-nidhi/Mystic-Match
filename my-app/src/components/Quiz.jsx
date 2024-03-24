import React, { useState } from 'react';
import "./QuizStyle.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

const MyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        topics: []
    });

    const handleChange = (e) => {
        const { name, value, checked } = e.target;

        if (name === 'topics') {
            let updatedTopics = [...formData.topics];

            if (checked) {
                updatedTopics.push(value);
            } else {
                updatedTopics = updatedTopics.filter(topic => topic !== value);
            }

            setFormData({ ...formData, [name]: updatedTopics });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic for form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="page">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <h1 style={{ marginBottom:'1vh'}}>Org Match Quiz</h1>
                <div className= "my-form"><div><label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label></div>
                <label>Check all topics below that interest you:</label>
                <div className= "my-form">
                    <label>
                        <input type="checkbox" name="topics" value='Engineering' checked={formData.topics.includes('Engineering')} onChange={handleChange} />
                        Engineering
                    </label>
                    <label>
                        <input type="checkbox" name="topics" value='Software' checked={formData.topics.includes('Software')} onChange={handleChange} />
                        Software
                    </label>
                    <label>
                        <input type="checkbox" name="topics" value='Women' checked={formData.topics.includes('Women')} onChange={handleChange} />
                        Women
                    </label>
                    <label>
                        <input type="checkbox" name="topics" value='POC' checked={formData.topics.includes('POC')} onChange={handleChange} />
                        POC
                    </label>
                    <label>
                        <input type="checkbox" name="topics" value='Hardware' checked={formData.topics.includes('Hardware')} onChange={handleChange} />
                        Hardware
                    </label>
                </div>
                <div>
                <button class="box" onClick={(e) => {e.preventDefault(); window.location.href='./Swipe';}}> Submit</button></div>
                </div>
            </form>
        </div>
    );
};

export default MyForm;
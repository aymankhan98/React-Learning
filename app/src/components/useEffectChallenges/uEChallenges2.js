


"use client"
import React from 'react'
import { useState } from 'react'

function UEChallenges2() {
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Event handlers to update state variables
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };  
    return (
        <div className="form-container">
        <h2>Input Form</h2>
        <form >
            <div className="form-group">
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
        </form>
    </div>
  )
}

export default UEChallenges2
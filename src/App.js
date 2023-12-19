// App.js

import React, { useState } from 'react';
import './App.css'; // Make sure to create an App.css file for styling
import Gifu from './assets/payment.gif';
import YogaVideo from './assets/yogad.mp4';


const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    selectedBatch: '',
  });
  const [enrollmentResult, setEnrollmentResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name || !formData.age || !formData.selectedBatch) {
      setEnrollmentResult({ success: false, message: 'All fields are required.' });
      return;
    }

    const parsedAge = parseInt(formData.age, 10);
    if (isNaN(parsedAge) || parsedAge < 18 || parsedAge > 65) {
      setEnrollmentResult({ success: false, message: 'Invalid age. Must be between 18 and 65.' });
      return;
    }

    // Call backend API to store data in the database
    const response = await fetch('http://localhost:5000/enroll', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    setEnrollmentResult(result);

    // Clear the result after 4 seconds
    setTimeout(() => {
      setEnrollmentResult(null);
    }, 4000);
  };

  return (
    <div className="App">
    <video autoPlay muted loop id="background-video">
      <source src={YogaVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    
      <div className="App">
        <h1>Yoga Class Admission Form</h1>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} required />

          <label>Age:</label>
          <input type="number" name="age" onChange={handleChange} required />

          <label>Select Batch:</label>
          <select name="selectedBatch" onChange={handleChange} required>
            <option value="">Select Batch</option>
            <option value="6-7AM">6AM-7AM</option>
            <option value="7-8AM">7AM-8AM</option>
            <option value="8-9AM">8AM-9AM</option>
            <option value="5-6PM">5PM-6PM</option>
          </select>

          <button type="submit">Enroll for 500₹ only</button>
        </form>

        {enrollmentResult && (
          <div>
            <p style={{ color: enrollmentResult.success ? 'green' : 'red' }}>
              {enrollmentResult.message}
            </p>
            {enrollmentResult.success && (
              <div className="gif-container">
                <img src={Gifu} alt="Success GIF" className="gif-image" />
              </div>
            )}
          </div>
        )}


        
      </div>
      </div>
    
  );
};

export default App;

import React, { useState } from 'react';
import axios from 'axios';

function ConsumerView() {
  const [formData, setFormData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://your-backend-url/consumer', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="location" placeholder="Location" onChange={handleChange} />
      <input type="number" name="budget" placeholder="Budget" onChange={handleChange} />
      <input type="number" name="energyRequirement" placeholder="Energy Requirement" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

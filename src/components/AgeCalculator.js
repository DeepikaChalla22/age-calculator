import React, { useState } from 'react';
import './styles.css'
const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (dob) {
      const dobDate = new Date(dob);
      const currentDate = new Date();
      const ageInMilliseconds = currentDate - dobDate;
      const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
      setAge(ageInYears);
    } else {
      setAge(null);
    }
  };

  return (
    <div>
      <label>Enter your Date of Birth: </label>
      <input  type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      <br />
      <button className='btn' onClick={calculateAge}>Calculate Age</button>
      {age !== null && (
        // <p>Your age is: {age} years</p>
        <p id='ans'><b>You are {age} years old</b></p>
      )}
    </div>
  );
};

export default AgeCalculator;

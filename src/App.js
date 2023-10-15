import React, { useState } from "react";
import "./App.css";

function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

function App() {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedAge = calculateAge(birthdate);
    setAge(calculatedAge);
  };

  return (
    <div className="app-container">
      <h1>Age Calculator</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <p>
            <b>enter your date of birth</b>
          </p>
          <input
            type="date"
            value={birthdate}
            id="bday"
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      <article>
        <h2>Your age is</h2>
        <span>{age}</span>
      </article>
    </div>
  );
}

export default App;
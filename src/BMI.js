import React, { useState } from 'react';
import './BMI.sass';

export default function BMI() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(0);
  const [desc, setDesc] = useState('N/A');
  const [bmiClass, setBmiClass] = useState('');

  function interpretBMI(value) {
    if (value < 18.5) return 'underweight';
    if (value < 25) return 'normal';
    if (value < 30) return 'overweight';
    return 'obese';
  }

  function onReset() {
    setWeight('');
    setHeight('');
    setBmi(0);
    setDesc('N/A');
    setBmiClass('');
  }

  function onSubmit(e) {
    e.preventDefault();

    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
      alert('Please enter a valid weight and height');
      return;
    }

    const heightInMeters = h / 100;
    const value = w / Math.pow(heightInMeters, 2);
    const category = interpretBMI(value);

    setBmi(Number(value.toFixed(2)));
    setDesc(`You are ${category}`);
    setBmiClass(category);
  }

  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      <form className="calculator" onSubmit={onSubmit} onReset={onReset}>
        <div>
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            min="0"
            step="0.01"
            placeholder="Enter your weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="height">Height (cm)</label>
          <input
            type="number"
            id="height"
            min="0"
            step="0.01"
            placeholder="Enter your height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div>
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>

      <div className="output">
        <p>Your BMI is</p>
        <div id="bmi" className={bmiClass}>{bmi}</div>
        <div id="desc">{desc}</div>
      </div>

      <div className="bmi-scale">
        <div style={{ '--color': 'var(--underweight)' }}>
          <h4>Underweight</h4>
          <p>&lt; 18.5</p>
        </div>
        <div style={{ '--color': 'var(--normal)' }}>
          <h4>Normal</h4>
          <p>18.5 - 25</p>
        </div>
        <div style={{ '--color': 'var(--overweight)' }}>
          <h4>Overweight</h4>
          <p>25 - 30</p>
        </div>
        <div style={{ '--color': 'var(--obese)' }}>
          <h4>Obese</h4>
          <p>&gt;= 30</p>
        </div>
      </div>
    </div>
  );
}

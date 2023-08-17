import React from 'react';

function Statistics() {
  return (
    <div className="statistics-container">
      <h1>Employee Statistics</h1>
      <div className="statistics-content">
        <div className="statistic">
          <h2>Total Employees</h2>
          <p>150</p>
        </div>
        <div className="statistic">
          <h2>Average Salary</h2>
          <p>$60,000</p>
        </div>
        <div className="statistic">
          <h2>Highest Salary</h2>
          <p>$100,000</p>
        </div>
      </div>
    </div>
  );
}

export default Statistics;

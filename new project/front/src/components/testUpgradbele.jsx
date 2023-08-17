import React, { useState, useEffect } from 'react';

function TestUpgradable() {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {

    setPeopleData(peopleData);
  }, []);

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
            <th>Promotion</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {peopleData.map((person) => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.salary}</td>
              <td>{person.promotion}</td>
              <td><button className="btn btn-primary">Test</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TestUpgradable;

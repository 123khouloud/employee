import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Employee() {
  const location = useLocation();
  const data = location.state;
  const [term, setTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  console.log(filteredData); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const newTerm = e.target.value;
    setTerm(newTerm);

    const filteredResults = data.filter((e) =>
      e.name.toLowerCase().includes(newTerm.toLowerCase())
    );

    setFilteredData(filteredResults);
  };

  return (
    <div className="employee-container">
      <div className="search-container text-center">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          onChange={handleChange}
        />
        <button className="btn btn-primary search-button">Search</button>
      </div>
      <div className="employee-list">
        {filteredData.map((e, i) => (
          <div className="info-container" key={i}>
            <img
              className="profile-image"
              src={e.imageUrl}
              alt="Profile"
              onClick={() => navigate(`/employeeinfo`, { state: e })}
            />
            <ul className="info-list">
              <li>{e.name}</li>
              <li>{e.mission}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Employee;
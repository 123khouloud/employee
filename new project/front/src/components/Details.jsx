import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Details() {

 

  const location = useLocation();
  const employee = location.state;
  console.log(employee)

  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState({
    name: employee?.name || '',
    mission: employee?.mission || '',
    salary: employee?.salary || '',
  });
  console.log(updateData);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleUpdate = () => {
    setIsFormVisible(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = () => {
    axios.put(`http://localhost:3000/api/employee/update/${id}`).then((result)=>console.log(result)).catch((err)=>console.log(err))
   }

   const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/api/employee/delete/${employee._id}`)
      .then((result) => {
        console.log(result);
        navigate('/home'); 
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="product-details">
      <div className="product-image">
        <img src={employee?.imageUrl} alt="Profile" />
      </div>
      <div className="product-info">
        <h1>{employee?.name}</h1>
        <p>{employee?.mission}</p>
        <p>Salary: {employee?.salary}</p>
        <div className="button-container">
          <button className="btn btn-primary" onClick={handleUpdate}>
            Update
          </button>
          <button className="btn btn-danger"  onClick={handleDelete}>
          Delete
        </button>
        </div>
        {isFormVisible && (
          <div className="update-form">
            <h2>Update Employee Information</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={updateData?.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mission">Mission:</label>
                <input
                  type="text"
                  id="mission"
                  name="mission"
                  value={updateData?.mission}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="salary">Salary:</label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  value={updateData?.salary}
                  onChange={handleInputChange}
                />
              </div>
              <Link to={"/home"}>
              <button className="btn btn-primary" onClick={handleSubmit}>
                Confirm Update
              </button>
              </Link>
              
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Details;

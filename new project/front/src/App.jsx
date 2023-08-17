
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Employee from './components/employee';
import Details from './components/Details';
import Login from './components/Login';
import Add from './components/AddEmployee';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employeeinfo" element={<Details />} />
       <Route path="/add" element={<Add />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

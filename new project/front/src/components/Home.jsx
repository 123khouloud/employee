
import React,{useState,useEffect} from 'react'
import "./app.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'


function Home() {

  const [data,setData]=useState([])
  const [trigger,setTrigger]=useState([])
  const [term,setTerm]=useState("")
 

  ;

  const handleChange=(e)=>{
    const newTerm=e.target.value
    setTerm(newTerm)
    search(newTerm)
  }



  


  const navigate = useNavigate()
  useEffect(() => {
    console.log("hello");
    axios.get("http://localhost:3000/api/employees").then((result) => {

      setData(result.data);
    }).catch((err) => console.log(err));
  }, []);


  return (
    <div> <div className="app-container">
    <nav className="navbar">
      <ul className="navbar-list">
        <button className="nav-button">Home</button>
        <br></br><br></br>
        <button className="nav-button" onClick={()=>(navigate("/employee",{state:data}))} >Employees</button>
        <br></br><br></br>
        <button className="nav-button">Salary</button>
        <br></br><br></br>
        <button className="nav-button">Statistics</button>
        <br></br><br></br>
        <button className="add-button" onClick={()=>(navigate("/Add",{state:data}))}  >Add</button>
        <br></br><br></br>
      </ul>
    </nav>
    <div className="content">
      <img className="background-image" src="https://th.bing.com/th/id/R.ea15989511e022cad6eed259d210fc0b?rik=GggKWOVzfKpziQ&pid=ImgRaw&r=0" alt="Background" />
    </div>

  </div></div>
  )
}

export default Home 
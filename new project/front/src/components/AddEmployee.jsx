import React,{useEffect,useState} from 'react'
import axios from 'axios'

   
export default function Add (props)  {
const [name,setName]=useState("")
const [imageUrl,setImageUrl]=useState("")
const [mission,setMission]=useState("")


 const handlclick =()=>{
    axios.post("http://localhost:3000/api/employee/add",{
        name:name,
        imageUrl:imageUrl,
       mission :mission
    })
    .then((result)=>{console.log(result); 
    props.add()})
    .catch((err)=>console.log(err))
 }
 const handleChange =(e)=>{
    setAdded({[e.target.name]:e.target.value})
}


  return (
    <div className="update-container">
      <h2>Added Item</h2>
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="category">Mission</label>
        <input
          type="text"
          id="category"
        
          onChange={(e) => setMission(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"

          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button id="btn"onClick={()=>{handlclick()
    alert("added successfully")}}>Add</button>
    </div>
  )
}



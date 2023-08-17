const express = require('express');
const cors =require('cors');
const {getemployees}=require("./database/index");
const {add}=require("./database/index");
const {update}=require("./database/index");
const {remove}=require("./database/index");

const port = 3000;
const app = express();

const db = require('./database/index');

app.use(cors());
app.use(express.json())

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
  
    const employee = employees.find(e => e.username === username && e.password === password);
  
    if (employee) {
      res.sendStatus(200); 
    } else {
      res.sendStatus(401); 
    }
  });

app.get('/api/employees',(req,res)=> {
    getemployees()
    .then((result)=>{res.status(200).json(result)})
    .catch((error)=>console.log(error))

    })


app.post('/api/employee/add',(req,res)=> {
    add(req.body)
    .then((result)=>{res.status(200).json(result)})
    .catch((error)=>console.log(error))

    })


app.put('/api/employee/update/:id',(req,res)=>{
  update(req.params.id,req.body)
.then((result)=>{res.status(202).json(result)})
.catch((error)=>console.log(error))
}
)


app.delete('/api/employee/delete/:id',(req,res)=> {
    remove(req.params.id)
    .then((result)=>{res.status(204).json(result)})
    .catch((error)=>console.log(error))
}) 


 





app.listen(port, ()=>{
console.log( `listening on  ${port}` );
})
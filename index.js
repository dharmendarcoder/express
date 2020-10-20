
const { json } = require("express");
const express = require("express");
const db= require("./controll/databse.js")
const app = express();
const arr=["ek","do","teen"];
app.use(express.json);
db.authenticate()
.then(()=>console.log("database connect"))
.catch((error)=>console.log(`${error} error`))

app.get('/', function (req, res) {
    res.send(arr);
  })
  
  // POST method route
  app.post('/', function (req, res) {
    const {name}=req;
    arr.push(req.body.name)
    res.send(arr)
  })

app.listen(3000, console.log("running on the port 3000"));

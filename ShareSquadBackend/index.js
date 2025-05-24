require("dotenv").config();
const express = require("express");
require("./config");
const cors = require("cors");
const ashramList = require("./models/ashramList");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("connectMe - Backend project Working Fine");
});
app.get("/list", async (req, res) => {
  let data = await ashramList.find();
  res.send(data);
});
app.post("/api/newdata",async (req,res)=>{
    let data=new ashramList(req.body)
    let result= await data.save()
    console.log(req.body);    
    res.send(req.body)
})

app.listen(5000);

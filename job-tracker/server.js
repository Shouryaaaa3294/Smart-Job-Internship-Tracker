const express = require("express");
const app = express();
app.use(express.json());

let jobs = [];

app.post("/jobs", (req,res)=>{
  jobs.push(req.body);
  res.json({msg:"added"});
});

app.get("/jobs",(req,res)=>{
  res.json(jobs);
});

app.listen(5000,()=>console.log("running"));
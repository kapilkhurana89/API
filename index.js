
const express = require ('express');
require('./config');
// require('events').EventEmitter.defaultMaxListeners = 15;
const EmployeesProfile = require('./EmployeeProfile');
const app = express();
app.use(express.json());
app.post ("/create",  (req,resp)=>{
    let data = new EmployeesProfile(req.body);
    let result =  data.save();
    console.log(result);
    resp.send("result");

});

app.listen(5000);
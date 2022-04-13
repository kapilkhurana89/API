const mongoose = require('mongoose');

const EmployeeProfileSchema = new mongoose.Schema({

    designation:String,
    service:String,
    email:String,
    name:String,
    msisdn:Number,
    password:Number,
    roles:Array,
    screenId:String,
    menuId:String,
    msisdnSecured:Boolean
})

module.exports= mongoose.model('EmployeeProfile',EmployeeProfileSchema);

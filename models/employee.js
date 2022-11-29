const { ObjectID } = require('bson');
const mongoose=require('mongoose');
var employeeSchema= new mongoose.Schema({
    // _id:{
        
    //     type:String
    // },
    name:{
        type:String,
        minlenght:3
    },
    email:{
        type:String
    },
    mobile:{
        type:Number
    },
    address:{
        type:String
    },
    msg:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const User=mongoose.model('User', employeeSchema); 
module.exports=User;
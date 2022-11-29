
const express = require('express');
const app =express();
const hbs= require('hbs');
const path = require("path");
const User = require('./models/employee');

const port = process.env.PORT || 3000;
require('./models/db');




const templatespath = path.join(__dirname, "./Templates");
app.use(express.urlencoded({extended:false}));

app.set("view engine", "hbs");
app.set("views", templatespath);

app.get("/",(req,res)=>{
   res.render('index');
// res.send('Hello')
})



   app.post("/",(req,res)=>{
    InsertRecord(req,res);
   })     
   


// app.post("/",(req,res)=>{
//     if(req.body._id==' '){
     
//         InsertRecord(req,res);

//     }else{
//         UpdateRecord(req,res);
//     }


// })



//Insert Function
function InsertRecord(req,res){
 var employee=new User(req.body);

 employee.save((err,doc)=>{
    if(!err){
        
        res.redirect('./list');
    }else{
        res.status(500).send(error);
    }
 })

}

//Update Function
// function UpdateRecord(req,res){
//     User.findOneAndUpdate({_id:req.body._id},req.body,{new:true}, (err,doc)=>{
//         if(!err){                                                                 
//             res.redirect('./list');
//         }else{
//             console.log("Error"+err);
//         }
//     })
// }



//for Read
app.get('/list',(req,res)=>{
    User.find((err,docs)=>{
        if(!err){
            res.render('./list', {
               list:docs
            });
        }       
    })
})



//for Update
// app.get('./Updation/:id',(req,res)=>{
// User.findById(req.params.id, (err,doc)=>{
//     if(!err){
//         res.render("Updation.hbs", {
//             viwTitle: "Updated EMployee",
//             employee : doc
//         })
//     }
// })
// })



app.get('/delete/:id',(req,res)=>{
    User.findByIdAndRemove(req.params.id, (err,doc)=>{
        if(!err){                                                                 
            res.render('./list');
        }else{
            console.log("Error....."+err);
        }
    })
})


app.listen(port,()=>{
    console.log(`this is port ${port}`);
})
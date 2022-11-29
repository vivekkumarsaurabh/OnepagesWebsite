const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/CRUD', {useNewUrlParser:true, 

useUnifiedTopology: true },(err)=>{
    if(!err){
        console.log('Connected');
    }else{
        console.log('Disconnected'+err);
    }
})
require('./employee');
const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const Faculty = require('./Faculty');
const connectionstring="mongodb+srv://zeelvegda24:zeelvegda@cluster0.xzugb.mongodb.net/Student_431";

mongoose.connect(connectionstring).then(()=>{
    console.log('connect to cloude database');
    const app=express();
    app.use(bodyParser.urlencoded());


    //get all
    app.get('/faculties',async(req,res)=>{
        const ans=await Faculty.find();
        res.send(ans);
    })
    
    //getby id
    app.get('/faculties/:id',async(req,res)=>{
        const ans=await Faculty.findOne({
            id:req.params.id
        });
        res.send(ans);
    })
   
    //create
    app.post('/faculties',async(req,res)=>{
        fac=new Faculty({...req,body});
        const ans=await fac.save();
        res.send(ans);

    });

    //delete 
    app.delete('/faculties/:id',async(req,res)=>{
        const ans=await Faculty.deleteOne({id:req.params.id})
        res.send(ans);
    });

     //delete using id
     app.delete('/faculties/:id',async(req,res)=>{
        const ans=await Faculty.findByIdAndDelete({id:req.params.id})
        res.send(ans);
    });

    //update
    app.patch('/faculties/:id',async(req,res)=>{
        const fac =await Faculty.findOne({id: res.params.id})
        fac.name=req.body.name;
        const ans=await fac.save();
        res.send(ans);
    })

    app.listen(3000,()=>{
        console.log("server started @3000");
    })
});


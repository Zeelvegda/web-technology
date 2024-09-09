const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Student = require('./Student');
const connectionstring="mongodb+srv://zeelvegda24:zeelvegda@cluster0.xzugb.mongodb.net/Student_431";

mongoose.connect(connectionstring).then(()=>{
    console.log('Connected with cloud database');
    const app = express();
    app.use(bodyParser.urlencoded());

    //get All
    app.get('/students',async (req,res)=>{
        const ans = await Student.find();
        res.send(ans);
    });

    //getby ID
    app.get('/students/:rollno',async (req,res)=>{
        const ans = await Student.findOne({
            rollno:req.params.rollno
        });
        res.send(ans);
    });

    //create 
    app.post('/students',async (req,res)=>{
        stu = new Student({...req.body});
        const ans = await stu.save();
        res.send(ans);
    });

    //delete
    app.delete('/students/:rollno',async (req,res)=>{
        const ans = await Student.deleteOne({
            rollno:req.params.rollno
        });
        
        res.send(ans);
    });

     //update
     app.patch('/students/:id', async (req, res) => {
        const stu = await Student.findOne({ id: req.params.id })
        stu.name = req.body.name;
        const ans = await stu.save();
        res.send(ans);
    })

    //search
    app.get('/students/search/:text',async (req,res)=>{
        const ans = await Student.find({name:{$regex:req.params.text}});
        res.send(ans);
    })

    app.listen(3000,()=>{
        console.log("Server strated @ 3000");
    })
});

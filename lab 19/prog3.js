/*. 3.Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it 
using express (C )*/
const express=require('express')
const app=express();
const fs=require('fs');

app.get('/abc',function(req,res){
    fs.readFile('about.html',(err,result)=>{
        res.send(result.toString());
    })
})

app.get('/name',function(req,res){
    fs.readFile('name.html',(err,result)=>{
        res.send(result.toString());
    })
})
    app.listen(3000,()=>{
        console.log('server started @3000')
    }
    );
    

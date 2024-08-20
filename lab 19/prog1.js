//1. Create a hello world webapp using ExpressJS. (A)

const express=require('express')

const app=express();
app.get('/',(req,res)=>{   ///'/'  index 
    res.send('hello world');
})


app.listen(3000,()=>{
    console.log('server started @3000')
}
);

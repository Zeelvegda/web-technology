//2. Create a webapp with 5 pages like about, contact etc.. using ExpressJS. (B)
const express=require('express')

const app=express();
app.get('/home',(req,res)=>{
    res.send('welcome home');
})

app.get('/about',(req,res)=>{
    res.send('darshan university');
})

app.get('/contact',(req,res)=>{
    res.send('contact us on:');
    res.send('<h3>123456789</h3>');
    res.send();
})

app.get('/register',(req,res)=>{
    res.send('register done');
})

app.get('/feedback',(req,res)=>{
    res.send('fill the feedback');
})

app.listen(3000,()=>{
    console.log('server started @3000')
}
);

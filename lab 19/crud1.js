//extra --crud 
const express=require('express')
const app=express();
const arr=
[
    {
      "name": "name 1",
      "e-mail": "Curt.Erdman@gmail.com",
      "mobile": "1-489-581-3005",
      "roll": 12,
      "city": "New Ryder",
      "id": "1"
    },
    {
      "name": "name 2",
      "e-mail": "Faye.Williamson90@gmail.com",
      "mobile": "605.951.9451",
      "roll": 87,
      "city": "Philadelphia",
      "id": "2"
    },
    {
      "name": "name 3",
      "e-mail": "Llewellyn4@yahoo.com",
      "mobile": "(586) 581-7091 x104",
      "roll": 64,
      "city": "New Ryannboro",
      "id": "3"
    },
    {
      "name": "name 4",
      "e-mail": "Chloe78@yahoo.com",
      "mobile": "(884) 955-6641 x31183",
      "roll": 24,
      "city": "Fort Dwight",
      "id": "4"
    },
    {
      "name": "name 5",
      "e-mail": "Alberto_Kuphal@gmail.com",
      "mobile": "561-225-4221 x13943",
      "roll": 39,
      "city": "Troy",
      "id": "5"
    },
    {
      "name": "name 6",
      "e-mail": "Gordon_Cassin@yahoo.com",
      "mobile": "(283) 857-6587 x803",
      "roll": 99,
      "city": "Surprise",
      "id": "6"
    },
    {
      "name": "name 7",
      "e-mail": "Jolie.Schiller96@gmail.com",
      "mobile": "782.783.8842 x7544",
      "roll": 31,
      "city": "Francescoshire",
      "id": "7"
    },
    {
      "name": "name 8",
      "e-mail": "Amari_Pouros41@gmail.com",
      "mobile": "725.257.4783 x587",
      "roll": 40,
      "city": "Coleview",
      "id": "8"
    },
    {
      "name": "name 9",
      "e-mail": "Sage_Hane@hotmail.com",
      "mobile": "1-751-333-9147 x47533",
      "roll": 59,
      "city": "Toms River",
      "id": "9"
    },
    {
      "name": "name 10",
      "e-mail": "Micheal.Witting@hotmail.com",
      "mobile": "671-621-5411 x62519",
      "roll": 0,
      "city": "Karianestad",
      "id": "10"
    }
  ]
//delete
app.delete('dlt/id:',(req,res)=>{
    const urlID=req.params.id;
    const result =arr.find(e=>e.id==urlID);
    if(result){
        const newArray=arr.filter(e=>e.id!=urlID);
        res.json(newArray);
    }
    else{
        res.end("not found");
    }
})


//add data
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
app.post('/home/add',(req,res)=>{
    const{name,city,id}=req.body;
    const result={
        "name":name,
        "city":city,
        "id":id,

    }
    arr.push(result);
    res.json(arr);

})


//getall
app.get('/home',(req,res)=>{  
    res.json(arr);
})

//getbyid
app.get('/home/:id',(req,res)=>{
    const urlID=req.params.id;
    const result=arr.find(e=>e.id==urlID)
    if(result){
        res.json(result);
    }
    else{
        res.send('data not found');
    }
})

app.listen(3000,()=>{
    console.log('server started @3000')
}
);

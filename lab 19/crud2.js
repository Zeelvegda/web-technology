///extra crud-2 faculty data
const express=require('express')
const app=express();
const arr=

[
    {
      "name": "name 1",
      "e-mail": "Curt.Erdman@gmail.com",
      "mobile": "1-489-581-3005"
    },

    {
      "name": "name 2",
      "e-mail": "Faye.Williamson90@gmail.com",
      "mobile": "605.951.9451"
    },

    {
      "name": "name 3",
      "e-mail": "Llewellyn4@yahoo.com",
      "mobile": "(586) 581-7091 x104"
    }

]


//add data
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
app.post('/home/add',(req,res)=>{
    const{name,city,id}=req.body;
    const result={
        "name":name,
        "id":id,

    }
    arr.push(result);
    res.json(arr);

})

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
app.listen(3000,()=>{
    console.log('server started @3000')
}
);
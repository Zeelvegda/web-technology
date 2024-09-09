const mongoose=require('mongoose');
const schema=mongoose.Schema({
    rollno:Number,
    name:String,
    semester:Number,
    age:Number
});
module.exports= mongoose.model("Student",schema,"students");

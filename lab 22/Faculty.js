const mongoose=require('mongoose');
const schema=mongoose.Schema({
    id:Number,
    name:String,
    subject:String,
    age:Number,
});
module.exports=mongoose.model("Faculty",schema,"faculties");
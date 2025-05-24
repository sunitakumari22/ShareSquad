const mongoose= require('mongoose');
 const ashramListShema=new mongoose.Schema({
    name:String,
    email:String,
    mobile:String,
    password:String,
 });
module.exports=mongoose.model('ashramList',ashramListShema);
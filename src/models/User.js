const {Schema,model}=require('mongoose');


const UserSchema= new Schema({
  Email:String,
})
module.exports=model('User',UserSchema)
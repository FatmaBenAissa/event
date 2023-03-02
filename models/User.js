const mongoose=require("mongoose");
const schema=mongoose.Schema
const UserSchema=new schema ({
name:{
    type:String,
   
},
LastName:{
    type:String,
   
},
email:{
    type:String,
   
},
password:{
    type:String,
   
},

img:{
    type:String,
    
},

});


module.exports=mongoose.model("user", UserSchema)
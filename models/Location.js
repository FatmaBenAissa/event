const mongoose=require("mongoose");
const schema=mongoose.Schema
const LocationSchema=new schema ({
name:{
    type:String,  
},
img:{
    type:String,
},
price:{
    type:String,

},
});

module.exports=mongoose.model("Location", LocationSchema)
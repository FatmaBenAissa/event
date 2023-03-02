const mongoose=require("mongoose");
const schema=mongoose.Schema
const ServicesSchema=new schema ({
name:{
    type:String,
    
},
img:{
    type:String,
},
price:{
    type:String,
    

},
destination:String,
});


module.exports=mongoose.model("Services", ServicesSchema)
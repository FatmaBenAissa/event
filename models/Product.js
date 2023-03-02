
const mongoose=require("mongoose");
const schema=mongoose.Schema
const ProductSchema=new schema ({
name:{
    type:String,
    
},
img:{
    type:String,
},
description:{
    type:String,
},
details:{
    type:String,
},
price:{
    type:String,
    

},
});


module.exports=mongoose.model("Product", ProductSchema)
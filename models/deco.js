const mongoose=require("mongoose");
const schema=mongoose.Schema
const DecoSchema=new schema ({
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

module.exports=mongoose.model("Deco", DecoSchema)
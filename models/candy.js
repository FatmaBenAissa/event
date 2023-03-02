const mongoose=require("mongoose");
const schema=mongoose.Schema
const CandySchema=new schema ({
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

module.exports=mongoose.model("Candy", CandySchema)
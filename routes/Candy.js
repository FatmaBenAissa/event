const  express=require("express");
const Candy = require("../models/candy");
const CandyRouter = express.Router();

//add candy
CandyRouter.post("/add",async(req, res)=>{
    try {
        let newCandy =new Candy(req.body);
        let result=await newCandy.save();
        res.send({candy: result, msg: "candy is add" });

    } catch (error) {
        console.log(error);

    }


});
// get all candy

CandyRouter.get("/",async(req, res)=>{
    try {
        let result=await Candy.find();
        res.send({candy: result, msg: "all Candy" });

    } catch (error) {
        console.log(error);

    }
});

// get user by id

CandyRouter.get("/:id",async (req, res) =>{
    try {
        let result=await Candy.findById(req.params.id);
        res.send({candy : result, msg: "one candy" });

    } catch (error) {
        console.log(error);

    }
});


// delete candy

CandyRouter.delete("/:id",async(req, res)=>{
    try {
        let result=await Candy.findByIdAndDelete(req.params.id);
        res.send({ msg: "candy is deleted" });

    } catch (error) {
        console.log(error);

    }
});

//update candy
CandyRouter.put("/:id", async (req, res) => {
    try {
      let result = await Candy.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      res.send({ deco: "result", msg: "candy updated" });
    } catch (error) {
      console.log(error);
    }
  });

module.exports=CandyRouter;
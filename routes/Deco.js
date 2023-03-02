const  express=require("express");
const Deco = require("../models/deco");
const DecoRouter = express.Router();

//add location
DecoRouter.post("/add",async(req, res)=>{
    try {
        let newDeco =new Deco(req.body);
        let result=await newDeco.save();
        res.send({deco: result, msg: "deco is add" });

    } catch (error) {
        console.log(error);

    }
});
// get all deco

DecoRouter.get("/",async(req, res)=>{
    try {
        let result=await Deco.find();
        res.send({deco: result, msg: "all deco" });

    } catch (error) {
        console.log(error);

    }
});

// get user by id

DecoRouter.get("/:id",async (req, res) =>{
    try {
        let result=await Deco.findById(req.params.id);
        res.send({deco : result, msg: "one deco" });

    } catch (error) {
        console.log(error);

    }
});


// delete deco

DecoRouter.delete("/:id",async(req, res)=>{
    try {
        let result=await Deco.findByIdAndDelete(req.params.id);
        res.send({ msg: "deco is deleted" });

    } catch (error) {
        console.log(error);

    }
});

//update Location
DecoRouter.put("/:id", async (req, res) => {
    try {
      let result = await Deco.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      res.send({ deco: "result", msg: "deco updated" });
    } catch (error) {
      console.log(error);
    }
  });

module.exports=DecoRouter;
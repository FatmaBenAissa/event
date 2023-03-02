const  express=require("express");
const Location = require("../models/Location");
const LocationRouter = express.Router();

//add location
LocationRouter.post("/add",async(req, res)=>{
    try {
        let newLocation =new Location(req.body);
        let result=await newLocation.save();
        res.send({location: result, msg: "location is add" });

    } catch (error) {
        console.log(error);

    }
});
// get all location

LocationRouter.get("/",async(req, res)=>{
    try {
        let result=await Location.find();
        res.send({location: result, msg: "all location" });

    } catch (error) {
        console.log(error);

    }
});

// get user by id

LocationRouter.get("/:id",async (req, res) =>{
    try {
        let result=await Location.findById(req.params.id);
        res.send({location : result, msg: "one location" });

    } catch (error) {
        console.log(error);

    }
});


// delete location


LocationRouter.delete("/:id",async(req, res)=>{
    try {
        let result=await Location.findByIdAndDelete(req.params.id);
        res.send({ msg: "location is deleted" });

    } catch (error) {
        console.log(error);

    }
});

//update Location
LocationRouter.put("/:id", async (req, res) => {
    try {
      let result = await Location.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      res.send({ location: "result", msg: "location updated" });
    } catch (error) {
      console.log(error);
    }
  });

module.exports=LocationRouter;
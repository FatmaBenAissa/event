const  express=require("express");
const Services = require("../models/Services");
const ServicesRouter = express.Router();

//add Services
ServicesRouter.post("/add",async(req, res)=>{
    try {
        let newServices=new Services(req.body);
        let result=await newServices.save();
        res.send({Services: result, msg: "Services is add" });

    } catch (error) {
        console.log(error);

    }
});
// get all Services

ServicesRouter.get("/",async(req, res)=>{
    try {
        let result=await Services.find();
        res.send({Services: result, msg: "all Services" });

    } catch (error) {
        console.log(error);

    }
});

// get user by id

ServicesRouter.get("/:id",async (req, res) =>{
    try {
        let result=await Serivces.findById(req.params.id);
        res.send({Services : result, msg: "one Services" });

    } catch (error) {
        console.log(error);

    }
});


// delete Product 


ServicesRouter.delete("/:id",async(req, res)=>{
    try {
        let result=await services.findByIdAndDelete(req.params.id);
        res.send({ msg: "Services is deleted" });

    } catch (error) {
        console.log(error);

    }
});

//update Services
ServicesRouter.put("/:id", async (req, res) => {
    try {
      let result = await Services.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      res.send({ Services: "result", msg: "Services updated" });
    } catch (error) {
      console.log(error);
    }
  });

module.exports=ServicesRouter;
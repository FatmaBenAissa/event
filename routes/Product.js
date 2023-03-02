const  express=require("express");
const Product = require("../models/Product");
const ProductRouter = express.Router();

//add product
ProductRouter.post("/add",async(req, res)=>{
    try {
        let newProduct =new Product(req.body);
        let result=await newProduct.save();
        res.send({product: result, msg: "product is add" });

    } catch (error) {
        console.log(error);

    }
});
// get all product

ProductRouter.get("/",async(req, res)=>{
    try {
        let result=await Product.find();
        res.send({product: result, msg: "all product" });

    } catch (error) {
        console.log(error);

    }
});

// get user by id

ProductRouter.get("/:id",async (req, res) =>{
    try {
        let result=await Product.findById(req.params.id);
        res.send({product : result, msg: "one product" });

    } catch (error) {
        console.log(error);

    }
});


// delete Product 


ProductRouter.delete("/:id",async(req, res)=>{
    try {
        let result=await Product.findByIdAndDelete(req.params.id);
        res.send({ msg: "product is deleted" });

    } catch (error) {
        console.log(error);

    }
});

//update Services
ProductRouter.put("/:id", async (req, res) => {
    try {
      let result = await Product.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      res.send({ product: "result", msg: "product updated" });
    } catch (error) {
      console.log(error);
    }
  });

module.exports=ProductRouter;
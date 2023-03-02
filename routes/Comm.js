const express = require("express");
const Comm = require("../models/Comm");
const CommRouter = express.Router();

//add Comm
CommRouter.post("/add", async (req, res) => {
  try {
    let newComm = new Comm(req.body);
    let result = await newComm.save();
    res.send({ Comm: result, msg: "Comm is add" });
  } catch (error) {
    console.log(error);
  }
});
// get all Comm

CommRouter.get("/", async (req, res) => {
  try {
    let result = await Comm.find();
    res.send({ Comms: result, msg: "all Comm" });
  } catch (error) {
    console.log(error);
  }
});

// get user by id

CommRouter.get("/:id", async (req, res) => {
  try {
    let result = await Comm.findById(req.params.id);
    res.send({ Comms: result, msg: "one comm" });
  } catch (error) {
    console.log(error);
  }
});

// delete Comm

CommRouter.delete("/:id", async (req, res) => {
  try {
    let result = await Comm.findByIdAndDelete(req.params.id);
    res.send({ msg: "Comm is deleted" });
  } catch (error) {
    console.log(error);
  }
});

//update Comm
CommRouter.put("/:id", async (req, res) => {
  try {
    let result = await Comm.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ Comm: "result", msg: "Comm updated" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = CommRouter;

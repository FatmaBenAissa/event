const express=require("express");
const  cors=require("cors");
const connectDB=require('./config/db_connect');
const app = express();
require('dotenv').config();

app.use(express.json());
// connect to DB
connectDB();



// routes

app.use(cors());
app.use("/user",require("./routes/user"))
app.use("/product",require("./routes/Product"))
app.use("/comm", require("./routes/Comm"))
app.use("/Services", require("./routes/Services"))
app.use("/location", require("./routes/Location"))
app.use("/deco", require("./routes/Deco"))
app.use("/candy", require("./routes/Candy"))
//server
const PORT=process.env.PORT;
app.listen(PORT,(err)=> err ?
console.log(err) : console.log("server is running"));
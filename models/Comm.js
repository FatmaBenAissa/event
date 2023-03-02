const mongoose = require("mongoose");
const schema = mongoose.Schema;
const CommSchema = new schema({
  nameclient: {
    type: String,
  },
  nameproduct: {
    type: String,
  },
  img: {
    type: String,
  },
  date: {
    type: String,
  },
  price: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("Comm", CommSchema);

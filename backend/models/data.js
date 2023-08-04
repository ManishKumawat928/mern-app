const mongoose = require("mongoose");
const schemaData = new mongoose.Schema(
  {
    name: String,
    email: String,
    mobile: String,
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", schemaData);
module.exports = userModel;

const mongoose = require("mongoose");
const { Schema } = mongoose;

const EmployesSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  position: { type: String, required: true },
  office: { type: String, required: true },
  salary: { type: Number, required: true }
});

module.exports = mongoose.model("Employee", EmployesSchema);

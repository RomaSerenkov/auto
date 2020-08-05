const mongoose = require("mongoose")
const Schema = mongoose.Schema

const autoSchema = new Schema({
  marka: String,
  model: String
})

const Auto = mongoose.model("auto", autoSchema)

module.exports = Auto;

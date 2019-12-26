const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create nninja Schema and model

const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dSphere"
  }
});

const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"]
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  geometry: GeoSchema
  //geolocation
});

const Ninja = mongoose.model("ninja", NinjaSchema);

module.exports = Ninja;

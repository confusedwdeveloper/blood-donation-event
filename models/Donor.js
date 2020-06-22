const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DonorSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  bloodType: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
  },
});

module.exports = Donor = mongoose.model("donor", DonorSchema);

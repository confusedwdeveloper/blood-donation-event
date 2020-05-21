const mongoose = require("mongoose");
const config = require("config");

const uri = config.get("mongoURI");

// function to connect to db
const connectToDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("connected to mongodb");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectToDB;

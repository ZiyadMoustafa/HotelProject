const mongoose = require("mongoose");
require("dotenv").config();

const db = () => {
  const uri = process.env.MONGODB_URI;
  mongoose
    .connect(uri)
    .then(() => console.log("DB now is connected"))
    .catch((err) => {
      console.error("Could not connect to MongoDB", err);
    });
};

module.exports = { db };

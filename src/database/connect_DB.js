const mongoose = require("mongoose");
const { config } = require("dotenv");
config();

const connectDatabase = (callback) => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_username}:${process.env.DB_password}@trello.674nqmt.mongodb.net/${process.env.DB_name}?retryWrites=true&w=majority`,
      {}
    )
    .then(() => {
      console.log("Mongodb connected");
      callback();
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = connectDatabase;

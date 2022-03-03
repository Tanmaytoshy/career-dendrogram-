const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.DB_URL;
mongoose.connect(
    url,
    () => {
        console.log("Connected to the database");
    },
    (err) => {
        console.log(
            "Not Connected to Database err!! occurred"
        );
    }
);

module.exports = mongoose;
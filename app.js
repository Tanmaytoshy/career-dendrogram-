const express = require("express");
const app = express();
const mongoose = require("./db");
app
// middle wares
    .use(express.json())
    .use(express.static("./pages"))
    .use(express.urlencoded({ extended: true }))
    .get("/", (req, res) => {
        res.status(200).send("");
    })
    .get("/login", (req, res) => {
        res.status(200).send("");

    })
app.listen(5000, () => { console.log("listening on port 5000") });
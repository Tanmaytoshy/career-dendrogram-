const express = require("express");
const app = express();
const mongoose = require("./db");
const login = require("./apis/login");
const register = require("./apis/register");
const logout = require("./apis/logout");
app
// middle wares
    .use(express.json())
    .use(express.static("./pages"))
    .use(express.urlencoded({ extended: true }))
    .use("/login", login)
    .use("/register", register)
    .use("/logout", logout)
    .get("/", (req, res) => {
        res.status(200).send("");
    })

app.listen(5000, () => { console.log("listening on port 5000") });
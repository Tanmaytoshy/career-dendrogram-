const express = require("express");
const router = express.Router();
const func = require("../auth");
const cookieParser = require("cookie-parser");
const tok = require("../token");
require("dotenv").config();

router
    .use((req, res, callback) => {
        console.log(`\n${req.url}@ ${new Date()}\n`);
        callback();
    })
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cookieParser());

router
    .route("/")
    .get((req, res) => {
        console.log("\n    login get request    \n");
        res.send("login page");
    })
    .post((req, res) => {
        if (req.cookies.token != null) {
            /*returns js object 
            {
                valid: bool,
                payload: object
            } */
            const tokenVerificationData = tok.verify(req.cookies.token, req.cookies.email);
            console.log(
                "token verified status :",
                tokenVerificationData.valid
            );
            if (tokenVerificationData.valid) {
                res.redirect(301, "/home");
            } else {
                res.clearCookie("token");
                res.redirect(301, "/login");
            }
        } else {
            func.check(req.body.email, req.body.password).then(
                (value) => {
                    if (value === false) {
                        console.log("\n\t user not found \n");
                        res.send("user not found");
                    } else {
                        console.log("\n\t user found \n");
                        res.cookie(
                            "token",
                            tok.create({
                                email: req.body.email,
                                password: req.body.password,
                            }), { maxAge: 30 * 24 * 60 * 60 * 1000 }
                        );
                        res.cookie("email", req.body.email, {
                            maxAge: 30 * 24 * 60 * 60 * 1000,
                        });
                        res.send("user found");
                    }
                },
                (err) => {
                    console.log(
                        "\n\terror occurred\n",
                        "\tlocation: ./routes/login.js\n"
                    );
                    res.send("error occurred in login");
                }
            );
        }
    });

module.exports = router;
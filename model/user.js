const mongo = require("mongoose");
const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const userSchema = mongo.Schema({
    firstName: {
        type: String,
        required: true,
        lowercase: true
    },
    secondName: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate: [validateEmail, "pease fill valid mail"],
        trim: true, // trims white spaces from right and left
        unique: true
    },
    guardianName: {
        type: String,
        lowercase: true,
        default: "damodharan"
    },
    gender: {
        type: String,
        lowercase: true,
        default: "other"
    },
    higherEducation: {
        type: String,
        default: "BE"
    },
    state: {
        type: String,
        required: true,
        lowercase: true,
        default: "tamil nadu"
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date,
        immutable: true
    },
    changedAt: {
        type: Date,
        default: new Date,
        immutable: false,
    },
    mobile: {
        type: String,
        required: true,
        default: "8778559307",
    },
    suggested_career: {
        type: String,
        default: "BE CSE"
    }


})

module.exports = mongo.model("User", userSchema)
const user = require("./model/user");
const hash = require("./hash").hash;

async function push(data) {
    try {
        const valid = await user.exists({ $and: [{ email: data.email }] });
        console.log(data, valid);
        if (valid == null) {
            data.password = hash(data.password);
            const newUser = new user(data);
            const saveUser = await newUser.save();
            console.log(saveUser);
            return true;
        }
        return false;
    } catch (e) {
        console.log(e);
        console.log(
            "\n\tError !!! in auth function (push)\n",
            "\tlocation: ./functions/auth_function.js\n"
        );

    }
    return null;
}

async function check(userMail, userPassword) {
    try {
        const valid = await user.exists({
            $and: [{ email: userMail }, { password: hash(userPassword) }],
        });
        if (valid == null) {
            return false;
        }
        return true;
    } catch (e) {
        console.log(e);
        console.log(
            "\n\tError !!! in auth function (check)\n",
            "\tlocation: ./functions/auth_function.js\n"
        );
    }
    return null;
}

async function update(data) {
    try {
        data.password = hash(data.password);
        data.changedAt = new Date();
        const updateUsr = await user.updateOne({ email: data.email }, data);
        console.log(updateUsr);
        console.log("\n\t User updated successfully");
    } catch (e) {
        console.log(e);
        console.log(
            "\n\tError !!! in auth function (update)\n",
            "\tlocation: ./functions/auth_function.js\n")
    }
}

async function del(userMail, userPassword) {
    try {
        const valid = await user.deleteOne({
            $and: [{ email: userMail }, { password: hash(userPassword) }],
        });
        if (valid == null) {
            return false;
        }
        return true;
    } catch (e) {
        console.log(e);
        console.log(
            "\n\tError !!! in auth function (check)\n",
            "\tlocation: ./functions/auth_function.js\n"
        );
    }
    return null;
}

async function getinfo(userMail, userPassword) {
    try {
        const val = await user.findOne({
            email: userMail,
            password: hash(userPassword)
        });
        console.log("val", val);
        return val
    } catch (e) {
        console.log(e);
        console.log(
            "\n\tError !!! in auth function (getinfo)\n",
            "\tlocation: ./functions/auth_function.js\n"
        );
    }
    return false;
}

module.exports = { push, check, update, del, getinfo };
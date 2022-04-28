const User = require("../models/user");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const expressJwt = require("express-jwt");
const { errorHandler } = require("../helpers/errorHandler");


exports.signup = (req, res) => {
    console.log("req.body", req.body);
    const user = new User(req.body);
    user.save((err, user) => {
        if(err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        });
    });
};

exports.login = (req, res) => {
    const{ email, password } = req.body;
    User.findOne({ email }, (err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error: "User with that email does not exist. Please signup"
            });
        }

        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: "Invalid email and/or password"
            });
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.cookie("v", token, { expire: new Date() + 9999 });
        const { _id, name, email, role } = user;
        return res.json({ token, user: { _id, email, name, role } });
    });
};

exports.logout = (req, res) => {
    res.clearCookie("v");
    res.json({ message: "Logged out Successfully!"});
};

exports.requireLogin = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
    userProperty: 'auth'
});

exports.isAuth = (req, res, next) => {
    let user = req.profile && req.auth && req.profile._id == req.auth._id
        if(!user) {
            return res.status(403).json({
                error: "Unauthorized Access!"
            });
        }
        next();
};

exports.isAdmin = (req, res, next) => {
    if(req.profile.role === 0) {
        return res.status(403).json({
            error: "Administrator Privileges Required!"
        });
    }
    next();
};

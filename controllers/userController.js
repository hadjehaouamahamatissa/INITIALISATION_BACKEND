// const express = require('express');
const bcrypt = require('bcrypt');
const userModel = require('../src/models/userModel');
const generateOTP = require('../untils/generateOPT');
const { v4 } = require('uuid');
const OtpModel = require('../src/models/otpModel');
const { transporter } = require('../untils/mailerTransporter');
// const userRouter = require('../routers/userRouters')




// code
const addUser = async (req, res) => {
    const { username, email, password } = req.body;
    console.log(req.body);
    let user;
    

    const hashedPassword = bcrypt.hashSync(password, 10);
    try {
        user = await userModel.create({
            username, email, password: hashedPassword,
        });
    } catch (error) {
        res.send({
            message: "Error creating user",
        })
        return;
    }
    const otp = generateOTP();
    const otpToken = v4();

    const otpDetails = await OtpModel.create({
        userid: user._id,
        otp,
        otpToken,
        propose: 'verified-mail'
    });
    //
    transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: "Verification email",
        html: `<h1>Hello ${user.username}</h1><p>Please verify your email by clicking on the link below:</p><a href='http://localhost:300,
    })

    res.send({
        message: "User created with success",
        user
    });

};
}
// export the function
// module.exports = addUser;
exports.addUser = addUser;

module.exports = addUser;
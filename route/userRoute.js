const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

router.post('/signup', async function (req, res) {
    let {firstName, lastName, email, password} = req.body;
    const checkEmail = await User.findOne({email});

    // check if email exists
    if (checkEmail) {
        return res.json({
            status: "failed",
            message: "Email already exist",
        });
    }

    const newUser = {firstName, lastName, email, password};

    // Save user
    const createUser = await User.create(newUser);


    // Respond to client resquest
    res.status(201).json({
        status: "successful",
        data:{
            id:createUser._id,
            firstName: createUser.firstName,
            lastName:createUser.lastName,
            email:createUser.email,
        }

    })

});


module.exports = router;


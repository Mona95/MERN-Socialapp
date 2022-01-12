const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//Register
router.post("/register", async (req, res) => {
    try {
        // generate password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        // generate new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        // send new user and return response
        const user = await newUser.save();
        return res.status(200).json(user);
    } catch (error) {
        console.log(error);
    }
})

// Login
router.post("/login", async (req, res) => {
    try {
        // checking email
        const user = await User.findOne({email: req.body.email})
        if(!user) {
            return res.status(404).json('user not found');
        }

        // checking password
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword){
            return res.status(404).json('wrong password')
        }

        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
    
})

module.exports = router
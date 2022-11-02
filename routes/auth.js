const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/schema');
const registervalidation= require('../validation')

router.post('/register', async (req,res)=>{

    const {error} = registervalidation(req.body);
    if(error) return res.status(400).send(error);

//checking if user already exists
    const emailexist = await User.findOne({email: req.body.email});
    if(emailexist) return res.status(400).send('Email already exists');

//hashing password
    const salt = await bcrypt.genSalt(10)
    const hashedpass = await bcrypt.hash(req.body.password, salt);


    const user = new User({
        name : req.body.name,
        email : req.body.email,
        password : hashedpass
    });
    try{
        const saveduser = await user.save();
        res.send(saveduser);
    } catch(err){
        res.status(400).send(err);
    }
});

//login
router.post('/login',(req,res)=>{

    const {error} = loginvalidation(req.body);
    if(error) return res.status(400).send(error);
// email already exists or not fro a valid email
    const emailExist = await User.findOne({email: req.body.email});
    if(!emailExist) return res.status(400).send('Email or password is wrong');
//password is correct or not
    const validpass =  await bcrypt.compare(req.body.password, user.password);
    if(!validpass) return res.status(400).send('Incorrect password');
})

module.exports = router;
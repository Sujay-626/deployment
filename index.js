const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
//importing routes
const User= require('./routes/auth');

dotenv.config();

//middlewares
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use('/user',User);

//connecting to db
mongoose.connect('mongodb://127.0.0.1/JWT',
{useNewUrlParser:true}, ()=>{
    console.log('Connected to DB');
});


app.get('/',(req,res)=>{
    res.send('Hello World!!')
});

app.listen(3000, ()=>{
    console.log('Listening to the port 3000');
});


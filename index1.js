const express =require('express');
const app = express();
const path = require('path')

app.use('/public',express.static(path.join(__dirname,'public')));


app.listen(8000,()=>{
    console.log('listening');
});
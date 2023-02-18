const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 8000

const path = require('path');
const hbs = require("hbs");

const template_path = path.join(__dirname,"./templates/views");

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set('view engine','hbs');
app.set('views',template_path);

app.use(express.json())
//app.use(require('./routes/example'))

app.get("/",(req,res) => {
    res.render('home')
});

app.listen(port,()=>{
    console.log('server is running successfully')
})
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const route = require('./src/routes/route')
app.use(express.json())
const cors = require('cors')
app.use(cors({
   origin:[ "http://localhost:3000" , "http://main--adorable-croissant-6c39f3.netlify.app/"  ]
}))

mongoose.connect('mongodb+srv://1siikaa07:1siikaa07@cluster0.8px4cpv.mongodb.net/url-shortener?retryWrites=true&w=majority',{
    useNewUrlParser: true
},mongoose.set('strictQuery', true))

    .then(() => console.log("mongodb is connected"))
    .catch(err => console.log(err))

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', 'http://main--adorable-croissant-6c39f3.netlify.app/');
 res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); 
 res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
 res.header('Access-Control-Allow-Credentials', 'true');
 next();
 });

app.use('/', route)
app.use('/*', function(req,res){
    res.status(400).send("Provided url is wrong")
})
app.listen((3001), function () {
    console.log("running on port" ,3001)
})


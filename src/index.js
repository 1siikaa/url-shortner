const express = require('express')
const app = express()
const mongoose = require('mongoose')
const route = require('./routes/route')
app.use(express.json())
app.use(cors())
mongoose.connect('mongodb+srv://1siikaa07:1siikaa07@cluster0.8px4cpv.mongodb.net/url-shortener?retryWrites=true&w=majority',{
    useNewUrlParser: true
},mongoose.set('strictQuery', true))

    .then(() => console.log("mongodb is connected"))
    .catch(err => console.log(err))

app.use('/', route)
app.listen((3000), function () {
    console.log("running on port" ,3000)
})


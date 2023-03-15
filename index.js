const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const route = require('./src/routes/route')
app.use(express.json())
app.use(cors({
origin :["http://localhost:3000", "https://url-shortner-orcin-ten.vercel.app"]
}))
mongoose.connect('mongodb+srv://1siikaa07:1siikaa07@cluster0.8px4cpv.mongodb.net/url-shortener?retryWrites=true&w=majority',{
    useNewUrlParser: true
},mongoose.set('strictQuery', true))

    .then(() => console.log("mongodb is connected"))
    .catch(err => console.log(err))

app.use('/', route)

app.listen((3001), function () {
    console.log("running on port" ,3001)
})


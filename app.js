const express = require('express')
const app = express()
const contactRoutes = require('./routes/contactRoutes')
const userRoutes = require('./routes/userRoutes')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
app.use(cors());


app.use(function(req, res, next) {
    res.header("Access-Control-Alloww-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin-x-requested-with, Content-Type,Accept, Authorization;"
    )
    next()
})

app.use(express.json())
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('database connected successfully!!')
}).catch((err)=>{
console.error(`an error occured:${err.message}`)
});
console.log('uri:', process.env.MONGO_URI)
app.use('/api', contactRoutes, userRoutes)
// app.get('/', getHome)


app.listen(3000, ()=>{
console.log('server is running on port 3000')
})
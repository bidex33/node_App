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
});

app.use(express.json())
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('database connected successfully!!')
}).catch((err)=>{
console.error(`an error occured:${err.message}`)
});
console.log('uri:', process.env.MONGO_URI)
app.use('/api', userRoutes)
app.use('/api', contactRoutes)

app.get('/', (req, res) => {
    res.send('Welcome ')
})


if(process.env.NODE_ENV !== 'Production'){
    app.listen(3000, ()=>{
    console.log('server is running on port 3000')
    })
}

module.exports = app


// const express = require('express')
// const app = express()
// const contactRoute = require('./routes/contactRoutes')
// const userRoute = require('./routes/userRoute')
// const mongoose = require('mongoose')
// require('dotenv').config()


// mongoose.connect(process.env.MONGO_URI).then(() => {
//   console.log('Database connected successfully!!')
// }).catch((err) => {
//   console.error(`An error occurred: ${err.message}`)
// })

// app.use(express.json())
// app.use(express.urlencoded({extended: true}))
// app.use('/api',contactRoute, userRoute)
// app.get('/info', (req, res) => {
//   console.log(`Made a ${req.method} request to ${req.url} headers: ${JSON.stringify(req.headers)}`)
//   res.redirect('/')
//   res.send('This is the info page')
// })
// app.listen(5000, () => {
//     console.log('Server is running on port 5000')
// })


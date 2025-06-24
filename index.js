const express = require('express')
const app = express()
const connect = require('./dbConnection.js')
const cookieparser = require('cookie-parser')
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieparser())

app.set('view engine', 'ejs')

let PORT = 3000


const staticRoute = require('./routes/staticRoutes.js')
const userRoute = require('./routes/userRoutes.js')

connect();
app.use('/', staticRoute);  
app.use('/user', userRoute);


app.listen(PORT, () => console.log(`Server is runing on PORT:${PORT}`))

const express = require('express')
const app = express()
const connect = require('./dbConnection.js')
const cookieparser = require('cookie-parser')
const { chekForAuthenticationCookie } = require('./middlewares/checkForAuthanticationCookie.js')
require('dotenv').config();


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieparser())
app.use(chekForAuthenticationCookie("token"));

app.set('view engine', 'ejs')

let PORT = process.env.PORT ;


const staticRoute = require('./routes/staticRoutes.js')
const userRoute = require('./routes/userRoutes.js')

connect();
app.use('/', staticRoute);
app.use('/user', userRoute);


app.listen(PORT, () => console.log(`Server is runing on PORT:${PORT}`))

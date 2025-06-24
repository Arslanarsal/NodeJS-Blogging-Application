const mongoose = require('mongoose')

const connect = async function () {
    await mongoose.connect('mongodb://localhost:27017/Blogify').then(function () {
        console.log("Database Connected")
    }).catch(function (error) {
        console.log("error On connected Database" + error.message)
    })
}

module.exports = connect;
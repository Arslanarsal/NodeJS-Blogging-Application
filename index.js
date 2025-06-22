const express = require('express')
const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

let PORT = 3000

app.get('/', function (req, res) {
    res.render("home")
})


app.listen(PORT, () => console.log(`Server is runing on PORT:${PORT}`))

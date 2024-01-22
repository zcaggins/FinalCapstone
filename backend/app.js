require('dotenv').config()
const express = require('express')
const app = express()

app.get('/home', (req, res) => {
    console.log("Hello!")
})





app.listen(3000)
console.log("Express is running!")
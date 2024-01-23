require('dotenv').config()
const express = require('express')
const app = express()
const queries = require('./queries.js')
const cors = require('cors')

app.use(cors())

app.get('/home', (req, res) => {
    console.log("Hello!")
})

app.get('/products', queries.getProducts)



app.listen(3000)
console.log("Express is running!")
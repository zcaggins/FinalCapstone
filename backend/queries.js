const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: 5432
})

function getProducts(req, res) {
    pool.query('SELECT * FROM items', (async (error, results) => {
        if(error) {
            throw error
        } res.status(200).json(results.rows)
    }))
}








module.exports = {
    getProducts
}
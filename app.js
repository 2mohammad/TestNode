const express = require('express')
const morgan = require('morgan')
const app = express()
const ExpressError = require("./expressError")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(middleware.logger)
app.use(morgan('dev'))

// app.use('/route', fileName)

app.get('/', (req, res, next)=>{
    return res.send("Works")
})
module.exports = app

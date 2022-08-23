require('dotenv').config()
require('./config/database')

const path = require('path')
const cors = require('cors')
const passport = require('passport')
const express = require('express')
const Router = require('./routes/routes')
const app = express()


const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())
app.use(passport.initialize())
app.use('/api', Router)

app.get('/', (req, res) => {
    res.send('Server is running')
    })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
require('express-async-errors')

const database = require('./database/sqlite')
const AppError = require('./utils/AppError')
const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
app.use(express.json())
app.use(cors('*'))
app.use(routes)


database()

app.use(( error, request, response, next ) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        })
    }
    console.log(error)
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })
})

const PORT = 3334
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
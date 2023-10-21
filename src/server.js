const express = require('express')
const routes = require('./routes')

const app = express()
app.use(express.json())

app.use(routes)

const PORT = 3334
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

// app.use(express.static('views'))

const apiRoutes = require('./routes/api')
const mainRoutes = require('./routes/main')

app.use('/api', apiRoutes)
app.use('/', mainRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
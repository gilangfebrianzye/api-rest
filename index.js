const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

const apiRoutes = require('./routes/api')

app.use('/api', apiRoutes)

app.get('/', (req, res) => {
    res.send('mongke')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3030

app.use(bodyParser.json())
app.use(require('./router/routes'))

app.listen(port, ()=>{
    console.log(`Running the server on port ${port}!`)
})
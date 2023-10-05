const express = require('express')
const routes = require('./src/routes/index')
const app = express()

app.use(express.json())
app.use(routes)

app.listen(3000, ()=>{
    console.log('backend is running in port 3000')
})

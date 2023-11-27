const express = require('express')
const app = express()
const path = express()

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,"HTMLPage1.html"))
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000")
})
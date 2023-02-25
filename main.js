const express = require('express')
const app = express()

// Create route '/'.
// Create GET request response for route '/'.
app.get('/', (req, res) => {
    res.send("Welcome to the home page.")
})

// Create route '/'
// Create GET request response
app.get('/about', (req, res) => {
    res.send("Thanks for learning more about us.")
})



app.listen(3000)
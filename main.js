// Require express package.
const express = require('express')
// Create new instance of express.
const app = express()

// Route '/'.
// Get request.
app.get("/", (req, res) => {
    res.send("Welcome to our home page.")
})



// Server listen at port 4000.
app.listen(3000)
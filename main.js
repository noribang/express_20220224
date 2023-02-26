// Require express package.
const express = require('express')
// Create new instance of express.
const app = express()

/// Route '/'.
/// Get request.
// app.get("/", (req, res) => {
//     res.send("Welcome to our home page.")
// })
app.get('/', (req, res) => {
    res.send(`
        <h1>What color is the sky on a clear day?</h1>
        <form action="/result" method="POST">
            <input type="text" name="color">
            <button>Submit Answer</button>
        </form>
    `)
})
// Route '/result'.
// POST request.
app.post('/result', (req, res) => {
    res.send("Thank you for submitting the form.")
})
// Route '/result'
// GET request.
app.get('/result', (req, res) => {
    res.send("Why are visiting this URL?")
})

// Route '/about'
// Get request.
app.get('/about', (req, res) => {
    res.send("Thanks for learning more about us.")
})


// Server listen at port 4000.
app.listen(4000)
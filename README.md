# express_20220224

## Installation
Create new project directory.
```bash
mkdir new_express_project
```
Start new project.
```bash
npm init -y
```
Install express server.
```bash
npm install express
```
Create file to write express server code in.
```bash
touch main.js
```

## Usage
In main.js file:
```javascript

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

```
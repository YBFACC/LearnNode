var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  })
  
  // POST method route
  app.post('/', function (req, res) {
    res.send('POST request to the homepage')
  })
  app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
  })
  app.listen(3030);
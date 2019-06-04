const express = require('express')
const app = express()
const port = 8080

app.get('/hola', (req, res) => res.json({ message: 'Hello' }))

module.exports = {
  server: app,
  port
}

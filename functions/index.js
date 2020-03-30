const functions = require('firebase-functions');
const express = require('express');
const app = express()

app.get('/', (req, res) => {
  res.send('im the base route')
})

app.get('/sneed', (req, res) => {
  res.send('SNEEDS SNEED & SNEED FORMERLY SNEEDS')
})

const api = functions.https.onRequest(api)

module.exports = {
  api
}

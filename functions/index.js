const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const app = express()

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();

app.get('/', (req, res) => {
  res.send('im the base route')
})

app.get('/sneed', (req, res) => {
  res.send('SNEEDS SNEED & SNEED FORMERLY SNEEDS')
})

exports.api = functions.https.onRequest(app)

'use strict'

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const app = express()

// admin.initializeApp(functions.config().firebase);
admin.initializeApp();

let db = admin.firestore();

app.get('/', (req, res) => {
  res.send('im the base route')
})

app.get('/sneed', (req, res) => {
  res.send('SNEEDS SNEED & SNEED FORMERLY SNEEDS')
})

exports.api = functions.https.onRequest(app)

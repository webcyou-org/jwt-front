const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('express-jwt')
const jsonwebtoken = require('jsonwebtoken')

// Create app
const app = express()

// Install middleware
app.use(bodyParser.json())

// JWT middleware
app.use(
  jwt({
    secret: 'dummy'
  }).unless({
    path: '/api/v1/user_token'
  })
)

// -- Routes --

// [POST] /user_token
app.post('/user_token', (req, res, next) => {
  const { email, password } = req.body.auth
  const valid = email.length && password === 'test123'

  if (!valid) {
    throw new Error('Invalid username or password')
  }

  const accessToken = jsonwebtoken.sign(
    {
      email,
      picture: 'https://github.com/nuxt.png',
      name: 'daisuke.takayama',
      scope: ['test', 'user']
    },
    'dummy'
  )

  res.json({
    jwt: accessToken
  })
})

// [GET] /users
app.get('/users', (req, res, next) => {
  res.json({ user: req.user })
})

// [DELETE] /users
app.delete('/users', (req, res, next) => {
  res.json({ status: 'OK' })
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err) // eslint-disable-line no-console
  res.status(401).send(err + '')
})

// -- export app --
module.exports = {
  path: '/api/v1',
  handler: app
}

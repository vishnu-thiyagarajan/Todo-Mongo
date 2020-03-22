'use strict'

const mongoose = require('mongoose')
require('dotenv').config()
require('./list.model.js')

const chalk = require('chalk')

const dbURL = process.env.MONGODB_URI

const connected = chalk.bold.cyan
const error = chalk.bold.yellow
const disconnected = chalk.bold.red
const termination = chalk.bold.magenta

module.exports = function () {
  mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })

  mongoose.connection.on('connected', function () {
    console.log(dbURL)
    console.log(connected('Mongoose default connection is open to ', dbURL))
  })

  mongoose.connection.on('error', function (err) {
    console.log(error('Mongoose default connection has occured ' + err + ' error'))
  })

  mongoose.connection.on('disconnected', function () {
    console.log(disconnected('Mongoose default connection is disconnected'))
  })

  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      console.log(termination('Mongoose default connection is disconnected due to application termination'))
      process.exit(0)
    })
  })
}

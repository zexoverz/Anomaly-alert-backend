const express = require('express')
const alertRouter = require('./modules/alert/alert.route')

const routes = express.Router()

routes.use('/alert', alertRouter);

module.exports = routes;
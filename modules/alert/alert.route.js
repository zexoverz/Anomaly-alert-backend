const express = require('express')
const {getAll, create, update} = require('./alert.service');
const alertRouter = express.Router()

alertRouter.get('/', getAll);
alertRouter.post('/', create);
alertRouter.put('/:id', update);

module.exports = alertRouter;
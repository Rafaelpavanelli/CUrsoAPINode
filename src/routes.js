const {Router}= require('express')
const SessionController = require('./controller/SessionController')
const routes = new Router();

routes.get('/sessions',SessionController.store)

module.exports=routes
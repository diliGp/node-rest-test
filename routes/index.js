const routes = require('express').Router()
const Users  = require('../controllers/Users');

routes.get('/users', Users.get)
routes.post('/users', Users.create)
routes.post('/users/login', Users.login)


module.exports = routes
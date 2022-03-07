const express = require('express')
const Router = express.Router();
const controllers = require('../controller/index')
console.log(controllers)

const { Fintoc } = require('fintoc')


//ROUTES

Router.get('/', (req, res, next) => {
    res.render('index')
})
Router.get('/api-bancoestado', controllers.getUserAccouns)
Router.get('/api-bancobci', controllers.getUserAccountAllBCI)
Router.get('/api-getUserById/:id', controllers.getUserAccountById)
  
module.exports = Router
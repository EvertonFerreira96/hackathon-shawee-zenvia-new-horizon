const express = require('express');
const routes = express.Router();
const userController = require('../controllers/userController');

routes.post('/', (req,res) => userController.store(req,res));
routes.get('/', (req,res) => userController.index(req,res));
routes.get('/:phone', (req,res) => userController.show(req,res));
routes.delete('/:phone', (req,res) => userController.delete(req,res));

module.exports = routes; 
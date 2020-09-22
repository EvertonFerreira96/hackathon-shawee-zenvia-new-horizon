const express = require('express');
const routes = express.Router();
const sessionController = require('../controllers/sessionController');

routes.post('/', (req,res) => sessionController.store(req,res));
routes.delete('/', (req,res) => sessionController.delete(req,res));
routes.post('/auth', (req,res) => sessionController.index(req,res));

module.exports = routes; 
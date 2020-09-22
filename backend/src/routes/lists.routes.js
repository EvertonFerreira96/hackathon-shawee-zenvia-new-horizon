const express = require('express');
const routes = express.Router();
const listController = require('../controllers/listController');

routes.post('/', (req,res) => listController.store(req,res));
routes.get('/', (req,res) => listController.index(req,res));
routes.get('/:id', (req,res) => listController.show(req,res));
routes.delete('/:id', (req,res) => listController.delete(req,res));

module.exports = routes; 
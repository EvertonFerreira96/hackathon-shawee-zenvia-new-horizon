const express = require('express');
const appointmentControleler = require('../controllers/appointmentController');
const routes = express.Router();


routes.post('/', (req,res) => appointmentControleler.store(req,res));
routes.delete('/', (req,res) => appointmentControleler.delete(req,res));
routes.get('/', (req,res) => appointmentControleler.index(req,res));
routes.get('/id/:id', (req,res) => appointmentControleler.show(req,res));


module.exports = routes; 

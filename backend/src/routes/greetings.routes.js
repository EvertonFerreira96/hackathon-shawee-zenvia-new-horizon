const express = require('express');
const routes = express.Router();
const generateWhatsappMessage = require('../utils/generateWhatsappMessage');

routes.get('/shedule/:id', (req,res) => generateWhatsappMessage.greetingSheduleAppointment(req,res));
routes.get('/poll/:id', (req,res) => generateWhatsappMessage.greetingPoll(req,res));

module.exports = routes; 
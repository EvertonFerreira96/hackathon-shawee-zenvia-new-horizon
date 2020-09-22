const express = require('express');
const appointmentsRoutes = require('./appointments.routes');
const sessionsRoutes = require('./sessions.routes');
const usersRoutes = require('./users.routes');
const greetingsRoutes = require('./greetings.routes');
const listsRoutes = require('./lists.routes');
const routes = express.Router();

routes.use('/appointments', appointmentsRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/users', usersRoutes);
routes.use('/greetings', greetingsRoutes);
routes.use('/lists', listsRoutes);

module.exports = routes
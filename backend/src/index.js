// Imports the Google Cloud client library
'use strict';
const express = require('express');
const cors = require('cors');
const routes = require('../src/routes/routes');


const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);


app.listen(3333, () => console.log('DEIBERA.DO IN LOCALHOST:3333 🚀'));

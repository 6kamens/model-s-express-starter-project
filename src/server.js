// starter project for express
// npm init
// npm install --save express dotenv helmet mongoose morgan cors
// npm install --save-dev nodemon
// create .env

const express =  require('express');
// const helmet = require('helmet');
// const morgan = require('morgan');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
// app.use(morgan);
app.use(cors());
app.use(express.json());

db.dbConnection();

const routes = require('./routes');
const errHandler = require('./middleware/errHandler');

const port = process.env.PORT || 3000 ;

app.get('/', (req, res) => {
    res.send('Starting API...');
  });


app.use(routes);

app.use(errHandler.errorHandler);


app.listen(port,() => {
    console.log(`Listening: http://localhost:${port}`);
});


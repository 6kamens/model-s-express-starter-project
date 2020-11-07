// starter project for express
// npm init
// npm install --save express dotenv helmet mongoose morgan cors
// npm install --save-dev nodemon
// create .env

const express =  require('express');
// const helmet = require('helmet');
// const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();
// app.use(morgan);
app.use(cors());
app.use(express.json());

const routes = require('./routes');
const notfound = require('./middleware/notfound');

const port = process.env.PORT || 3000 ;

app.get('/', (req, res) => {
    res.send('Starting API...');
  });

app.use(routes);

app.use(notfound.notFoundRes);

app.listen(port,() => {
    console.log(`Listening: http://localhost:${port}`);
});


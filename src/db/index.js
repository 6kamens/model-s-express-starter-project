const mongoose = require('mongoose');
require('dotenv').config();

const connectionString = process.env.DB_CONNECTION || "";


module.exports.dbConnection = ()=>{
    mongoose.connect(connectionString,{useNewUrlParser:true},()=>{
        console.log('connected db');
    });
} ;

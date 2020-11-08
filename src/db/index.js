const mongoose = require('mongoose');
require('dotenv').config();



module.exports.dbConnection = ()=>{
    mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},()=>{
        console.log('connected db');
    });
} ;

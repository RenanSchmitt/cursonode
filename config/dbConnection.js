const mysql = require('mysql');
const dotenv = require('dotenv').config();
 
if (dotenv.error) {
    throw dotenv.error
}

var connMySQL = function(){
    return mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE
    });
}


module.exports = function () {
    return connMySQL;
} 
const mysql = require('mysql');
const { database } = require('./config');
const { promisify } = require('util');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err) throw err;
    connection.release();
    console.log('DB IS CONNECTED');
    return
});

pool.query = promisify(pool.query);

module.exports = pool;
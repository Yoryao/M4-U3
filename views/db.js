const mysql = require('mysql');
//const express = require('express');
const util = require('util');

const connData = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'twitter'
};

const conn = mysql.createConnection(connData)
conn.connect((err) => {
    if (err) throw new Error('Error al conectar a la base de datos');
    console.log('base de datos mysql conectada')
});

const qy = util.promisify(conn.query).bind(conn);

//module.exports = conn();
module.exports = qy();
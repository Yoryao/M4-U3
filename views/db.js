const mysql = require('mysql');
const express = require('express');
const util = require('util');
const port = 3000;
const app = express();

//creo la conexion a la base de datos.
const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'twitter'
});

//manejo el posible error en la conexcion.
conn.connect((error) => {
    if (error) throw error;
    console.log('La Conexión a la base de datos se realizó con exito.');
});


//permitir el uso se async await para uso ordenado al generar las query
//transforma las query en promise para usar async await y manejar el asincronismo
const qy = util.promisify(conn.query).bind(conn);

// mostrar el puerto de conexion y escucha de la app.
app.listen(process.env.PORT || port, () => {
    console.log("Servidor iniciado en puerto: " + port);
});

module.exports = qy();
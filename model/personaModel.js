/* MODELS
=> CONECTAR LA DB
=> ARMAR LA QUERY
=> TRATAR DE HACER EL POST */

//requiere la DB para conectarse.
let qy = require('../views/db');

//Modulo que exporta las query en formato JSON {  xxx : xxx }
module.exports = {

    // query para insertar datos a la db, obtenidos de un Json (persona).
    guardarUnaPersona: async(persona) => {
        //verificar la query.

        const query = 'INSERT INTO persona (nombre, apellido, nickname, edad, email) VALUES (?, ?, ?, ?, ?)';

        let result = await qy(query, [persona.nombre, persona.apellido, persona.nickname, persona.edad, persona.email]);

        //muestra el el id de la persona ingresada.
        return result.insertid;
    },
    /*
        traerUnaPersona: async(id) => {
            let unaPersona = await conexion.query(
                'SELECT * FROM persona WHERE id = ?', [id]);
            return unaPersona[0];
        },

        traerTodasLasPersonas: async() => {
            let listadoPersonas = await conexion.query('SELECT * FROM persona');
            return listadoPersonas;
        },

        modificarPersona: async(id, edad, email) => {
            let result = await conexion.query('UPDATE persona SET edad = ?, email = ? WHERE id = ?', [edad, email, id]);
            return result.changedRows;
        },

        borrarPersona: async(id) => {
            let fecha = new Date();
            let result = await conexion.query('UPDATE persona SET deleted = ?, date_deleted = ?, WHERE id = ?', [true, fecha, id]);
            return result.changedRows;
        }*/
}
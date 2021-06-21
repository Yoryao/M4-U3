let qy = require('../views/db');

module.exports = {

    guardarUnaPersona: async(persona) => {

        const query = 'INSERT INTO persona (nombre, apellido, nickname, edad, email) VALUES (?, ?, ?, ?, ?)';

        //let result = await qy(query, [persona.nombre, persona.apellido, persona.nickname, persona.edad, persona.email]);
        let result = await qy(query, ["jorge", "Rivera", "Geo", 32, "hola@hola.com"]);


        return result;
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
};
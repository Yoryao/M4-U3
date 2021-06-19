//forma la respuesta de los datos obtenidos, 

//requiere lo necesario. 
const express = require('express');
const app = express();
//importa 
const personaController = require('../controllers/personaController.js');
//const db = require('./db.js');

app.use(express.urlencoded({ extended: true }));

app.post('/persona', async(req, res) => {
    try {
        if (!req.body.nombre || !req.body.apellido || !req.body.nickname || !req.body.edad || !req.body.email) {
            throw 'Error en los parametros requeridos';
        }

        let persona = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            nickname: req.body.nickanme,
            edad: req.body.edad,
            email: req.body.email
        }

        //aca puse el await
        let personaNueva = await personaController.guardarUnaPersona(persona);

        res.send('La persona se creo satisfactoriamente, su id asignado es ' + personaNueva.id);

    } catch (error) {
        console.log('Se produjo el siguiente error: ' + error);
        res.sendStatus(422).send('Se produjo el siguiente error: ' + error);
    }
});